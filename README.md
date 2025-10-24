# منصة المنار للخدمات الطلابية المتكاملة

[![License](https://img.shields.io/badge/license-Proprietary-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](package.json)

## نظرة عامة

منصة المنار هي موقع إلكتروني شامل لتقديم الخدمات الأكاديمية والمهنية للطلاب الجامعيين. توفر المنصة واجهة تفاعلية سهلة الاستخدام مع نظام تقييم وإعجاب متطور، ومعرض أعمال احترافي، وحاسبة معدل تراكمي.

## المميزات الرئيسية

- ✅ **واجهة تفاعلية**: تصميم عصري متجاوب مع جميع الأجهزة
- ⚡ **بحث ذكي**: نظام بحث متقدم مع فلترة تلقائية
- 💝 **نظام تقييم وإعجاب**: حفظ التفضيلات في المتصفح
- 📱 **تكامل واتساب**: إرسال رسائل مخصصة مباشرة
- 🎨 **معرض أعمال**: عرض شبكي ودائري للمشاريع
- 🧮 **حاسبة معدل**: حساب المعدل الفصلي والتراكمي
- 🌐 **RTL Support**: دعم كامل للغة العربية

## البدء السريع

### المتطلبات

- متصفح ويب حديث (Chrome, Firefox, Safari, Edge)
- خادم محلي (اختياري للتطوير)

### التثبيت

```bash
# استنساخ المشروع
git clone <repository-url>
cd workspace

# فتح الموقع
# استخدم Live Server في VS Code أو Python HTTP Server
python -m http.server 8000
```

افتح المتصفح على `http://localhost:8000`

## البنية الأساسية

```
workspace/
├── index.html              # الصفحة الرئيسية
├── Gpa.html               # حاسبة المعدل التراكمي
├── main.css               # الأنماط العامة
├── style.css              # أنماط المكونات
├── portfilo style.css     # أنماط معرض الأعمال
├── portfolio-modal.css    # أنماط النافذة المنبثقة
├── main.js                # دوال التهيئة والأدوات
├── script.js              # منطق التطبيق الرئيسي
├── data.js                # بيانات بطاقات الخدمات
├── messages-data.js       # قوالب رسائل واتساب
├── portfilo.js            # إدارة معرض الأعمال
├── portfolio-modal.js     # وظائف النافذة المنبثقة
└── assets/                # الصور والموارد
```

## الوثائق

لقد تم إنشاء وثائق شاملة لجميع جوانب المشروع:

### 📚 [API Documentation](API_DOCUMENTATION.md)
وثائق تفصيلية لجميع الدوال العامة والمكونات والواجهات البرمجية:
- هياكل البيانات الأساسية
- دوال التطبيق الرئيسي
- نظام إدارة معرض الأعمال
- الأدوات المساعدة
- أمثلة استخدام شاملة

### 👤 [User Guide](USER_GUIDE.md)
دليل شامل للمستخدمين باللغة العربية يشمل:
- كيفية استخدام البطاقات الرئيسية
- نظام البحث والفلترة
- التقييم والإعجاب
- معرض الأعمال
- التواصل عبر واتساب
- حاسبة المعدل التراكمي
- الأسئلة الشائعة
- نصائح وحيل

### 💻 [Developer Guide](DEVELOPER_GUIDE.md)
دليل المطورين الشامل يتضمن:
- البدء السريع
- معمارية المشروع
- إضافة ميزات جديدة
- إدارة البيانات والحالة
- نظام الأحداث
- دليل التنسيق
- أفضل الممارسات
- الاختبار والنشر
- استكشاف الأخطاء وإصلاحها

## المكونات الرئيسية

### 1. نظام البطاقات (Cards System)
- عرض ديناميكي للخدمات
- تقييم وإعجاب تفاعلي
- نوافذ منبثقة للخدمات التفصيلية

### 2. معرض الأعمال (Portfolio)
- عرض شبكي (Grid View)
- عرض دائري (Carousel View)
- فلترة وترتيب متقدم
- نافذة منبثقة للتفاصيل

### 3. نظام البحث (Search System)
- بحث رئيسي ذكي
- بحث داخل النوافذ
- اقتراحات متعددة
- تمييز النتائج

### 4. حاسبة المعدل (GPA Calculator)
- دعم نظام 4 و 5
- حساب المعدل الفصلي
- حساب المعدل التراكمي
- جدول تفصيلي للنتائج

## التقنيات المستخدمة

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables, Flexbox, Grid
- **Animations**: AOS (Animate On Scroll)
- **Fonts**: Google Fonts (Tajawal, Cairo)
- **Icons**: Font Awesome 6.4.0
- **Storage**: LocalStorage API
- **Analytics**: Google Analytics, Google Tag Manager

## الميزات التقنية

### حفظ الحالة
- استخدام LocalStorage لحفظ التقييمات والإعجابات
- لا يتطلب تسجيل دخول
- بيانات محلية آمنة

### تحسين الأداء
- تحميل تدريجي للصور (Lazy Loading)
- تفويض الأحداث (Event Delegation)
- تقليل معالجة DOM
- تأخير البحث (Debounced Search)

### الاستجابة
- تصميم متجاوب بالكامل
- دعم الأجهزة اللمسية
- تأثيرات خاصة للفأرة على Desktop

### إمكانية الوصول
- دعم لوحة المفاتيح
- ARIA attributes
- نصوص بديلة للصور
- تباين ألوان مناسب

## التطوير

### إضافة خدمة جديدة

```javascript
// في ملف data.js
const newService = {
  id: 'unique_id',
  name: 'اسم الخدمة',
  details: [
    {
      icon: 'fas fa-star',
      title: 'عنوان',
      text: 'وصف'
    }
  ],
  baseLikes: 100,
  baseRatingSum: 500,
  baseVotes: 100
};

cardData[0].services.items.push(newService);
```

### إضافة مشروع لمعرض الأعمال

```javascript
// في ملف portfilo.js
const newProject = {
  id: 100,
  title: "عنوان المشروع",
  category: "programming",
  categoryName: "البرمجة والتقنية",
  description: "وصف مختصر",
  // ... المزيد من الحقول
};

portfolioData.push(newProject);
```

## الاختبار

```bash
# اختبار يدوي
- تصفح جميع البطاقات
- اختبار نظام البحث
- التقييم والإعجاب
- فتح النوافذ المنبثقة
- اختبار على أجهزة مختلفة

# اختبار المتصفحات
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
```

## النشر

### Netlify

```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# النشر
netlify deploy --prod
```

### GitHub Pages

```bash
# إنشاء فرع gh-pages
git checkout -b gh-pages
git push origin gh-pages

# تفعيل GitHub Pages من إعدادات المستودع
```

## المساهمة

نرحب بالمساهمات! الرجاء قراءة [دليل المطورين](DEVELOPER_GUIDE.md) للحصول على التفاصيل.

### عملية المساهمة

1. Fork المشروع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## الدعم

للحصول على الدعم:
- 📱 واتساب: +966597389791
- 💬 تليجرام: [رابط القناة]
- 📧 البريد الإلكتروني: support@example.com

## الترخيص

هذا المشروع محمي بحقوق الملكية. جميع الحقوق محفوظة © 2025 منصة المنار.

## الشكر والتقدير

- [Font Awesome](https://fontawesome.com/) - للأيقونات
- [Google Fonts](https://fonts.google.com/) - للخطوط العربية
- [AOS](https://michalsnik.github.io/aos/) - لتأثيرات الحركة
- [Unsplash](https://unsplash.com/) - للصور التوضيحية

## التحديثات

### الإصدار 1.0.0 (2024-03-20)
- ✨ إطلاق النسخة الأولى
- 📚 وثائق شاملة
- 🎨 تصميم محسّن
- 🔧 تحسينات الأداء

---

**تم بناؤه بـ ❤️ في المملكة العربية السعودية**
