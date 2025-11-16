// Sistema de Tradução Offline - Português ⇄ Inglês
// Sem dependências externas ou APIs

// Estado atual da tradução
let currentLanguage = 'pt';
let originalContent = null;

// Dicionário completo de traduções PT -> EN
const translations = {
    // Navbar
    'Página Inicial': 'Home',
    'Sobre mim': 'About Me',
    'Habilidades': 'Skills',
    'Experiência': 'Experience',
    'Cursos': 'Courses',
    'Contato': 'Contact',
    'Projetos': 'Projects',
    
    // Hero Section
    'Desenvolvedor Full-stack, com experiência no mercado de programação, pós-graduação e inglês avançado.': 'Full-stack Developer, with experience in the programming market, postgraduate degree and advanced English.',
    'Tenho conhecimentos sólidos em HTML5, CSS3, JavaScript, BootStrap, Node.js, Express.js, Linux, MySQL, SQLite, Firebird, PostgreSQL/Neon, AWS, Git, GitHub Pages, Render, Domínio e email como (FreeDNS + Resend), ChatBots de IA com Python e LangChain.': 'I have solid knowledge in HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express.js, Linux, MySQL, SQLite, Firebird, PostgreSQL/Neon, AWS, Git, GitHub Pages, Render, Domain and email like (FreeDNS + Resend), AI ChatBots with Python and LangChain.',
    'Visualizar Currículo em Português': 'View Resume in Portuguese',
    'Dev. Full-stack focado em IA/ML': 'Full-stack Dev. focused on AI/ML',
    
    // About Section
    'Meu nome é Mikael Diehl,': 'My name is Mikael Diehl,',
    'Sou Desenvolvedor Full-stack focado em IA/ML...': "I'm a Full-stack Developer focused on AI/ML...",
    'Desde cedo tive contato com o mundo da informática, por volta dos meus oito anos de idade, ainda na época da internet discada. Meu primeiro computador rodava Windows 98, com 128 MB de memória RAM, processador AMD Athlon 950 MHz e um HDD IDE de 20 GB a 5200 rpm.': "From an early age I had contact with the world of computing, around the age of eight, still in the dial-up internet era. My first computer ran Windows 98, with 128 MB of RAM, AMD Athlon 950 MHz processor and a 20 GB IDE HDD at 5200 rpm.",
    'Na infância, comecei a aprender sobre cabeamento e manutenção de computadores. Pouco antes da adolescência, já realizava formatações, montagem e configuração de máquinas algo que faço até hoje, seja para economizar ou para obter uma renda extra.': "In childhood, I started learning about computer cabling and maintenance. Shortly before adolescence, I was already performing formatting, assembly and configuration of machines, something I still do today, whether to save money or to earn extra income.",
    'Há três anos, decidi mergulhar de vez na programação, buscando unir meus conhecimentos de hardware com o desenvolvimento de software. Sou formado em': "Three years ago, I decided to dive into programming once and for all, seeking to unite my hardware knowledge with software development. I have a degree in",
    'Tecnologia em Análise e Desenvolvimento de Sistemas': 'Technology in Systems Analysis and Development',
    'e complemento minha formação com cursos na Udemy, Curso em Vídeo, Alura, Asimov e Dio, aprofundando meus estudos e consolidando minha carreira.': 'and I complement my training with courses on Udemy, Curso em Vídeo, Alura, Asimov and Dio, deepening my studies and consolidating my career.',
    'Busco uma oportunidade de contratação em uma empresa para crescer profissionalmente e contribuir com soluções inovadoras nesse mercado em constante evolução.': "I'm looking for a job opportunity in a company to grow professionally and contribute with innovative solutions in this constantly evolving market.",
    'Trabalhei por quase três anos no': 'I worked for almost three years at',
    'Grupo Herval': 'Grupo Herval',
    ', em Dois Irmãos, atuando por um período na área de suporte de TI. Mais recentemente, trabalhei como': ', in Dois Irmãos, working for a period in the IT support area. More recently, I worked as a',
    'Desenvolvedor Full-Stack': 'Full-Stack Developer',
    'na': 'at',
    'Servisoft Informática': 'Servisoft Informática',
    ', desenvolvendo sistemas de gestão.': ', developing management systems.',
    'Durante a faculdade, comecei a estudar Python e, atualmente, estou me especializando em criar soluções de': 'During college, I started studying Python and, currently, I am specializing in creating',
    'Inteligência Artificial': 'Artificial Intelligence',
    'por meio dessa linguagem de programação.': 'solutions through this programming language.',
    
    // Quote Section
    '"Sorte é o que acontece quando a preparação': '"Luck is what happens when preparation',
    'encontra a oportunidade."': 'meets opportunity."',
    '"Sorte é o que acontece quando a preparação encontra a oportunidade."': '"Luck is what happens when preparation meets opportunity."',
    'Sêneca': 'Seneca',
    
    // Skills Section
    'Habilidades de Programação': 'Programming Skills',
    'Desenvolvedor há 3 anos, sempre botando a mão no código, praticando para solidificar o conhecimento. Depois de ter aprendido a primeira Linguagem de Programação, naturalmente aprendi outras com muito mais facilidade. Eu me adapto sempre ao que o mercado possa vir a exigir. Sou proativo e sei trabalhar em equipe.': "Developer for 3 years, always hands-on coding, practicing to solidify knowledge. After learning the first Programming Language, I naturally learned others much more easily. I always adapt to what the market may demand. I'm proactive and I know how to work in a team.",
    'Possuo inglês avançado e espanhol básico a intermediário.': 'I have advanced English and basic to intermediate Spanish.',
    'Front-end Developer': 'Front-end Developer',
    'Full-stack Developer': 'Full-stack Developer',
    'IA/ML Developer': 'AI/ML Developer',
    'Experiência de 3 anos': '3 years of experience',
    'Experiência de 1 ano': '1 year of experience',
    
    // Experience Section
    'Experiência': 'Experience',
    'Três anos intensos de experiência em Programação!': 'Three intense years of Programming experience!',
    'Desenvolvimento Full-Stack de aplicações completas, atuando no Front-end com HTML5, CSS3, JavaScript e Bootstrap, e no Back-end com Node.js e Express.js. Experiência com bancos de dados MySQL, SQLite, Firebird e PostgreSQL (incluindo PostgreSQL + Neon na AWS), versionamento com Git, deploy em GitHub Pages e Render, gestão de variáveis de ambiente, configuração de domínios e serviços de e-mail com FreeDNS + Resend, além de domínio de ambientes Linux (Ubuntu, Kali e derivados).': 'Full-Stack development of complete applications, working on the Front-end with HTML5, CSS3, JavaScript and Bootstrap, and on the Back-end with Node.js and Express.js. Experience with MySQL, SQLite, Firebird and PostgreSQL databases (including PostgreSQL + Neon on AWS), versioning with Git, deploy on GitHub Pages and Render, environment variable management, domain configuration and email services with FreeDNS + Resend, in addition to mastery of Linux environments (Ubuntu, Kali and derivatives).',
    'Desenvolvi e gerenciei sistemas de gestão com controle de acesso por níveis de privilégio, permitindo que usuários visualizem dados enquanto administradores podem criar, editar e excluir informações diretamente pela interface. Transformei esses sistemas em aplicações com dashboards interativos e gráficos atualizados em tempo real, utilizando tecnologias como Electron.js para desktop e Firebird como base de dados. Também atuo no desenvolvimento de chatbots e aplicações com IA utilizando Python e LangChain, aliado ao domínio de conceitos fundamentais de programação, POO, APIs, bibliotecas e arquitetura Full-Stack.': 'I developed and managed management systems with access control by privilege levels, allowing users to view data while administrators can create, edit and delete information directly through the interface. I transformed these systems into applications with interactive dashboards and real-time updated charts, using technologies such as Electron.js for desktop and Firebird as a database. I also work on developing chatbots and AI applications using Python and LangChain, combined with mastery of fundamental programming concepts, OOP, APIs, libraries and Full-Stack architecture.',
    // Texto completo do parágrafo (normalizado com espaços únicos)
    'Desenvolvimento Full-Stack de aplicações completas, atuando no Front-end com HTML5, CSS3, JavaScript e Bootstrap, e no Back-end com Node.js e Express.js. Experiência com bancos de dados MySQL, SQLite, Firebird e PostgreSQL (incluindo PostgreSQL + Neon na AWS), versionamento com Git, deploy em GitHub Pages e Render, gestão de variáveis de ambiente, configuração de domínios e serviços de e-mail com FreeDNS + Resend, além de domínio de ambientes Linux (Ubuntu, Kali e derivados). Desenvolvi e gerenciei sistemas de gestão com controle de acesso por níveis de privilégio, permitindo que usuários visualizem dados enquanto administradores podem criar, editar e excluir informações diretamente pela interface. Transformei esses sistemas em aplicações com dashboards interativos e gráficos atualizados em tempo real, utilizando tecnologias como Electron.js para desktop e Firebird como base de dados. Também atuo no desenvolvimento de chatbots e aplicações com IA utilizando Python e LangChain, aliado ao domínio de conceitos fundamentais de programação, POO, APIs, bibliotecas e arquitetura Full-Stack.': 'Full-Stack development of complete applications, working on the Front-end with HTML5, CSS3, JavaScript and Bootstrap, and on the Back-end with Node.js and Express.js. Experience with MySQL, SQLite, Firebird and PostgreSQL databases (including PostgreSQL + Neon on AWS), versioning with Git, deploy on GitHub Pages and Render, environment variable management, domain configuration and email services with FreeDNS + Resend, in addition to mastery of Linux environments (Ubuntu, Kali and derivatives). I developed and managed management systems with access control by privilege levels, allowing users to view data while administrators can create, edit and delete information directly through the interface. I transformed these systems into applications with interactive dashboards and real-time updated charts, using technologies such as Electron.js for desktop and Firebird as a database. I also work on developing chatbots and AI applications using Python and LangChain, combined with mastery of fundamental programming concepts, OOP, APIs, libraries and Full-Stack architecture.',
    'Téc. em Informática': 'IT Technician',
    'Hardware': 'Hardware',
    '2010 - ATUAL': '2010 - PRESENT',
    'Montagem e configuração de computadores e notebooks': 'Assembly and configuration of computers and notebooks',
    'Software Developer': 'Software Developer',
    'Programação': 'Programming',
    '2022 - ATUAL': '2022 - PRESENT',
    'Desenvolvimento de sites e por certo período como Full-Stack na Servisoft Info.': 'Website development and for a period as Full-Stack at Servisoft Info.',
    
    // Portfolio/Courses Section
    'Cursos': 'Courses',
    'Deixarei aqui os meus certificados de conclusões de cursos.': "I'll leave here my course completion certificates.",
    'Cursando Pós-Graduação em Inteligência Artificial e Machine Learning': 'Pursuing Postgraduate Degree in Artificial Intelligence and Machine Learning',
    'Conceito 5: Nota máxima do MEC': 'Grade 5: Highest score from MEC',
    'Diploma de ensino superior em Análise e Desenvolvimento de Sistemas': 'Higher education diploma in Systems Analysis and Development',
    'Todos': 'All',
    'Cursos profissionalizantes': 'Professional courses',
    'Técnicos em informática': 'IT technical courses',
    'Profissionalizante vendas': 'Professional sales',
    'Profissionalizante administrativo': 'Professional administrative',
    'Python': 'Python',
    
    // Contact Section
    'Vamos manter contato!': "Let's keep in touch!",
    'Agradeço por visitar a minha página de perfil. Sinta-se à vontade para entrar em contato por meio dos hyperlinks de rodapé da página ou do meu email de trabalho:': 'Thank you for visiting my profile page. Feel free to contact me through the footer hyperlinks or my work email:',
    'Tenha uma ótima jornada!': 'Have a great journey!'
};


