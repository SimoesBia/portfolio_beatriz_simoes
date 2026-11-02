import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BrainCircuit, BriefcaseBusiness, Code2, Database, ExternalLink, Github, GraduationCap, Layers3, Mail, MapPin, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { profile, projects, type Project } from './config';
import './style.css';

function ProjectArt({ project }: { project: Project }) {
  const icon = project.visual==='school' ? <GraduationCap size={45}/> : project.visual==='books' ? <BookOpen size={45}/> : project.visual==='ml' ? <BrainCircuit size={45}/> : project.visual==='etl' ? <Database size={45}/> : project.visual==='products' ? <Layers3 size={45}/> : project.visual==='landing' ? <Code2 size={45}/> : <Sparkles size={45}/>;
  return <div className={`project-visual art-${project.visual}`}>
    <div className="art-halo"/><div className="project-mock"><div className="mock-top"><i/><i/><i/><span>{project.visual==='school'?'painel institucional':project.visual==='books'?'court of books':'projeto / '+project.number}</span></div>
    <div className="mock-content"><div className="mock-icon">{icon}</div><span className="mock-eyebrow">PROJETO {project.number}</span><strong>{project.name}</strong><div className="mock-stripes"><i/><i/><i/></div></div></div><span className="visual-number">{project.number} / 07</span>
  </div>;
}


type GalleryImage = {src:string; alt:string};
const galleryImages: Record<string, GalleryImage[]> = {
  lily: [{src:'/screenshots/lily-1.webp',alt:'Interface da demonstração estática Lily Tasks no Hugging Face'}],
  school: [
    {src:'/screenshots/school-1.webp',alt:'Tela do sistema escolar com informações protegidas'},
    {src:'/screenshots/school-2.webp',alt:'Painel de gestão escolar com informações protegidas'},
    {src:'/screenshots/school-3.webp',alt:'Relatórios do sistema escolar com informações protegidas'},
  ],
  books: [
    {src:'/screenshots/books-1.webp',alt:'Biblioteca do Court of Books'},
    {src:'/screenshots/books-2.webp',alt:'Resenhas do Court of Books'},
    {src:'/screenshots/books-3.webp',alt:'Página inicial do Court of Books'},
    {src:'/screenshots/books-4.webp',alt:'Calendário de encontros do Court of Books'},
    {src:'/screenshots/books-5.webp',alt:'Perfil e avatares do Court of Books'},
    {src:'/screenshots/books-6.webp',alt:'Desafios de leitura do Court of Books'},
  ],
  ml: [
    {src:'/screenshots/ml-1.webp',alt:'Gráfico do projeto House Price Prediction, captura fornecida pela autora'},
    {src:'/screenshots/ml-2.webp',alt:'Gráfico adicional do projeto House Price Prediction, captura fornecida pela autora'},
    {src:'/screenshots/ml-3.webp',alt:'Gráfico adicional do projeto House Price Prediction, captura fornecida pela autora'},
  ],
  products: [{src:'/screenshots/products-illustration.webp',alt:'Ilustração conceitual do pipeline de coleta, tratamento, armazenamento e API de produtos'}],
  etl: [{src:'/screenshots/etl-illustration.webp',alt:'Ilustração conceitual do fluxo ETL de mensagens ao cliente'}],
  landing: [
    {src:'/screenshots/landing-desktop.webp',alt:'Versão desktop da landing page Método Freidora'},
    {src:'/screenshots/landing-benefits.webp',alt:'Seção de benefícios da landing page Método Freidora'},
    {src:'/screenshots/landing-mobile.webp',alt:'Versão mobile da landing page Método Freidora'},
  ],
};

function ProjectGallery({project}:{project:Project}) {
  const images = galleryImages[project.visual];
  if(!images?.length)return null;
  const illustrative = project.visual==='products' || project.visual==='etl';
  return <section className="project-gallery" aria-label={`Imagens do projeto: ${project.name}`}>
    <div className="gallery-heading"><span>✦ POR DENTRO DO PROJETO</span><p>{illustrative?'Representação conceitual da arquitetura':'Imagens do projeto'}</p></div>
    <div className={`gallery-strip gallery-${project.visual}`}>
      {images.map(item=><figure className="gallery-thumb" key={item.src}><img src={item.src} alt={item.alt} loading="lazy" decoding="async"/></figure>)}
    </div>
    {illustrative&&<p className="gallery-caption">Projeção visual ilustrativa do funcionamento do projeto. Dados, exemplos e resultados exibidos são fictícios; a imagem não representa uma execução real.</p>}
    {project.visual==='school'&&<p className="gallery-privacy">Capturas com informações da instituição protegidas. Projeto de uso interno.</p>}
  </section>;
}

