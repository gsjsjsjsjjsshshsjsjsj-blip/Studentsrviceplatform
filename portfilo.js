// بيانات الخدمات الطلابية المحدثة - التصنيف الجديد
const portfolioData = [
    // 1. الأبحاث والكتابة الأكاديمية
    {
      id: 1,
        title: "من اعمالنا في بحوث الخرج",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "نموذج من مشاريع التخرج والبحوث الأكاديمية الكاملة بجوده عاليه",
        image: "assets/images/academic-research.jpg",
        views: 2850,
        rating: 5,
      
        date: "2024-03-15",
        detailedDescription: "نقدم خدمة شاملة لإعداد مشاريع التخرج والبحوث الأكاديمية في جميع التخصصات. يشمل العمل البحث المعمق، التحليل النقدي، كتابة المحتوى العلمي، وتنسيق المشروع وفقاً للمعايير الأكاديمية المطلوبة.",
        features: [
            "بحث شامل ومعمق في الموضوع",
            "منهجية علمية سليمة",
            "كتابة أكاديمية احترافية",
            "تنسيق وفقاً للمعايير الجامعية",
            "مراجعة لغوية شاملة",
            "فحص الانتحال والأصالة"
        ],
      
        clientReview: "بحث تخرج ممتاز بجودة عالية جداً. الفريق محترف والتسليم كان في الوقت المحدد. حصلت على درجة امتياز!"
    },
    {
        id: 2,
        title: "إنجاز الأبحاث الأكاديمية (Assignments & Term Papers)",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "إنجاز الواجبات والأبحاث الأكاديمية لجميع المواد والتخصصات",
        image: "assets/images/academic-research.jpg",
        views: 1920,
        rating: 5,
        date: "2024-03-10",
        deliveryDate: "5 أيام",
        detailedDescription: "نساعدك في إنجاز جميع أنواع الواجبات والأبحاث الأكاديمية بجودة عالية وفي الوقت المحدد.",
        features: [
            "تغطية جميع التخصصات",
            "التزام بالمواعيد النهائية",
            "مراجع حديثة وموثوقة",
            "كتابة أصيلة 100%",
            "تنسيق احترافي",
            "مراجعة مجانية"
        ],
        screenshots: [
       "1.jpg",
            "https://picsum.photos/400/300?random=12",
            "https://picsum.photos/400/300?random=13",
            "https://picsum.photos/400/300?random=14"
        ],
        clientReview: "خدمة ممتازة وسريعة. البحث كان شامل ومنظم بطريقة احترافية.",
        clientReviewImage: "1.jpg"
    },
    {
        id: 3,
        title: "كتابة التقارير النقدية والتحليلية",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "إعداد التقارير النقدية والتحليلية المتخصصة",
        image: "assets/images/academic-research.jpg",
        views: 1456,
        rating: 4,
        date: "2024-03-08",
        detailedDescription: "نكتب تقارير نقدية وتحليلية متعمقة تتضمن التحليل النقدي والتقييم الموضوعي للموضوعات المختلفة.",
        features: [
            "تحليل نقدي عميق",
            "منهجية تحليلية سليمة",
            "استخدام نظريات متقدمة",
            "أسلوب كتابة متميز",
            "مراجع أكاديمية معتبرة",
            "خلاصة وتوصيات واضحة"
        ],
        
        screenshots: [
            "https://picsum.photos/400/300?random=1",
            "https://picsum.photos/400/300?random=2", 
            "https://picsum.photos/400/300?random=3",
            "https://picsum.photos/400/300?random=4",
            "https://picsum.photos/400/300?random=5"
        ],
        clientReview: "تقرير تحليلي ممتاز بعمق نقدي رائع. ساعدني كثيراً في فهم الموضوع."
    },
    {
        id: 4,
        title: "الترجمة الأكاديمية والتفريغ الصوتي",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "خدمات الترجمة الأكاديمية المتخصصة والتفريغ الصوتي الاحترافي",
        image: "assets/images/academic-research.jpg",
        views: 1234,
        rating: 5,
        date: "2024-03-05",
        detailedDescription: "نقدم خدمات ترجمة أكاديمية دقيقة وتفريغ صوتي احترافي للمحاضرات والمقابلات البحثية.",
        features: [
            "ترجمة أكاديمية دقيقة",
            "تفريغ صوتي احترافي",
            "مراجعة لغوية شاملة",
            "التزام بالمصطلحات العلمية",
            "تسليم سريع",
            "سرية تامة"
        ],
        clientReview: "ترجمة دقيقة ومتخصصة. الفريق يفهم المصطلحات العلمية جيداً."
    },
    {
        id: 5,
        title: "التدقيق اللغوي وإعادة الصياغة الاحترافية",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "تدقيق لغوي شامل وإعادة صياغة احترافية للنصوص الأكاديمية",
        image: "assets/images/academic-research.jpg",
        views: 1876,
        rating: 5,
        date: "2024-03-03",
        detailedDescription: "نوفر خدمات تدقيق لغوي متقدمة وإعادة صياغة احترافية تحسن من جودة النص ووضوحه.",
        features: [
            "تدقيق إملائي ونحوي شامل",
            "تحسين الأسلوب الأكاديمي",
            "إعادة صياغة احترافية",
            "تحسين التماسك والانسجام",
            "مراجعة المصطلحات",
            "تقرير مفصل بالتعديلات"
        ],
        clientReview: "تدقيق ممتاز حسن من جودة البحث بشكل كبير. أسلوب احترافي في التعامل."
    },
    {
        id: 6,
        title: "تنسيق المراجع والاقتباسات (APA, MLA, Chicago)",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "تنسيق المراجع والاقتباسات وفقاً للمعايير الأكاديمية المختلفة",
        image: "assets/images/academic-research.jpg",
        views: 1654,
        rating: 5,
        date: "2024-03-01",
        detailedDescription: "نقوم بتنسيق المراجع والاقتباسات بدقة وفقاً لجميع المعايير الأكاديمية المطلوبة.",
        features: [
            "تنسيق APA, MLA, Chicago",
            "فهرسة المراجع تلقائياً",
            "تنسيق الاقتباسات داخل النص",
            "مراجعة دقة المراجع",
            "تنسيق قائمة المراجع",
            "دعم فني متخصص"
        ],
        clientReview: "تنسيق دقيق ومتقن للمراجع. وفر علي وقت كبير وجهد."
    },
    {
        id: 7,
        title: "تلخيص المحتوى العلمي والكتب",
        category: "academic_writing",
        categoryName: "الأبحاث والكتابة الأكاديمية",
        description: "تلخيص احترافي للكتب والمحتوى العلمي والأبحاث",
        image: "assets/images/academic-research.jpg",
        views: 1432,
        rating: 4,
        date: "2024-02-28",
        detailedDescription: "نقدم خدمات تلخيص احترافية تحافظ على جوهر المحتوى مع التركيز على النقاط الأساسية.",
        features: [
            "تلخيص شامل ومركز",
            "الحفاظ على الأفكار الرئيسية",
            "أسلوب واضح ومفهوم",
            "تنظيم منطقي للمحتوى",
            "ملخصات بأطوال مختلفة",
            "مراجعة دقة المحتوى"
        ],
        clientReview: "ملخص ممتاز ومفيد جداً. ساعدني في فهم الكتاب بسرعة."
    },

    // 2. التحليل الإحصائي والبيانات
    {
        id: 8,
        title: "حل واجبات ومشاريع SPSS",
        category: "statistical_analysis",
        categoryName: "التحليل الإحصائي والبيانات",
        description: "حل شامل لواجبات ومشاريع SPSS مع تفسير النتائج",
        image: "assets/images/data-analysis.jpg",
        views: 2340,
        rating: 5,
        date: "2024-03-12",
        detailedDescription: "نحل جميع أنواع واجبات ومشاريع SPSS مع تقديم تفسير مفصل للنتائج والتحليلات الإحصائية.",
        features: [
            "حل جميع أنواع التحليلات",
            "تفسير النتائج علمياً",
            "رسوم بيانية احترافية",
            "تقرير مفصل بالنتائج",
            "ملف SPSS كامل",
            "دعم فني متخصص"
        ],
        clientReview: "حل ممتاز مع تفسير واضح ومفصل للنتائج. فهمت التحليل الإحصائي بشكل أفضل."
    },
    {
        id: 9,
        title: "تحليل بيانات الاستبيانات والبحوث",
        category: "statistical_analysis",
        categoryName: "التحليل الإحصائي والبيانات",
        description: "تحليل شامل لبيانات الاستبيانات والبحوث العلمية",
        image: "assets/images/data-analysis.jpg",
        views: 1987,
        rating: 5,
        date: "2024-03-09",
        detailedDescription: "نقوم بتحليل بيانات الاستبيانات والبحوث باستخدام أحدث الطرق الإحصائية مع تقديم تفسير علمي دقيق.",
        features: [
            "تحليل إحصائي متقدم",
            "اختبارات إحصائية مناسبة",
            "تفسير النتائج علمياً",
            "جداول ورسوم بيانية",
            "تقرير شامل بالنتائج",
            "توصيات عملية"
        ],
        clientReview: "تحليل دقيق ومفصل مع تفسير علمي ممتاز. النتائج كانت واضحة ومفيدة."
    },
    {
        id: 10,
        title: "تصميم وتوزيع الاستبيانات (إلكترونية وورقية)",
        category: "statistical_analysis",
        categoryName: "التحليل الإحصائي والبيانات",
        description: "تصميم استبيانات علمية دقيقة وتوزيعها إلكترونياً أو ورقياً",
        image: "assets/images/data-analysis.jpg",
        views: 1765,
        rating: 4,
        date: "2024-03-06",
        detailedDescription: "نصمم استبيانات علمية دقيقة تحقق أهداف البحث مع خدمات التوزيع الإلكتروني والورقي.",
        features: [
            "تصميم علمي للأسئلة",
            "تحكيم من خبراء متخصصين",
            "نسخة إلكترونية تفاعلية",
            "خدمات التوزيع",
            "تجميع الاستجابات",
            "تحليل أولي للبيانات"
        ],
        clientReview: "استبيان مصمم بطريقة علمية ممتازة. التوزيع الإلكتروني كان سهل وفعال."
    },
    {
        id: 11,
        title: "إعداد جداول ورسوم بيانية لعرض النتائج",
        category: "statistical_analysis",
        categoryName: "التحليل الإحصائي والبيانات",
        description: "إنشاء جداول ورسوم بيانية احترافية لعرض النتائج الإحصائية",
        image: "assets/images/data-analysis.jpg",
        views: 1543,
        rating: 5,
        date: "2024-03-04",
        detailedDescription: "نصمم جداول ورسوم بيانية احترافية وواضحة تعرض النتائج الإحصائية بطريقة جذابة ومفهومة.",
        features: [
            "تصميم احترافي للجداول",
            "رسوم بيانية متنوعة",
            "ألوان متناسقة وجذابة",
            "وضوح في عرض البيانات",
            "تنسيق أكاديمي مناسب",
            "ملفات بجودة عالية"
        ],
        clientReview: "جداول ورسوم بيانية رائعة وواضحة. أضافت قيمة كبيرة لبحثي."
    },

    // 3. التحليل المالي والمحاسبي
    {
        id: 12,
        title: "تحليل القوائم المالية والنسب المالية",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "تحليل شامل للقوائم المالية وحساب النسب المالية المختلفة",
        image: "assets/images/data-analysis.jpg",
        views: 1876,
        rating: 5,
        date: "2024-03-11",
        detailedDescription: "نقوم بتحليل القوائم المالية بطريقة احترافية وحساب جميع النسب المالية مع تفسير النتائج.",
        features: [
            "تحليل شامل للقوائم المالية",
            "حساب جميع النسب المالية",
            "تفسير النتائج المالية",
            "مقارنات مع الصناعة",
            "توصيات مالية",
            "تقرير مفصل بالتحليل"
        ],
        clientReview: "تحليل مالي دقيق ومفصل. ساعدني في فهم الوضع المالي للشركة بوضوح."
    },
    {
        id: 13,
        title: "إعداد المحافظ الاستثمارية (للمشاريع الدراسية)",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "تصميم وإعداد محافظ استثمارية متوازنة للمشاريع الأكاديمية",
        image: "assets/images/data-analysis.jpg",
        views: 1432,
        rating: 4,
        date: "2024-03-07",
        detailedDescription: "نصمم محافظ استثمارية متوازنة ومدروسة للمشاريع الدراسية مع تحليل المخاطر والعوائد.",
        features: [
            "تصميم محفظة متوازنة",
            "تحليل المخاطر والعوائد",
            "اختيار الأصول المناسبة",
            "تنويع الاستثمارات",
            "تقييم الأداء",
            "تقرير شامل بالتوصيات"
        ],
        screenshots: [
    "assets/1.jpg",
    "assets/2.jpg", 
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg"
],

        clientReview: "محفظة استثمارية مدروسة ومتوازنة. المشروع حصل على تقدير ممتاز."
    },
    {
        id: 14,
        title: "تنفيذ مشاريع وحل واجبات التمويل والاستثمار",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "حل شامل لمشاريع وواجبات التمويل والاستثمار",
        image: "assets/images/data-analysis.jpg",
        views: 1654,
        rating: 5,
        date: "2024-03-02",
        detailedDescription: "نحل جميع أنواع مشاريع وواجبات التمويل والاستثمار مع شرح مفصل للحلول والطرق المستخدمة.",
        features: [
            "حل جميع أنواع المسائل",
            "شرح مفصل للحلول",
            "استخدام الصيغ المالية",
            "تطبيق النظريات المالية",
            "أمثلة عملية",
            "مراجعة شاملة"
        ],
        clientReview: "حلول ممتازة مع شرح واضح ومفصل. فهمت المفاهيم المالية بشكل أفضل."
    },
    {
        id: 15,
        title: "حل واجبات ومشاريع المحاسبة المالية والإدارية",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "حل متخصص لواجبات ومشاريع المحاسبة بأنواعها",
        image: "assets/images/data-analysis.jpg",
        views: 1789,
        rating: 5,
        date: "2024-02-29",
        detailedDescription: "نقدم حلول شاملة لجميع واجبات ومشاريع المحاسبة المالية والإدارية مع التطبيق العملي.",
        features: [
            "حل جميع أنواع المسائل المحاسبية",
            "تطبيق المعايير المحاسبية",
            "إعداد القوائم المالية",
            "تحليل التكاليف",
            "شرح مفصل للحلول",
            "أمثلة عملية متنوعة"
        ],
        clientReview: "حلول محاسبية دقيقة ومفصلة. الشرح كان واضح وساعدني في الفهم."
    },
    {
        id: 16,
        title: "حل واجبات ومشاريع Excel (مالية وإحصائية)",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "حل متقدم لمشاريع Excel المالية والإحصائية",
        image: "assets/images/data-analysis.jpg",
        views: 2156,
        rating: 5,
        date: "2024-02-26",
        detailedDescription: "نحل مشاريع Excel المعقدة في المجالات المالية والإحصائية باستخدام الدوال المتقدمة والماكرو.",
        features: [
            "استخدام الدوال المتقدمة",
            "إنشاء الماكرو والأتمتة",
            "تصميم لوحات المعلومات",
            "الرسوم البيانية التفاعلية",
            "النمذجة المالية",
            "تقارير احترافية"
        ],
        clientReview: "عمل ممتاز في Excel مع استخدام متقدم للدوال. النتيجة كانت احترافية جداً."
    },
    {
        id: 17,
        title: "تصميم التقارير والشيتات الاحترافية في Excel",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "تصميم تقارير وشيتات Excel احترافية وتفاعلية",
        image: "assets/images/data-analysis.jpg",
        views: 1543,
        rating: 4,
        date: "2024-02-24",
        detailedDescription: "نصمم تقارير وشيتات Excel احترافية مع واجهات تفاعلية وتصميم جذاب وسهل الاستخدام.",
        features: [
            "تصميم واجهات تفاعلية",
            "استخدام التنسيق الشرطي",
            "إنشاء القوائم المنسدلة",
            "الحماية والأمان",
            "التصميم الجذاب",
            "سهولة الاستخدام"
        ],
        clientReview: "تصميم رائع وتفاعلي في Excel. الشيت كان سهل الاستخدام وجذاب بصرياً."
    },
    {
        id: 18,
        title: "إعداد دراسات الجدوى للمشاريع",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "إعداد دراسات جدوى شاملة ومفصلة للمشاريع المختلفة",
        image: "assets/images/data-analysis.jpg",
        views: 1321,
        rating: 5,
        date: "2024-02-22",
        detailedDescription: "نعد دراسات جدوى شاملة تتضمن التحليل المالي والفني والتسويقي والبيئي للمشاريع.",
        features: [
            "دراسة السوق والمنافسين",
            "التحليل المالي الشامل",
            "تقييم المخاطر",
            "التحليل الفني",
            "الجدوى البيئية",
            "توصيات واضحة"
        ],
        clientReview: "دراسة جدوى شاملة ومفصلة. ساعدتني في اتخاذ قرار مدروس بشأن المشروع."
    },
    {
        id: 19,
        title: "إعداد وتحليل دراسات الحالة (Case Studies)",
        category: "financial_analysis",
        categoryName: "التحليل المالي والمحاسبي",
        description: "إعداد وتحليل دراسات الحالة المالية والإدارية",
        image: "assets/images/data-analysis.jpg",
        views: 1198,
        rating: 4,
        date: "2024-02-20",
        detailedDescription: "نعد ونحلل دراسات الحالة المالية والإدارية مع تقديم حلول مبتكرة ومدروسة للمشكلات.",
        features: [
            "تحليل شامل للحالة",
            "تحديد المشكلات الرئيسية",
            "حلول مبتكرة ومدروسة",
            "تطبيق النظريات المالية",
            "توصيات قابلة للتنفيذ",
            "عرض احترافي للنتائج"
        ],
        clientReview: "دراسة حالة ممتازة مع تحليل عميق وحلول عملية. العرض كان احترافي جداً."
    },

    // 4. البرمجة والتقنية
    {
        id: 20,
        title: "حل واجبات ومشاريع البرمجة (Python, Java, C++, ...)",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "حل شامل لواجبات ومشاريع البرمجة بجميع اللغات",
        image: "assets/images/programming.jpg",
        views: 2890,
        rating: 5,
        date: "2024-03-14",
        detailedDescription: "نحل جميع أنواع واجبات ومشاريع البرمجة بلغات مختلفة مع كود نظيف وموثق وشرح مفصل.",
        features: [
            "دعم جميع لغات البرمجة",
            "كود نظيف ومنظم",
            "توثيق شامل للكود",
            "شرح مفصل للحلول",
            "اختبارات شاملة",
            "دعم فني مستمر"
        ],
        clientReview: "حل برمجي ممتاز مع كود نظيف وشرح واضح. تعلمت الكثير من الحلول المقدمة."
    },
    {
        id: 21,
        title: "حل اللابات العملية للمواد التقنية",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "حل شامل للمختبرات العملية في المواد التقنية",
        image: "assets/images/programming.jpg",
        views: 2134,
        rating: 5,
        date: "2024-03-13",
        detailedDescription: "نقدم حلول شاملة للمختبرات العملية في جميع المواد التقنية مع التطبيق العملي والشرح المفصل.",
        features: [
            "حل جميع أنواع اللابات",
            "تطبيق عملي للمفاهيم",
            "تقارير مفصلة",
            "لقطات شاشة توضيحية",
            "شرح خطوة بخطوة",
            "ملفات المشروع كاملة"
        ],
        clientReview: "حل ممتاز للابات مع تقارير مفصلة وشرح واضح. ساعدني في فهم المفاهيم التقنية."
    },
    {
        id: 22,
        title: "تصميم وتطوير مواقع الويب للمشاريع",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "تصميم وتطوير مواقع ويب احترافية للمشاريع الأكاديمية",
        image: "assets/images/programming.jpg",
        views: 2567,
        rating: 5,
        date: "2024-03-10",
        detailedDescription: "نصمم ونطور مواقع ويب حديثة ومتجاوبة للمشاريع الأكاديمية باستخدام أحدث التقنيات.",
        features: [
            "تصميم متجاوب مع الأجهزة",
            "استخدام أحدث التقنيات",
            "واجهة مستخدم جذابة",
            "كود نظيف ومنظم",
            "تحسين الأداء",
            "دعم فني شامل"
        ],
        clientReview: "موقع ويب رائع بتصميم عصري وأداء ممتاز. المشروع حصل على درجة عالية."
    },
    {
        id: 23,
        title: "حل تكاليف ومشاريع قواعد البيانات (Access, SQL)",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "حل متخصص لمشاريع قواعد البيانات بأنواعها",
        image: "assets/images/programming.jpg",
        views: 1876,
        rating: 4,
        date: "2024-03-08",
        detailedDescription: "نحل مشاريع قواعد البيانات المعقدة مع تصميم قواعد بيانات فعالة وكتابة استعلامات متقدمة.",
        features: [
            "تصميم قواعد بيانات فعالة",
            "كتابة استعلامات متقدمة",
            "تطوير واجهات المستخدم",
            "تحسين الأداء",
            "أمان البيانات",
            "توثيق شامل"
        ],
        clientReview: "مشروع قاعدة بيانات ممتاز مع تصميم فعال واستعلامات متقدمة."
    },
    {
        id: 24,
        title: "تنفيذ مشاريع الشبكات (Packet Tracer, GNS3)",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "تنفيذ وتصميم مشاريع الشبكات باستخدام محاكيات الشبكات",
        image: "assets/images/programming.jpg",
        views: 1654,
        rating: 5,
        date: "2024-03-05",
        detailedDescription: "نصمم وننفذ مشاريع الشبكات المعقدة باستخدام Packet Tracer وGNS3 مع التكوين الكامل.",
        features: [
            "تصميم شبكات متقدمة",
            "تكوين الأجهزة",
            "اختبار الاتصالية",
            "حل مشاكل الشبكات",
            "توثيق التكوين",
            "تقارير مفصلة"
        ],
        clientReview: "مشروع شبكات ممتاز مع تكوين دقيق وتوثيق شامل. تعلمت الكثير من المشروع."
    },
    {
        id: 25,
        title: "حل واجبات ومشاريع Linux",
        category: "programming",
        categoryName: "البرمجة والتقنية",
        description: "حل شامل لواجبات ومشاريع نظام Linux",
        image: "assets/images/programming.jpg",
        views: 1432,
        rating: 4,
        date: "2024-03-03",
        detailedDescription: "نقدم حلول شاملة لواجبات ومشاريع Linux مع شرح الأوامر والسكريبتات المستخدمة.",
        features: [
            "حل جميع أنواع المهام",
            "كتابة السكريبتات",
            "إدارة النظام",
            "أمان النظام",
            "شرح الأوامر",
            "تقارير مفصلة"
        ],
        clientReview: "حل ممتاز لمشاريع Linux مع شرح واضح للأوامر والسكريبتات."
    },

    // 5. التصميم والعروض التقديمية
    {
        id: 26,
        title: "تصميم العروض التقديمية الاحترافية (PowerPoint)",
        category: "design",
        categoryName: "التصميم والعروض التقديمية",
        description: "تصميم عروض PowerPoint احترافية وجذابة",
        image: "assets/images/design-services.jpg",
        views: 2100,
        rating: 5,
        date: "2024-03-16",
        detailedDescription: "نصمم عروض تقديمية احترافية ومؤثرة تجذب انتباه الجمهور وتوصل رسالتك بوضوح.",
        features: [
            "تصميم احترافي وجذاب",
            "رسوم متحركة مؤثرة",
            "قوالب قابلة للتخصيص",
            "محتوى منظم ومرتب",
            "ألوان متناسقة",
            "خطوط عربية جميلة"
        ],
        clientReview: "عرض تقديمي رائع بتصميم احترافي. ساعدني كثيراً في إقناع الجمهور بأفكاري."
    },
    {
        id: 27,
        title: "تصميم الإنفوجرافيك والخرائط الذهنية",
        category: "design",
        categoryName: "التصميم والعروض التقديمية",
        description: "تصميم إنفوجرافيك وخرائط ذهنية مبتكرة",
        image: "assets/images/design-services.jpg",
        views: 1876,
        rating: 4,
        date: "2024-03-15",
        detailedDescription: "نصمم إنفوجرافيك وخرائط ذهنية مبتكرة تحول المعلومات المعقدة إلى رسوم بيانية سهلة الفهم.",
        features: [
            "تصميم بصري جذاب",
            "تحويل البيانات المعقدة",
            "وضوح في إيصال المعلومة",
            "ألوان متناسقة",
            "تنسيقات متعددة",
            "مراجعات غير محدودة"
        ],
        clientReview: "إنفوجرافيك ممتاز وواضح. ساعدني في تبسيط المعلومات المعقدة."
    },
    {
        id: 28,
        title: "تصميم البوسترات العلمية والدعائية",
        category: "design",
        categoryName: "التصميم والعروض التقديمية",
        description: "تصميم بوسترات علمية ودعائية احترافية",
        image: "assets/images/design-services.jpg",
        views: 1543,
        rating: 5,
        date: "2024-03-14",
        detailedDescription: "نصمم بوسترات علمية ودعائية احترافية تجمع بين الجمال البصري والوضوح في إيصال المعلومة.",
        features: [
            "تصميم بصري جذاب",
            "ترتيب منطقي للمعلومات",
            "ألوان متناسقة ومناسبة",
            "خطوط واضحة ومقروءة",
            "جودة طباعة عالية",
            "تنسيقات متعددة"
        ],
        clientReview: "بوستر علمي ممتاز بتصميم جذاب ومعلومات منظمة. حصل على إعجاب كبير في المؤتمر."
    },
    {
        id: 29,
        title: "تصميم الشهادات وكروت الأعمال (Business Cards)",
        category: "design",
        categoryName: "التصميم والعروض التقديمية",
        description: "تصميم شهادات تقدير وكروت أعمال احترافية",
        image: "assets/images/design-services.jpg",
        views: 1234,
        rating: 4,
        date: "2024-03-13",
        detailedDescription: "نصمم شهادات تقدير وكروت أعمال احترافية تعكس هويتك وتترك انطباعاً مميزاً.",
        features: [
            "تصميم فريد ومبتكر",
            "جودة طباعة عالية",
            "ألوان متناسقة",
            "خطوط جذابة",
            "تنسيقات متعددة",
            "مراجعات غير محدودة"
        ],
        clientReview: "تصميم شهادات رائع وكروت أعمال مميزة. شكراً لكم على الإبداع."
    },
    {
        id: 30,
        title: "خدمات التصميم المتقدم باستخدام Photoshop وIllustrator",
        category: "design",
        categoryName: "التصميم والعروض التقديمية",
        description: "خدمات تصميم متقدمة باستخدام برامج Adobe Photoshop وIllustrator",
        image: "assets/images/design-services.jpg",
        views: 1987,
        rating: 5,
        date: "2024-03-12",
        detailedDescription: "نقدم خدمات تصميم متقدمة باستخدام برامج Adobe Photoshop وIllustrator لإنشاء تصاميم فريدة ومبتكرة.",
        features: [
            "تصميم شعارات احترافية",
            "تعديل صور متقدم",
            "تصميم رسوم توضيحية",
            "تصميم واجهات مستخدم",
            "تصميم إعلانات",
            "مراجعات غير محدودة"
        ],
        clientReview: "تصميمات رائعة ومبتكرة. الفريق محترف جداً في استخدام برامج التصميم."
    },

    // 6. التطوير المهني
    {
        id: 31,
        title: "كتابة وتصميم السيرة الذاتية (CV/Resume)",
        category: "career_development",
        categoryName: "التطوير المهني",
        description: "كتابة وتصميم سيرة ذاتية احترافية ومميزة",
        image: "assets/images/career-services.jpg",
        views: 2500,
        rating: 5,
        date: "2024-03-17",
        detailedDescription: "نساعدك في إعداد سيرة ذاتية احترافية تبرز مهاراتك وخبراتك بطريقة جذابة تزيد من فرص حصولك على الوظيفة المناسبة.",
        features: [
            "تصميم احترافي وجذاب",
            "محتوى مكتوب بعناية",
            "تنسيق منظم وواضح",
            "تخصيص حسب المجال",
            "نصائح للمقابلات",
            "تحديثات مجانية"
        ],
        clientReview: "سيرة ذاتية احترافية جداً ساعدتني في الحصول على وظيفة أحلامي. شكراً لكم!"
    },
    {
        id: 32,
        title: "إعداد ملف الإنجاز الاحترافي (Portfolio)",
        category: "career_development",
        categoryName: "التطوير المهني",
        description: "إعداد ملف إنجاز احترافي يعرض أعمالك ومهاراتك",
        image: "assets/images/career-services.jpg",
        views: 1876,
        rating: 4,
        date: "2024-03-16",
        detailedDescription: "نساعدك في إعداد ملف إنجاز احترافي يعرض أعمالك ومهاراتك بطريقة جذابة ومؤثرة.",
        features: [
            "تصميم جذاب ومبتكر",
            "تنظيم منطقي للمحتوى",
            "عرض أعمالك بشكل احترافي",
            "تخصيص حسب المجال",
            "نصائح للعرض",
            "مراجعات غير محدودة"
        ],
        clientReview: "ملف إنجاز رائع بتصميم جذاب ومحتوى منظم. ساعدني في الحصول على فرص عمل."
    },
    {
        id: 33,
        title: "كتابة تقارير ومشاريع التدريب التعاوني (Co-op Reports)",
        category: "career_development",
        categoryName: "التطوير المهني",
        description: "كتابة تقارير ومشاريع التدريب التعاوني بجودة عالية",
        image: "assets/images/career-services.jpg",
        views: 1543,
        rating: 5,
        date: "2024-03-15",
        detailedDescription: "نقدم خدمات كتابة تقارير ومشاريع التدريب التعاوني بجودة عالية وتنسيق احترافي.",
        features: [
            "كتابة تقارير شاملة",
            "تنسيق احترافي",
            "مراجعة لغوية شاملة",
            "التزام بالمواعيد النهائية",
            "مراجعات غير محدودة",
            "دعم فني مستمر"
        ],
        clientReview: "تقرير تدريب تعاوني ممتاز بجودة عالية. حصلت على درجة امتياز."
    },
    {
        id: 34,
        title: "صياغة خطابات التقديم (Cover Letters)",
        category: "career_development",
        categoryName: "التطوير المهني",
        description: "صياغة خطابات تقديم احترافية ومؤثرة",
        image: "assets/images/career-services.jpg",
        views: 1234,
        rating: 4,
        date: "2024-03-14",
        detailedDescription: "نصيغ خطابات تقديم احترافية ومؤثرة تزيد من فرص قبولك في الوظائف والبرامج الدراسية.",
        features: [
            "صياغة احترافية",
            "تخصيص حسب الوظيفة",
            "إبراز المهارات والخبرات",
            "أسلوب جذاب ومقنع",
            "مراجعات غير محدودة",
            "تسليم سريع"
        ],
        clientReview: "خطاب تقديم ممتاز ومقنع. حصلت على مقابلة عمل بفضله."
    },
    {
        id: 35,
        title: "إنشاء وتحسين شامل لملف LinkedIn",
        category: "career_development",
        categoryName: "التطوير المهني",
        description: "إنشاء وتحسين شامل لملف LinkedIn الاحترافي",
        image: "assets/images/career-services.jpg",
        views: 1987,
        rating: 5,
        date: "2024-03-13",
        detailedDescription: "نساعدك في إنشاء وتحسين ملفك الشخصي على LinkedIn ليصبح أكثر احترافية وجاذبية لأصحاب العمل والشركات.",
        features: [
            "تحسين الملف الشخصي",
            "كتابة وصف احترافي",
            "تحسين الكلمات المفتاحية",
            "استراتيجية التواصل",
            "نصائح للشبكات المهنية",
            "متابعة دورية"
        ],
        clientReview: "تطوير ممتاز لملف LinkedIn. زادت المشاهدات والتواصل من أصحاب العمل بشكل ملحوظ."
    },

    // 7. الاستشارات الأكاديمية والشخصية
    {
        id: 36,
        title: "استشارات لاختيار موضوع بحث أو مشروع تخرج",
        category: "consulting",
        categoryName: "الاستشارات الأكاديمية والشخصية",
        description: "استشارات متخصصة لاختيار موضوع بحث أو مشروع تخرج",
        image: "assets/images/academic-research.jpg",
        views: 1500,
        rating: 5,
        date: "2024-03-18",
        detailedDescription: "نقدم استشارات متخصصة لمساعدتك في اختيار موضوع بحث أو مشروع تخرج مناسب لمجال دراستك واهتماماتك.",
        features: [
            "تحديد اهتماماتك",
            "تحليل المجالات المتاحة",
            "اقتراح مواضيع مبتكرة",
            "تحديد المراجع الأولية",
            "توجيهات أولية للمنهجية",
            "دعم مستمر"
        ],
        clientReview: "استشارة ممتازة. ساعدتني في اختيار موضوع بحث مناسب جداً."
    },
    {
        id: 37,
        title: "استشارات لاختيار التخصص الجامعي والمسار المهني",
        category: "consulting",
        categoryName: "الاستشارات الأكاديمية والشخصية",
        description: "استشارات متخصصة لاختيار التخصص الجامعي والمسار المهني",
        image: "assets/images/career-services.jpg",
        views: 1200,
        rating: 4,
        date: "2024-03-17",
        detailedDescription: "نقدم استشارات متخصصة لمساعدتك في اختيار التخصص الجامعي المناسب ومسارك المهني المستقبلي.",
        features: [
            "تحليل الميول والقدرات",
            "استكشاف التخصصات المتاحة",
            "تحديد المسار المهني",
            "نصائح للقبول الجامعي",
            "توجيهات للتطوير المهني",
            "دعم مستمر"
        ],
        clientReview: "استشارة مفيدة جداً. ساعدتني في تحديد تخصصي الجامعي ومساري المهني."
    },
    {
        id: 38,
        title: "تصميم جداول المهام والمحاضرات الدراسية",
        category: "consulting",
        categoryName: "الاستشارات الأكاديمية والشخصية",
        description: "تصميم جداول مهام ومحاضرات دراسية منظمة",
        image: "assets/images/academic-research.jpg",
        views: 900,
        rating: 5,
        date: "2024-03-16",
        detailedDescription: "نصمم جداول مهام ومحاضرات دراسية منظمة تساعدك على إدارة وقتك بفعالية وتحقيق أقصى استفادة من دراستك.",
        features: [
            "تنظيم الوقت بفعالية",
            "تحديد الأولويات",
            "توزيع المهام",
            "متابعة التقدم",
            "تخصيص حسب احتياجاتك",
            "مراجعات غير محدودة"
        ],
        clientReview: "جدول مهام رائع ومنظم. ساعدني في إدارة وقتي بفعالية وتحقيق أهدافي الدراسية."
    }
];

