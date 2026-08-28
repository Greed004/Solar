import { Message } from '../types';

export async function sendChatMessage(
  history: Message[],
  latestPrompt: string,
  attachments?: { base64?: string; type: string }[]
): Promise<string> {
  const formattedMessages = history.map((msg) => ({
    role: msg.role,
    text: msg.text,
  }));

  formattedMessages.push({
    role: 'user',
    text: latestPrompt,
  });

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: formattedMessages,
      }),
    });

    if (!res.ok) {
      throw new Error(`Erro na resposta do servidor: ${res.status}`);
    }

    const data = await res.json();
    return data.text || 'Não foi possível gerar a resposta.';
  } catch (error: any) {
    console.error('Erro ao conectar com assistente:', error);
    return (
      'Desculpe, tive uma oscilação na conexão com o servidor. Você pode continuar tirando dúvidas ou falar diretamente com nossos consultores da **Projeto Energia** pelo WhatsApp: **(17) 99707-8718** ou fixo **(17) 3305-2278**!'
    );
  }
}

export async function analyzeEnergyBill(
  imageBase64: string,
  mimeType: string,
  notes?: string
): Promise<string> {
  try {
    const res = await fetch('/api/analyze-bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageBase64,
        mimeType,
        notes,
      }),
    });

    if (!res.ok) {
      throw new Error(`Erro no processamento da fatura: ${res.status}`);
    }

    const data = await res.json();
    return data.analysis;
  } catch (error: any) {
    console.error('Erro ao analisar fatura:', error);
    return 'Não foi possível analisar o arquivo automaticamente. Por favor, digite o valor médio da sua conta de luz ou envie a imagem para o nosso WhatsApp comercial: (17) 99707-8718.';
  }
}
