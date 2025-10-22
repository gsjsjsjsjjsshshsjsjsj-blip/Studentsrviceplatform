// نافذة منبثقة لمعرض الأعمال - تصميم محسن واحترافي

// بيانات المشاريع (سيتم تحديثها من ملف portfilo.js)
let portfolioProjects = [];

// فتح النافذة المنبثقة لمعرض الأعمال
function openPortfolioModal(projectId) {
    // البحث عن المشروع
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    // إنشاء النافذة المنبثقة
    const portfolioModal = document.createElement('div');
    portfolioModal.className = 'portfolio-modal';
    portfolioModal.innerHTML = `
        <div class="portfolio-modal-content">
            <div class="portfolio-modal-header">
                <button class="portfolio-modal-close" onclick="closePortfolioModal()">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="portfolio-modal-title">${project.title}</h2>
                <span class="portfolio-modal-category">${project.categoryName || project.category}</span>
                
                <!-- شريط المعلومات السريعة -->
                <div class="portfolio-quick-stats">
                    <div class="portfolio-stat-item">
                        <span class="portfolio-stat-value">${project.rating || '5.0'}</span>
                        <div class="portfolio-stat-label">⭐ التقييم</div>
                    </div>
                    <div class="portfolio-stat-item">
                        <span class="portfolio-stat-value">${project.views || '0'}</span>
                        <div class="portfolio-stat-label">👁️ المشاهدات</div>
                    </div>
                    <div class="portfolio-stat-item">
                        <span class="portfolio-stat-value">${project.deliveryDate || 'غير محدد'}</span>
                        <div class="portfolio-stat-label">📅 مدة التسليم</div>
                    </div>
                    <div class="portfolio-stat-item">
                        <span class="portfolio-stat-value">${project.date || 'غير محدد'}</span>
                        <div class="portfolio-stat-label">📆 تاريخ الإنجاز</div>
                    </div>
                </div>
            </div>
            
            <div class="portfolio-modal-body">
                <!-- شريط الصور الأفقي المحسن -->
                <div class="portfolio-screenshots">
                    <h3>معاينة العمل</h3>
                    <div class="screenshots-container">
                        ${project.screenshots && project.screenshots.length > 0 ? 
                            project.screenshots.map((screenshot, index) => `
                                <div class="screenshot-item" onclick="openImageViewer('${screenshot}')">
                                    <div class="screenshot-counter">${index + 1}/${project.screenshots.length}</div>
                                    <img src="${screenshot}" alt="لقطة شاشة ${index + 1} من المشروع" loading="lazy" />
                                </div>
                            `).join('') : 
                            `<div style="text-align: center; padding: 40px; color: #666;">
                                <i class="fas fa-image" style="font-size: 48px; margin-bottom: 15px; opacity: 0.5;"></i>
                                <p>لا توجد لقطات شاشة متاحة لهذا المشروع</p>
                            </div>`
                        }
                    </div>
                </div>

                <!-- معلومات المشروع المحسنة -->
                <div class="portfolio-info">
                    <div class="portfolio-info-item">
                        <span class="portfolio-info-icon">⭐</span>
                        <span class="portfolio-info-value">${project.rating || '5.0'}</span>
                        <div class="portfolio-info-label">تقييم العملاء</div>
                    </div>
                    <div class="portfolio-info-item">
                        <span class="portfolio-info-icon">👁️</span>
                        <span class="portfolio-info-value">${formatNumber(project.views || 0)}</span>
                        <div class="portfolio-info-label">عدد المشاهدات</div>
                    </div>
                    <div class="portfolio-info-item">
                        <span class="portfolio-info-icon">📅</span>
                        <span class="portfolio-info-value">${project.deliveryDate || 'متغير'}</span>
                        <div class="portfolio-info-label">مدة التسليم</div>
                    </div>
                    <div class="portfolio-info-item">
                        <span class="portfolio-info-icon">📆</span>
                        <span class="portfolio-info-value">${formatDate(project.date) || 'غير محدد'}</span>
                        <div class="portfolio-info-label">تاريخ الإنجاز</div>
                    </div>
                </div>

                <!-- الوصف المحسن -->
                <div class="portfolio-description">
                    <h3>وصف المشروع</h3>
                    <p>${project.detailedDescription || project.description || 'لا يوجد وصف مفصل متاح لهذا المشروع.'}</p>
                    
                    ${project.features && project.features.length > 0 ? `
                        <div class="portfolio-features">
                            <h4>ما يشمله هذا العمل:</h4>
                            <div class="portfolio-features-list">
                                ${project.features.map(feature => `
                                    <div class="portfolio-feature-item">${feature}</div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- رأي العميل المحسن -->
                <div class="portfolio-client-review">
                    <h3>رأي العميل</h3>
                    <div class="portfolio-client-review-content">
                        <div class="portfolio-client-review-image">
                            <img src="${project.clientReviewImage || 'https://picsum.photos/300/200?random=' + project.id}" 
                                 alt="لقطة شاشة من رأي العميل" loading="lazy" />
                        </div>
                        <div class="portfolio-client-review-text">
                            ${project.clientReview || 'عميل راضٍ عن جودة الخدمة المقدمة والالتزام بالمواعيد المحددة. العمل تم بمستوى احترافي عالي.'}
                        </div>
                    </div>
                </div>

                <!-- أزرار الإجراءات المحسنة -->
                <div class="portfolio-actions">
                    <a href="https://wa.me/966549225740?text=أريد طلب خدمة مشابهة لمشروع: ${encodeURIComponent(project.title)}" 
                       class="portfolio-action-btn primary" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                        طلب خدمة مشابهة
                    </a>
                    <button class="portfolio-action-btn secondary" onclick="closePortfolioModal()">
                        <i class="fas fa-times"></i>
                        إغلاق
                    </button>
                </div>
            </div>
        </div>
    `;

    // إضافة النافذة إلى الصفحة
    document.body.appendChild(portfolioModal);

    // إظهار النافذة مع تأثير انتقالي
    setTimeout(() => {
        portfolioModal.classList.add('show');
    }, 10);

    // منع التمرير في الخلفية
    document.body.style.overflow = 'hidden';
    
    // تحديث عداد المشاهدات
    updateProjectViews(projectId);
}

// إغلاق النافذة المنبثقة
function closePortfolioModal() {
    const portfolioModal = document.querySelector('.portfolio-modal');
    if (portfolioModal) {
        portfolioModal.classList.remove('show');
        setTimeout(() => {
            portfolioModal.remove();
            document.body.style.overflow = 'auto';
        }, 400);
    }
}

// فتح عارض الصور
function openImageViewer(imageSrc) {
    const imageViewer = document.createElement('div');
    imageViewer.className = 'image-viewer';
    imageViewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 10002;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    `;
    
    imageViewer.innerHTML = `
        <img src="${imageSrc}" style="max-width: 90%; max-height: 90%; object-fit: contain; border-radius: 10px;" />
        <button onclick="this.parentElement.remove()" style="
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            font-size: 24px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            cursor: pointer;
            backdrop-filter: blur(10px);
        ">×</button>
    `;
    
    imageViewer.onclick = (e) => {
        if (e.target === imageViewer) {
            imageViewer.remove();
        }
    };
    
    document.body.appendChild(imageViewer);
}

// تنسيق الأرقام
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// تنسيق التاريخ
function formatDate(dateString) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// تحديث عداد المشاهدات
function updateProjectViews(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (project) {
        project.views = (project.views || 0) + 1;
    }
}

// إغلاق النافذة عند النقر خارجها
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('portfolio-modal')) {
        closePortfolioModal();
    }
});

// إغلاق النافذة عند الضغط على Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePortfolioModal();
    }
});

// تحميل بيانات المشاريع من ملف البيانات
function loadPortfolioData() {
    // سيتم تحديث هذه البيانات من ملف portfilo.js
    if (typeof portfolioData !== 'undefined') {
        portfolioProjects = portfolioData;
    }
}

// تحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioData();
});

