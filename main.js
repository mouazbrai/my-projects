/* tailwind config */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: { DEFAULT: '#070b1a', 800: '#0b1220', 700: '#141a2e', 600: '#1e2540' },
                code: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4338ca' },
                design: { DEFAULT: '#ec4899', light: '#f472b6', dark: '#be185d' },
                print: { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#b45309' },
                ai: { DEFAULT: '#10b981', light: '#34d399', dark: '#047857' },
            },
            fontFamily: {
                sans: ['Cairo', 'Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Cairo', 'sans-serif'],
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                pulseRing: {
                    '0%': { boxShadow: '0 0 0 0 rgba(16,185,129,0.5)' },
                    '70%': { boxShadow: '0 0 0 10px rgba(16,185,129,0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(16,185,129,0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
            animation: {
                fadeUp: 'fadeUp 0.6s ease both',
                float: 'float 4s ease-in-out infinite',
                pulseRing: 'pulseRing 2s infinite',
                shimmer: 'shimmer 3s linear infinite',
            },
        },
    },
};
/* tailwind config end */

/* i18n */
const I18N = {
    ar: {
        'brand.name': 'Mouaz Brai',
        'nav.skills': 'المهارات', 'nav.services': 'الخدمات', 'nav.projects': 'المشاريع',
        'nav.design': 'الأعمال البصرية', 'nav.experience': 'الخبرة', 'nav.credentials': 'المؤهلات', 'nav.about': 'نبذة', 'nav.contact': 'تواصل',
        'hero.available': 'متاح للفرص',
        'hero.role': 'مهندس برمجيات · مصمم جرافيكي · متخصص إنتاج طباعي',
        'hero.firstname': 'Mouaz', 'hero.lastname': 'Brai.',
        'hero.desc': 'أبني مواقع وتطبيقات وحلولاً برمجية للشركات، بما فيها المطابع، إلى جانب أنظمة رقمية مخصصة لحاجات العمل. وتمنحني خبرتي في التصميم الجرافيكي والإنتاج الطباعي فهماً عملياً لسير العمل من الفكرة والتصميم إلى المنتج النهائي، ويمكنني توظيف هذا الفهم عندما يكون جزءاً من الحل.',
        'chip.software': 'هندسة برمجيات', 'chip.design': 'تصميم جرافيكي',
        'chip.print': 'إنتاج طباعي', 'chip.ai': 'ذكاء اصطناعي',
        'hero.cta.skills': 'استعرض المهارات', 'hero.cta.mfe': 'الشهادات والمشاريع',
        'hero.stack.title': 'الأساس التقني',
        'stats.domains': 'مجالات أساسية', 'stats.technologies': 'تقنيات وأدوات',
        'stats.experience': 'شهران من الخبرة العملية', 'stats.automation': 'حلول رقمية',
        'skills.label': 'المهارات والتقنيات', 'skills.title': 'ثلاثة مجالات أساسية. وأساس تقني متكامل.',
        'skills.subtitle': 'هندسة البرمجيات، التصميم الجرافيكي، والإنتاج الطباعي مجالات واضحة ومستقلة. وتأتي الأتمتة والذكاء الاصطناعي كأدوات داعمة يمكن توظيفها في أي منها حسب حاجة المشروع.',
        'pillar.software.title': 'هندسة البرمجيات وتطوير الويب',
        'pillar.software.sub': 'Software Engineering · Web Development · Business Systems',
        'pillar.design.title': 'التصميم الإبداعي والهوية البصرية',
        'pillar.design.sub': 'Creative Design & Visual Identity',
        'pillar.print.title': 'الإنتاج الطباعي وما قبل الطباعة',
        'pillar.print.sub': 'Print Production & Prepress Engineering',
        'pillar.ai.title': 'الذكاء الاصطناعي والأتمتة — طبقة داعمة',
        'pillar.ai.sub': 'AI-assisted workflows, agents & automation',
        'skill.django': 'تطوير الخوادم والأنظمة الخلفية', 'skill.js': 'تفاعلية الواجهات الأمامية',
        'skill.css': 'تنسيق الواجهات الحديثة', 'skill.db': 'إدارة قواعد البيانات العلائقية',
        'skill.api': 'ربط الخدمات وطبقة البيانات', 'skill.git': 'إدارة النسخ والمشاريع', 'skill.react': 'بناء واجهات تفاعلية بالمكونات', 'skill.algorithms.title': 'الخوارزميات وهياكل البيانات', 'skill.algorithms': 'حل المشكلات وتنظيم البيانات بكفاءة', 'skill.linux.title': 'Linux والخوادم', 'skill.linux': 'التعامل مع بيئات Linux والخوادم', 'skill.deploy.title': 'النشر والاستضافة والخوادم', 'skill.deploy': 'نشر المواقع والتعامل مع الاستضافة والخوادم', 'skill.security.title': 'الحماية وأمن الويب', 'skill.security': 'أساسيات حماية التطبيقات والبيانات', 'skill.performance.title': 'الأداء والتحسين', 'skill.performance': 'تحسين سرعة المواقع وكفاءة الأنظمة',
        'skill.illustrator': 'الرسومات المتجهة والشعارات', 'skill.photoshop': 'معالجة الصور والتصاميم الإعلانية',
        'skill.indesign': 'التنسيق المكتبي والمطبوعات المتعددة', 'skill.figma': 'تصميم الواجهات والسوشيال ميديا',
        'skill.heidelberg': 'المونتاج والتحضير الطباعي', 'skill.kodak': 'تخطيط الصفحات وتجميع الملصقات',
        'skill.ctp': 'تجهيز وإخراج الصفائح الطباعية', 'skill.dies': 'سكاكين القص والتغليف',
        'skill.offset': 'تشغيل ومتابعة آلات الأوفست', 'skill.diecut': 'تقنيات التشكيل وقص العلب',
        'skill.color': 'ضبط الكثافة ومطابقة الألوان', 'skill.finishing': 'السلفنة، البصمة، والإنهاء الفني',
        'skill.agents': 'بناء وإدارة وكلاء الذكاء الاصطناعي', 'skill.prompt': 'هندسة الأوامر والتحكم بالنماذج',
        'skill.context': 'هندسة السياق وبناء الأنظمة', 'skill.workflow': 'أتمتة مهام الإنتاج والطباعة',
        'skill.scripting': 'أدوات أتمتة مخصصة (ترقيم، ضغط ملفات)', 'skill.ecommerce': 'منصات الطلب الإلكتروني للمطابع',
        'services.label': 'الخدمات', 'services.title': 'حلول أبنيها للشركات.',
        'services.subtitle': 'أطوّر حلولاً رقمية للشركات في مجالات مختلفة، مع قدرة خاصة على فهم احتياجات المطابع وربط البرمجيات بالعمل التصميمي والإنتاجي عندما يتطلب المشروع ذلك.',
        'service.1.title': 'مواقع وتطبيقات الأعمال', 'service.1.desc': 'مواقع شركات، لوحات تحكم، أنظمة داخلية وتطبيقات ويب مبنية حسب طريقة العمل الفعلية للمؤسسة.',
        'service.2.title': 'حلول رقمية للمطابع', 'service.2.desc': 'بوابات طلب، رفع ملفات، حساب أسعار، متابعة الطلبات وأدوات تساعد المطبعة على تنظيم دورة العمل رقمياً.',
        'service.3.title': 'برمجيات مخصصة وأتمتة', 'service.3.desc': 'أدوات تقلل الأعمال المتكررة، تعالج الملفات والبيانات، وتختصر الخطوات اليدوية في الطباعة أو في أي نشاط تجاري آخر.',
        'service.4.title': 'السمارت فلايرز واللاندينغ بايجس', 'service.4.desc': 'صفحات هبوط عالية التحويل وحملات إعلانية بصرية سريعة التنفيذ حسب الطلب.',
        'service.5.title': 'التصميم الجرافيكي والهوية', 'service.5.desc': 'كروت زيارة، كوبونات، إعلانات، شعارات، وهويات بصرية كاملة من الفكرة إلى المطبوع.',
        'service.6.title': 'حلول مدعومة بالذكاء الاصطناعي', 'service.6.desc': 'أتمتة ومساعدات ذكية ووكلاء AI يمكن إضافتهم إلى سير العمل عندما يقدمون فائدة عملية واضحة.',
        'projects.label': 'المشاريع', 'projects.title': 'أعمال مختارة.',
        'projects.subtitle': 'نماذج من مشاريع الويب والتطوير البرمجي، من مواقع الشركات والواجهات إلى النماذج التجريبية للتطبيقات.',
        'projects.viewGithub': 'عرض GitHub', 'project.open': 'فتح المشروع',
        'project.1.title': 'موقع شركة', 'project.2.title': 'Portfolio Websites', 'project.3.title': 'Cyber Website', 'project.4.title': 'React Project', 'project.5.title': 'CFPA Youssef Zenouchi – Baraki',
        'project.1.desc': 'موقع شركة — تجربة ويب عملية', 'project.2.desc': 'تجارب متعددة لمواقع ومعارض أعمال', 'project.5.badge': 'مشروع التخرج والتأهيل',
        'project.3.desc': 'واجهة ومفهوم لمشروع تقني', 'project.4.desc': 'تجربة تطوير بواجهة React',
        'project.5.desc': 'مشروع نهاية التكوين · شهادة تأهيل في إنشاء مواقع الويب WEB الثابت والمتنقل · User Experience',
        'experience.label': 'الخبرة العملية', 'experience.title': 'شهران من العمل داخل بيئة إنتاج حقيقية.',
        'experience.subtitle': 'تجربة جمعت بين التصميم الجرافيكي، متابعة الإنتاج الطباعي، وبناء أدوات برمجية تختصر الأعمال المتكررة.',
        'experience.badge': 'شهران — خبرة عملية', 'experience.role': 'مصمم جرافيكي · إنتاج طباعي',
        'experience.context': 'شركة خاصة في باب الزوار',
        'experience.desc': 'خلال هذه الفترة صممت الكوبونات وكروت الزيارة، وشاركت في العمل المرتبط بإنتاج المطبوعات. لم يقتصر دوري على التصميم؛ بل عملت أيضاً على تحويل بعض المهام المتكررة إلى أدوات برمجية عملية.',
        'experience.item1.title': 'تصميم الكوبونات وكروت الزيارة', 'experience.item1.desc': 'تصميم مواد مطبوعة جاهزة للإنتاج ضمن متطلبات العمل اليومية.',
        'experience.item2.title': 'برنامج الترقيم التلقائي', 'experience.item2.desc': 'أنشأت برنامجاً لترقيم الكوبونات تلقائياً بدل تنفيذ الترقيم يدوياً.',
        'experience.item3.title': 'تصغير ملفات الأرشيف', 'experience.item3.desc': 'أضفت للبرنامج إمكانية تقليل حجم الملفات لأغراض الأرشفة مع الحفاظ على جودة مناسبة.',
        'experience.item4.title': 'أتمتة مهام متكررة', 'experience.item4.desc': 'استخدام البرمجة لتقليل الوقت والخطوات اليدوية في العمل المرتبط بالإنتاج.',
        'design.label': 'الأعمال البصرية', 'design.title': 'أعمال التصميم والطباعة.',
        'design.subtitle': 'كروت زيارة، كوبونات، إعلانات، وتغليف — من الفكرة إلى المطبوع النهائي.',
        'design.hint': 'اضغط صورة للمعاينة', 'design.view': 'عرض',
        'about.label': 'نبذة', 'about.title': 'ثلاثة مجالات واضحة.<br>ومسار مهني واحد مترابط.',
        'about.desc': 'أعرّف نفسي أولاً كمهندس برمجيات ومطوّر ويب، وأعمل أيضاً في التصميم الجرافيكي والإنتاج الطباعي. أستطيع بناء مواقع وأنظمة وحلول برمجية للمطابع كما للشركات الأخرى، وتصبح خبرتي في الطباعة ميزة إضافية عندما يحتاج المشروع إلى برمجيات تفهم العمل الحقيقي داخل المطبعة. خلال التكوين والتربص التطبيقي طوّرت أيضاً أدوات أتمتة مرتبطة بالعمل الطباعي، وهو ما يجمع بين المعرفة التقنية وفهم الإنتاج.',
        'about.b1': 'هندسة برمجيات وتطوير ويب', 'about.b2': 'تصميم جرافيكي وهوية بصرية',
        'about.b3': 'إنتاج طباعي وما قبل الطباعة', 'about.b4': 'أتمتة وذكاء اصطناعي عند الحاجة',
        'about.card.software': 'البرمجيات', 'about.card.design': 'التصميم',
        'about.card.print': 'الطباعة', 'about.card.ai': 'الأتمتة والذكاء الاصطناعي',
        'cert.label': 'شهادة التأهيل', 'cert.title': 'شهادة تأهيل: إنشاء مواقع الويب WEB الثابت والمتنقل', 'cert.desc': '(CFPA) Youssef Zenouchi – Baraki · مشروع نهاية التكوين التطبيقي · تجربة مستخدم وواجهة ويب.', 'cert.link': 'عرض مشروع نهاية التكوين',
        'degree.label': 'التكوين التقني', 'degree.title': 'تقني سامي الاتصال والصناعات المطبعية — خيار: دراسة وإنجاز المنتجات المطبعية', 'degree.desc': 'المعهد الوطني المتخصص في التكوين المهني للفنون والصناعات المطبعية هاشمي عامر بودواو.',
        'languages.label': 'اللغات', 'languages.title': 'العربية · الإنجليزية · الفرنسية', 'languages.desc': 'العربية: متحدث أصلي · الإنجليزية: مستوى عام A2 مع قوة في بعض المصطلحات المتخصصة · الفرنسية: مستوى عام ومصطلحات المجال.',
        'mfe.label': 'مذكرة التخرج', 'mfe.title': "Mémoire de Fin d'Études — MFE.pdf",
        'mfe.desc': 'مذكرة نهاية التخرج التي توثق التربص التطبيقي داخل مؤسسة الطباعة في الجزائر سيا (SIA).',
        'mfe.button': 'تحميل المذكرة',
        'footer.tagline': 'Software · Design · Print · Automation',
    },
    fr: {
        'brand.name': 'Mouaz Brai',
        'nav.skills': 'Compétences', 'nav.services': 'Services', 'nav.projects': 'Projets',
        'nav.design': 'Visuels', 'nav.experience': 'Expérience', 'nav.credentials': 'Diplômes & certificats', 'nav.about': 'À propos', 'nav.contact': 'Contact',
        'hero.available': 'Disponible',
        'hero.role': 'Ingénieur Logiciel · Designer Graphique · Production Imprimée',
        'hero.firstname': 'Mouaz', 'hero.lastname': 'Brai.',
        'hero.desc': "Je conçois des sites web, des applications métier et des solutions logicielles pour les entreprises, y compris les imprimeries. Mon expérience en design graphique et en production imprimée m'aide ensuite à adapter ces solutions aux réalités du travail de production lorsque le projet le demande.",
        'chip.software': 'Ingénierie', 'chip.design': 'Design',
        'chip.print': 'Impression', 'chip.ai': 'IA',
        'hero.cta.skills': 'Voir les compétences', 'hero.cta.mfe': 'Certificats & projets',
        'hero.stack.title': 'Base technique',
        'stats.domains': 'Domaines clés', 'stats.technologies': 'Technologies & outils',
        'stats.experience': "2 mois d’expérience terrain", 'stats.automation': 'Solutions digitales',
        'skills.label': 'Compétences & Technologies', 'skills.title': 'Trois domaines clés. Une base technique complète.',
        'skills.subtitle': "L'ingénierie logicielle, le design graphique et la production imprimée sont trois domaines distincts. L'automatisation et l'IA viennent en soutien selon les besoins du projet.",
        'pillar.software.title': 'Ingénierie & Développement Web',
        'pillar.software.sub': 'Software Engineering · Web Development · Business Systems',
        'pillar.design.title': 'Design Créatif & Identité Visuelle',
        'pillar.design.sub': 'Creative Design & Visual Identity',
        'pillar.print.title': 'Production & Prépresse',
        'pillar.print.sub': 'Print Production & Prepress Engineering',
        'pillar.ai.title': 'IA & Automatisation — couche de soutien',
        'pillar.ai.sub': 'AI-assisted workflows, agents & automation',
        'skill.django': 'Développement back-end & systèmes', 'skill.js': 'Interactivité front-end',
        'skill.css': 'Mise en forme moderne', 'skill.db': 'Gestion de bases de données',
        'skill.api': 'Connexion services & données', 'skill.git': 'Gestion de versions', 'skill.react': 'Interfaces interactives par composants', 'skill.algorithms.title': 'Algorithmes & structures de données', 'skill.algorithms': 'Résolution de problèmes & organisation des données', 'skill.linux.title': 'Linux & serveurs', 'skill.linux': 'Environnements Linux et serveurs', 'skill.deploy.title': 'Déploiement, hébergement & serveurs', 'skill.deploy': 'Mise en ligne et gestion de l’hébergement', 'skill.security.title': 'Sécurité web', 'skill.security': 'Bases de protection des applications et données', 'skill.performance.title': 'Performance & optimisation', 'skill.performance': 'Amélioration de la vitesse et de l’efficacité',
        'skill.illustrator': 'Vectoriel & logos', 'skill.photoshop': 'Retouche & visuels pub',
        'skill.indesign': 'Mise en page & imprimés', 'skill.figma': 'UI & réseaux sociaux',
        'skill.heidelberg': 'Imposition & prépresse', 'skill.kodak': 'Imposition de pages & planches',
        'skill.ctp': 'Préparation plaques CTP', 'skill.dies': 'Formes de découpe & emballage',
        'skill.offset': 'Conduite & suivi offset', 'skill.diecut': 'Découpe & façonnage',
        'skill.color': 'Gestion couleur & densité', 'skill.finishing': 'Pelliculage, gaufrage, finition',
        'skill.agents': 'Gestion des agents IA', 'skill.prompt': 'Prompt Engineering',
        'skill.context': 'Context Engineering', 'skill.workflow': 'Automatisation des workflows',
        'skill.scripting': 'Scripts Python personnalisés', 'skill.ecommerce': 'E-commerce pour imprimeries',
        'services.label': 'Services', 'services.title': 'Des solutions utiles aux entreprises.',
        'services.subtitle': "Je développe des solutions digitales pour différents secteurs, avec une compréhension particulière des besoins des imprimeries et des workflows de production.",
        'service.1.title': 'Sites & applications métier', 'service.1.desc': 'Sites d’entreprise, tableaux de bord, outils internes et applications web conçus autour du fonctionnement réel de l’organisation.',
        'service.2.title': 'Solutions digitales pour imprimeries', 'service.2.desc': 'Portails de commande, upload de fichiers, calcul des prix, suivi des commandes et outils pour structurer le workflow de l’imprimerie.',
        'service.3.title': 'Logiciels sur mesure & automatisation', 'service.3.desc': 'Outils pour réduire les tâches répétitives, traiter des fichiers ou des données et simplifier les opérations métier, dans l’impression comme ailleurs.',
        'service.4.title': 'Smart Flyers & Landing Pages', 'service.4.desc': 'Pages de destination à forte conversion et visuels publicitaires rapides.',
        'service.5.title': 'Design graphique & identité', 'service.5.desc': 'Cartes de visite, coupons, publicités, logos et identités visuelles complètes.',
        'service.6.title': 'Solutions assistées par IA', 'service.6.desc': 'Automatisation, assistants et agents IA intégrés à un workflow lorsque leur usage apporte un gain concret.',
        'projects.label': 'Projets', 'projects.title': 'Sélection de travaux.',
        'projects.subtitle': "Une sélection de projets web et logiciels montrant mon approche du développement et de la construction de solutions.",
        'projects.viewGithub': 'Voir GitHub', 'project.open': 'Ouvrir',
        'project.1.title': 'Site d’entreprise', 'project.2.title': 'Portfolio Websites', 'project.3.title': 'Cyber Website', 'project.4.title': 'React Project', 'project.5.title': 'CFPA Youssef Zenouchi – Baraki',
        'project.1.desc': 'Site d’entreprise — expérience web pratique', 'project.2.desc': 'Collection de concepts web et portfolio', 'project.5.badge': 'Projet final de qualification',
        'project.3.desc': 'Interface pour un projet technique', 'project.4.desc': 'Expérience de développement React',
        'project.5.desc': 'Projet final de formation · certificat de qualification en création de sites web statiques et mobiles · User Experience',
        'experience.label': 'Expérience pratique', 'experience.title': 'Deux mois au cœur d’un environnement de production réel.',
        'experience.subtitle': 'Une expérience mêlant design graphique, production imprimée et développement d’outils pour réduire les tâches répétitives.',
        'experience.badge': '2 mois — expérience terrain', 'experience.role': 'Graphiste · Production imprimée',
        'experience.context': 'Entreprise privée à Bab Ezzouar',
        'experience.desc': 'Pendant cette période, j’ai conçu des coupons et des cartes de visite et participé au travail lié à la production imprimée. Mon rôle ne s’est pas limité au design : j’ai aussi transformé certaines tâches répétitives en outils pratiques.',
        'experience.item1.title': 'Coupons & cartes de visite', 'experience.item1.desc': 'Conception de supports imprimés prêts pour la production selon les besoins du travail quotidien.',
        'experience.item2.title': 'Numérotation automatique', 'experience.item2.desc': 'Création d’un programme pour numéroter automatiquement les coupons.',
        'experience.item3.title': 'Réduction des fichiers pour l’archive', 'experience.item3.desc': 'Ajout d’une fonction pour réduire le poids des fichiers destinés à l’archivage tout en conservant une qualité adaptée.',
        'experience.item4.title': 'Automatisation de tâches répétitives', 'experience.item4.desc': 'Utilisation du code pour réduire le temps et les étapes manuelles dans le travail de production.',
        'design.label': 'Visuels', 'design.title': 'Design & Impression.',
        'design.subtitle': 'Cartes, coupons, publicités et packaging — du concept au produit fini.',
        'design.hint': 'Cliquez pour agrandir', 'design.view': 'VOIR',
        'about.label': 'À propos', 'about.title': 'Trois domaines distincts.<br>Un même profil professionnel.',
        'about.desc': "Je me définis d’abord comme ingénieur logiciel et développeur web, avec un parcours complémentaire en design graphique et en production imprimée. Je peux développer des sites, des systèmes et des outils pour une imprimerie comme pour d’autres entreprises. Mon expérience terrain en impression devient un avantage supplémentaire lorsque le projet doit comprendre le workflow réel d’une production.",
        'about.b1': 'Ingénierie logicielle & développement web', 'about.b2': 'Design graphique & identité visuelle',
        'about.b3': 'Production imprimée & prépresse', 'about.b4': 'Automatisation & IA selon le besoin',
        'about.card.software': 'Logiciel', 'about.card.design': 'Design',
        'about.card.print': 'Impression', 'about.card.ai': 'Automatisation & IA',
        'cert.label': 'Certificat de qualification', 'cert.title': 'Certificat de qualification : création de sites web statiques et mobiles', 'cert.desc': '(CFPA) Youssef Zenouchi – Baraki · projet final de formation · expérience utilisateur et interface web.', 'cert.link': 'Voir le projet final',
        'degree.label': 'Formation technique', 'degree.title': 'Technicien Supérieur en communication et industries graphiques — option : étude et réalisation des produits imprimés', 'degree.desc': 'Institut National Spécialisé de Formation Professionnelle des Arts et Industries Graphiques — Hachemi Amer, Boudouaou.',
        'languages.label': 'Langues', 'languages.title': 'Arabe · Anglais · Français', 'languages.desc': 'Arabe : langue maternelle · Anglais : niveau général A2 avec une bonne maîtrise de certains termes techniques · Français : niveau général et vocabulaire du domaine.',
        'mfe.label': 'Mémoire de fin d’études', 'mfe.title': "Mémoire de Fin d'Études — MFE.pdf",
        'mfe.desc': "Mémoire de fin d'études documentant mon stage pratique au sein de la Société d'Impression d'Alger (SIA).",
        'mfe.button': 'Télécharger le mémoire',
        'footer.tagline': 'Software · Design · Print · Automation',
    },
    en: {
        'brand.name': 'Mouaz Brai',
        'nav.skills': 'Skills', 'nav.services': 'Services', 'nav.projects': 'Projects',
        'nav.design': 'Visuals', 'nav.experience': 'Experience', 'nav.credentials': 'Credentials', 'nav.about': 'About', 'nav.contact': 'Contact',
        'hero.available': 'Available for work',
        'hero.role': 'Software Engineer · Graphic Designer · Print Production',
        'hero.firstname': 'Mouaz', 'hero.lastname': 'Brai.',
        'hero.desc': "I build websites, business applications, and custom software for companies, including print businesses. My background in graphic design and print production gives me a practical understanding of real workflows, so I can bring that knowledge into software when a project benefits from it.",
        'chip.software': 'Software', 'chip.design': 'Design',
        'chip.print': 'Print', 'chip.ai': 'AI',
        'hero.cta.skills': 'Explore Skills', 'hero.cta.mfe': 'Credentials & work',
        'hero.stack.title': 'Technical foundation',
        'stats.domains': 'Core areas', 'stats.technologies': 'Technologies & tools',
        'stats.experience': '2 months of practical experience', 'stats.automation': 'Digital solutions',
        'skills.label': 'Skills & Technologies', 'skills.title': 'Three core areas. One complete technical foundation.',
        'skills.subtitle': "Software engineering, graphic design, and print production are distinct disciplines. Automation and AI sit alongside them as supporting tools when the project needs them.",
        'pillar.software.title': 'Software Engineering & Web Development',
        'pillar.software.sub': 'Software Engineering · Web · Business Systems',
        'pillar.design.title': 'Creative Design & Visual Identity',
        'pillar.design.sub': 'Graphic Design & Brand Systems',
        'pillar.print.title': 'Print Production & Prepress',
        'pillar.print.sub': 'Prepress Engineering & Print Operations',
        'pillar.ai.title': 'AI & Automation — supporting layer',
        'pillar.ai.sub': 'Agents IA, workflows & automatisation',
        'skill.django': 'Backend & system development', 'skill.js': 'Front-end interactivity',
        'skill.css': 'Modern UI styling', 'skill.db': 'Relational database management',
        'skill.api': 'Service & data integration', 'skill.git': 'Version control & collaboration', 'skill.react': 'Component-based interactive interfaces', 'skill.algorithms.title': 'Algorithms & Data Structures', 'skill.algorithms': 'Problem solving & efficient data organization', 'skill.linux.title': 'Linux & Server Operations', 'skill.linux': 'Working with Linux environments and servers', 'skill.deploy.title': 'Deployment, Hosting & Servers', 'skill.deploy': 'Putting sites online and working with hosting/server environments', 'skill.security.title': 'Web Security & Protection', 'skill.security': 'Application and data protection fundamentals', 'skill.performance.title': 'Performance & Optimization', 'skill.performance': 'Improving speed and system efficiency',
        'skill.illustrator': 'Vector art & logos', 'skill.photoshop': 'Image editing & ad creatives',
        'skill.indesign': 'Editorial & multi-page layout', 'skill.figma': 'UI & social media design',
        'skill.heidelberg': 'Imposition & prepress workflow', 'skill.kodak': 'Page layout & sheet assembly',
        'skill.ctp': 'CTP plate preparation & output', 'skill.dies': 'Cutting dies & packaging',
        'skill.offset': 'Offset press operation & monitoring', 'skill.diecut': 'Die-cutting & box forming',
        'skill.color': 'Color & density management', 'skill.finishing': 'Lamination, embossing, finishing',
        'skill.agents': 'AI agent design & management', 'skill.prompt': 'Prompt engineering',
        'skill.context': 'Context engineering', 'skill.workflow': 'Print & production automation',
        'skill.scripting': 'Custom Python automation tools', 'skill.ecommerce': 'E-commerce for print shops',
        'services.label': 'Services', 'services.title': 'Solutions I build for businesses.',
        'services.subtitle': 'I build digital solutions for different types of businesses, with a strong understanding of print-shop workflows when the project involves production.',
        'service.1.title': 'Websites & Business Applications', 'service.1.desc': 'Company websites, dashboards, internal tools, and web applications built around the way a business actually works.',
        'service.2.title': 'Digital Solutions for Print Shops', 'service.2.desc': 'Ordering portals, file upload, pricing, order tracking, and workflow tools designed around print production.',
        'service.3.title': 'Custom Software & Automation', 'service.3.desc': 'Tools that reduce repetitive work, process files or data, and simplify business operations in print or other industries.',
        'service.4.title': 'Smart Flyers & Landing Pages', 'service.4.desc': 'High-conversion landing pages and fast visual ad campaigns on demand.',
        'service.5.title': 'Graphic Design & Identity', 'service.5.desc': 'Business cards, coupons, ads, logos, and complete visual identities.',
        'service.6.title': 'AI-Assisted Solutions', 'service.6.desc': 'Automation, assistants, and AI agents added to a workflow when they provide a clear practical benefit.',
        'projects.label': 'Projects', 'projects.title': 'Selected work.',
        'projects.subtitle': 'A selection of web and software projects showing how I approach development and real-world solutions.',
        'projects.viewGithub': 'View GitHub', 'project.open': 'Open Project',
        'project.1.title': 'Company Website', 'project.2.title': 'Portfolio Websites', 'project.3.title': 'Cyber Website', 'project.4.title': 'React Project', 'project.5.title': 'CFPA Youssef Zenouchi – Baraki',
        'project.1.desc': 'Company website — practical web build', 'project.2.desc': 'Web and portfolio experiments', 'project.5.badge': 'Final Qualification Project',
        'project.3.desc': 'Interface for a technical project', 'project.4.desc': 'React development example',
        'project.5.desc': 'Final training project · qualification certificate in Static & Mobile Web Development · User Experience',
        'experience.label': 'Practical Experience', 'experience.title': 'Two months in a real production environment.',
        'experience.subtitle': 'A hands-on role combining graphic design, print production, and small software tools that reduced repetitive work.',
        'experience.badge': '2 months — practical experience', 'experience.role': 'Graphic Designer · Print Production',
        'experience.context': 'Private company in Bab Ezzouar',
        'experience.desc': 'During this period, I designed coupons and business cards and worked within the print production workflow. My role went beyond design: I also turned repetitive tasks into practical software tools.',
        'experience.item1.title': 'Coupons & business cards', 'experience.item1.desc': 'Designing printed materials ready for production and adapted to daily job requirements.',
        'experience.item2.title': 'Automatic numbering tool', 'experience.item2.desc': 'Built a program that automatically numbers coupons instead of doing the numbering manually.',
        'experience.item3.title': 'Smaller archive files', 'experience.item3.desc': 'Added a feature to reduce file size for archiving while keeping an appropriate level of quality.',
        'experience.item4.title': 'Repetitive task automation', 'experience.item4.desc': 'Used programming to reduce manual steps and save time in production-related work.',
        'design.label': 'Visuals', 'design.title': 'Design & Print work.',
        'design.subtitle': 'Business cards, coupons, ads, and packaging — concept to finished product.',
        'design.hint': 'Click image to preview', 'design.view': 'VIEW',
        'about.label': 'About', 'about.title': 'Three distinct disciplines.<br>One professional profile.',
        'about.desc': "I define myself first as a software engineer and web developer, with a practical background in graphic design and print production. I can build websites, systems, and custom software for a print business or for other companies. My print experience becomes an added advantage when software needs to understand the real workflow behind production.",
        'about.b1': 'Software engineering & web development', 'about.b2': 'Graphic design & visual identity',
        'about.b3': 'Print production & prepress', 'about.b4': 'Automation & AI when useful',
        'about.card.software': 'Software', 'about.card.design': 'Design',
        'about.card.print': 'Print', 'about.card.ai': 'Automation & AI',
        'cert.label': 'Professional Qualification Certificate', 'cert.title': 'Qualification Certificate: Static & Mobile Web Development', 'cert.desc': '(CFPA) Youssef Zenouchi – Baraki · final training project · user experience and web interface.', 'cert.link': 'View final project',
        'degree.label': 'Technical qualification', 'degree.title': 'Senior Technician in Communication & Printing Industries — Option: Study & Production of Printed Products', 'degree.desc': 'National Specialized Institute of Vocational Training in Arts & Printing Industries — Hachemi Amer, Boudouaou.',
        'languages.label': 'Languages', 'languages.title': 'Arabic · English · French', 'languages.desc': 'Arabic: native speaker · English: A2 general level with stronger command of selected technical terms · French: general communication and field-specific vocabulary.',
        'mfe.label': 'Graduation thesis', 'mfe.title': "Mémoire de Fin d'Études — MFE.pdf",
        'mfe.desc': "Graduation thesis documenting my applied internship at the Société d'Impression d'Alger (SIA).",
        'mfe.button': 'Download thesis',
        'footer.tagline': 'Software · Design · Print · Automation',
    },
};
/* i18n end */

