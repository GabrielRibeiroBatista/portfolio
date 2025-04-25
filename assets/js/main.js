import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".bauer",
  `Trabalho com desenvolvimento Back-end e Front-end utilizando Python em frameworks como Django, Flask e Streamlit. Desenvolvi aplicações e automações na Power Platform (Power Apps e Power Automate), além de sistemas satélites integrados ao ERP para otimizar processos internos. Criei customizações para o Mega ERP usando Delphi/VB, APIs RESTful e realizei integrações com APIs REST, SOAP e GraphQL. Também fui responsável pela manutenção de servidores Windows e Linux, administração de serviços como Active Directory, Azure e NGINX, além de criar relatórios gerenciais e colaborar com equipes internacionais.`,
  "Analista de desenvolvimento de sistemas",
  "Bauer do Brasil",
  "08/2021 - até o momento"
);

hoverChangeExperience(
  ".hrc",
  `Trabalho como professor e desenvolvedor na Hacker Revolution Cyber Café - HRC², onde adotamos os apelidos de "Baristas", sou responsável pela coordenação da equipe de desenvolvimento, que atua em diversos sistemas focados em Segurança da Informação, Cybersegurança e Ethical Hacking.
  Participo em atividades de Pentest, SAST e DAST, bem como análise em sites e sistemas de clientes.`,
  "Barista Supremo  - Professor | Integrante Diretor",
  "Hacker Revolution Cyber Café - HRC²",
  "01/2024 - até o momento"
);

hoverChangeExperience(
  ".idciber",
  `Atuo como coordenador na equipe de infraestruturas críticas, liderando o desenvolvimento de frameworks avançados para fortalecer a cibersegurança e combater ameaças emergentes.`,
  "Coordenador de Infraestruturas Críticas",
  "IDCIBER",
  "03/2024 - até o momento"
);

hoverChangeExperience(
  ".nextconsult",
  `Fui responsável pela formatação de contratos, acompanhamento de pipelines de vendas e atendimento ao cliente (SAC), assegurando eficiência e organização nos processos internos da empresa.`,
  "BackOffice",
  "Next Consult",
  "06/2019 - 08/2020"
);

hoverChangeExperience(
  ".unifae",
  `Trabalhei no desenvolvimento front-end com PHP, criando páginas institucionais usando HTML, JavaScript e PHP, focando em interfaces eficientes e funcionais para melhorar a experiência do usuário.`,
  "Estagiário ASCOM (Assessoria de comunicações)",
  "UniFAE",
  "08/2018 - 05/2019"
);