// Função para salvar o conteúdo original
function saveOriginalContent() {
    if (originalContent) return; // Já foi salvo
    
    originalContent = {
        title: document.title,
        elements: []
    };
    
    // Salvar conteúdo de todos os elementos traduzíveis
    const selectors = [
        '.navbar-nav li a:not(#translateBtn)',
        'h1', 'h2', 'h3', 'h4', 'h5',
        'p:not(.no-translate)',
        '.btn:not(#translateBtn):not(#translateBtnMobile)',
        '.caption',
        '#quote h2',
        '#quote span',
        '#filter ul li a',
        '.folio-info h5',
        '.experience-details h5',
        '.experience-details h4',
        '.experience-details span',
        '.experience-details i',
        '.diploma-heading',
        '.chart-text h4',
        '.chart-text p'
    ];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            // Ignorar botões de tradução
            if (element.id === 'translateBtn' || 
                element.id === 'translateBtnMobile' ||
                element.closest('#translateBtn') ||
                element.closest('#translateBtnMobile')) {
                return;
            }
            
            originalContent.elements.push({
                element: element,
                html: element.innerHTML,
                text: element.textContent
            });
        });
    });
}

// Função para restaurar conteúdo original
function restoreOriginalContent() {
    if (!originalContent) return;
    
    document.title = originalContent.title;
    
    originalContent.elements.forEach(item => {
        item.element.innerHTML = item.html;
    });
    
    currentLanguage = 'pt';
    updateButtonText();
}

