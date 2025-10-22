// ==================================================================
//      ملف البيانات: يحتوي على بيانات جميع البطاقات في التطبيق
// ==================================================================

const cardData = [
{
    id: 'comprehensive_services_card',
    title: 'الحاسب والتقنية',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500',
    ratingText: '4.9 (70+ تقييم )',
    deliveryText: 'التزام بالمواعيد النهائية',
    priceText: ' اسعار مميزة ',
    views: '5.2K',
    likes: 780,
    whatsappLink: 'https://wa.me/966597389791?text=أريد طلب خدمة أكاديمية في مجال الحاسب',
    tags: ['اعمال فصلية', 'مشاريع برمجية', 'مشاريع تخرج', 'تحليل بيانات', 'لابات عملية',  'بحوث علمية'],
    services: {
        title: "نغطي كل ما تحتاجه في مسيرتك الجامعية... حرفيًا!",
        items: [
            // --- خدمات المقررات الدراسية ---
            { 
                id: 'prog1_help', 
                name: "لابات وتكاليف برمجة الحاسب ١ (Programming I )", 
                details: [
                    { icon: 'fab fa-java', title: 'حلول لابات وتمارين', text: 'حلول كاملة لواجبات ولابات Java أو C++، مع التركيز على المفاهيم الأساسية وكود نظيف ومشروح.' }
                ],
                baseLikes: 210, baseRatingSum: 105, baseVotes: 22 
            },
            { 
                id: 'data_struct_help', 
                name: "مشاريع هياكل البيانات (Data Structures)", 
                details: [
                    { icon: 'fas fa-cubes', title: 'تطبيق عملي للمفاهيم', text: 'تنفيذ مشاريع تطبيقية على القوائم، الأشجار، الرسوم البيانية، وجداول الهاش بكفاءة عالية.' }
                ],
                baseLikes: 280, baseRatingSum: 140, baseVotes: 29 
            },
            { 
                id: 'com_org_help', 
                name: "لابات تنظيم الحاسب (Computer Organisation)", 
                details: [
                    { icon: 'fas fa-server', title: 'لابات لغة التجميع (Assembly)', text: 'حل لابات ومشاريع لغة التجميع (MIPS/x86) المتعلقة بالذاكرة والمعالج مع شرح مفصل.' }
                ],
                baseLikes: 160, baseRatingSum: 80, baseVotes: 17 
            },
            { 
                id: 'db_sys_help', 
                name: "مشاريع نظم قواعد البيانات (Databases Systems)", 
                details: [
                    { icon: 'fas fa-database', title: 'مشاريع SQL متقدمة', text: 'بناء مشاريع قواعد بيانات معقدة مع إجراءات مخزنة (Stored Procedures) ومشغلات (Triggers).' }
                ],
                baseLikes: 195, baseRatingSum: 95, baseVotes: 20 
            },
            { 
                id: 'os_help', 
                name: "مشاريع نظم التشغيل (Operating Systems)", 
                details: [
                    { icon: 'fab fa-linux', title: 'محاكاة مفاهيم النظام', text: 'حل مشاريع برمجية تحاكي جدولة العمليات (Scheduling) وإدارة الذاكرة في أنظمة التشغيل.' }
                ],
                baseLikes: 175, baseRatingSum: 88, baseVotes: 18 
            },
            { 
                id: 'ml_fun_help', 
                name: "مشاريع أساسيات تعلم الآلة (Machine Learning)", 
                details: [
                    { icon: 'fas fa-robot', title: 'بناء نماذج تعلم الآلة', text: 'تنفيذ مشاريع التصنيف (Classification) والانحدار (Regression) باستخدام Python و Scikit-learn.' }
                ],
                baseLikes: 310, baseRatingSum: 155, baseVotes: 32 
            },
            { 
                id: 'swe_help', 
                name: "مشاريع هندسة البرمجيات (Software Engineering)", 
                details: [
                    { icon: 'fas fa-file-signature', title: 'وثائق ومخططات UML', text: 'إعداد وثيقة متطلبات النظام (SRS) ورسم مخططات UML (Use Case, Class Diagram) للمشاريع.' }
                ],
                baseLikes: 230, baseRatingSum: 115, baseVotes: 24 
            },
            { 
                id: 'networks_help', 
                name: "لابات شبكات الحاسب (Computer Networks)", 
                details: [
                    { icon: 'fas fa-network-wired', title: 'برمجة المقابس (Sockets)', text: 'حل واجبات ومشاريع برمجة الشبكات وتطبيقات العميل والخادم (Client-Server).' }
                ],
                baseLikes: 180, baseRatingSum: 90, baseVotes: 19 
            },
            { 
                id: 'web_dev_help', 
                name: "مشاريع تطوير الويب (Web Development)", 
                details: [
                    { icon: 'fab fa-react', title: 'مشاريع ويب متكاملة (Full-Stack)', text: 'بناء تطبيقات ويب باستخدام HTML/CSS/JS والربط مع قواعد البيانات (Backend).' }
                ],
                baseLikes: 250, baseRatingSum: 125, baseVotes: 26 
            },
            { 
                id: 'algo_design_help', 
                name: "تكاليف تصميم وتحليل الخوارزميات (Algorithms)", 
                details: [
                    { icon: 'fas fa-brain', title: 'حل مسائل الخوارزميات', text: 'حل مسائل تحليل كفاءة الخوارزميات (Big O) وتطبيق خوارزميات البحث والترتيب المتقدمة.' }
                ],
                baseLikes: 200, baseRatingSum: 100, baseVotes: 21 
            },
            { 
                id: 'discrete_help', 
                name: "تكاليف التراكيب المتقطعة (Discrete Structures)", 
                details: [
                    { icon: 'fas fa-project-diagram', title: 'حل مسائل المنطق والمجموعات', text: 'مساعدة في حل مسائل نظرية المجموعات، المنطق الرياضي، العلاقات، والرسوم البيانية (Graphs).' }
                ],
                baseLikes: 140, baseRatingSum: 70, baseVotes: 15 
            },
            { 
                id: 'logic_design_help', 
                name: "لابات المنطق الرقمي (Digital Logic)", 
                details: [
                    { icon: 'fas fa-microchip', title: 'تصميم الدوائر المنطقية', text: 'حل واجبات تصميم الدوائر باستخدام البوابات المنطقية وبرنامج المحاكاة Logisim.' }
                ],
                baseLikes: 150, baseRatingSum: 75, baseVotes: 16 
            },
            // --- خدمات المشاريع الكبرى والتقارير ---
            { 
                id: 'grad_proj_help', 
                name: "خدمات مشاريع التخرج (Graduation Projects)", 
                details: [
                    { icon: 'fas fa-file-alt', title: 'إعداد خطة البحث (Proposal)', text: 'المساعدة في اختيار الفكرة وإعداد وثيقة مقترح المشروع بشكل كامل ومقنع.' },
                    { icon: 'fas fa-cogs', title: 'تنفيذ وتسليم المشروع', text: 'برمجة النظام، كتابة التقرير النهائي، وتجهيز عرض المناقشة بشكل احترافي.' }
                ],
                baseLikes: 450, baseRatingSum: 225, baseVotes: 45 
            },
            { 
                id: 'training_reports_help', 
                name: "إعداد تقارير التدريب (الصيفي والتعاوني)", 
                details: [
                    { icon: 'fas fa-briefcase', title: 'هيكلة احترافية', text: 'إعداد تقارير تدريب متكاملة تتبع المعايير الأكاديمية، مع التركيز على إبراز المهارات المكتسبة.' },
                    { icon: 'fas fa-check-double', title: 'ضمان الأصالة والجودة', text: 'نضمن إعداد تقرير فريد يعكس تجربتك الحقيقية، مع فحص دقيق لنسبة الاقتباس.' }
                ],
                baseLikes: 290, baseRatingSum: 145, baseVotes: 30 
            },
            // --- خدمات التحليل والبيانات ---
            { 
                id: 'spss_assignments', 
                name: "التحليل الإحصائي باستخدام SPSS", 
                details: [
                    { icon: 'fas fa-poll', title: 'تحليل وتفسير النتائج', text: 'إجراء التحليلات الإحصائية، تفسير المخرجات، وكتابة فصل النتائج وفق معايير APA.' }
                ],
                baseLikes: 165, baseRatingSum: 85, baseVotes: 17 
            },
            { 
                id: 'excel_projects', 
                name: "مشاريع وتحليلات Excel المتقدمة", 
                details: [
                    { icon: 'fas fa-file-excel', title: 'لوحات معلومات تفاعلية (Dashboards)', text: 'تصميم Dashboards احترافية باستخدام الجداول المحورية والدوال المتقدمة لعرض البيانات.' }
                ],
                baseLikes: 215, baseRatingSum: 110, baseVotes: 22 
            },
            // --- خدمات عامة ومساندة ---
            { 
                id: 'cv_writing', 
                name: "كتابة وتصميم السيرة الذاتية (CV)", 
                details: [
                    { icon: 'fas fa-user-tie', title: 'تصاميم عصرية (ATS-Friendly)', text: 'تصميم CV احترافي يجتاز أنظمة تتبع المتقدمين (ATS) ويجذب انتباه مسؤولي التوظيف.' }
                ],
                baseLikes: 295, baseRatingSum: 160, baseVotes: 32 
            },
            { 
                id: 'powerpoint_word', 
                name: "عروض PowerPoint وتنسيق Word", 
                details: [
                    { icon: 'fas fa-file-powerpoint', title: 'تصميم احترافي وجذاب', text: 'تصميم عروض تقديمية جذابة وتنسيق احترافي للأبحاث والتقارير (فهرس، مراجع).' }
                ],
                baseLikes: 255, baseRatingSum: 130, baseVotes: 28 
          
},
        // --- أكمل إضافة هذه الخدمات إلى مصفوفة "items" لديك ---

            { 
                id: 'calculus1_help', 
                name: "تكاليف حساب التفاضل والتكامل ١ (Calculus I)", 
                details: [
                    { icon: 'fas fa-calculator', title: 'حل التمارين والمسائل', text: 'شرح وحل مسائل النهايات، الاشتقاق، والتكامل لضمان فهمك الكامل.' }
                ],
                baseLikes: 130, baseRatingSum: 65, baseVotes: 14 
            },
            { 
                id: 'physics1_help', 
                name: "لابات وتكاليف الفيزياء العامة ١ (General Physics I)", 
                details: [
                    { icon: 'fas fa-atom', title: 'حل المسائل والتقارير المعملية', text: 'مساعدة في حل مسائل الميكانيكا الكلاسيكية وكتابة تقارير التجارب المعملية.' }
                ],
                baseLikes: 110, baseRatingSum: 55, baseVotes: 12 
            },
            { 
                id: 'computer_info_help', 
                name: "مشاريع الحاسب والمعلومات", 
                details: [
                    { icon: 'fas fa-desktop', title: 'مشاريع Office و Access', text: 'حل واجبات Word, Excel, PowerPoint ومشاريع قواعد بيانات Access البسيطة.' }
                ],
                baseLikes: 185, baseRatingSum: 90, baseVotes: 18 
            },
            { 
                id: 'eng_computer_help', 
                name: "تكاليف اللغة الإنجليزية للحاسب (English for Computer)", 
                details: [
                    { icon: 'fas fa-spell-check', title: 'واجبات وتقارير تقنية', text: 'المساعدة في كتابة المقالات والتقارير التقنية وصياغة المصطلحات بشكل صحيح.' }
                ],
                baseLikes: 125, baseRatingSum: 60, baseVotes: 13 
            },
            { 
                id: 'eng_lang_help', 
                name: "تكاليف اللغة الإنجليزية العامة", 
                details: [
                    { icon: 'fas fa-language', title: 'كتابة وتدقيق', text: 'المساعدة في كتابة المقالات وتصحيح الأخطاء النحوية والإملائية.' }
                ],
                baseLikes: 150, baseRatingSum: 75, baseVotes: 16 
            },
            { 
                id: 'calculus2_help', 
                name: "تكاليف حساب التفاضل والتكامل ٢ (Calculus II)", 
                details: [
                    { icon: 'fas fa-infinity', title: 'حل مسائل التكامل المتقدم', text: 'مساعدة في حل مسائل التكامل المتقدم، المتسلسلات، والمتجهات.' }
                ],
                baseLikes: 135, baseRatingSum: 68, baseVotes: 14 
            },
            { 
                id: 'uni_skills_help', 
                name: "تكاليف مهارات الحياة الجامعية", 
                details: [
                    { icon: 'fas fa-lightbulb', title: 'أنشطة وتكاليف', text: 'المساعدة في إنجاز الأنشطة والتكاليف المتعلقة بمهارات البحث والتواصل.' }
                ],
                baseLikes: 100, baseRatingSum: 50, baseVotes: 10 
            },
            { 
                id: 'ds_fun1_help', 
                name: "مشاريع أساسيات علوم البيانات ١ (Data Science Fundamentals I)", 
                details: [
                    { icon: 'fab fa-python', title: 'تحليل البيانات بـ Python', text: 'حل واجبات ومشاريع تحليل البيانات باستخدام مكتبات Pandas و NumPy.' }
                ],
                baseLikes: 240, baseRatingSum: 120, baseVotes: 25 
            },
            { 
                id: 'prob_stats_help', 
                name: "تكاليف الاحتمالات والإحصاء (Probability & Statistics)", 
                details: [
                    { icon: 'fas fa-chart-pie', title: 'حل مسائل وتمارين', text: 'حل مسائل التوزيعات الاحتمالية، اختبار الفرضيات، وفترات الثقة.' }
                ],
                baseLikes: 170, baseRatingSum: 85, baseVotes: 18 
            },
            { 
                id: 'arabic_skills_help', 
                name: "تكاليف مهارات اللغة العربية", 
                details: [
                    { icon: 'fas fa-pen-alt', title: 'واجبات وتدريبات', text: 'المساعدة في حل التدريبات النحوية والإملائية وكتابة النصوص العربية.' }
                ],
                baseLikes: 90, baseRatingSum: 45, baseVotes: 9 
            },
            { 
                id: 'islamic_culture_help', 
                name: "تكاليف الثقافة الإسلامية", 
                details: [
                    { icon: 'fas fa-mosque', title: 'أبحاث وتكاليف', text: 'المساعدة في إعداد الأبحاث والواجبات المتعلقة بالموضوع.' }
                ],
                baseLikes: 85, baseRatingSum: 42, baseVotes: 8 
            },
            { 
                id: 'ds_fun2_help', 
                name: "مشاريع أساسيات علوم البيانات ٢ (Data Science Fundamentals II)", 
                details: [
                    { icon: 'fas fa-chart-line', title: 'تصور البيانات (Visualization)', text: 'حل واجبات ومشاريع تصور البيانات باستخدام Matplotlib و Seaborn.' }
                ],
                baseLikes: 260, baseRatingSum: 130, baseVotes: 27 
            },
            { 
                id: 'linear_algebra_help', 
                name: "تكاليف المعادلات التفاضلية والجبر الخطي (Diff. Eq & Lin. Algebra)", 
                details: [
                    { icon: 'fas fa-equals', title: 'حل مسائل المصفوفات', text: 'حل مسائل وتمارين الجبر الخطي، المصفوفات، والمعادلات التفاضلية.' }
                ],
                baseLikes: 145, baseRatingSum: 72, baseVotes: 15 
            },
            { 
                id: 'work_ethics_help', 
                name: "تكاليف أخلاقيات وقيم العمل", 
                details: [
                    { icon: 'fas fa-hands-helping', title: 'دراسات حالة وتقارير', text: 'المساعدة في تحليل دراسات الحالة وكتابة التقارير حول أخلاقيات المهنة.' }
                ],
                baseLikes: 115, baseRatingSum: 58, baseVotes: 12 
            },
            { 
                id: 'data_gov_help', 
                name: "تكاليف حوكمة البيانات (Data Governance)", 
                details: [
                    { icon: 'fas fa-gavel', title: 'أبحاث وتقارير', text: 'كتابة أبحاث وتقارير حول سياسات جودة البيانات وأمنها.' }
                ],
                baseLikes: 190, baseRatingSum: 95, baseVotes: 20 
            },
            { 
                id: 'data_mining_help', 
                name: "مشاريع أساسيات تنقيب البيانات (Data Mining)", 
                details: [
                    { icon: 'fas fa-search-dollar', title: 'مشاريع تنقيب البيانات', text: 'تطبيق خوارزميات التجميع والتصنيف على مجموعات بيانات حقيقية.' }
                ],
                baseLikes: 270, baseRatingSum: 135, baseVotes: 28 
            },
            { 
                id: 'data_viz_help', 
                name: "مشاريع تصور البيانات (Data Visualization)", 
                details: [
                    { icon: 'fas fa-chart-bar', title: 'لوحات معلومات تفاعلية', text: 'تصميم وبناء لوحات معلومات (Dashboards) تفاعلية باستخدام Tableau أو Python.' }
                ],
                baseLikes: 285, baseRatingSum: 142, baseVotes: 29 
            },
            { 
                id: 'data_privacy_help', 
                name: "تكاليف خصوصية وأمن البيانات (Data Privacy & Security)", 
                details: [
                    { icon: 'fas fa-user-secret', title: 'أبحاث ودراسات حالة', text: 'كتابة أبحاث حول تقنيات إخفاء الهوية وتحليل حالات اختراق البيانات.' }
                ],
                baseLikes: 205, baseRatingSum: 102, baseVotes: 21 
            },
            { 
                id: 'ds_seminars_help', 
                name: "تكاليف ندوات علوم البيانات (Data Science Seminars)", 
                details: [
                    { icon: 'fas fa-comments', title: 'إعداد الأوراق البحثية والعروض', text: 'المساعدة في إعداد وتقديم أوراق بحثية (Seminar Papers) حول مواضيع متقدمة.' }
                ],
                baseLikes: 195, baseRatingSum: 98, baseVotes: 20 
            },
            { 
                id: 'entrepreneurship_help', 
                name: "مشاريع ريادة الأعمال (Entrepreneurship)", 
                details: [
                    { icon: 'fas fa-rocket', title: 'خطط عمل ودراسات جدوى', text: 'المساعدة في إعداد خطط عمل لمشاريع ناشئة ودراسات الجدوى.' }
                ],
                baseLikes: 225, baseRatingSum: 112, baseVotes: 23 
            },
            { 
                id: 'elective_ds_help', 
                name: "مشاريع المواد الاختيارية       (علوم بيانات)", 
                details: [
                    { icon: 'fas fa-star', title: 'واجبات ومشاريع', text: 'نغطي مجموعة واسعة من المواضيع الاختيارية في علوم البيانات والذكاء الاصطناعي.' }
                ],
                baseLikes: 180, baseRatingSum: 90, baseVotes: 18 
            },
            { 
                id: 'elective_prog_help', 
                name: "مشاريع المواد الاختيارية (برمجة متقدمة)", 
                details: [
                    { icon: 'fas fa-star', title: 'واجبات ومشاريع', text: 'نغطي مجموعة واسعة من المواضيع الاختيارية في البرمجة المتقدمة وأمن المعلومات.' }
                ],
                baseLikes: 175, baseRatingSum: 88, baseVotes: 18 
            },
            { 
                id: 'elective_app_dev_help', 
                name: "مشاريع المواد الاختيارية (تطوير تطبيقات)", 
                details: [
                    { icon: 'fas fa-star', title: 'واجبات ومشاريع', text: 'نغطي مجموعة واسعة من المواضيع الاختيارية في تطوير تطبيقات الجوال والويب.' }
                ],
                baseLikes: 185, baseRatingSum: 92, baseVotes: 19 
            },
            { 
                id: 'free_choice_help', 
                name: "تكاليف المواد الحرة (Free Course)", 
                details: [
                    { icon: 'fas fa-graduation-cap', title: 'أي موضوع، أي تخصص', text: 'نقدم المساعدة في الواجبات والأبحاث لمختلف المواد الحرة.' }
                ],
                baseLikes: 105, baseRatingSum: 52, baseVotes: 11 
            },
            { 
                id: 'linux_assignments', 
                name: "تكاليف ولابات Linux/Unix", 
                details: [
                    { icon: 'fas fa-terminal', title: 'سكربتات Shell', text: 'حل واجبات أوامر Linux وكتابة سكربتات Shell لأتمتة المهام.' }
                ],
                baseLikes: 130, baseRatingSum: 70, baseVotes: 15 
            },
            { 
                id: 'access_projects', 
                name: "مشاريع قواعد بيانات Access", 
                details: [
                    { icon: 'fas fa-table', title: 'نماذج وتقارير احترافية', text: 'بناء قواعد بيانات متكاملة في Access مع نماذج سهلة الاستخدام وتقارير جاهزة.' }
                ],
                baseLikes: 145, baseRatingSum: 75, baseVotes: 16 
            },
            { 
                id: 'seminar_research', 
                name: "بحوث السمنار والأوراق العلمية", 
                details: [
                    { icon: 'fas fa-book-reader', title: 'مراجعة أدبيات شاملة', text: 'إجراء مراجعة للأدبيات (Literature Review) وبناء الإطار النظري للبحث.' }
                ],
                baseLikes: 320, baseRatingSum: 180, baseVotes: 35 
            },
            { 
                id: 'mind_maps', 
                name: "تصميم الخرائط الذهنية", 
                details: [
                    { icon: 'fas fa-brain', title: 'تلخيص مرئي للمعلومات', text: 'تحويل المواد المعقدة إلى خرائط ذهنية سهلة الحفظ والمراجعة.' }
                ],
                baseLikes: 175, baseRatingSum: 90, baseVotes: 18 
            },
            { 
                id: 'lecture_schedules', 
                name: "تصميم جداول المحاضرات", 
                details: [
                    { icon: 'fas fa-calendar-alt', title: 'تنظيم وتصميم أنيق', text: 'إعادة تصميم جدولك الدراسي بشكل منظم وأنيق لسهولة المتابعة.' }
                ],
                baseLikes: 120, baseRatingSum: 65, baseVotes: 14 
            },
            { 
                id: 'questionnaires_surveys', 
                name: "تصميم وتوزيع الاستبيانات", 
                details: [
                    { icon: 'fas fa-poll-h', title: 'تصميم علمي (Google Forms)', text: 'تصميم استبيانات إلكترونية بشكل علمي دقيق وتقديم استشارات لتوزيعها.' }
                ],
                baseLikes: 265, baseRatingSum: 140, baseVotes: 29 
            },
  // --- خدمات إضافية من خطة علوم الحاسب (CSCE) ---

            { 
                id: 'hci_help', 
                name: "مشاريع التفاعل بين الإنسان والحاسب (HCI)", 
                details: [
                    { icon: 'fas fa-hand-pointer', title: 'تصميم وتقييم الواجهات', text: 'المساعدة في تصميم واجهات المستخدم (UI) وتقييم قابليتها للاستخدام (Usability Testing).' }
                ],
                baseLikes: 190, baseRatingSum: 95, baseVotes: 20 
            },
            { 
                id: 'cs_ethics_help', 
                name: "تكاليف الحاسب والأخلاق والمجتمع (Ethics & Society)", 
                details: [
                    { icon: 'fas fa-balance-scale', title: 'دراسات حالة وأبحاث', text: 'المساعدة في تحليل القضايا الأخلاقية المتعلقة بالحاسب وكتابة الأبحاث حولها.' }
                ],
                baseLikes: 130, baseRatingSum: 65, baseVotes: 14 
            },
            { 
                id: 'compiler_design_help', 
                name: "مشاريع تصميم المترجمات (Compiler Design)", 
                details: [
                    { icon: 'fas fa-cogs', title: 'بناء المحلل اللغوي والنحوي', text: 'المساعدة في بناء مراحل المترجم، من المحلل اللغوي (Lexical Analyzer) إلى المحلل النحوي (Parser).' }
                ],
                baseLikes: 160, baseRatingSum: 80, baseVotes: 17 
            },
            { 
                id: 'ai_help', 
                name: "مشاريع الذكاء الاصطناعي (Artificial Intelligence)", 
                details: [
                    { icon: 'fas fa-robot', title: 'خوارزميات البحث والمنطق', text: 'تطبيق خوارزميات البحث (مثل A*) وحل مشاكل تمثيل المعرفة والاستنتاج المنطقي.' }
                ],
                baseLikes: 280, baseRatingSum: 140, baseVotes: 29 
            },
            { 
                id: 'security_fun_help', 
                name: "تكاليف أساسيات الأمن (Fundamental of Security)", 
                details: [
                    { icon: 'fas fa-shield-alt', title: 'مفاهيم التشفير والأمن', text: 'حل واجبات ومسائل متعلقة بالتشفير، أمن الشبكات، والسياسات الأمنية.' }
                ],
                baseLikes: 210, baseRatingSum: 105, baseVotes: 22 
            },
            { 
                id: 'graphics_help', 
                name: "مشاريع رسوميات الحاسب (Computer Graphics)", 
                details: [
                    { icon: 'fas fa-image', title: 'برمجة الرسومات ثنائية وثلاثية الأبعاد', text: 'المساعدة في مشاريع الرسومات باستخدام مكتبات مثل OpenGL لتطبيق التحويلات والإضاءة.' }
                ],
                baseLikes: 200, baseRatingSum: 100, baseVotes: 21 
            },
            { 
                id: 'tech_proj_mgmt_help', 
                name: "تكاليف إدارة المشاريع التقنية (Technical Project Management)", 
                details: [
                    { icon: 'fas fa-tasks', title: 'إعداد خطط المشاريع', text: 'المساعدة في إعداد خطط المشاريع، تحديد المهام، وتقدير الجداول الزمنية والموارد.' }
                ],
                baseLikes: 180, baseRatingSum: 90, baseVotes: 19 
            }

        ]
        
    }
    },

    // --- البطاقة الأولى: الحاسب والبرمجة ---
    
    // --- البطاقة الثانية: كلية الأعمال ---
    
    // --- البطاقة الثالثة: الكتابة الأكاديمية ---
    {
        id: 'academic_writing_card',
        title: 'الكتابة الأكاديمية',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500',
        ratingText: '4.9 (45 تقييم )',
        deliveryText: 'تسليم: 3-10 أيام',
        priceText: ' اسعار مميزة ',
        views: '4.2K',
        likes: 520,
        whatsappLink: 'https://wa.me/966597389791?text=أريد طلب خدمة في مجال الكتابة الأكاديمية',
        tags: ['بحوث فصلية', 'بحوث تخرج', 'مشاريع تخرج', 'ترجمة', 'تفريغ صوتي', 'مقالات'],
        services: {
            title: "خدمات الكتابة الأكاديمية والبحثية",
            items: [
                { 
                    id: 'term_papers', 
                    name: "إعداد البحوث الفصلية والواجبات", 
                    details: [
                        { icon: 'fas fa-book', title: 'بحث منهجي', text: 'إعداد بحوث قصيرة وواجبات فصلية وفقاً للمعايير الأكاديمية، مع توثيق المصادر والمراجع.' },
                        { icon: 'fas fa-check-double', title: 'أصالة وموثوقية', text: 'نضمن كتابة محتوى أصيل وخالٍ من الانتحال، مع فحص نسبة الاقتباس لضمان الجودة.' }
                    ],
                    baseLikes: 210, baseRatingSum: 115, baseVotes: 24 
                },
                { 
                    id: 'graduation_research', 
                    name: "المساعدة في بحوث التخرج", 
                    details: [
                        { icon: 'fas fa-graduation-cap', title: 'خطة بحث متكاملة', text: 'المساعدة في بناء خطة البحث (Proposal )، تحديد المشكلة، وصياغة الفرضيات والأسئلة.' },
                        { icon: 'fas fa-book-reader', title: 'الإطار النظري والدراسات السابقة', text: 'إجراء مراجعة شاملة للأدبيات السابقة وتلخيصها لبناء إطار نظري قوي للبحث.' },
                        { icon: 'fas fa-pen-nib', title: 'كتابة ومناقشة النتائج', text: 'المساعدة في كتابة فصول البحث وتحليل النتائج ومناقشتها وربطها بالدراسات السابقة.' }
                    ],
                    baseLikes: 350, baseRatingSum: 190, baseVotes: 40 
                },
                { 
                    id: 'academic_translation', 
                    name: "الترجمة الأكاديمية", 
                    details: [
                        { icon: 'fas fa-language', title: 'ترجمة متخصصة', text: 'ترجمة دقيقة للأبحاث والملخصات والمقالات من الإنجليزية إلى العربية والعكس، مع الحفاظ على المصطلحات العلمية.' },
                        { icon: 'fas fa-spell-check', title: 'تدقيق لغوي للمترجمات', text: 'مراجعة النصوص المترجمة لغوياً وإملائياً لضمان أعلى مستويات الجودة والدقة.' }
                    ],
                    baseLikes: 180, baseRatingSum: 95, baseVotes: 20
                },
                { 
                    id: 'audio_transcription', 
                    name: "التفريغ الصوتي (Transcription)", 
                    details: [
                        { icon: 'fas fa-headphones-alt', title: 'تفريغ دقيق للمقابلات', text: 'تفريغ المقابلات الصوتية ومجموعات التركيز (Focus Groups) المستخدمة في البحوث النوعية بشكل نصي دقيق.' },
                        { icon: 'fas fa-file-word', title: 'تنسيق احترافي', text: 'تسليم الملفات المفرغة بتنسيق Word منظم، مع إمكانية إضافة الطوابع الزمنية (Timestamps) حسب الطلب.' }
                    ],
                    baseLikes: 165, baseRatingSum: 80, baseVotes: 17
                },
                { 
                    id: 'article_writing', 
                    name: "كتابة المقالات والمحتوى", 
                    details: [
                        { icon: 'far fa-newspaper', title: 'مقالات متوافقة مع SEO', text: 'كتابة مقالات حصرية لمواقع الويب والمدونات مع مراعاة قواعد تحسين محركات البحث (SEO).' },
                        { icon: 'fas fa-lightbulb', title: 'محتوى إبداعي', text: 'صياغة محتوى إبداعي وجذاب لمختلف المنصات الرقمية بما يتناسب مع الجمهور المستهدف.' }
                    ],
                    baseLikes: 195, baseRatingSum: 105, baseVotes: 22
                }
            ]
        }
    },

    // --- البطاقة الرابعة: التصميم والعروض ---
    {
        id: 'design_presentations_card',
        title: 'التصميم والعروض',
        image: 'https://images.unsplash.com/photo-1572044162444-24c9562b5333?w=500',
        ratingText: '4.8 (38 تقييم )',
        deliveryText: 'تسليم: 2-5 أيام',
       priceText: ' اسعار مميزة ',
        views: '3.5K',
        likes: 480,
        whatsappLink: 'https://wa.me/966597389791?text=أريد طلب خدمة في مجال التصميم',
        tags: ['PowerPoint', 'خرائط ذهنية', 'بوسترات', 'كروت أعمال', 'رسوم متحركة', 'Illustrator'],
        services: {
            title: "خدمات التصميم الإبداعي والعروض التقديمية",
            items: [
                { 
                    id: 'powerpoint_design', 
                    name: "تصميم عروض PowerPoint احترافية", 
                    details: [
                        { icon: 'fas fa-file-powerpoint', title: 'قوالب عصرية وجذابة', text: 'تصميم عروض تقديمية فريدة باستخدام قوالب حديثة وهوية بصرية متناسقة تعكس محتواك.' },
                        { icon: 'fas fa-chart-pie', title: 'إنفوجرافيك وحركات متقدمة', text: 'تحويل البيانات المعقدة إلى رسوم بيانية (إنفوجرافيك ) جذابة، مع إضافة حركات احترافية وسلسة.' }
                    ],
                    baseLikes: 290, baseRatingSum: 155, baseVotes: 32
                },
                { 
                    id: 'mind_map_design', 
                    name: "تصميم الخرائط الذهنية (Mind Maps)", 
                    details: [
                        { icon: 'fas fa-brain', title: 'تلخيص مرئي للمعلومات', text: 'تحويل المحاضرات والأفكار المعقدة إلى خرائط ذهنية منظمة وملونة تسهل الحفظ والمراجعة.' },
                        { icon: 'fas fa-palette', title: 'تصاميم إبداعية ومخصصة', text: 'إنشاء خرائط ذهنية بتصاميم جذابة، مع إمكانية تخصيص الألوان والأيقونات لتناسب هويتك.' }
                    ],
                    baseLikes: 190, baseRatingSum: 100, baseVotes: 21
                },
                { 
                    id: 'poster_design', 
                    name: "تصميم البوسترات العلمية والإعلانية", 
                    details: [
                        { icon: 'fas fa-paint-roller', title: 'بوسترات علمية للمؤتمرات', text: 'تصميم بوسترات علمية (Scientific Posters) لعرض نتائج الأبحاث في المؤتمرات والفعاليات الأكاديمية.' },
                        { icon: 'fas fa-bullhorn', title: 'بوسترات إعلانية للسوشيال ميديا', text: 'تصميم بوسترات جذابة لمنصات التواصل الاجتماعي (انستغرام، تويتر) تزيد من تفاعل الجمهور.' }
                    ],
                    baseLikes: 250, baseRatingSum: 130, baseVotes: 27
                },
                { 
                    id: 'business_card_design', 
                    name: "تصميم كروت الأعمال (Business Cards)", 
                    details: [
                        { icon: 'fas fa-id-card', title: 'تصاميم فريدة واحترافية', text: 'تصميم كروت أعمال تعكس هويتك المهنية أو التجارية بشكل أنيق ومميز.' },
                        { icon: 'fas fa-print', title: 'ملفات جاهزة للطباعة', text: 'تسليم ملفات التصميم بجودة عالية وبصيغ جاهزة لإرسالها إلى المطبعة مباشرة.' }
                    ],
                    baseLikes: 220, baseRatingSum: 110, baseVotes: 23
                },
                { 
                    id: 'motion_graphics', 
                    name: "تصميم رسوم متحركة (Motion Graphics)", 
                    details: [
                        { icon: 'fas fa-video', title: 'فيديوهات شرح قصيرة', text: 'إنشاء فيديوهات رسوم متحركة قصيرة (Explainer Videos) لتبسيط فكرة أو شرح خدمة بشكل جذاب.' },
                        { icon: 'fas fa-play-circle', title: 'مقدمات (Intros) وشعارات متحركة', text: 'تصميم مقدمات احترافية لقنوات اليوتيوب أو تحريك الشعارات (Logo Animation).' }
                    ],
                    baseLikes: 310, baseRatingSum: 170, baseVotes: 35
                },
                { 
                    id: 'illustrator_graphics', 
                    name: "رسومات وتصاميم Illustrator", 
                    details: [
                        { icon: 'fas fa-vector-square', title: 'تصميم أيقونات ورسومات Vector', text: 'رسم أيقونات وشخصيات ورسومات فيكتور (Vector) مخصصة يمكن تكبيرها لأي حجم دون فقدان الجودة.' },
                        { icon: 'fas fa-pencil-ruler', title: 'تحويل الصور إلى رسومات', text: 'تحويل الصور الفوتوغرافية إلى رسومات فنية أو كرتونية باستخدام برنامج Adobe Illustrator.' }
                    ],
                    baseLikes: 275, baseRatingSum: 145, baseVotes: 29
                }
            ]
        }
    },


    // --- البطاقة الخامسة: الخدمات المهنية والتطوير ---
    {
        id: 'career_services_card',
        title: 'الخدمات المهنية والتطوير',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500',
        ratingText: '5.0 (52 تقييم )',
        deliveryText: 'تسليم: 1-4 أيام',
         priceText: ' اسعار مميزة ',
        views: '5.1K',
        likes: 615,
        whatsappLink: 'https://wa.me/966597389791?text=أريد طلب خدمة في مجال التطوير المهني',
        tags: ['سيرة ذاتية', 'تقارير تدريب', 'خطاب تقديم', 'LinkedIn', 'شهادات مهنية', 'مشاريع تدريب'],
        services: {
            title: "خدمات الإعداد المهني وسوق العمل",
            items: [
                { 
                    id: 'cv_cover_letter', 
                    name: "كتابة السير الذاتية وخطابات التقديم", 
                    details: [
                        { icon: 'fas fa-user-tie', title: 'سيرة ذاتية احترافية (ATS-Friendly )', text: 'تصميم وكتابة سيرة ذاتية مخصصة للوظيفة المستهدفة ومتوافقة مع أنظمة تتبع المتقدمين (ATS).' },
                        { icon: 'fas fa-file-signature', title: 'خطاب تقديم مؤثر (Cover Letter)', text: 'صياغة خطاب تقديم مقنع يبرز شغفك وخبراتك وارتباطها بالوظيفة الشاغرة.' }
                    ],
                    baseLikes: 350, baseRatingSum: 180, baseVotes: 36
                },
                { 
                    id: 'coop_reports_projects', 
                    name: "تقارير ومشاريع التدريب التعاوني", 
                    details: [
                        { icon: 'fas fa-briefcase', title: 'تقارير تدريب متكاملة', text: 'إعداد تقارير التدريب التعاوني أو الصيفي وفقاً للمعايير الأكاديمية، مع التركيز على إبراز المهارات المكتسبة.' },
                        { icon: 'fas fa-project-diagram', title: 'مشاريع تطبيقية للتدريب', text: 'المساعدة في تنفيذ المشاريع العملية المطلوبة خلال فترة التدريب، من التخطيط إلى التسليم.' }
                    ],
                    baseLikes: 280, baseRatingSum: 150, baseVotes: 30
                },
                { 
                    id: 'linkedin_improvement', 
                    name: "تحسين وتطوير حساب LinkedIn", 
                    details: [
                        { icon: 'fab fa-linkedin', title: 'ملف شخصي احترافي', text: 'إعادة كتابة وتنسيق ملفك الشخصي على LinkedIn بالكامل، من العنوان إلى الخبرات، لجعله جذاباً لمسؤولي التوظيف.' },
                        { icon: 'fas fa-star', title: 'إبراز المهارات والتوصيات', text: 'المساعدة في إبراز أهم المهارات والحصول على توصيات لزيادة مصداقية حسابك.' }
                    ],
                    baseLikes: 310, baseRatingSum: 165, baseVotes: 33
                },
                { 
                    id: 'cert_application', 
                    name: "المساعدة في التقديم على الشهادات المهنية", 
                    details: [
                        { icon: 'fas fa-certificate', title: 'تجهيز متطلبات التقديم', text: 'المساعدة في فهم وتجهيز كافة المستندات والمتطلبات اللازمة للتقديم على الشهادات المهنية (مثل PMP, SOCPA).' },
                        { icon: 'fas fa-file-import', title: 'تعبئة نماذج التقديم', text: 'مراجعة وتعبئة نماذج التقديم الإلكترونية بدقة لضمان قبول طلبك من المرة الأولى.' }
                    ],
                    baseLikes: 240, baseRatingSum: 125, baseVotes: 25
                }
            ]
        }
    }
];