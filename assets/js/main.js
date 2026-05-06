import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";
import "./i18n.js"; // Initialize translations

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".bauer-sup",
  "exp_desc_bauer_sup",
  "exp_role_bauer_sup",
  "exp_comp_bauer_sup",
  "exp_date_bauer_sup"
);

hoverChangeExperience(
  ".bauer",
  "exp_desc_bauer_dev",
  "exp_role_bauer_dev",
  "exp_comp_bauer_dev",
  "exp_date_bauer_dev"
);

hoverChangeExperience(
  ".hrc",
  "exp_desc_hrc",
  "exp_role_hrc",
  "exp_comp_hrc",
  "exp_date_hrc"
);

hoverChangeExperience(
  ".idciber",
  "exp_desc_idciber",
  "exp_role_idciber",
  "exp_comp_idciber",
  "exp_date_idciber"
);

hoverChangeExperience(
  ".nextconsult",
  "exp_desc_next",
  "exp_role_next",
  "exp_comp_next",
  "exp_date_next"
);

hoverChangeExperience(
  ".unifae",
  "exp_desc_unifae",
  "exp_role_unifae",
  "exp_comp_unifae",
  "exp_date_unifae"
);

hoverChangeDescription(
  ".html",
  "desc_html"
);
hoverChangeDescription(
  ".css",
  "desc_css"
);
hoverChangeDescription(
  ".js",
  "desc_js"
); 
hoverChangeDescription(
  ".python",
  "desc_python"
); 
hoverChangeDescription(
  ".api",
  "desc_api"
); 
hoverChangeDescription(
  ".sql",
  "desc_sql"
); 
hoverChangeDescription(
  ".linux",
  "desc_linux"
); 
hoverChangeDescription(
  ".windows",
  "desc_windows"
);
hoverChangeDescription(
  ".django",
  "desc_django"
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