function ProjectCard({project}:{project:Project}) {
  return <div className="project-entry"><article className={`project-card ${project.highlight?'project-featured':''}`}><ProjectArt project={project}/><div className="project-content"><span className="kicker">{project.category}</span><h3>{project.name}<span className="title-dot">.</span></h3>{project.status&&<span className="project-status">{project.status}</span>}<p>{project.description}</p><div className="chips">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div><div className="project-links">{project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> Código <ArrowUpRight size={15}/></a>}{project.demo&&<a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={17}/> {project.visual==='landing'?'Acessar site':'Ver demonstração'} <ArrowUpRight size={15}/></a>}{!project.github&&<span className="private-label"><ShieldCheck size={17}/> Código privado</span>}</div>{project.note&&<small>{project.note}</small>}</div></article><ProjectGallery project={project}/></div>;
}

function App() {return <div className="site">
  <header className="header wrap"><a className="brand" href="#inicio"><span className="brand-mark">✳</span> beatriz<span className="brand-dot">.</span>s</a><nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#experiencia">Experiência</a><a href="#tecnologias">Tecnologias</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a></nav><a className="nav-github" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Meu GitHub"><Github size={19}/></a></header>
  <main>
    <section className="hero wrap" id="inicio"><div className="hero-copy"><div className="eyebrow"><span className="pulse"/> PORTFÓLIO DE TECNOLOGIA <span className="star">✦</span></div><p className="hello">Olá, eu sou a</p><h1>Beatriz <span>Simões<span className="period">.</span></span></h1><h2>Transformando ideias em <em>soluções digitais.</em></h2><p className="intro">Estudante de Ciência da Computação e Técnica em Informática. Desenvolvo aplicações web, automações e projetos de dados e inteligência artificial, conectando aprendizado a problemas reais.</p><div className="actions"><a className="button primary" href="#projetos">Explorar projetos <ArrowUpRight size={17}/></a><a className="button secondary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Meu LinkedIn <ArrowUpRight size={16}/></a></div><a className="scroll-hint" href="#sobre"><ArrowDown size={15}/> CONHEÇA MINHA TRAJETÓRIA</a></div><div className="hero-art"><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-frame"><img src="/beatriz-retrato.webp" alt="Retrato profissional de Beatriz Simões"/></div><div className="floating-tag"><Sparkles size={15}/> código + criatividade</div><span className="portrait-spark" aria-hidden="true">✳</span></div></section>
    <section className="section about" id="sobre"><div className="wrap"><div className="section-heading"><span className="kicker">01 / QUEM SOU</span><h2>Um pouco <em>sobre mim</em><span className="title-dot">.</span></h2></div><div className="about-grid"><div className="about-statement">Aprender, construir e <span>resolver problemas reais</span> fazem parte da minha trajetória.</div><div className="about-details"><p>Sou <strong>Beatriz Simões</strong>, estudante de <strong>Ciência da Computação na UNINASSAU</strong> e formada no curso <strong>Técnico em Informática pelo SENAI</strong>.</p><p>Minha trajetória reúne suporte a sistemas, trabalho com dados e construção de aplicações. Já atuei com suporte a ERP e automações em Python e SQL, e atualmente trabalho com conferência e organização de informações em sistemas corporativos.</p><p>Busco uma oportunidade de <strong>estágio em TI</strong> para aprofundar minha atuação em desenvolvimento de software, dados e soluções tecnológicas.</p><div className="about-meta"><span><MapPin size={15}/> {profile.location}</span><span><GraduationCap size={15}/> Ciência da Computação</span></div><a href="#contato" className="inline-link">Entre em contato <ArrowRight size={16}/></a></div></div></div></section>
    <section className="section experience" id="experiencia"><div className="wrap"><div className="section-heading"><span className="kicker">02 / TRAJETÓRIA</span><h2>Experiência & <em>formação</em><span className="title-dot">.</span></h2><p>Vivências profissionais e acadêmicas que complementam meus projetos.</p></div><div className="timeline-grid"><div className="timeline-column"><h3><BriefcaseBusiness size={20}/> Experiência profissional</h3><div className="timeline-item"><span className="timeline-date">MAR 2025 — ATUAL</span><h4>Assistente Administrativo · Dados e Sistemas</h4><p className="timeline-org">Bruno Vanderlei Advogados Associados</p><p>Extração, conciliação, higienização e validação de dados de plataformas jurídicas e sistemas corporativos, com atualização de informações no ERP interno.</p></div><div className="timeline-item"><span className="timeline-date">AGO 2023 — FEV 2024</span><h4>Estagiária de TI · Suporte a Sistemas ERP</h4><p className="timeline-org">Sophos Projetos — Gestão Sistêmica</p><p>Atendimento técnico remoto, investigação de inconsistências, diagnóstico de conectividade e scripts Python/SQL para automação e processamento de dados.</p></div></div><div className="timeline-column"><h3><GraduationCap size={20}/> Formação acadêmica</h3><div className="timeline-item"><span className="timeline-date">EM ANDAMENTO · PREVISÃO 2028.2</span><h4>Bacharelado em Ciência da Computação</h4><p className="timeline-org">UNINASSAU</p><p>Formação superior em andamento, com desenvolvimento de projetos práticos em programação, aplicações web e dados.</p></div><div className="timeline-item"><span className="timeline-date">2021 — 2023</span><h4>Técnico em Informática</h4><p className="timeline-org">SENAI</p><p>Formação técnica voltada a fundamentos de informática e tecnologia.</p></div></div></div></div></section>
    <section className="section skills" id="tecnologias"><div className="wrap"><div className="section-heading"><span className="kicker">03 / FERRAMENTAS</span><h2>Meu universo <em>tech</em><span className="title-dot">.</span></h2><p>Tecnologias presentes na minha trajetória profissional, formação e projetos.</p></div><div className="skills-grid"><div className="skill-card"><div className="skill-icon"><Code2 size={23}/></div><h3>Desenvolvimento</h3><p>Python · JavaScript · TypeScript · React · Angular · HTML · CSS</p></div><div className="skill-card"><div className="skill-icon"><Layers3 size={23}/></div><h3>Backend & dados</h3><p>FastAPI · APIs REST · SQL · SQLite · MySQL · Supabase</p></div><div className="skill-card"><div className="skill-icon"><BrainCircuit size={23}/></div><h3>IA & automação</h3><p>scikit-learn · Pandas · ETL · LLMs · RAG / BM25</p></div><div className="skill-card"><div className="skill-icon"><Terminal size={23}/></div><h3>Qualidade & ferramentas</h3><p>Pytest · Git · GitHub · VS Code · Vercel · Docker</p></div></div><p className="skills-disclaimer">Tecnologias utilizadas em contextos diferentes; a lista não implica domínio avançado de todas elas.</p></div></section>
    <section className="section projects" id="projetos"><div className="wrap"><div className="section-heading"><span className="kicker">04 / PROJETOS</span><h2>Ideias que saíram <em>do papel</em><span className="title-dot">.</span></h2><p>Aplicações reais, projetos pessoais e estudos técnicos — cada um com um problema diferente para resolver.</p></div><div className="projects-list">{projects.map(p=><ProjectCard key={p.name} project={p}/>)}</div><div className="more-projects"><span>✧</span> Projetos em constante evolução <span>✧</span></div></div></section>
    <section className="section contact" id="contato"><div className="wrap contact-inner"><span className="kicker">05 / CONTATO</span><div className="contact-decoration">✳</div><h2>Vamos criar algo <em>incrível?</em></h2><p>Estou em busca de oportunidades de estágio em tecnologia e aberta a conversar sobre desenvolvimento de software, dados e novos desafios.</p><div className="contact-actions"><a className="button primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a><a className="button secondary" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a>{profile.email&&<a className="button secondary" href={`mailto:${profile.email}`}><Mail size={17}/> E-mail</a>}{profile.resume&&<a className="button secondary" href={profile.resume} download>Currículo <ArrowDown size={16}/></a>}</div></div></section>
  </main><footer className="footer wrap"><a className="brand" href="#inicio"><span className="brand-mark">✳</span> beatriz<span className="brand-dot">.</span>s</a><p>Feito com cuidado, código e um toque de lilás. © {new Date().getFullYear()} {profile.fullName}.</p><a className="back-top" href="#inicio">Voltar ao topo ↑</a></footer></div>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