hoverChangeDescription(
  ".html",
  "HTML (HyperText Markup Language) é uma linguagem de marcação que define a estrutura das páginas web, permitindo a organização e apresentação de conteúdos através de elementos como títulos, parágrafos, links e imagens."
);
hoverChangeDescription(
  ".css",
  "CSS (Cascading Style Sheets) é uma linguagem de estilo que possibilita a personalização e o design visual das páginas web, utilizando regras que aplicam cores, fontes e layouts a diferentes elementos de forma modular e reutilizável."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação versátil que permite a implementação de elementos dinâmicos e interativos em páginas web, possibilitando a criação de funcionalidades avançadas, como animações, manipulação de eventos e comunicação assíncrona com servidores."
); 
hoverChangeDescription(
  ".python",
  "Python é uma linguagem de programação de alto nível, versátil e de fácil leitura, que permite o desenvolvimento rápido de aplicações em diversas áreas, como web, automação, ciência de dados e inteligência artificial, promovendo eficiência e produtividade para os desenvolvedores."
); 
hoverChangeDescription(
  ".api",
  "Uma API (Interface de Programação de Aplicações) é um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem entre si. Elas podem ser implementadas de várias formas, incluindo APIs REST, que utilizam o protocolo HTTP para facilitar a troca de dados em formato JSON ou XML; APIs SOAP, que seguem um protocolo mais rígido e utilizam XML para a comunicação; e GraphQL, que permite que os clientes solicitem exatamente os dados necessários, otimizando a transferência de informações entre sistemas."
); 
hoverChangeDescription(
  ".sql",
  "SQL (Structured Query Language) é uma linguagem de programação padrão utilizada para gerenciar e manipular bancos de dados relacionais. Com SQL, você pode realizar operações como consultas, inserções, atualizações e exclusões de dados, além de definir e modificar estruturas de banco de dados. Sua sintaxe clara e intuitiva torna o SQL uma ferramenta essencial para desenvolvedores e analistas de dados que trabalham com grandes volumes de informações."
); 
hoverChangeDescription(
  ".linux",
  "Linux Server é uma versão do sistema operacional Linux projetada para gerenciar e operar servidores, oferecendo estabilidade, segurança e escalabilidade, permitindo que você implemente aplicações e serviços em um ambiente confiável."
); 
hoverChangeDescription(
  ".windows",
  "Windows Server é uma plataforma de sistema operacional desenvolvida pela Microsoft, projetada para gerenciar e operar servidores, oferecendo ferramentas robustas para administração, segurança e virtualização, permitindo que você implemente e gerencie serviços e aplicações em uma infraestrutura de TI eficiente."
);
hoverChangeDescription(
  ".django",
  "Django é um framework web de alto nível para Python, focado em desenvolvimento rápido e design limpo. Ele oferece uma estrutura completa com funcionalidades integradas, como autenticação, ORM e painel administrativo, ideal para projetos complexos."
);
hoverChangeDescription(
  ".flask",
  "Flask é um microframework web minimalista para Python, oferecendo maior flexibilidade com menos funcionalidades nativas. Ele permite que os desenvolvedores escolham bibliotecas e componentes conforme necessário, sendo ideal para projetos menores e mais personalizados."
);
hoverChangeDescription(
  ".nginx",
  "Nginx é um servidor web de código aberto que atua como proxy reverso, balanceador de carga e servidor de cache. Conhecido por sua alta performance e baixa utilização de recursos, é amplamente utilizado para gerenciar grandes volumes de tráfego em aplicações web, além de oferecer suporte a protocolos como HTTP, HTTPS e SMTP."
);
hoverChangeDescription(
  ".git",
  "Git é um sistema de controle de versão distribuído de código aberto, amplamente utilizado para gerenciar o histórico de alterações em projetos de software. Ele permite que múltiplos desenvolvedores colaborem de forma eficiente, oferecendo recursos como branches, merge, e versionamento completo de arquivos. Projetado para performance e segurança, é a base de plataformas como GitHub e GitLab."
);
hoverChangeDescription(
  ".csharp",
  "C# (C-Sharp) é uma linguagem de programação moderna, orientada a objetos e fortemente tipada, desenvolvida pela Microsoft como parte da plataforma .NET. É amplamente utilizada para criar aplicações desktop, web, móveis e jogos com o Unity. Combina a facilidade de uso com recursos poderosos, sendo ideal para desenvolvimento robusto e escalável em ambientes Windows."
);
hoverChangeDescription(
  ".cpp",
  "C++ é uma linguagem de programação de propósito geral, conhecida por sua performance, flexibilidade e controle de baixo nível. Ampliando o C com recursos de programação orientada a objetos, é amplamente usada no desenvolvimento de sistemas operacionais, jogos, softwares embarcados e aplicações que exigem alto desempenho e uso eficiente de recursos."
);
hoverChangeDescription(
  ".bootstrap",
  "Bootstrap é um framework front-end open source desenvolvido pelo Twitter, que facilita a criação de interfaces web responsivas e modernas. Ele fornece um conjunto de componentes prontos, como botões, formulários, grids e menus, baseados em HTML, CSS e JavaScript, otimizando o tempo de desenvolvimento e garantindo compatibilidade entre navegadores."
);
hoverChangeDescription(
  ".docker",
  "Docker é uma plataforma open source que permite empacotar, distribuir e executar aplicações em containers — ambientes isolados e portáteis que incluem tudo o que a aplicação precisa para funcionar. Ideal para garantir consistência entre ambientes de desenvolvimento, teste e produção, o Docker é amplamente usado em DevOps e ambientes de microserviços."
);