// Função para traduzir um texto completo
function translateText(text) {
    const trimmed = text.trim();
    return translations[trimmed] || text;
}

// Função para traduzir para inglês
function translateToEnglish() {
    if (!originalContent) {
        saveOriginalContent();
    }
    
    // Traduzir todos os elementos salvos
    originalContent.elements.forEach(item => {
        const element = item.element;
        
        // Tratamento especial para o h2 da seção quote
        if (element.tagName === 'H2' && element.closest('#quote')) {
            element.innerHTML = '"Luck is what happens when preparation</br>meets opportunity." <span>Seneca</span>';
            return;
        }
        
        // Primeiro tentar traduzir o texto completo (normalizado)
        const fullText = element.textContent.trim();
        const fullTranslation = translateText(fullText);
        
        if (fullTranslation !== fullText) {
            // Tradução completa encontrada
            element.textContent = fullTranslation;
        } else if (element.innerHTML !== element.textContent) {
            // Tem HTML interno, traduzir partes
            translateElementWithHTML(element);
        } else {
            // Texto simples sem tradução encontrada, tentar normalizar
            const normalized = fullText.replace(/\s+/g, ' ');
            const normalizedTranslation = translateText(normalized);
            if (normalizedTranslation !== normalized) {
                element.textContent = normalizedTranslation;
            }
        }
    });
    
    // Traduzir título
    document.title = 'Mikael Diehl - Full-stack Developer';
    currentLanguage = 'en';
    updateButtonText();
}

