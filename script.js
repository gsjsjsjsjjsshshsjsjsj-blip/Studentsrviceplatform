document.addEventListener('DOMContentLoaded', () => {
    const App = {
        // خاصية جديدة للكشف عن أجهزة اللمس
        isTouchDevice: ('ontouchstart' in window) || (navigator.maxTouchPoints > 0),

        // 1. العناصر: كل عناصر الصفحة التي نحتاجها
        elements: {
            cardsContainer: document.getElementById('cardsContainer'),
            cardTemplate: document.getElementById('card-template'),
            
            serviceModal: document.getElementById('msc-details-popup'),
            closeModalBtn: document.getElementById('msc-popup-close-btn'),
            
            detailsModal: document.getElementById('detailsModal'),
            
            serviceList: document.getElementById('serviceList'),
            itemTemplate: document.getElementById('service-item-template'),
            searchInput: document.getElementById('searchInput'),
            modalTitle: document.getElementById('modalTitle'),
            noResultsMessage: document.getElementById('noResultsMessage'),
            // ... داخل كائن App

    mainCardSearchInput: document.getElementById('mainCardSearch'), // <-- أضف هذا
    cardsContainer: document.getElementById('cardsContainer'),
    cardTemplate: document.getElementById('card-template'),
            
    // ... باقي العناصر
},

        

        // 2. الحالة: لتخزين البيانات المتغيرة
        state: {
            currentServices: new Map(),
            currentCardId: null,
        },

        // 3. دالة التهيئة الرئيسية: نقطة انطلاق التطبيق
        init() {
            this.buildCards();
            this.addGlobalEventListeners();
            this.showWelcomeNotification();
        },

        // 4. بناء البطاقات من البيانات
        buildCards() {
            cardData.forEach(data => {
                const cardElement = this.createCardElement(data);
                this.elements.cardsContainer.appendChild(cardElement);
            });
        },

        // 5. إنشاء عنصر البطاقة الواحدة (مع تعديل للجوال)
        createCardElement(data) {
            const cardNode = this.elements.cardTemplate.content.cloneNode(true);
            const card = cardNode.querySelector('.msc-service-card');

            // ملء بيانات البطاقة
            card.dataset.cardId = data.id;
            card.querySelector('.msc-card-image-section').style.backgroundImage = `url('${data.image}')`;
            card.querySelector('.card-title-text').textContent = data.title;
            card.querySelector('.card-rating-text').textContent = data.ratingText;
            card.querySelector('.card-delivery-text').textContent = data.deliveryText;
            card.querySelector('.card-price-text').textContent = data.priceText;
            card.querySelector('.card-views span').textContent = data.views;
            card.querySelector('.card-likes span').textContent = data.likes;
           // --- بداية التعديل: توليد رابط واتساب ديناميكي للبطاقة الرئيسية ---

// 1. احصل على قالب الرسالة العام من ملف الرسائل
const messageTemplate = messageTemplates.generalRequest;

// 2. استبدل المتغير النائب {cardTitle} بعنوان البطاقة الفعلي (data.title)
const finalMessage = messageTemplate.replace('{cardTitle}', data.title);

// 3. قم بتشفير الرسالة النهائية لتكون صالحة للاستخدام في الرابط
const encodedMessage = encodeURIComponent(finalMessage);

// 4. قم ببناء رابط الواتساب الكامل وقم بتعيينه للزر
card.querySelector('.card-whatsapp-link').href = `https://wa.me/966597389791?text=${encodedMessage}`;

// --- نهاية التعديل ---


            const tagsGrid = card.querySelector('.card-tags-grid');
            data.tags.forEach(tagText => {
                const tag = document.createElement('span');
                tag.className = 'shiny-tag';
                tag.textContent = tagText;
                tagsGrid.appendChild(tag);
            });

            const ratingStarsContainer = card.querySelector('.card-rating-stars');
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('i');
                star.className = 'far fa-star';
                star.dataset.value = i;
                ratingStarsContainer.appendChild(star);
            }
            
            // ربط الأحداث الخاصة بالبطاقة
            // تعديل مهم: تفعيل حركة الماوس فقط إذا لم يكن الجهاز يدعم اللمس
            if (!this.isTouchDevice) {
                card.addEventListener('mousemove', this.handleCardMouseMove.bind(this));
                card.addEventListener('mouseleave', this.handleCardMouseLeave.bind(this));
            }

            card.querySelector('.card-likes').addEventListener('click', this.handleCardLike.bind(this));
            ratingStarsContainer.addEventListener('click', this.handleCardRate.bind(this));

            return card;
        },

        // 6. ربط الأحداث العامة (للأزرار والنوافذ)
        addGlobalEventListeners() {
            document.body.addEventListener('click', this.handleDynamicAction.bind(this));
            
            // استخدام دالة الإغلاق المخصصة عند النقر على زر الإغلاق
            this.elements.closeModalBtn.addEventListener('click', () => this.closeMainModal());
            
            // استخدام دالة الإغلاق المخصصة عند النقر على الخلفية المعتمة
            this.elements.serviceModal.addEventListener('click', (e) => {
                if (e.target === this.elements.serviceModal) this.closeMainModal();
            });

            this.elements.searchInput.addEventListener('input', e => this.filterServices(e.target.value));
            document.addEventListener('keydown', this.handleEscape.bind(this));
            // ... داخل دالة addGlobalEventListeners

    // ربط حدث البحث الرئيسي
    this.elements.mainCardSearchInput.addEventListener('input', e => this.filterMainCards(e.target.value));

    // ... باقي الأحداث الموجودة لديك
},

        

        // 7. معالج الأحداث الديناميكي المركزي
        handleDynamicAction(e) {
            const actionTarget = e.target.closest('[data-action]');
            if (!actionTarget) return;

            const action = actionTarget.dataset.action;
            const cardElement = actionTarget.closest('.msc-service-card');
            const cardId = cardElement?.dataset.cardId;
            const serviceLi = actionTarget.closest('li[data-id]');
            const serviceId = serviceLi?.dataset.id;

            const actions = {
                'open-services-modal': () => this.openMainModal(cardId),
                'close-details-modal': () => this.closeDetailsAndReopenMain(),
                'reset-prefs': () => this.resetState(),
                'show-details': () => this.showDetails(serviceId),
                'like-service': () => this.toggleServiceLike(serviceId, actionTarget),
                'rate-service': () => this.rateService(serviceId, e.target.closest('i')?.dataset.value, actionTarget),
            };

            if (actions[action]) {
                e.preventDefault();
                actions[action]();
            }
        },

        // 8. دالة فتح النافذة الرئيسية (مع الحل النهائي)
        openMainModal(cardId) {
            if (!cardId) return;
            
            const currentCardData = cardData.find(c => c.id === cardId);
            if (!currentCardData) return;

            this.state.currentCardId = cardId;
            this.loadState(); 

            this.elements.modalTitle.textContent = currentCardData.services.title;
            this.renderServiceList();
            
            const quoteBtn = document.getElementById('requestQuoteBtn');
            if (quoteBtn) {
                const encodedMessage = encodeURIComponent(messageTemplates.quoteRequest);
                quoteBtn.href = `https://wa.me/966597389791?text=${encodedMessage}`;
            }

            // التحكم المباشر بالأنماط (الحل المضمون )
            const allCards = this.elements.cardsContainer.querySelectorAll('.msc-service-card');
            allCards.forEach(card => {
                card.style.transition = 'all 0.4s ease';
                if (card.dataset.cardId === cardId) {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1.03)';
                    card.style.pointerEvents = 'auto';
                } else {
                    card.style.opacity = '0.4';
                    card.style.transform = 'scale(0.98)';
                    card.style.pointerEvents = 'none';
                }
            });

            this.elements.serviceModal.classList.add('show');
        },

        // 9. دالة إغلاق النافذة الرئيسية (الجديدة والمخصصة)
        closeMainModal() {
            this.elements.serviceModal.classList.remove('show');

            // إعادة الأنماط للحالة الطبيعية
            const allCards = this.elements.cardsContainer.querySelectorAll('.msc-service-card');
            allCards.forEach(card => {
                card.style.opacity = '';
                card.style.transform = '';
                card.style.pointerEvents = '';
                card.style.transition = '';
            });
        },

        // --- باقي دوال التطبيق (تبقى كما هي في الغالب) ---

        handleCardMouseMove(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left, y = e.clientY - rect.top;
            const rotateY = (x - rect.width / 2) / (rect.width / 2) * -5;
            const rotateX = (y - rect.height / 2) / (rect.height / 2) * 5;
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        },
        handleCardMouseLeave(e) {
            e.currentTarget.style.transform = 'rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        },
        handleCardLike(e) {
            const likeButton = e.currentTarget;
            const heartIcon = likeButton.querySelector('i');
            const countSpan = likeButton.querySelector('span');
            const isLiked = heartIcon.classList.toggle('liked');
            heartIcon.classList.toggle('far');
            heartIcon.classList.toggle('fas');
            let currentLikes = parseInt(countSpan.textContent);
            countSpan.textContent = isLiked ? currentLikes + 1 : currentLikes - 1;
            this.showToast(isLiked ? "💖 شكراً لإعجابك!" : "💔 تم إلغاء الإعجاب");
        },
        handleCardRate(e) {
            const ratingContainer = e.currentTarget;
            const value = e.target.dataset.value;
            if (!value) return;
            ratingContainer.querySelectorAll('i').forEach(s => {
                s.classList.toggle('active', s.dataset.value <= value);
                s.classList.toggle('fas', s.dataset.value <= value);
                s.classList.toggle('far', s.dataset.value > value);
            });
            this.showToast(`شكراً لتقييمك ${value} نجوم! ⭐`);
        },
        loadState() {
            const allPrefs = JSON.parse(localStorage.getItem('services_prefs')) || {};
            const cardPrefs = allPrefs[this.state.currentCardId] || {};
            const currentCardData = cardData.find(c => c.id === this.state.currentCardId);
            
            this.state.currentServices.clear();
            currentCardData.services.items.forEach(item => {
                const userPrefs = cardPrefs[item.id] || { userRating: 0, userLiked: false };
                const itemState = {
                    likes: (item.baseLikes || 0) + (userPrefs.userLiked ? 1 : 0),
                    rating: (item.baseRatingSum || 0) + (userPrefs.userRating > 0 ? userPrefs.userRating : 0),
                    votes: (item.baseVotes || 0) + (userPrefs.userRating > 0 ? 1 : 0),
                    userRating: userPrefs.userRating,
                    userLiked: userPrefs.userLiked
                };
                this.state.currentServices.set(item.id, { ...item, state: itemState });
            });
        },
        saveState() {
            const allPrefs = JSON.parse(localStorage.getItem('services_prefs')) || {};
            if (!allPrefs[this.state.currentCardId]) {
                allPrefs[this.state.currentCardId] = {};
            }
            
            this.state.currentServices.forEach((item, id) => {
                allPrefs[this.state.currentCardId][id] = { 
                    userRating: item.state.userRating, 
                    userLiked: item.state.userLiked 
                };
            });
            localStorage.setItem('services_prefs', JSON.stringify(allPrefs));
        },
        resetState() {
            const allPrefs = JSON.parse(localStorage.getItem('services_prefs')) || {};
            if (allPrefs[this.state.currentCardId]) {
                delete allPrefs[this.state.currentCardId];
                localStorage.setItem('services_prefs', JSON.stringify(allPrefs));
                this.loadState();
                this.renderServiceList();
                this.showModalToast("تمت إعادة تعيين تفضيلات هذه الفئة.");
            }
        },
        
        renderServiceList() {
            this.elements.serviceList.innerHTML = '';
            this.state.currentServices.forEach(item => {
                this.elements.serviceList.appendChild(this.createServiceElement(item));
            });
            this.filterServices(this.elements.searchInput.value);
        },
        createServiceElement(item) {
            const { id, name, state } = item;
            const avgRating = state.votes > 0 ? (state.rating / state.votes).toFixed(1) : "5.0";
            const templateNode = this.elements.itemTemplate.content.cloneNode(true);
            const li = templateNode.querySelector('li');
            li.dataset.id = id;
            li.querySelector('.overall-rating-value').textContent = avgRating;
            li.querySelector('.service-name').textContent = name;
            li.querySelector('.service-likes').textContent = state.likes;
            const likeBtn = li.querySelector('.like-btn');
            likeBtn.classList.toggle('liked', state.userLiked);
            const heartIcon = likeBtn.querySelector('.fa-heart');
            heartIcon.classList.toggle('fas', state.userLiked);
            heartIcon.classList.toggle('far', !state.userLiked);
            const message = messageTemplates.orderRequest.replace('{serviceName}', name);
            li.querySelector('.service-order-link').href = `https://wa.me/966597389791?text=${encodeURIComponent(message  )}`;
            const starContainer = li.querySelector('.interactive-rating');
            for (let i = 1; i <= 5; i++) {
                const star = document.createElement('i');
                star.className = `fa-star ${state.userRating >= i ? 'fas active' : 'far'}`;
                star.dataset.value = i;
                starContainer.appendChild(star);
            }
            return li;
        },
        updateServiceItemUI(id) {
            const item = this.state.currentServices.get(id);
            const li = this.elements.serviceList.querySelector(`li[data-id="${id}"]`);
            if (!li || !item) return;
            const { state } = item;
            const avgRating = state.votes > 0 ? (state.rating / state.votes).toFixed(1) : "5.0";
            li.querySelector('.overall-rating-value').textContent = avgRating;
            li.querySelector('.service-likes').textContent = state.likes;
            const likeBtn = li.querySelector('.like-btn');
            likeBtn.classList.toggle('liked', state.userLiked);
            likeBtn.querySelector('.fa-heart').classList.toggle('fas', state.userLiked);
            likeBtn.querySelector('.fa-heart').classList.toggle('far', !state.userLiked);
            li.querySelectorAll('.interactive-rating i').forEach((star, i) => {
                star.className = `fa-star ${state.userRating > i ? 'fas active' : 'far'}`;
            });
        },
        toggleServiceLike(id, likeBtn) {
            const item = this.state.currentServices.get(id);
            if (!item) return;
            item.state.userLiked = !item.state.userLiked;
            item.state.likes += item.state.userLiked ? 1 : -1;
            this.showModalToast(item.state.userLiked ? 'شكراً لإعجابك!' : 'تم إزالة الإعجاب');
            this.saveState();
            this.updateServiceItemUI(id);
        },
        // ... داخل كائن App
// أضف هذه الدالة داخل كائن App
showWelcomeNotification() {
    // التحقق مما إذا كان الإشعار قد ظهر بالفعل في هذه الجلسة
    if (sessionStorage.getItem('welcomeToastShown')) {
        return; // إذا ظهر، لا تفعل شيئًا
    }

    // 1. تجهيز الرسالة مع استخدام وسوم HTML
    const welcomeMessage = `
        <div style="text-align: right; line-height: 1.6;">
            <b>أهلاً وسهلاً، نورت المنصة! 🌟</b>  

            نرجو التقييم والإعجاب بالخدمات، فهذا يفرق معنا.  

            <small>ملاحظة): انقر على )"<b>عرض الخدمات</b>" في كل بطاقة لاستكشافها.</small>
        </div>
    `;

    // 2. إظهار الإشعار لمدة طويلة (10 ثوانٍ)
    // نستخدم setTimeout لتأخير ظهوره قليلاً بعد تحميل الصفحة
    setTimeout(() => {
        this.showToast(welcomeMessage, 10000); 
    }, 2000); // سيظهر بعد ثانيتين من تحميل الصفحة

    // 3. تسجيل أن الإشعار قد ظهر في هذه الجلسة
    sessionStorage.setItem('welcomeToastShown', 'true');
},

// دالة البحث الرئيسية الجديدة
// في ملف script.js

filterMainCards(query) {
    const normalizedQuery = query.toLowerCase().trim();
    if (normalizedQuery === '') return;

    const directMatches = [];
    const indirectMatches = [];

    // --- الخطوة 1: جمع كل النتائج ---
    for (const cardInfo of cardData) {
        // البحث المباشر
        const titleMatch = cardInfo.title.toLowerCase().includes(normalizedQuery);
        const tagsMatch = cardInfo.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
        const ratingMatch = cardInfo.ratingText.toLowerCase().includes(normalizedQuery);
        const deliveryMatch = cardInfo.deliveryText.toLowerCase().includes(normalizedQuery);
        const priceMatch = cardInfo.priceText.toLowerCase().includes(normalizedQuery);

        if (titleMatch || tagsMatch || ratingMatch || deliveryMatch || priceMatch) {
            directMatches.push(cardInfo);
        }

        // البحث غير المباشر (داخل الخدمات)
        const foundServices = cardInfo.services.items.filter(service => service.name.toLowerCase().includes(normalizedQuery));
        if (foundServices.length > 0) {
            indirectMatches.push({ card: cardInfo, services: foundServices });
        }
    }

    // --- الخطوة 2: اتخاذ القرار بناءً على النتائج المجمعة ---
    if (directMatches.length === 1 && indirectMatches.length === 0) {
        // **الحالة 1: تطابق مباشر واحد وفريد**
        this.scrollToCard(directMatches[0].id, true); // تمرير مع تمييز

    } else if (directMatches.length > 0) {
        // **الحالة 2: عدة تطابقات مباشرة (أو مباشر وغير مباشر معاً)**
        // نعطي الأولوية للتطابقات المباشرة
        const message = `وجدنا ${directMatches.length} تطابقات مباشرة لكلمة "<b>${normalizedQuery}</b>":`;
        const buttons = directMatches.map(card => ({
            text: card.title,
            action: () => this.scrollToCard(card.id)
        }));
        this.showMultiChoiceToast(message, buttons);

    } else if (indirectMatches.length > 0) {
        // **الحالة 3: لا يوجد تطابق مباشر، ولكن يوجد تطابق داخلي**
        const totalServices = indirectMatches.reduce((sum, match) => sum + match.services.length, 0);
        const message = `وجدنا ${totalServices} خدمة ذات صلة بـ "<b>${normalizedQuery}</b>" داخل البطاقات التالية:`;
        const buttons = indirectMatches.map(match => ({
            text: `في: ${match.card.title}`,
            action: () => this.scrollToCard(match.card.id)
        }));
        this.showMultiChoiceToast(message, buttons);

    } else {
        // **الحالة 4: لا توجد أي نتائج**
        this.showToast("لم يتم العثور على نتائج. جرّب البحث بكلمات أخرى.");
    }
},

// دالة مساعدة للتمرير والتمييز (لتنظيف الكود)
scrollToCard(cardId, highlight = false) {
    const cardElement = document.querySelector(`.msc-service-card[data-card-id="${cardId}"]`);
    if (cardElement) {
        cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (highlight) {
            cardElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            cardElement.style.transform = 'scale(1.05)';
            cardElement.style.boxShadow = '0 0 25px var(--msc-primary-color)';
            setTimeout(() => {
                cardElement.style.transform = '';
                cardElement.style.boxShadow = '';
            }, 2500);
        }
    }
},
// في ملف script.js، داخل كائن App

// **احذف دالة showSmartToast بالكامل**
// وأضف هذه الدالة الجديدة بدلاً منها

// دالة الإشعار متعدد الخيارات الجديدة
showMultiChoiceToast(message, buttons) {
    const existing = document.querySelector('.multi-choice-toast');
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast multi-choice-toast";

    // إنشاء حاوية الأزرار
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'toast-buttons-container';

    buttons.forEach(btnInfo => {
        const button = document.createElement('button');
        button.className = 'toast-button';
        button.textContent = btnInfo.text;
        button.addEventListener('click', () => {
            btnInfo.action(); // تنفيذ الإجراء المخصص للزر
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        });
        buttonsContainer.appendChild(button);
    });

    toast.innerHTML = `<span class="toast-message">${message}</span>`;
    toast.appendChild(buttonsContainer);

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    // إغلاق تلقائي بعد فترة أطول للسماح بالاختيار
    setTimeout(() => {
        if (document.body.contains(toast)) {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 300);
        }
    }, 10000); // 10 ثوانٍ
},

// ... دالة showToast الحالية لديك

        rateService(id, value, ratingContainer) {
            if (!value) return;
            const item = this.state.currentServices.get(id);
            if (!item) return;
            const newRating = parseInt(value, 10);
            const oldRating = item.state.userRating;
            if (oldRating === 0) {
                item.state.votes++;
                item.state.rating += newRating;
                this.showModalToast(`شكراً لتقييمك ${newRating} نجوم! ⭐`);
            } else {
                item.state.rating = item.state.rating - oldRating + newRating;
                this.showModalToast(`تم تحديث تقييمك إلى ${newRating} نجوم! ⭐`);
            }
            item.state.userRating = newRating;
            this.saveState();
            this.updateServiceItemUI(id);
        },
        filterServices(query) {
            const normalizedQuery = query.toLowerCase().trim();
            let visibleCount = 0;
            this.elements.serviceList.querySelectorAll('li').forEach(li => {
                const serviceName = this.state.currentServices.get(li.dataset.id)?.name.toLowerCase() || '';
                const isVisible = serviceName.includes(normalizedQuery);
                li.style.display = isVisible ? 'flex' : 'none';
                if (isVisible) visibleCount++;
            });
            this.elements.noResultsMessage.style.display = (visibleCount === 0 && normalizedQuery !== '') ? 'block' : 'none';
        },
        showDetails(id) {
            const item = this.state.currentServices.get(id);
            if (!item) return;
            document.getElementById('detailsModalTitle').textContent = item.name;
            const detailsContainer = document.getElementById('detailsModalContent');
            detailsContainer.innerHTML = '';
            if (Array.isArray(item.details)) {
                item.details.forEach(detail => {
                    const detailElement = document.createElement('div');
                    detailElement.className = 'detail-item';
                    detailElement.innerHTML = `<div class="detail-item-icon"><i class="${detail.icon}"></i></div><div class="detail-item-text"><h4>${detail.title}</h4><p>${detail.text}</p></div>`;
                    detailsContainer.appendChild(detailElement);
                });
            } else {
                detailsContainer.innerHTML = `<p>${item.details}</p>`;
            }
            const message = messageTemplates.orderRequest.replace('{serviceName}', item.name);
            document.getElementById('detailsModalWhatsappBtn').href = `https://wa.me/966597389791?text=${encodeURIComponent(message  )}`;
            this.closeMainModal(); // نغلق النافذة الرئيسية أولاً
            this.elements.detailsModal.classList.add('show');
        },
        closeDetailsAndReopenMain() {
            this.elements.detailsModal.classList.remove('show');
            // نفتح النافذة الرئيسية مرة أخرى مع الـ ID المحفوظ
            setTimeout(() => this.openMainModal(this.state.currentCardId), 50);
        },
        handleEscape(e) {
            if (e.key !== 'Escape') return;
            if (this.elements.detailsModal.classList.contains('show')) {
                this.closeDetailsAndReopenMain();
            } else if (this.elements.serviceModal.classList.contains('show')) {
                this.closeMainModal();
            }
        },
        showToast(message, duration = 3000) { // 1. أضفنا مدة افتراضية
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message; // 2. استخدمنا innerHTML بدلاً من textContent
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, duration); // 3. استخدمنا المدة المخصصة
},

        showModalToast(message) {
            const container = this.elements.serviceModal.querySelector('.msc-details-popup-content');
            if (!container) return;
            const existing = container.querySelector('.modal-toast');
            if (existing) existing.remove();
            const toast = document.createElement("div");
            toast.className = "modal-toast";
            toast.textContent = message;
            container.appendChild(toast);
            setTimeout(() => toast.classList.add("show"), 50);
            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => toast.remove(), 400);
            }, 2500);
        }
    };

    // تشغيل التطبيق
    App.init();
});