// إعدادات إضافية
const portfolioSettings = {
    itemsPerPage: 8,
    animationDuration: 300,
    searchDelay: 500
};

// فئات الخدمات الجديدة
const categories = {
    all: "جميع الخدمات",
    academic_writing: "الأبحاث والكتابة الأكاديمية",
    statistical_analysis: "التحليل الإحصائي والبيانات", 
    financial_analysis: "التحليل المالي والمحاسبي",
    programming: "البرمجة والتقنية",
    design: "التصميم والعروض التقديمية",
    career_development: "التطوير المهني",
    consulting: "الاستشارات الأكاديمية والشخصية"
};

// خيارات الترتيب
const sortOptions = {
    default: "الترتيب الافتراضي",
    rating: "الأعلى تقييماً",
    views: "الأكثر مشاهدة", 
    date: "الأحدث"
};

// Enhanced Portfolio Script
class EnhancedPortfolio {
    constructor() {
        this.currentFilter = 'all';
        this.currentSort = 'default';
        this.searchTerm = '';
        this.filteredData = [...portfolioData];
        this.searchTimeout = null;
        this.currentView = 'carousel'; // 'grid' or 'carousel'
        this.currentCarouselIndex = 0;
        this.carouselData = [];
        
        // إعدادات التشغيل التلقائي
        this.autoplayEnabled = true;
        this.autoplayInterval = 4000; // 4 ثوانٍ
        this.autoplayTimer = null;
        this.isPaused = false;
        
        this.init();
    }

