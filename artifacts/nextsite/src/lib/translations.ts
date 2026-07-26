export type Language = 'en' | 'ar' | 'fr';

export const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      pricing: 'Pricing',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Get Your Website',
    },

    // Hero
    hero: {
      badge: 'Web Design Agency',
      headline1: 'Professional Websites',
      headline2: 'That Grow Your Business',
      subtitle: 'We design modern, fast and responsive websites for local businesses worldwide. From Morocco to France, from the UAE to the UK — we bring your vision online.',
      cta1: 'Get Your Website',
      cta2: 'View Portfolio',
    },

    // About
    about: {
      badge: 'About Us',
      title: 'Building Digital Presence for',
      titleHighlight: 'Local Businesses',
      subtitle: 'NextSite is a premium web design agency specializing in creating modern, fast, and conversion-focused websites for local businesses across North Africa, the Middle East, and Europe.',
      description: 'We combine cutting-edge design with proven digital strategies to help restaurants, clinics, real estate agents, barbershops, and local businesses establish a powerful online presence that attracts customers and drives real growth.',
      stats: {
        projects: '200+',
        projectsLabel: 'Projects Completed',
        clients: '50+',
        clientsLabel: 'Happy Clients',
        years: '5',
        yearsLabel: 'Years Experience',
        satisfaction: '100%',
        satisfactionLabel: 'Client Satisfaction',
      },
    },

    // Services
    services: {
      badge: 'What We Build',
      title: 'Web Design Services',
      titleHighlight: 'Tailored For You',
      subtitle: 'From simple business websites to complex e-commerce platforms, we deliver digital solutions that work.',
      items: [
        { name: 'Business Websites', desc: 'Professional websites that establish your brand and convert visitors into customers.' },
        { name: 'Restaurant Websites', desc: 'Mouth-watering designs with menus, reservations, and ordering integrations.' },
        { name: 'Barbershop Websites', desc: 'Stylish sites with online booking, gallery, and service showcase.' },
        { name: 'Medical Websites', desc: 'Trust-building designs for clinics, doctors, and healthcare providers.' },
        { name: 'Real Estate Websites', desc: 'Property listing sites with search, filters, and contact integrations.' },
        { name: 'Landing Pages', desc: 'High-converting single-page sites built to capture leads and drive sales.' },
        { name: 'Website Redesign', desc: 'Transform your outdated website into a modern, fast, and beautiful digital experience.' },
        { name: 'SEO Optimization', desc: 'Get found on Google with on-page SEO, keyword targeting, and technical optimization.' },
        { name: 'Google Maps Integration', desc: 'Put your business on the map with seamless Google Maps and location features.' },
        { name: 'Contact Forms', desc: 'Smart contact forms that collect leads and route them directly to your inbox.' },
        { name: 'WhatsApp Integration', desc: 'One-click WhatsApp buttons so customers can reach you instantly from your site.' },
        { name: 'Domain & Hosting Setup', desc: 'Complete setup of your domain, hosting, SSL certificate, and email accounts.' },
      ],
    },

    // Why Us
    whyUs: {
      badge: 'Our Advantages',
      title: 'Why Businesses Choose',
      titleHighlight: 'NextSite',
      features: [
        { name: 'Modern Design', desc: 'Sleek, contemporary designs that make your business stand out from the competition.' },
        { name: 'Mobile Friendly', desc: 'Every website we build looks and works flawlessly on any screen size.' },
        { name: 'Fast Loading', desc: 'Optimized for speed — your site loads in under 2 seconds for a better user experience.' },
        { name: 'Affordable Pricing', desc: 'Professional quality at prices that make sense for local businesses of any size.' },
        { name: 'SEO Ready', desc: 'Built with search engine optimization baked in from the very first line of code.' },
        { name: 'Lifetime Support', desc: 'We do not disappear after launch. Ongoing support and updates whenever you need them.' },
      ],
    },

    // Portfolio
    portfolio: {
      badge: 'Our Work',
      title: 'Recent',
      titleHighlight: 'Projects',
      subtitle: 'A selection of websites we have crafted for businesses across different industries.',
      viewProject: 'View Project',
      projects: [
        { name: 'Al Baraka Restaurant', category: 'Restaurant Website', desc: 'Full-featured restaurant site with online menu, reservation system, and location integration.' },
        { name: 'Prestige Realty', category: 'Real Estate Website', desc: 'Property listing platform with advanced search, virtual tours, and agent profiles.' },
        { name: 'Classic Cuts Barbershop', category: 'Barbershop Website', desc: 'Modern booking site with service gallery, team profiles, and online appointments.' },
        { name: 'HealthFirst Clinic', category: 'Medical Website', desc: 'Professional clinic website with doctor profiles, services, and appointment booking.' },
        { name: 'TechFlow SaaS', category: 'Landing Page', desc: 'High-converting SaaS landing page with animated sections and lead capture forms.' },
        { name: 'Artisanat Marocain', category: 'E-Commerce', desc: 'Boutique e-commerce store showcasing handcrafted Moroccan artisan products worldwide.' },
      ],
    },

    // Process
    process: {
      badge: 'How We Work',
      title: 'Our Simple',
      titleHighlight: '5-Step Process',
      subtitle: 'From first contact to final launch, we keep things clear, fast, and stress-free.',
      steps: [
        { num: '01', name: 'Contact', desc: 'Reach out via WhatsApp or our contact form. We discuss your goals, business, and vision in a quick discovery call.' },
        { num: '02', name: 'Planning', desc: 'We define your site structure, content needs, and create a detailed project roadmap with timeline and milestones.' },
        { num: '03', name: 'Design', desc: 'Our designers create stunning mockups tailored to your brand. You review, give feedback, and we refine until perfect.' },
        { num: '04', name: 'Development', desc: 'We build your site with clean code, optimized performance, SEO best practices, and all requested integrations.' },
        { num: '05', name: 'Launch', desc: 'After your final approval, we deploy to your domain, set up SSL, submit to Google, and provide a full handover.' },
      ],
    },

    // Testimonials
    testimonials: {
      badge: 'Client Reviews',
      title: 'What Our',
      titleHighlight: 'Clients Say',
      subtitle: 'Real feedback from real business owners who trusted NextSite with their digital presence.',
      items: [
        {
          name: 'Karim Benali',
          company: 'Al Baraka Restaurant, Casablanca',
          text: 'NextSite transformed our online presence completely. Our restaurant bookings increased by 73% in the first month after the new website launched. The team was professional, fast, and understood exactly what we needed.',
          rating: 5,
        },
        {
          name: 'Sophie Marchetti',
          company: 'Marchetti Immobilier, Lyon',
          text: 'We hired NextSite to redesign our real estate agency website and the results exceeded all expectations. The site is beautiful, loads instantly, and our leads doubled within 6 weeks. Highly recommended.',
          rating: 5,
        },
        {
          name: 'Ahmed Al-Rashidi',
          company: 'Al-Rashidi Medical Center, Riyadh',
          text: 'Professional, affordable, and incredibly talented. NextSite built our clinic website in just 10 days. Patients now find us easily on Google and our appointment booking has tripled. Outstanding work.',
          rating: 5,
        },
      ],
    },

    // Pricing
    pricing: {
      badge: 'Investment',
      title: 'Simple, Transparent',
      titleHighlight: 'Pricing',
      subtitle: 'No hidden fees. No surprises. Just professional websites at fair prices.',
      popular: 'Most Popular',
      cta: 'Get Started',
      plans: [
        {
          name: 'Starter',
          price: '$99',
          desc: 'Perfect for small businesses getting started online.',
          features: [
            'Basic website design',
            'Up to 3 pages',
            'Mobile responsive',
            'Contact form',
            'SSL certificate',
            '1 revision round',
          ],
        },
        {
          name: 'Professional',
          price: '$199',
          desc: 'The complete package for growing local businesses.',
          features: [
            'Premium website design',
            'Up to 8 pages',
            'SEO optimization',
            'Google Maps integration',
            'WhatsApp button',
            'Scroll animations',
            '3 revision rounds',
            '1 month free support',
          ],
        },
        {
          name: 'Premium',
          price: 'Custom Quote',
          desc: 'Enterprise-grade solutions for ambitious businesses.',
          features: [
            'Unlimited pages',
            'E-commerce integration',
            'Custom features',
            'Priority support',
            'Performance optimization',
            'Advanced SEO',
            'Unlimited revisions',
            '3 months free support',
          ],
        },
      ],
    },

    // FAQ
    faq: {
      badge: 'Questions',
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      items: [
        {
          q: 'How long does it take to build a website?',
          a: 'Most websites are completed within 5 to 14 business days, depending on complexity. Simple 3-page sites are delivered in as little as 5 days. Larger or e-commerce projects may take 2 to 4 weeks.',
        },
        {
          q: 'Do you offer ongoing support after launch?',
          a: 'Yes. All our plans include post-launch support. Starter plans include 2 weeks of support, Professional plans include 1 month, and Premium clients receive 3 months of priority support. Extended support packages are also available.',
        },
        {
          q: 'Can I update my website content myself?',
          a: 'Absolutely. We build websites on easy-to-use platforms and provide a handover guide. For clients who prefer not to manage updates themselves, we offer monthly maintenance retainers.',
        },
        {
          q: 'Do you handle SEO for my website?',
          a: 'Yes. Every website we build includes on-page SEO basics: proper title tags, meta descriptions, image optimization, site speed optimization, and Google Search Console submission. Advanced SEO campaigns are available as an add-on.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfer, PayPal, Western Union, and cash payments depending on your location. A 50% deposit is required to start, with the remaining 50% due before final delivery.',
        },
        {
          q: 'Can you build an e-commerce website?',
          a: 'Yes. We build full e-commerce websites with product catalogs, shopping carts, secure payment gateways, and order management systems. Contact us for a custom quote based on your specific requirements.',
        },
      ],
    },

    // Contact
    contact: {
      badge: 'Get In Touch',
      title: 'Ready To',
      titleHighlight: 'Start Your Project?',
      subtitle: 'Contact us today and get a free consultation. We will analyze your needs and provide a tailored proposal within 24 hours.',
      whatsappLabel: 'Chat on WhatsApp',
      emailLabel: 'Send Us an Email',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number',
      formMessage: 'Tell us about your project...',
      formSubmit: 'Send Message',
      formNote: 'We reply within 24 hours',
    },

    // Footer
    footer: {
      description: 'Premium web design agency serving local businesses across North Africa, the Middle East, and Europe.',
      copyright: '2026 NextSite Web Design Agency. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },

    // WhatsApp
    whatsapp: {
      tooltip: 'Chat with us on WhatsApp',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      process: 'طريقة العمل',
      pricing: 'الأسعار',
      testimonials: 'آراء العملاء',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      cta: 'احصل على موقعك',
    },

    hero: {
      badge: 'وكالة تصميم مواقع',
      headline1: 'مواقع احترافية',
      headline2: 'تُنمّي أعمالك',
      subtitle: 'نصمم مواقع حديثة وسريعة ومتجاوبة للشركات المحلية حول العالم. من المغرب إلى فرنسا، من الإمارات إلى المملكة المتحدة — نحول رؤيتك إلى واقع رقمي.',
      cta1: 'احصل على موقعك',
      cta2: 'استعرض أعمالنا',
    },

    about: {
      badge: 'من نحن',
      title: 'نبني حضوراً رقمياً لـ',
      titleHighlight: 'الشركات المحلية',
      subtitle: 'نكست سايت وكالة تصميم ويب متخصصة في إنشاء مواقع حديثة وسريعة وموجهة للتحويل للشركات المحلية في شمال أفريقيا والشرق الأوسط وأوروبا.',
      description: 'نجمع بين التصميم المتطور والاستراتيجيات الرقمية المجربة لمساعدة المطاعم والعيادات ووكالات العقارات ومحلات الحلاقة والشركات المحلية على تأسيس حضور قوي عبر الإنترنت.',
      stats: {
        projects: '+200',
        projectsLabel: 'مشروع منجز',
        clients: '+50',
        clientsLabel: 'عميل سعيد',
        years: '5',
        yearsLabel: 'سنوات خبرة',
        satisfaction: '100%',
        satisfactionLabel: 'رضا العملاء',
      },
    },

    services: {
      badge: 'ما نبنيه',
      title: 'خدمات تصميم الويب',
      titleHighlight: 'المصممة لك',
      subtitle: 'من مواقع الأعمال البسيطة إلى منصات التجارة الإلكترونية المعقدة، نقدم حلولاً رقمية تعمل.',
      items: [
        { name: 'مواقع الشركات', desc: 'مواقع احترافية تؤسس علامتك التجارية وتحول الزوار إلى عملاء.' },
        { name: 'مواقع المطاعم', desc: 'تصاميم جذابة مع قوائم الطعام والحجوزات وتكاملات الطلبات.' },
        { name: 'مواقع صالونات الحلاقة', desc: 'مواقع أنيقة مع حجز عبر الإنترنت ومعرض الأعمال.' },
        { name: 'مواقع العيادات الطبية', desc: 'تصاميم موثوقة للعيادات والأطباء ومقدمي الرعاية الصحية.' },
        { name: 'مواقع العقارات', desc: 'منصات قوائم العقارات مع البحث والفلاتر وتكاملات التواصل.' },
        { name: 'صفحات الهبوط', desc: 'صفحات مفردة عالية التحويل لجمع العملاء المحتملين وزيادة المبيعات.' },
        { name: 'إعادة تصميم المواقع', desc: 'حوّل موقعك القديم إلى تجربة رقمية حديثة وسريعة وجميلة.' },
        { name: 'تحسين محركات البحث', desc: 'احصل على ترتيب في جوجل مع تحسين الصفحات والكلمات المفتاحية.' },
        { name: 'تكامل خرائط جوجل', desc: 'ضع نشاطك التجاري على الخريطة مع ميزات الموقع والخرائط.' },
        { name: 'نماذج التواصل', desc: 'نماذج ذكية تجمع العملاء المحتملين وترسلهم مباشرة إلى صندوق بريدك.' },
        { name: 'تكامل واتساب', desc: 'أزرار واتساب بنقرة واحدة حتى يتواصل معك العملاء فوراً.' },
        { name: 'استضافة ونطاق', desc: 'إعداد كامل للنطاق والاستضافة وشهادة SSL وحسابات البريد الإلكتروني.' },
      ],
    },

    whyUs: {
      badge: 'مزاياهم',
      title: 'لماذا تختار',
      titleHighlight: 'نكست سايت',
      features: [
        { name: 'تصميم عصري', desc: 'تصاميم أنيقة ومعاصرة تجعل نشاطك التجاري يبرز من المنافسة.' },
        { name: 'متوافق مع الجوال', desc: 'كل موقع نبنيه يعمل بشكل مثالي على أي حجم شاشة.' },
        { name: 'سريع التحميل', desc: 'محسّن للسرعة — موقعك يُحمَّل في أقل من ثانيتين.' },
        { name: 'أسعار معقولة', desc: 'جودة احترافية بأسعار منطقية لأي شركة محلية.' },
        { name: 'جاهز لمحركات البحث', desc: 'مبني مع تحسين محركات البحث من أول سطر في الكود.' },
        { name: 'دعم مدى الحياة', desc: 'لا نختفي بعد الإطلاق. دعم مستمر وتحديثات متى احتجتها.' },
      ],
    },

    portfolio: {
      badge: 'أعمالنا',
      title: 'أحدث',
      titleHighlight: 'مشاريعنا',
      subtitle: 'مجموعة مختارة من المواقع التي صممناها لأعمال في صناعات مختلفة.',
      viewProject: 'عرض المشروع',
      projects: [
        { name: 'مطعم البركة', category: 'موقع مطعم', desc: 'موقع مطعم متكامل مع قائمة الطعام وحجز الطاولات وتكامل الموقع.' },
        { name: 'Prestige Realty', category: 'موقع عقارات', desc: 'منصة قوائم عقارية مع بحث متقدم وجولات افتراضية وملفات الوكلاء.' },
        { name: 'Classic Cuts', category: 'موقع صالون حلاقة', desc: 'موقع حجز حديث مع معرض الخدمات وملفات الفريق والمواعيد.' },
        { name: 'HealthFirst Clinic', category: 'موقع طبي', desc: 'موقع عيادة احترافي مع ملفات الأطباء والخدمات وحجز المواعيد.' },
        { name: 'TechFlow SaaS', category: 'صفحة هبوط', desc: 'صفحة هبوط عالية التحويل مع أقسام متحركة ونماذج جمع العملاء.' },
        { name: 'الحرف المغربية', category: 'تجارة إلكترونية', desc: 'متجر إلكتروني متخصص يعرض منتجات الحرف اليدوية المغربية عالمياً.' },
      ],
    },

    process: {
      badge: 'طريقة عملنا',
      title: 'عمليتنا البسيطة',
      titleHighlight: 'في 5 خطوات',
      subtitle: 'من أول تواصل حتى الإطلاق النهائي، نبقي الأمور واضحة وسريعة وخالية من التعقيد.',
      steps: [
        { num: '01', name: 'التواصل', desc: 'تواصل معنا عبر واتساب أو نموذج التواصل. نناقش أهدافك ونشاطك ورؤيتك في مكالمة استكشافية سريعة.' },
        { num: '02', name: 'التخطيط', desc: 'نحدد هيكل موقعك واحتياجات المحتوى ونضع خارطة طريق مفصلة مع جدول زمني.' },
        { num: '03', name: 'التصميم', desc: 'يضع مصممونا نماذج رائعة مصممة خصيصاً لعلامتك التجارية. تراجعها وتعطينا ملاحظاتك حتى تصل للكمال.' },
        { num: '04', name: 'التطوير', desc: 'نبني موقعك بكود نظيف وأداء محسّن وأفضل ممارسات SEO وجميع التكاملات المطلوبة.' },
        { num: '05', name: 'الإطلاق', desc: 'بعد موافقتك النهائية، ننشر الموقع على نطاقك، ونُعدّ SSL، ونقدمه لجوجل ونسلّمك كل شيء.' },
      ],
    },

    testimonials: {
      badge: 'آراء العملاء',
      title: 'ماذا يقول',
      titleHighlight: 'عملاؤنا',
      subtitle: 'ردود فعل حقيقية من أصحاب أعمال حقيقيين وثقوا بنكست سايت في حضورهم الرقمي.',
      items: [
        {
          name: 'كريم بنعلي',
          company: 'مطعم البركة، الدار البيضاء',
          text: 'حوّلت نكست سايت حضورنا الرقمي بالكامل. ارتفعت حجوزات مطعمنا بنسبة 73% في الشهر الأول بعد إطلاق الموقع الجديد. كان الفريق محترفاً وسريعاً وفهم تماماً ما نحتاجه.',
          rating: 5,
        },
        {
          name: 'Sophie Marchetti',
          company: 'Marchetti Immobilier، ليون',
          text: 'وظّفنا نكست سايت لإعادة تصميم موقع وكالتنا العقارية والنتائج تجاوزت كل التوقعات. الموقع جميل ويُحمَّل فوراً وتضاعفت عملاؤنا المحتملون خلال 6 أسابيع.',
          rating: 5,
        },
        {
          name: 'أحمد الراشدي',
          company: 'المركز الطبي الراشدي، الرياض',
          text: 'محترف، بأسعار معقولة، وموهوب بشكل لا يصدق. نكست سايت بنى موقع عيادتنا في 10 أيام فقط. المرضى يجدوننا الآن بسهولة على جوجل وحجوزاتنا تضاعفت ثلاث مرات.',
          rating: 5,
        },
      ],
    },

    pricing: {
      badge: 'الاستثمار',
      title: 'أسعار شفافة',
      titleHighlight: 'وبسيطة',
      subtitle: 'لا رسوم مخفية. لا مفاجآت. فقط مواقع احترافية بأسعار عادلة.',
      popular: 'الأكثر شعبية',
      cta: 'ابدأ الآن',
      plans: [
        {
          name: 'المبتدئ',
          price: '$99',
          desc: 'مثالي للشركات الصغيرة التي تبدأ على الإنترنت.',
          features: [
            'تصميم موقع أساسي',
            'حتى 3 صفحات',
            'متجاوب مع الجوال',
            'نموذج تواصل',
            'شهادة SSL',
            'جولة مراجعة واحدة',
          ],
        },
        {
          name: 'الاحترافي',
          price: '$199',
          desc: 'الحزمة الكاملة للشركات المحلية النامية.',
          features: [
            'تصميم موقع متميز',
            'حتى 8 صفحات',
            'تحسين محركات البحث',
            'تكامل خرائط جوجل',
            'زر واتساب',
            'تأثيرات التمرير',
            '3 جولات مراجعة',
            'شهر دعم مجاني',
          ],
        },
        {
          name: 'المتميز',
          price: 'سعر مخصص',
          desc: 'حلول على مستوى المؤسسات للشركات الطموحة.',
          features: [
            'صفحات غير محدودة',
            'تكامل التجارة الإلكترونية',
            'ميزات مخصصة',
            'دعم ذو أولوية',
            'تحسين الأداء',
            'SEO متقدم',
            'مراجعات غير محدودة',
            '3 أشهر دعم مجاني',
          ],
        },
      ],
    },

    faq: {
      badge: 'أسئلة',
      title: 'الأسئلة',
      titleHighlight: 'الشائعة',
      items: [
        {
          q: 'كم من الوقت يستغرق بناء موقع ويب؟',
          a: 'معظم المواقع تكتمل خلال 5 إلى 14 يوم عمل، حسب التعقيد. المواقع البسيطة من 3 صفحات تُسلَّم في 5 أيام فقط. المشاريع الأكبر أو التجارة الإلكترونية قد تستغرق من أسبوعين إلى 4 أسابيع.',
        },
        {
          q: 'هل تقدمون دعماً مستمراً بعد الإطلاق؟',
          a: 'نعم. جميع خططنا تشمل دعم ما بعد الإطلاق. خطط المبتدئ تشمل أسبوعين، خطط الاحترافي تشمل شهراً، وعملاء المتميز يحصلون على 3 أشهر دعم ذو أولوية.',
        },
        {
          q: 'هل يمكنني تحديث محتوى موقعي بنفسي؟',
          a: 'بالتأكيد. نبني المواقع على منصات سهلة الاستخدام ونوفر دليل تسليم كامل. للعملاء الذين يفضلون عدم إدارة التحديثات بأنفسهم، نقدم خطط صيانة شهرية.',
        },
        {
          q: 'هل تتولون تحسين محركات البحث لموقعي؟',
          a: 'نعم. كل موقع نبنيه يتضمن أساسيات SEO على الصفحة: العناوين الصحيحة والأوصاف التعريفية وتحسين الصور وتقديم الموقع لـ Google Search Console.',
        },
        {
          q: 'ما طرق الدفع المقبولة؟',
          a: 'نقبل التحويل البنكي وPayPal وWestern Union والدفع النقدي حسب موقعك. يُطلب دفع 50% مقدماً لبدء العمل والـ 50% المتبقية قبل التسليم النهائي.',
        },
        {
          q: 'هل يمكنكم بناء موقع تجارة إلكترونية؟',
          a: 'نعم. نبني مواقع تجارة إلكترونية كاملة مع كتالوجات المنتجات وعربات التسوق وبوابات الدفع الآمنة وأنظمة إدارة الطلبات. تواصل معنا للحصول على عرض سعر مخصص.',
        },
      ],
    },

    contact: {
      badge: 'تواصل معنا',
      title: 'مستعد',
      titleHighlight: 'لبدء مشروعك؟',
      subtitle: 'تواصل معنا اليوم واحصل على استشارة مجانية. سنحلل احتياجاتك ونقدم عرضاً مخصصاً خلال 24 ساعة.',
      whatsappLabel: 'تواصل عبر واتساب',
      emailLabel: 'أرسل لنا بريداً إلكترونياً',
      formName: 'اسمك',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الهاتف',
      formMessage: 'أخبرنا عن مشروعك...',
      formSubmit: 'إرسال الرسالة',
      formNote: 'نرد خلال 24 ساعة',
    },

    footer: {
      description: 'وكالة تصميم ويب متميزة تخدم الشركات المحلية في شمال أفريقيا والشرق الأوسط وأوروبا.',
      copyright: '2026 نكست سايت لتصميم المواقع. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
    },

    whatsapp: {
      tooltip: 'تواصل معنا عبر واتساب',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Notre Processus',
      pricing: 'Tarifs',
      testimonials: 'Témoignages',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Obtenez votre site',
    },

    hero: {
      badge: 'Agence Web Design',
      headline1: 'Sites Web Professionnels',
      headline2: 'Qui Font Croître Votre Business',
      subtitle: 'Nous créons des sites web modernes, rapides et responsives pour les entreprises locales du monde entier. Du Maroc à la France, des Émirats au Royaume-Uni — nous concrétisons votre vision en ligne.',
      cta1: 'Obtenez votre site',
      cta2: 'Voir le portfolio',
    },

    about: {
      badge: 'À propos de nous',
      title: 'Nous construisons la présence digitale des',
      titleHighlight: 'Entreprises Locales',
      subtitle: 'NextSite est une agence web design premium spécialisée dans la création de sites web modernes, rapides et axés sur la conversion pour les entreprises locales d\'Afrique du Nord, du Moyen-Orient et d\'Europe.',
      description: 'Nous allions design de pointe et stratégies digitales éprouvées pour aider les restaurants, cliniques, agences immobilières, salons de coiffure et commerces locaux à établir une présence en ligne puissante.',
      stats: {
        projects: '200+',
        projectsLabel: 'Projets réalisés',
        clients: '50+',
        clientsLabel: 'Clients satisfaits',
        years: '5',
        yearsLabel: 'Années d\'expérience',
        satisfaction: '100%',
        satisfactionLabel: 'Satisfaction client',
      },
    },

    services: {
      badge: 'Ce que nous créons',
      title: 'Services Web Design',
      titleHighlight: 'Sur Mesure',
      subtitle: 'Des sites vitrines simples aux plateformes e-commerce complexes, nous livrons des solutions digitales qui fonctionnent.',
      items: [
        { name: 'Sites Vitrine', desc: 'Sites professionnels qui établissent votre marque et convertissent les visiteurs en clients.' },
        { name: 'Sites Restaurant', desc: 'Designs appétissants avec menus, réservations et intégrations de commandes.' },
        { name: 'Sites Salon Coiffure', desc: 'Sites élégants avec réservation en ligne, galerie et présentation des services.' },
        { name: 'Sites Médicaux', desc: 'Designs qui inspirent confiance pour les cliniques, médecins et professionnels de santé.' },
        { name: 'Sites Immobiliers', desc: 'Plateformes de listings avec recherche, filtres et intégrations de contact.' },
        { name: 'Landing Pages', desc: 'Pages à haute conversion pour capturer des leads et stimuler les ventes.' },
        { name: 'Refonte de Site', desc: 'Transformez votre site obsolète en une expérience digitale moderne et performante.' },
        { name: 'Optimisation SEO', desc: 'Soyez trouvé sur Google avec le SEO on-page, le ciblage de mots-clés et l\'optimisation technique.' },
        { name: 'Intégration Google Maps', desc: 'Mettez votre entreprise sur la carte avec des fonctionnalités de localisation Google Maps.' },
        { name: 'Formulaires de Contact', desc: 'Formulaires intelligents qui collectent des leads et les envoient directement dans votre boîte mail.' },
        { name: 'Intégration WhatsApp', desc: 'Boutons WhatsApp en un clic pour que vos clients vous contactent instantanément.' },
        { name: 'Domaine & Hébergement', desc: 'Configuration complète de votre domaine, hébergement, SSL et comptes email.' },
      ],
    },

    whyUs: {
      badge: 'Nos avantages',
      title: 'Pourquoi choisir',
      titleHighlight: 'NextSite',
      features: [
        { name: 'Design Moderne', desc: 'Des designs élégants et contemporains qui font ressortir votre entreprise de la concurrence.' },
        { name: 'Compatible Mobile', desc: 'Chaque site que nous créons fonctionne parfaitement sur toutes les tailles d\'écran.' },
        { name: 'Chargement Rapide', desc: 'Optimisé pour la vitesse — votre site se charge en moins de 2 secondes.' },
        { name: 'Prix Abordables', desc: 'Qualité professionnelle à des prix raisonnables pour les entreprises locales de toute taille.' },
        { name: 'SEO Intégré', desc: 'Construit avec l\'optimisation pour les moteurs de recherche dès la première ligne de code.' },
        { name: 'Support à Vie', desc: 'Nous ne disparaissons pas après le lancement. Support continu et mises à jour quand vous en avez besoin.' },
      ],
    },

    portfolio: {
      badge: 'Nos réalisations',
      title: 'Projets',
      titleHighlight: 'Récents',
      subtitle: 'Une sélection de sites web que nous avons conçus pour des entreprises dans différents secteurs.',
      viewProject: 'Voir le projet',
      projects: [
        { name: 'Al Baraka Restaurant', category: 'Site Restaurant', desc: 'Site restaurant complet avec menu en ligne, système de réservation et intégration de localisation.' },
        { name: 'Prestige Realty', category: 'Site Immobilier', desc: 'Plateforme de listings immobiliers avec recherche avancée, visites virtuelles et profils d\'agents.' },
        { name: 'Classic Cuts Barbershop', category: 'Site Salon', desc: 'Site de réservation moderne avec galerie de services, profils d\'équipe et rendez-vous en ligne.' },
        { name: 'HealthFirst Clinic', category: 'Site Médical', desc: 'Site clinique professionnel avec profils de médecins, services et prise de rendez-vous.' },
        { name: 'TechFlow SaaS', category: 'Landing Page', desc: 'Landing page SaaS haute conversion avec sections animées et formulaires de capture de leads.' },
        { name: 'Artisanat Marocain', category: 'E-Commerce', desc: 'Boutique e-commerce présentant des produits artisanaux marocains faits main dans le monde entier.' },
      ],
    },

    process: {
      badge: 'Notre méthode',
      title: 'Notre Processus',
      titleHighlight: 'en 5 Étapes',
      subtitle: 'Du premier contact au lancement final, nous gardons les choses claires, rapides et sans stress.',
      steps: [
        { num: '01', name: 'Contact', desc: 'Contactez-nous via WhatsApp ou notre formulaire. Nous discutons de vos objectifs, de votre activité et de votre vision lors d\'un appel découverte rapide.' },
        { num: '02', name: 'Planification', desc: 'Nous définissons la structure de votre site, les besoins en contenu et créons une feuille de route détaillée avec calendrier et jalons.' },
        { num: '03', name: 'Design', desc: 'Nos designers créent des maquettes époustouflantes adaptées à votre marque. Vous vérifiez, donnez vos retours et nous affinons jusqu\'à la perfection.' },
        { num: '04', name: 'Développement', desc: 'Nous construisons votre site avec du code propre, des performances optimisées, les meilleures pratiques SEO et toutes les intégrations demandées.' },
        { num: '05', name: 'Lancement', desc: 'Après votre approbation finale, nous déployons sur votre domaine, configurons SSL, soumettons à Google et procédons à une remise complète.' },
      ],
    },

    testimonials: {
      badge: 'Avis clients',
      title: 'Ce que disent',
      titleHighlight: 'nos clients',
      subtitle: 'Des retours authentiques de vrais chefs d\'entreprise qui ont fait confiance à NextSite pour leur présence digitale.',
      items: [
        {
          name: 'Karim Benali',
          company: 'Al Baraka Restaurant, Casablanca',
          text: 'NextSite a complètement transformé notre présence en ligne. Les réservations de notre restaurant ont augmenté de 73% le premier mois après le lancement du nouveau site. L\'équipe était professionnelle, rapide et a parfaitement compris nos besoins.',
          rating: 5,
        },
        {
          name: 'Sophie Marchetti',
          company: 'Marchetti Immobilier, Lyon',
          text: 'Nous avons fait appel à NextSite pour la refonte du site de notre agence immobilière et les résultats ont dépassé toutes nos attentes. Le site est magnifique, se charge instantanément et nos leads ont doublé en 6 semaines.',
          rating: 5,
        },
        {
          name: 'Ahmed Al-Rashidi',
          company: 'Al-Rashidi Medical Center, Riyad',
          text: 'Professionnel, abordable et incroyablement talentueux. NextSite a construit le site de notre clinique en seulement 10 jours. Les patients nous trouvent facilement sur Google et notre prise de rendez-vous a triplé.',
          rating: 5,
        },
      ],
    },

    pricing: {
      badge: 'Investissement',
      title: 'Tarifs Simples et',
      titleHighlight: 'Transparents',
      subtitle: 'Pas de frais cachés. Pas de surprises. Juste des sites professionnels à des prix justes.',
      popular: 'Plus populaire',
      cta: 'Commencer',
      plans: [
        {
          name: 'Starter',
          price: '99$',
          desc: 'Idéal pour les petites entreprises qui débutent en ligne.',
          features: [
            'Design site basique',
            'Jusqu\'à 3 pages',
            'Responsive mobile',
            'Formulaire de contact',
            'Certificat SSL',
            '1 tour de révisions',
          ],
        },
        {
          name: 'Professionnel',
          price: '199$',
          desc: 'Le package complet pour les entreprises locales en croissance.',
          features: [
            'Design site premium',
            'Jusqu\'à 8 pages',
            'Optimisation SEO',
            'Intégration Google Maps',
            'Bouton WhatsApp',
            'Animations au scroll',
            '3 tours de révisions',
            '1 mois support gratuit',
          ],
        },
        {
          name: 'Premium',
          price: 'Devis personnalisé',
          desc: 'Solutions enterprise pour les entreprises ambitieuses.',
          features: [
            'Pages illimitées',
            'Intégration e-commerce',
            'Fonctionnalités sur mesure',
            'Support prioritaire',
            'Optimisation performance',
            'SEO avancé',
            'Révisions illimitées',
            '3 mois support gratuit',
          ],
        },
      ],
    },

    faq: {
      badge: 'Questions',
      title: 'Questions',
      titleHighlight: 'Fréquentes',
      items: [
        {
          q: 'Combien de temps faut-il pour créer un site web ?',
          a: 'La plupart des sites sont terminés en 5 à 14 jours ouvrables, selon la complexité. Les sites simples de 3 pages sont livrés en seulement 5 jours. Les projets plus importants ou e-commerce peuvent prendre 2 à 4 semaines.',
        },
        {
          q: 'Proposez-vous un support après le lancement ?',
          a: 'Oui. Tous nos forfaits incluent un support post-lancement. Starter inclut 2 semaines, Professionnel inclut 1 mois, et les clients Premium bénéficient de 3 mois de support prioritaire.',
        },
        {
          q: 'Puis-je modifier le contenu de mon site moi-même ?',
          a: 'Absolument. Nous construisons des sites sur des plateformes faciles à utiliser et fournissons un guide de prise en main. Pour les clients qui préfèrent ne pas gérer les mises à jour, nous proposons des forfaits de maintenance mensuelle.',
        },
        {
          q: 'Gérez-vous le SEO de mon site ?',
          a: 'Oui. Chaque site que nous construisons inclut les bases du SEO on-page : balises de titre correctes, méta-descriptions, optimisation des images, optimisation de la vitesse et soumission à Google Search Console.',
        },
        {
          q: 'Quels modes de paiement acceptez-vous ?',
          a: 'Nous acceptons le virement bancaire, PayPal, Western Union et les paiements en espèces selon votre emplacement. Un acompte de 50% est requis pour démarrer, les 50% restants étant dus avant la livraison finale.',
        },
        {
          q: 'Pouvez-vous créer un site e-commerce ?',
          a: 'Oui. Nous créons des sites e-commerce complets avec catalogues produits, paniers d\'achat, passerelles de paiement sécurisées et systèmes de gestion des commandes. Contactez-nous pour un devis personnalisé.',
        },
      ],
    },

    contact: {
      badge: 'Contactez-nous',
      title: 'Prêt à',
      titleHighlight: 'Lancer Votre Projet ?',
      subtitle: 'Contactez-nous dès aujourd\'hui et obtenez une consultation gratuite. Nous analyserons vos besoins et vous fournirons une proposition sur mesure dans les 24 heures.',
      whatsappLabel: 'Chattez sur WhatsApp',
      emailLabel: 'Envoyez-nous un email',
      formName: 'Votre nom',
      formEmail: 'Adresse email',
      formPhone: 'Numéro de téléphone',
      formMessage: 'Parlez-nous de votre projet...',
      formSubmit: 'Envoyer le message',
      formNote: 'Nous répondons dans les 24 heures',
    },

    footer: {
      description: 'Agence web design premium au service des entreprises locales d\'Afrique du Nord, du Moyen-Orient et d\'Europe.',
      copyright: '2026 NextSite Web Design Agency. Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
    },

    whatsapp: {
      tooltip: 'Chattez avec nous sur WhatsApp',
    },
  },
};
