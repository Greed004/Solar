// ==========================================
// DADOS OFICIAIS — PROJETO PRO GALVÃO
// ==========================================
//
// INSERIR AQUI FUTURAMENTE:
// - Dados técnicos
// - Especificações
// - Informações comerciais
// - Produtos
// - Garantias
// - Características dos equipamentos
// - Informações institucionais
// - Textos oficiais
// - Dados adicionais dos projetos
// ==========================================

export interface ProjectCase {
  id: string;
  name: string;
  category: 'Residencial' | 'Comercial' | 'Empresarial';
  modules: number;
  powerKwp?: number;
  avgGenerationKwh: number;
  monthlySavings: number;
  annualSavings: number;
  description: string;
  highlight: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  city: string;
  rating: number;
  quote: string;
  projectType: string;
  isPlaceholder: boolean;
}

export const COMPANY_CONTACTS = {
  name: 'Projeto Energia',
  tagline: 'Soluções Completas em Energia Solar Fotovoltaica',
  address: 'Av. Francisco das Chagas Oliveira, 232',
  neighborhood: 'São José do Rio Preto/SP',
  city: 'São José do Rio Preto',
  state: 'SP',
  zip: '15091-330',
  cnpj: '[CNPJ — Inserir posteriormente]',
  phones: [
    { number: '(17) 3305-2278', clean: '1733052278', type: 'Fixo' },
  ],
  whatsapps: [
    { name: 'Comercial 01', display: '(17) 99707-8718', clean: '5517997078718' },
    { name: 'Comercial 02', display: '(17) 99283-0720', clean: '5517992830720' },
  ],
  emails: [
    { name: 'Adailton', email: 'adailton@projetoenergia.com.br' },
    { name: 'Sanderson', email: 'sanderson@projetoenergia.com.br' },
    { name: 'Carlos', email: 'carlos@projetoenergia.com.br' },
  ],
  socials: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
    whatsapp: 'https://wa.me/5517997078718?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar%20com%20a%20Projeto%20Energia.',
  },
};