    init() {
        this.initializeTheme();
        this.initializeAOS();
        this.bindEvents();
        this.renderPortfolio();
    }

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100
            });
        }
    }

    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // View toggle buttons
        const gridViewBtn = document.getElementById('gridViewBtn');
        const carouselViewBtn = document.getElementById('carouselViewBtn');
        
        if (gridViewBtn) {
            gridViewBtn.addEventListener('click', () => this.switchView('grid'));
        }
        
        if (carouselViewBtn) {
            carouselViewBtn.addEventListener('click', () => this.switchView('carousel'));
        }

        // Carousel navigation
        const carouselPrev = document.getElementById('carouselPrev');
        const carouselNext = document.getElementById('carouselNext');
        
        if (carouselPrev) {
            carouselPrev.addEventListener('click', () => this.previousCarouselItem());
        }
        
        if (carouselNext) {
            carouselNext.addEventListener('click', () => this.nextCarouselItem());
        }

        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }

        // Sort dropdown
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => this.handleSort(e));
        }

        // Modal events
        this.bindModalEvents();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // إضافة أحداث الإيقاف المؤقت للتشغيل التلقائي
        this.bindAutoplayEvents();
    }

    bindModalEvents() {
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    this.closeModal();
                }
            });
        }

        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }

        // Order service button
        const orderServiceBtn = document.getElementById('orderService');
        if (orderServiceBtn) {
            orderServiceBtn.addEventListener('click', () => this.orderService());
        }

        // Order similar service button
        const orderSimilarServiceBtn = document.getElementById('orderSimilarService');
        if (orderSimilarServiceBtn) {
            orderSimilarServiceBtn.addEventListener('click', () => this.orderSimilarService());
        }

        // Share service button
        const shareServiceBtn = document.getElementById('shareService');
        if (shareServiceBtn) {
            shareServiceBtn.addEventListener('click', () => this.shareService());
        }

        // Close modal button
        const closeModalBtn = document.getElementById('closeModal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => this.closeModal());
        }
    }

    bindAutoplayEvents() {
        const carouselContainer = document.getElementById('carouselContainer');
        
        if (carouselContainer) {
            // إيقاف مؤقت عند تمرير الماوس فوق الكاروسيل
            carouselContainer.addEventListener('mouseenter', () => {
                this.pauseAutoplay();
            });
            
            // استئناف التشغيل عند خروج الماوس من الكاروسيل
            carouselContainer.addEventListener('mouseleave', () => {
                this.resumeAutoplay();
            });
        }
        
        // إيقاف التشغيل التلقائي عند فقدان التركيز على النافذة
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAutoplay();
            } else {
                this.resumeAutoplay();
            }
        });
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
    }

    updateThemeIcon(theme) {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const moonIcon = themeToggle.querySelector('.fa-moon');
            const sunIcon = themeToggle.querySelector('.fa-sun');
            
            if (theme === 'dark') {
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'block';
            } else {
                moonIcon.style.display = 'block';
                sunIcon.style.display = 'none';
            }
        }
    }

    handleFilter(e) {
        const filterValue = e.target.closest('.filter-btn').getAttribute('data-filter');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.closest('.filter-btn').classList.add('active');
        
        this.currentFilter = filterValue;
        this.applyFilters();
        this.renderPortfolio();
    }

    handleSearch(e) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            this.searchTerm = e.target.value.toLowerCase().trim();
            this.applyFilters();
            this.renderPortfolio();
        }, portfolioSettings.searchDelay);
    }

    handleSort(e) {
        this.currentSort = e.target.value;
        this.applyFilters();
        this.renderPortfolio();
    }

    applyFilters() {
        let filtered = [...portfolioData];

        // Apply category filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(item => item.category === this.currentFilter);
        }

        // Apply search filter
        if (this.searchTerm) {
            filtered = filtered.filter(item => 
                item.title.toLowerCase().includes(this.searchTerm) ||
                item.description.toLowerCase().includes(this.searchTerm) ||
                item.categoryName.toLowerCase().includes(this.searchTerm)
            );
        }

        // Apply sorting
        switch (this.currentSort) {
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'views':
                filtered.sort((a, b) => b.views - a.views);
                break;
            case 'date':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            default:
                // Keep original order
                break;
        }

        this.filteredData = filtered;
    }

    renderPortfolio() {
        if (this.currentView === 'grid') {
            this.renderGridView();
        } else {
            this.renderCarouselView();
        }
    }

    renderGridView() {
        const portfolioGrid = document.getElementById('portfolioGrid');
        const carouselContainer = document.getElementById('carouselContainer');
        
        if (!portfolioGrid) return;

        // Show grid, hide carousel
        portfolioGrid.style.display = 'grid';
        if (carouselContainer) {
            carouselContainer.style.display = 'none';
        }

        // Clear the grid
        portfolioGrid.innerHTML = '';

        // Render all filtered items
        this.filteredData.forEach((item, index) => {
            const card = this.createPortfolioCard(item);
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            portfolioGrid.appendChild(card);

            // Animate card appearance
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });

        // Show no results message if needed
        if (this.filteredData.length === 0) {
            portfolioGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h3 style="color: var(--text-secondary); margin-bottom: 0.5rem;">لا توجد نتائج</h3>
                    <p style="color: var(--text-muted);">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
                </div>
            `;
        }
    }

    renderCarouselView() {
        const portfolioGrid = document.getElementById('portfolioGrid');
        const carouselContainer = document.getElementById('carouselContainer');
        const carouselTrack = document.getElementById('carouselTrack');
        
        if (!carouselContainer || !carouselTrack) return;

        // Hide grid, show carousel
        if (portfolioGrid) {
            portfolioGrid.style.display = 'none';
        }
        carouselContainer.style.display = 'block';

        // Update carousel data
        this.carouselData = [...this.filteredData];
        
        if (this.carouselData.length === 0) {
            carouselTrack.innerHTML = `
                <div class="no-results" style="text-align: center; padding: 3rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h3 style="color: var(--text-secondary); margin-bottom: 0.5rem;">لا توجد نتائج</h3>
                    <p style="color: var(--text-muted);">جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
                </div>
            `;
            return;
        }

        // Reset carousel index if needed
        if (this.currentCarouselIndex >= this.carouselData.length) {
            this.currentCarouselIndex = 0;
        }

        // Clear carousel track
        carouselTrack.innerHTML = '';

        // Create carousel cards
        this.carouselData.forEach((item, index) => {
            const card = this.createCarouselCard(item, index);
            carouselTrack.appendChild(card);
        });

        // Update carousel positions
        this.updateCarouselPositions();
        
        // Update indicators
        this.updateCarouselIndicators();
        
        // Update navigation buttons
        this.updateCarouselNavigation();
        
        // بدء التشغيل التلقائي
        this.startAutoplay();
    }

    switchView(viewType) {
        this.currentView = viewType;
        
        // إيقاف التشغيل التلقائي عند التبديل للشبكة
        if (viewType === 'grid') {
            this.stopAutoplay();
        }
        
        // Update active button
        document.querySelectorAll('.view-toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (viewType === 'grid') {
            document.getElementById('gridViewBtn').classList.add('active');
        } else {
            document.getElementById('carouselViewBtn').classList.add('active');
        }
        
        // Re-render with new view
        this.renderPortfolio();
    }

    createCarouselCard(item, index) {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.setAttribute('data-index', index);

        const formattedDate = new Date(item.date).toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedViews = this.formatNumber(item.views);

        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="card-category">${item.categoryName}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <div class="card-rating">
                        ${this.generateStars(item.rating)}
                    </div>
                    <div class="card-views">
                        <i class="fas fa-eye"></i>
                        <span>${formattedViews}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-actions">
                        <button class="view-details-btn" onclick="portfolio.openModal(${item.id})">
                            عرض التفاصيل
                        </button>
                        <button class="card-whatsapp-btn view-details-btn" onclick="portfolio.orderServiceDirect(${item.id})">
    <i class="fab fa-whatsapp"></i>
    طلب واتساب
</button>
                    </div>
                    <span class="card-date">${formattedDate}</span>
                </div>
            </div>
        `;

        // Add click event to card
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                this.goToCarouselItem(index);
            }
        });

        return card;
    }

    updateCarouselPositions() {
        const cards = document.querySelectorAll('.carousel-card');
        const totalCards = cards.length;
        
        if (totalCards === 0) return;

        cards.forEach((card, index) => {
            const position = this.getCarouselPosition(index, this.currentCarouselIndex, totalCards);
            card.className = `carousel-card ${position}`;
        });
    }

    getCarouselPosition(cardIndex, centerIndex, totalCards) {
        const diff = cardIndex - centerIndex;
        
        if (diff === 0) return 'center';
        if (diff === 1 || (diff === -(totalCards - 1) && totalCards > 2)) return 'right';
        if (diff === -1 || (diff === totalCards - 1 && totalCards > 2)) return 'left';
        if (diff === 2 || (diff === -(totalCards - 2) && totalCards > 4)) return 'far-right';
        if (diff === -2 || (diff === totalCards - 2 && totalCards > 4)) return 'far-left';
        
        return 'hidden';
    }

    nextCarouselItem() {
        if (this.carouselData.length === 0) return;
        
        this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.carouselData.length;
        this.updateCarouselPositions();
        this.updateCarouselIndicators();
        this.updateCarouselNavigation();
        
        // إعادة تشغيل التشغيل التلقائي بعد التنقل اليدوي
        this.restartAutoplay();
    }

    previousCarouselItem() {
        if (this.carouselData.length === 0) return;
        
        this.currentCarouselIndex = this.currentCarouselIndex === 0 
            ? this.carouselData.length - 1 
            : this.currentCarouselIndex - 1;
        this.updateCarouselPositions();
        this.updateCarouselIndicators();
        this.updateCarouselNavigation();
        
        // إعادة تشغيل التشغيل التلقائي بعد التنقل اليدوي
        this.restartAutoplay();
    }

    goToCarouselItem(index) {
        if (index < 0 || index >= this.carouselData.length) return;
        
        this.currentCarouselIndex = index;
        this.updateCarouselPositions();
        this.updateCarouselIndicators();
        this.updateCarouselNavigation();
        
        // إعادة تشغيل التشغيل التلقائي بعد التنقل اليدوي
        this.restartAutoplay();
    }

    updateCarouselIndicators() {
        const indicatorsContainer = document.getElementById('carouselIndicators');
        if (!indicatorsContainer) return;

        // Clear existing indicators
        indicatorsContainer.innerHTML = '';

        // Create indicators
        this.carouselData.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `carousel-indicator ${index === this.currentCarouselIndex ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToCarouselItem(index));
            indicatorsContainer.appendChild(indicator);
        });
    }

    updateCarouselNavigation() {
        const prevBtn = document.getElementById('carouselPrev');
        const nextBtn = document.getElementById('carouselNext');
        
        if (prevBtn && nextBtn) {
            // Enable/disable buttons based on data length
            const hasData = this.carouselData.length > 0;
            prevBtn.disabled = !hasData;
            nextBtn.disabled = !hasData;
        }
    }

    createPortfolioCard(item) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-aos', 'fade-up');

        const formattedDate = new Date(item.date).toLocaleDateString('ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const formattedViews = this.formatNumber(item.views);

        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="card-category">${item.categoryName}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <div class="card-rating">
                        ${this.generateStars(item.rating)}
                    </div>
                    <div class="card-views">
                        <i class="fas fa-eye"></i>
                        <span>${formattedViews}</span>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="card-actions">
                        <button class="view-details-btn" onclick="portfolio.openModal(${item.id})">
                            عرض التفاصيل
                        </button>
                        <button class="card-whatsapp-btn view-details-btn" onclick="portfolio.orderServiceDirect(${item.id})">
    <i class="fab fa-whatsapp"></i>
    طلب واتساب
</button>
                    </div>
                    <span class="card-date">${formattedDate}</span>
                </div>
            </div>
        `;

        return card;
    }

    generateStars(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }

    openModal(itemId) {
        // استدعاء النافذة المنبثقة الجديدة لمعرض الأعمال
        if (typeof openPortfolioModal === 'function') {
            // تحديث بيانات المشاريع في النافذة الجديدة
            if (typeof portfolioProjects !== 'undefined') {
                portfolioProjects = portfolioData;
            }
            openPortfolioModal(itemId);
            return;
        }
        
        // الكود القديم كاحتياطي
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        const modal = document.getElementById('modalOverlay');
        if (!modal) return;

        // Populate modal content
        document.getElementById('modalTitle').textContent = item.title;
        document.getElementById('modalCategory').textContent = item.categoryName;
        document.getElementById('modalRating').innerHTML = this.generateStars(item.rating);
        document.getElementById('modalDate').textContent = new Date(item.date).toLocaleDateString('ar-SA');
        document.getElementById('modalViews').textContent = this.formatNumber(item.views);
        document.getElementById('modalDescription').textContent = item.detailedDescription;
        document.getElementById('reviewContent').textContent = item.clientReview;

        // Set modal image
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.src = item.image;
            modalImage.alt = item.title;
        }

        // Populate features
        const featuresContainer = document.getElementById('modalFeatures');
        if (featuresContainer && item.features) {
            featuresContainer.innerHTML = item.features.map(feature => `<li>${feature}</li>`).join('');
        }

        // Populate PDF images slider
        this.populatePdfImagesSlider(item);

        // Store current item for actions
        this.currentModalItem = item;

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Focus management
        const closeButton = document.getElementById('modalClose');
        if (closeButton) {
            closeButton.focus();
        }
    }

    closeModal() {
        const modal = document.getElementById('modalOverlay');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            this.currentModalItem = null;
        }
    }

    orderService() {
        if (!this.currentModalItem) return;

        const message = `مرحباً، أريد طلب خدمة: ${this.currentModalItem.title}`;
        const whatsappUrl = `https://wa.me/+966549225740=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    shareService() {
        if (!this.currentModalItem) return;

        if (navigator.share) {
            navigator.share({
                title: this.currentModalItem.title,
                text: this.currentModalItem.description,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            const shareText = `${this.currentModalItem.title} - ${this.currentModalItem.description}\\n${window.location.href}`;
            navigator.clipboard.writeText(shareText).then(() => {
                this.showNotification('تم نسخ الرابط إلى الحافظة');
            });
        }
    }

    handleKeyboard(e) {
        // Close modal with Escape key
        if (e.key === 'Escape') {
            this.closeModal();
        }

        // Carousel navigation with arrow keys
        if (this.currentView === 'carousel' && !e.target.matches('input, textarea')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.nextCarouselItem();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.previousCarouselItem();
            }
        }

        // Quick filter with number keys
        if (e.key >= '1' && e.key <= '8' && !e.target.matches('input, textarea')) {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const index = parseInt(e.key) - 1;
            if (filterButtons[index]) {
                filterButtons[index].click();
            }
        }

        // Toggle view with 'V' key
        if (e.key.toLowerCase() === 'v' && !e.target.matches('input, textarea')) {
            const newView = this.currentView === 'grid' ? 'carousel' : 'grid';
            this.switchView(newView);
        }
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: var(--card-bg);
            color: var(--text-primary);
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            border-left: 4px solid ${type === 'success' ? '#10b981' : '#ef4444'};
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ===== الدوال الجديدة المطلوبة =====

    // دالة طلب الخدمة مباشرة من البطاقة
    orderServiceDirect(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        const message = `مرحباً، أريد طلب خدمة: ${item.title}`;
        const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // دالة طلب خدمة مماثلة
    orderSimilarService() {
        if (!this.currentModalItem) return;

        const message = `مرحباً، أريد طلب خدمة مماثلة لـ: ${this.currentModalItem.title}`;
        const whatsappUrl = `https://wa.me/YOUR_PHONE_NUMBER?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }

    // دالة ملء شريط الصور
    populatePdfImagesSlider(item) {
        const slider = document.getElementById('pdfImagesSlider');
        const gallery = document.querySelector('.modal-pdf-gallery');
        
        if (!slider || !gallery) return;

        // إنشاء صور وهمية للعرض التوضيحي
        const sampleImages = [
            { src: item.image, page: 1 },
            { src: item.image, page: 2 },
            { src: item.image, page: 3 },
            { src: item.image, page: 4 },
            { src: item.image, page: 5 }
        ];

        // إذا كان هناك صور PDF محددة للعنصر، استخدمها
        const pdfImages = item.pdfImages || sampleImages;

        if (pdfImages && pdfImages.length > 0) {
            gallery.classList.remove('empty');
            slider.innerHTML = pdfImages.map((img, index) => `
                <div class="pdf-image-item" onclick="portfolio.viewPdfImage('${img.src}', ${img.page})">
                    <img src="${img.src}" alt="صفحة ${img.page}" loading="lazy">
                    <div class="page-number">صفحة ${img.page}</div>
                </div>
            `).join('');
        } else {
            gallery.classList.add('empty');
        }
    }

    // دالة عرض صورة PDF بحجم أكبر
    viewPdfImage(src, pageNumber) {
        // إنشاء نافذة منبثقة لعرض الصورة بحجم أكبر
        const imageModal = document.createElement('div');
        imageModal.className = 'pdf-image-modal';
        imageModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        `;

        imageModal.innerHTML = `
            <div style="max-width: 90%; max-height: 90%; position: relative;">
                <img src="${src}" alt="صفحة ${pageNumber}" style="width: 100%; height: auto; border-radius: 8px;">
                <div style="position: absolute; top: -40px; left: 0; color: white; font-size: 1.2rem; font-weight: bold;">
                    صفحة ${pageNumber}
                </div>
                <button style="position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                imageModal.remove();
            }
        });

        document.body.appendChild(imageModal);
    }

    // Utility method to refresh AOS animations
    refreshAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    // ===== دوال التشغيل التلقائي =====
    
    startAutoplay() {
        if (!this.autoplayEnabled || this.currentView !== 'carousel' || this.carouselData.length <= 1) {
            return;
        }
        
        this.stopAutoplay(); // إيقاف أي مؤقت سابق
        
        this.autoplayTimer = setInterval(() => {
            if (!this.isPaused && this.currentView === 'carousel') {
                this.nextCarouselItem();
            }
        }, this.autoplayInterval);
    }
    
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    
    pauseAutoplay() {
        this.isPaused = true;
    }
    
    resumeAutoplay() {
        this.isPaused = false;
    }
    
    restartAutoplay() {
        this.stopAutoplay();
        setTimeout(() => {
            this.startAutoplay();
        }, 1000); // إعادة البدء بعد ثانية واحدة
    }
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolio = new EnhancedPortfolio();
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        img.addEventListener('error', () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPtmE2Kcg2YrZiNis2K8g2LXZiNix2Kk8L3RleHQ+PC9zdmc+';
        });
    });
});

// Performance optimization: Intersection Observer for lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