/* language */
function initLanguage() {
    const buttons = document.querySelectorAll('.lang-btn');
    const html = document.documentElement;

    const ACTIVE = ['bg-white', 'text-navy', 'shadow-sm'];
    const IDLE = ['text-slate-500'];

    function applyLang(lang) {
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = I18N[lang] && I18N[lang][key];
            if (value !== undefined) {
                if (value.includes('<br>')) {
                    el.innerHTML = value;
                } else {
                    el.textContent = value;
                }
            }
        });

        buttons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.classList.remove(...ACTIVE, ...IDLE);
            if (isActive) btn.classList.add(...ACTIVE);
            else btn.classList.add(...IDLE);
        });

        try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    let saved = 'ar';
    try { saved = localStorage.getItem('portfolio-lang') || 'ar'; } catch (e) {}
    if (!I18N[saved]) saved = 'ar';
    applyLang(saved);
}
/* language end */

/* gallery */
function initGallery() {
    const items = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.getElementById('close-modal');

    function open(src) {
        modalImg.src = src;
        modal.classList.add('modal-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function close() {
        modal.classList.remove('modal-visible');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (!modal.classList.contains('modal-visible')) modalImg.src = '';
        }, 300);
    }

    items.forEach(item => {
        item.addEventListener('click', () => open(item.dataset.image));
    });

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-visible')) close();
    });
}
/* gallery end */

/* init */
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initGallery();
});
/* init end */