export const CREDIBILITY_METRICS: MetricItem[] = [
  {
    value: '500+',
    label: 'Projetos Realizados',
    description: 'Soluções instaladas com excelência',
  },
  {
    value: '2.500+',
    label: 'Módulos Instalados',
    description: 'Capacidade e tecnologia de ponta',
  },
  {
    value: '100.000+ kW',
    label: 'Gerados',
    description: 'Energia limpa entregue na rede',
  },
  {
    value: '~5 anos',
    label: 'Retorno Aproximado*',
    description: 'Payback médio do investimento',
  },
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'diff-1',
    title: 'Economia',
    description: 'Reduza significativamente os custos com energia elétrica e transforme o gasto mensal em investimento de longo prazo.',
    iconName: 'DollarSign',
  },
  {
    id: 'diff-2',
    title: 'Experiência',
    description: 'Mais de 500 projetos realizados e milhares de módulos instalados em São José do Rio Preto e região.',
    iconName: 'Award',
  },
  {
    id: 'diff-3',
    title: 'Segurança',
    description: 'Projetos dimensionados rigorosamente de acordo com as características e necessidades técnicas de cada cliente.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'diff-4',
    title: 'Sustentabilidade',
    description: 'Geração de energia 100% limpa utilizando uma fonte renovável e inesgotável para proteger o meio ambiente.',
    iconName: 'Leaf',
  },
  {
    id: 'diff-5',
    title: 'Valorização',
    description: 'A infraestrutura própria de microgeração valoriza o imóvel no mercado imobiliário e amplia a liquidez.',
    iconName: 'TrendingUp',
  },
  {
    id: 'diff-6',
    title: 'Eficiência',
    description: 'Soluções desenvolvidas para otimizar ao máximo a geração e o consumo inteligente da energia elétrica.',
    iconName: 'Zap',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    title: 'Energia Solar Fotovoltaica',
    subtitle: 'Sistemas Conectados à Rede (Grid-tie)',
    description: 'Comercialização e engenharia de sistemas fotovoltaicos conectados à rede elétrica para geração de energia limpa a partir da radiação solar.',
    features: [
      'Geração própria conectada à concessionária',
      'Compensação de créditos de energia',
      'Equipamentos homologados e de alta performance',
    ],
    iconName: 'SunMedium',
  },
  {
    id: 'serv-2',
    title: 'Instalação Fotovoltaica',
    subtitle: 'Residencial, Comercial e Empresarial',
    description: 'Instalação profissional e homologação técnica de sistemas solares para residências, condomínios, empresas e empreendimentos.',
    features: [
      'Equipe técnica própria e capacitada',
      'Adequação estrutural e de telhados',
      'Homologação completa junto à concessionária',
    ],
    iconName: 'Wrench',
  },
  {
    id: 'serv-3',
    title: 'Instalações Elétricas',
    subtitle: 'Prediais, Comerciais e Industriais',
    description: 'Serviços especializados em infraestrutura elétrica, adequação de padrões de entrada, quadros de distribuição e segurança.',
    features: [
      'Projetos elétricos de baixa e média tensão',
      'Adequação e modernização de padrões',
      'Conformidade com as normas ABNT e NR-10',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'serv-4',
    title: 'Eficiência Energética',
    subtitle: 'Consultoria e Otimização do Consumo',
    description: 'Avaliação minuciosa do consumo energético do imóvel e identificação de oportunidades estratégicas para otimização.',
    features: [
      'Diagnóstico do perfil de consumo',
      'Identificação de desperdícios tarifários',
      'Recomendações técnicas personalizadas',
    ],
    iconName: 'BarChart3',
  },
  {
    id: 'serv-5',
    title: 'Limpeza e Manutenção',
    subtitle: 'Conservação e Alto Rendimento',
    description: 'Serviços especializados de limpeza e manutenção preventiva de sistemas fotovoltaicos para assegurar a máxima geração contínua.',
    features: [
      'Limpeza técnica com produtos específicos',
      'Inspeção preventiva de cabeamentos e conexões',
      'Monitoramento de eficiência de geração',
    ],
    iconName: 'Sparkles',
  },
];