// Função para traduzir elementos que contêm HTML
function translateElementWithHTML(element) {
    // Para elementos da seção quote, tratamento especial
    if (element.closest('#quote')) {
        // Pegar todo o texto (exceto o span)
        let fullText = '';
        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                fullText += node.textContent;
            } else if (node.tagName === 'BR') {
                fullText += ' ';
            }
        });
        
        fullText = fullText.trim();
        const translated = translateText(fullText);
        
        if (translated !== fullText) {
            // Substituir todo o texto, preservando o span
            const span = element.querySelector('span');
            const spanHTML = span ? span.outerHTML : '';
            element.innerHTML = translated + ' ' + spanHTML;
            return;
        }
    }
    
    // Método padrão usando TreeWalker
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    while (walker.nextNode()) {
        if (walker.currentNode.textContent.trim()) {
            textNodes.push(walker.currentNode);
        }
    }
    
    textNodes.forEach(node => {
        const originalText = node.textContent.trim();
        if (originalText) {
            const translated = translateText(originalText);
            if (translated !== originalText) {
                node.textContent = node.textContent.replace(originalText, translated);
            }
        }
    });
}

// Função para atualizar texto dos botões
function updateButtonText() {
    const btn = document.getElementById('translateBtn');
    const btnMobile = document.getElementById('translateBtnMobile');
    
    const newText = currentLanguage === 'pt' ? 'English' : 'Português';
    
    if (btn) {
        btn.innerHTML = `<i class="fa fa-globe"></i> <span class="translate-text">${newText}</span>`;
    }
    
    if (btnMobile) {
        btnMobile.innerHTML = `<i class="fa fa-globe"></i> ${newText}`;
    }
}

// Função de toggle de tradução
function toggleTranslation() {
    if (currentLanguage === 'pt') {
        translateToEnglish();
    } else {
        restoreOriginalContent();
    }
}

// Inicializar botões quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translateBtn');
    const translateBtnMobile = document.getElementById('translateBtnMobile');
    
    if (translateBtn) {
        translateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleTranslation();
        });
    }
    
    if (translateBtnMobile) {
        translateBtnMobile.addEventListener('click', function(e) {
            e.preventDefault();
            toggleTranslation();
        });
    }
});
