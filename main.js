// ملف JavaScript الرئيسي - التهيئة والإعدادات العامة

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // إخفاء شاشة التحميل
    hideLoadingScreen();
    
    // تهيئة جميع المكونات
    initializeComponents();

    // استدعاء دالة شريط التنقل الجديد
    initializeNewNavigation(); 
});

// إخفاء شاشة التحميل
function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 3000);
}

// تهيئة جميع المكونات
function initializeComponents() {
    // تهيئة العدادات
    if (typeof initCounters === 'function') {
        initCounters();
    }
    
    // تهيئة فلترة الخدمات
    if (typeof initServiceFilters === 'function') {
        initServiceFilters();
    }
    
    // تهيئة زر العودة للأعلى
    if (typeof initBackToTop === 'function') {
        initBackToTop();
    }

    // تهيئة حركات قسم "كيف نعمل"
    if (typeof initializeStepAnimations === 'function') {
        initializeStepAnimations();
    }

    // تهيئة نموذج الاتصال الجديد (إضافة جديدة)
    if (typeof initializeNewContactForm === 'function') {
        initializeNewContactForm();
    }
}

// ==================================================
//      وظائف شريط التنقل الجديد
// ==================================================
function initializeNewNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('header');

    // 1. فتح وإغلاق القائمة على الهاتف
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // 2. إغلاق القائمة عند النقر على أي رابط فيها
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. تأثير التمرير (تغيير خلفية الشريط فقط)
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (!header) return;
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =======================================================
//      وظيفة نموذج الاتصال الجديد (إرسال لواتساب)
// =======================================================
function initializeNewContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الإرسال الافتراضي

            // 1. !! هام: استبدل هذا الرقم برقم الواتساب الخاص بك !!
            const whatsappNumber = '966597389791'; 

            // 2. جمع البيانات من الحقول
            const name = document.getElementById('name').value;
            const serviceSelect = document.getElementById('service');
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            const message = document.getElementById('message').value;

            // 3. تنسيق الرسالة
            const whatsappMessage = `
طلب خدمة جديد من موقع منصة الثقة:
---------------------------------
*الاسم الكامل:* ${name}
*نوع الخدمة:* ${service}
*تفاصيل المشروع:*
${message}
            `;

            // 4. إنشاء رابط الواتساب
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage.trim( ))}`;

            // 5. فتح الرابط في نافذة جديدة
            window.open(whatsappURL, '_blank');

            if (typeof showError === 'function') {
                showError('تم تجهيز رسالتك. قم بإرسالها الآن عبر واتساب.'); 
            }
            this.reset();
        });
    }
}


// =======================================================
//      حركة ظهور عناصر قسم "كيف نعمل" عند التمرير
// =======================================================
function initializeStepAnimations() {
    if (typeof AOS === 'undefined') {
        console.warn('AOS library is not loaded. Animations for "How It Works" section will not run.');
        return;
    }
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        const animationType = (index % 2 === 0) ? 'fade-right' : 'fade-left';
        step.setAttribute('data-aos', animationType);
        step.setAttribute('data-aos-delay', (index * 100).toString());
        step.setAttribute('data-aos-duration', '600');
    });
}

// التمرير إلى قسم معين
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}

// عرض رسالة خطأ/إشعار
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: #10b981; /* لون أخضر للنجاح */
        color: white; padding: 1rem 2rem; border-radius: 8px; z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideInRight 0.3s ease-out;
    `;
    document.body.appendChild(errorDiv);
    setTimeout(() => {
        errorDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000); // زيادة مدة ظهور الرسالة
}

// وظائف مساعدة عامة
const Utils = {
    validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    validatePhone: (phone) => /^(05|5)[0-9]{8}$/.test(phone.replace(/\s+/g, '')),
    formatText: (text) => text.trim().replace(/\s+/g, ' '),
};

// إضافة الأنيميشن CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight { from { opacity: 0; transform: translateX(100%); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100%); } }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// تهيئة زر العودة للأعلى
function initBackToTop() {
    let backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top-btn';
        backToTopBtn.onclick = scrollToTop;
        document.body.appendChild(backToTopBtn);
        
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top-btn {
                position: fixed; bottom: 100px; left: 30px; width: 50px; height: 50px;
                background: linear-gradient(135deg, var(--primary-color, #1a237e), var(--primary-light, #3949ab));
                color: white; border: none; border-radius: 50%; cursor: pointer; font-size: 1.2rem;
                box-shadow: var(--shadow-lg); transition: var(--transition-normal);
                opacity: 0; visibility: hidden; transform: translateY(20px); z-index: 999;
            }
            .back-to-top-btn.show { opacity: 1; visibility: visible; transform: translateY(0); }
            .back-to-top-btn:hover { transform: translateY(-5px); box-shadow: var(--shadow-xl); }
            @media (max-width: 768px) {
                .back-to-top-btn { bottom: 90px; left: 20px; width: 45px; height: 45px; font-size: 1rem; }
            }
        `;
        document.head.appendChild(style);
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

// العودة إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// تهيئة العدادات
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-target')); // Use parseFloat for decimals
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const duration = 2000;
    const steps = 100;
    const increment = target / steps;
    const stepTime = duration / steps;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Check if the target is a decimal number
        if (target % 1 !== 0) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}
