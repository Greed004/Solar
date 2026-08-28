import { GoogleGenAI } from '@google/genai';
import { PROJETO_ENERGIA_SYSTEM_PROMPT } from '../data/systemPrompt';

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn('GEMINI_API_KEY is not defined in environment variables.');
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export async function handleChat(messages: ChatMessage[]) {
  const ai = getGenAI();

  // Format contents for Gemini generateContent
  // Convert messages to history format
  const contents = messages.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: contents,
      config: {
        systemInstruction: PROJETO_ENERGIA_SYSTEM_PROMPT,
        temperature: 0.35,
      },
    });

    const responseText = response.text || 'Desculpe, tive um problema temporário ao processar sua resposta. Por favor, tente novamente ou entre em contato pelo nosso WhatsApp comercial: (17) 99707-8718.';

    return {
      text: responseText,
      success: true,
    };
  } catch (error: any) {
    console.error('Error generating chat content with Gemini:', error);
    
    // Provide a helpful fallback message if API key is missing or quota reached
    const fallbackText = 'Olá! No momento estamos com uma instabilidade momentânea na conexão com nosso assistente de IA. Nossa equipe de consultores da **Projeto Energia** está pronta para te atender diretamente no WhatsApp comercial **(17) 99707-8718** ou pelo e-mail **adailton@projetoenergia.com.br**!';

    return {
      text: fallbackText,
      error: error?.message || 'Gemini API Error',
      success: false,
    };
  }
}

export async function handleAnalyzeBill(payload: {
  imageBase64?: string;
  mimeType?: string;
  notes?: string;
}) {
  const ai = getGenAI();

  const promptText = `Você é o Consultor Técnico da Projeto Energia. Analise esta fatura/conta de energia elétrica enviada pelo cliente.
Extraia com precisão se visível:
1. Concessionária (ex: CPFL Paulista, Elektro, etc.)
2. Valor total da conta (R$)
3. Consumo do mês (kWh) e média recente se visível
4. Tipo de ligação (Monofásico, Bifásico, Trifásico)
5. Potencial estimado de economia com energia solar fotovoltaica Projeto Energia (até 90% da fatura)
6. Próximo passo consultivo convidando para um dimensionamento personalizado sem compromisso.

Mantenha o tom de voz profissional, consultivo e objetivo da Projeto Energia, sem prometer valores fixos como garantia.`;

  try {
    const parts: any[] = [];
    if (payload.imageBase64 && payload.mimeType) {
      parts.push({
        inlineData: {
          mimeType: payload.mimeType,
          data: payload.imageBase64,
        },
      });
    }
    parts.push({ text: promptText + (payload.notes ? `\nInformações adicionais fornecidas pelo cliente: ${payload.notes}` : '') });

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: { parts },
      config: {
        systemInstruction: PROJETO_ENERGIA_SYSTEM_PROMPT,
        temperature: 0.3,
      },
    });

    return {
      analysis: response.text || 'Não foi possível extrair os dados da conta com nitidez. Por favor, digite o valor médio da sua conta de luz ou envie para nosso WhatsApp (17) 99707-8718.',
      success: true,
    };
  } catch (err: any) {
    console.error('Error analyzing bill with Gemini:', err);
    return {
      analysis: 'Não conseguimos processar a imagem automaticamente no momento. Você pode nos informar diretamente o valor médio da sua conta de luz (R$) que faremos a estimativa na hora!',
      error: err?.message,
      success: false,
    };
  }
}
