export const profile = {
  displayName: 'Beatriz Simões',
  fullName: 'Beatriz Simões',
  role: 'Estudante de Ciência da Computação • Desenvolvedora em formação',
  location: 'Recife · Pernambuco',
  github: 'https://github.com/SimoesBia',
  linkedin: 'https://www.linkedin.com/in/beatriz-sim%C3%B5es0208/',
  email: 'beatrizbruna58536@gmail.com',
  resume: '', 
};

export type Project = {
  number: string; name: string; category: string; description: string;
  technologies: string[]; github?: string; demo?: string; note?: string;
  status?: string; highlight?: boolean; visual: string;
};

export const projects: Project[] = [
  { number:'01', name:'Lily Tasks', category:'IA & PRODUTIVIDADE', highlight:true, visual:'lily', status:'Projeto publicado',
    description:'Assistente de produtividade com tarefas, lembretes, integração opcional ao Gemini e recuperação de documentos com BM25. Inclui testes de regressão e documentação dos desafios técnicos.',
    technologies:['Python','FastAPI','Gradio','SQLite','BM25','Pytest'], github:'https://github.com/SimoesBia/lily-tasks', demo:'https://huggingface.co/spaces/SimoesBia/lily-tasks-demo',
    note:'A demonstração pública é estática e simulada: não executa o backend Python nem um LLM.' },
  { number:'02', name:'Gestão Escolar', category:'SISTEMA REAL · FULL STACK', highlight:true, visual:'school', status:'Em uso • código privado',
    description:'Sistema desenvolvido para uma escola, apoiando o cadastro de alunos, matrículas anuais, rotinas financeiras e análise de pendências. Aplicação hospedada e utilizada na operação da instituição.',
    technologies:['React / TSX','CSS','Supabase','Vercel'],
    note:'Projeto privado por ser utilizado por uma instituição real. Código, dados e acesso interno não são públicos.' },
  { number:'03', name:'Court of Books', category:'APP · PROJETO PESSOAL E ACADÊMICO', visual:'books', status:'Em desenvolvimento',
    description:'Aplicativo para um clube do livro real, com perfis, livro do mês, sugestões, sorteio sincronizado, biblioteca, resenhas e calendário. Desenvolvido também como trabalho acadêmico.',
    technologies:['Ionic','Angular','TypeScript','Supabase','Open Library API'], github:'https://github.com/SimoesBia/clube-do-livro',
    note:'Projeto em desenvolvimento: funcionalidades e ajustes finais ainda estão em evolução.' },
  { number:'04', name:'House Price Prediction', category:'MACHINE LEARNING · API', visual:'ml',
    description:'Pipeline de aprendizado de máquina que compara modelos de regressão, realiza avaliação e disponibiliza previsões de valores de imóveis por uma API REST.',
    technologies:['Python','scikit-learn','Pandas','FastAPI','Pytest'], github:'https://github.com/SimoesBia/house-price-ml-project' },
  { number:'05', name:'Product Data Pipeline', category:'DADOS · WEB SCRAPING · API', visual:'products',
    description:'Pipeline que extrai dados de um catálogo de demonstração, normaliza e salva produtos em SQLite, com API REST para consulta, filtros e operações de cadastro.',
    technologies:['Python','BeautifulSoup','FastAPI','SQLite','Pydantic'], github:'https://github.com/SimoesBia/product-data-pipeline' },
  { number:'06', name:'Customer Messaging ETL', category:'ENGENHARIA DE DADOS · AUTOMAÇÃO', visual:'etl',
    description:'Fluxo ETL para limpeza e validação de cadastros, mascaramento de informações sensíveis, identificação de registros inválidos e geração de mensagens personalizadas.',
    technologies:['Python','Pandas','SQLite','Pytest','Docker'], github:'https://github.com/SimoesBia/etl-projeto' },
  { number:'07', name:'Método Freidora', category:'FRONTEND · PROJETO DE USO REAL', visual:'landing',
    description:'Landing page de vendas em espanhol com design responsivo, otimização de carregamento, interações em JavaScript e integração com rastreamento de campanhas e checkout externo.',
    technologies:['HTML','CSS','JavaScript','GitHub Pages'], github:'https://github.com/SimoesBia/metodo-freidora', demo:'https://simoesbia.github.io/metodo-freidora/' },
];