export const REAL_CASES: ProjectCase[] = [
  {
    id: 'spazio-blu',
    name: 'Spazio Blu',
    category: 'Comercial',
    modules: 56,
    powerKwp: 14.56,
    avgGenerationKwh: 800,
    monthlySavings: 1440,
    annualSavings: 17280,
    description: 'Projeto comercial de alta eficiência com 56 módulos fotovoltaicos, proporcionando sustentabilidade e forte redução de custos operacionais.',
    highlight: '56 módulos fotovoltaicos • 14,56 kWp',
  },
  {
    id: 'prozaria',
    name: 'Prozaria',
    category: 'Comercial',
    modules: 28,
    avgGenerationKwh: 1100,
    monthlySavings: 880,
    annualSavings: 10560,
    description: 'Sistema fotovoltaico comercial de 28 módulos com alta geração média mensal para redução dos gastos fixos do estabelecimento.',
    highlight: '28 módulos • Geração média de 1.100 kWh/mês',
  },
  {
    id: 'residencia-1',
    name: 'Residência I',
    category: 'Residencial',
    modules: 16,
    powerKwp: 5.28,
    avgGenerationKwh: 650,
    monthlySavings: 520,
    annualSavings: 6240,
    description: 'Instalação residencial compacta e eficiente, atendendo todo o consumo de energia familiar com máxima confiabilidade.',
    highlight: '16 módulos fotovoltaicos • 5,28 kWp',
  },
  {
    id: 'residencia-3',
    name: 'Residência III',
    category: 'Residencial',
    modules: 50,
    powerKwp: 16.75,
    avgGenerationKwh: 2000,
    monthlySavings: 1600,
    annualSavings: 20000,
    description: 'Projeto de grande porte residencial com 50 módulos, suprindo consumo de climatização, lazer e área externa com grande autonomia.',
    highlight: '50 módulos fotovoltaicos • 16,75 kWp',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Conhecemos sua necessidade',
    description: 'Entendemos seu consumo e objetivo.',
    detail: 'Analisamos o histórico da sua conta de energia, o perfil do imóvel e as metas de economia da sua família ou empresa.',
  },
  {
    step: '02',
    title: 'Analisamos o projeto',
    description: 'Avaliamos as características do imóvel e necessidade energética.',
    detail: 'Nossa equipe técnica avalia a insolação, orientação, área disponível de telhado ou solo e condições elétricas do local.',
  },
  {
    step: '03',
    title: 'Desenvolvemos a solução',
    description: 'Dimensionamos o sistema adequado.',
    detail: 'Elaboramos a proposta técnica e comercial sob medida com os equipamentos ideais e a estimativa de geração e economia.',
  },
  {
    step: '04',
    title: 'Instalamos',
    description: 'Nossa equipe executa a instalação e coloca o projeto em funcionamento.',
    detail: 'Realizamos a montagem dos módulos, cabeamentos, instalação do inversor e homologação completa com a concessionária.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Quanto posso economizar com energia solar?',
    answer: 'A economia pode chegar a até 90%, dependendo das características do projeto, do perfil de consumo, da tarifa de energia e das condições de insolação do imóvel.',
  },
  {
    question: 'Quanto custa instalar energia solar?',
    answer: 'O valor depende do consumo, da potência necessária, da quantidade de módulos, do tipo de inversor, das características do imóvel e da estrutura de instalação. A Projeto Energia elabora uma análise personalizada sem compromisso.',
  },
  {
    question: 'Quanto tempo demora para recuperar o investimento?',
    answer: 'Em muitos projetos o retorno acontece em aproximadamente 5 anos, mas esse período varia conforme o volume de energia consumido, a tarifa da concessionária e as especificações de cada instalação.',
  },
  {
    question: 'Posso instalar energia solar na minha empresa?',
    answer: 'Sim! A Projeto Energia atende projetos residenciais e comerciais, além de soluções completas para indústrias e empreendimentos de médio e grande porte.',
  },
  {
    question: 'O sistema funciona quando não há sol?',
    answer: 'O funcionamento depende da configuração do sistema. Em sistemas conectados à rede (Grid-tie), você continua utilizando a energia da concessionária normalmente durante a noite ou em dias muito nublados, consumindo os créditos gerados durante o dia.',
  },
  {
    question: 'Preciso de muito espaço para instalar os painéis?',
    answer: 'A necessidade de área depende da potência do sistema dimensionado e do consumo do imóvel. Nossos engenheiros avaliam a melhor disposição no telhado ou estrutura para aproveitar o espaço com o máximo rendimento.',
  },
];

export const TESTIMONIALS_RESERVED: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: '[Nome do Cliente — Inserir posteriormente]',
    role: 'Proprietário Residencial',
    city: 'São José do Rio Preto/SP',
    rating: 5,
    quote: '[DEPOIMENTO REAL DO CLIENTE — INSERIR POSTERIORMENTE]',
    projectType: 'Sistema Residencial',
    isPlaceholder: true,
  },
  {
    id: 'test-2',
    clientName: '[Nome do Cliente — Inserir posteriormente]',
    role: 'Diretor Comercial',
    city: 'São José do Rio Preto/SP',
    rating: 5,
    quote: '[DEPOIMENTO REAL DO CLIENTE — INSERIR POSTERIORMENTE]',
    projectType: 'Sistema Comercial',
    isPlaceholder: true,
  },
  {
    id: 'test-3',
    clientName: '[Nome do Cliente — Inserir posteriormente]',
    role: 'Gestor Empresarial',
    city: 'Região de Rio Preto/SP',
    rating: 5,
    quote: '[DEPOIMENTO REAL DO CLIENTE — INSERIR POSTERIORMENTE]',
    projectType: 'Sistema Empresarial',
    isPlaceholder: true,
  },
];
