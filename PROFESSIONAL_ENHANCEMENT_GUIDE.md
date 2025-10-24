# دليل التطوير الاحترافي للمنصة
## تحويل منصة المنار إلى متجر خدمات طلابية احترافي عالمي

---

## 📋 جدول المحتويات

1. [الميزات الأساسية المطلوبة](#الميزات-الأساسية-المطلوبة)
2. [نظام إدارة الطلبات](#نظام-إدارة-الطلبات)
3. [نظام الدفع الإلكتروني](#نظام-الدفع-الإلكتروني)
4. [لوحة التحكم الإدارية](#لوحة-التحكم-الإدارية)
5. [نظام حسابات المستخدمين](#نظام-حسابات-المستخدمين)
6. [تحسين تجربة المستخدم](#تحسين-تجربة-المستخدم)
7. [الأمان والموثوقية](#الأمان-والموثوقية)
8. [التسويق الرقمي](#التسويق-الرقمي)
9. [التحليلات والتقارير](#التحليلات-والتقارير)
10. [الأتمتة والذكاء الاصطناعي](#الأتمتة-والذكاء-الاصطناعي)

---

## 🎯 الميزات الأساسية المطلوبة

### 1. نظام سلة المشتريات (Shopping Cart)

#### لماذا مهم؟
- يسمح للطلاب بطلب أكثر من خدمة في وقت واحد
- يزيد متوسط قيمة الطلب
- تجربة تسوق احترافية

#### التنفيذ الفني:

```javascript
// cart.js - نظام سلة المشتريات
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.listeners = [];
  }
  
  // إضافة خدمة للسلة
  addItem(service) {
    const existing = this.items.find(item => item.id === service.id);
    
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({
        id: service.id,
        name: service.name,
        price: service.price,
        category: service.category,
        deliveryDays: service.deliveryDays,
        quantity: 1,
        addedAt: new Date().toISOString()
      });
    }
    
    this.saveCart();
    this.notifyListeners();
    this.showNotification('تمت الإضافة إلى السلة ✓');
  }
  
  // حذف من السلة
  removeItem(serviceId) {
    this.items = this.items.filter(item => item.id !== serviceId);
    this.saveCart();
    this.notifyListeners();
  }
  
  // تحديث الكمية
  updateQuantity(serviceId, quantity) {
    const item = this.items.find(item => item.id === serviceId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
      this.notifyListeners();
    }
  }
  
  // حساب الإجمالي
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
  
  // الحصول على عدد العناصر
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
  
  // تطبيق كود خصم
  applyDiscount(code) {
    const discounts = {
      'STUDENT10': { type: 'percentage', value: 10 },
      'FIRST20': { type: 'percentage', value: 20 },
      'SUMMER50': { type: 'fixed', value: 50 }
    };
    
    const discount = discounts[code.toUpperCase()];
    if (!discount) {
      throw new Error('كود الخصم غير صالح');
    }
    
    this.appliedDiscount = discount;
    this.discountCode = code;
    this.saveCart();
    this.notifyListeners();
    
    return discount;
  }
  
  // حساب السعر بعد الخصم
  getTotalWithDiscount() {
    const subtotal = this.getTotal();
    
    if (!this.appliedDiscount) return subtotal;
    
    if (this.appliedDiscount.type === 'percentage') {
      return subtotal * (1 - this.appliedDiscount.value / 100);
    } else {
      return Math.max(0, subtotal - this.appliedDiscount.value);
    }
  }
  
  // حفظ في LocalStorage
  saveCart() {
    localStorage.setItem('shopping_cart', JSON.stringify({
      items: this.items,
      appliedDiscount: this.appliedDiscount,
      discountCode: this.discountCode
    }));
  }
  
  // تحميل من LocalStorage
  loadCart() {
    const saved = localStorage.getItem('shopping_cart');
    if (saved) {
      const data = JSON.parse(saved);
      this.appliedDiscount = data.appliedDiscount;
      this.discountCode = data.discountCode;
      return data.items || [];
    }
    return [];
  }
  
  // إفراغ السلة
  clear() {
    this.items = [];
    this.appliedDiscount = null;
    this.discountCode = null;
    this.saveCart();
    this.notifyListeners();
  }
  
  // الاستماع للتغييرات
  onChange(callback) {
    this.listeners.push(callback);
  }
  
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.items));
  }
  
  showNotification(message) {
    // استخدام نظام الإشعارات الموجود
    if (typeof App !== 'undefined' && App.showToast) {
      App.showToast(message);
    }
  }
}

// تهيئة السلة
const cart = new ShoppingCart();

// مثال على الاستخدام
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = {
      id: btn.dataset.serviceId,
      name: btn.dataset.serviceName,
      price: parseFloat(btn.dataset.price),
      category: btn.dataset.category,
      deliveryDays: parseInt(btn.dataset.delivery)
    };
    
    cart.addItem(service);
  });
});
```

#### واجهة السلة (HTML):

```html
<!-- أيقونة السلة في الهيدر -->
<div class="cart-icon" onclick="openCart()">
  <i class="fas fa-shopping-cart"></i>
  <span class="cart-badge" id="cartBadge">0</span>
</div>

<!-- نافذة السلة المنبثقة -->
<div class="cart-sidebar" id="cartSidebar">
  <div class="cart-header">
    <h3>سلة المشتريات</h3>
    <button onclick="closeCart()">&times;</button>
  </div>
  
  <div class="cart-items" id="cartItemsList">
    <!-- سيتم ملؤها ديناميكياً -->
  </div>
  
  <div class="cart-discount">
    <input type="text" id="discountCode" placeholder="كود الخصم">
    <button onclick="applyDiscount()">تطبيق</button>
  </div>
  
  <div class="cart-summary">
    <div class="summary-row">
      <span>المجموع الفرعي:</span>
      <span id="cartSubtotal">0 ريال</span>
    </div>
    <div class="summary-row discount-row" id="discountRow" style="display: none;">
      <span>الخصم:</span>
      <span id="cartDiscount" class="text-success">- 0 ريال</span>
    </div>
    <div class="summary-row total-row">
      <span>الإجمالي:</span>
      <span id="cartTotal">0 ريال</span>
    </div>
  </div>
  
  <div class="cart-actions">
    <button class="btn-checkout" onclick="proceedToCheckout()">
      إتمام الطلب
    </button>
    <button class="btn-clear" onclick="cart.clear()">
      إفراغ السلة
    </button>
  </div>
</div>
```

#### CSS للسلة:

```css
.cart-icon {
  position: relative;
  cursor: pointer;
  padding: 10px;
}

.cart-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: -400px;
  width: 400px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  transition: right 0.3s ease;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}

.cart-sidebar.open {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-item {
  display: flex;
  gap: 15px;
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 10px;
}

.cart-item-info {
  flex: 1;
}

.cart-item-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.cart-item-price {
  color: #10b981;
  font-weight: bold;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.cart-summary {
  padding: 20px;
  border-top: 1px solid #e5e7eb;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.total-row {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1a237e;
  padding-top: 10px;
  border-top: 2px solid #e5e7eb;
}

.cart-actions {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-checkout {
  background: #10b981;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
}

.btn-checkout:hover {
  background: #059669;
}

@media (max-width: 768px) {
  .cart-sidebar {
    width: 100%;
    right: -100%;
  }
}
```

---

### 2. نظام التقييمات والمراجعات

#### قاعدة بيانات التقييمات:

```javascript
// reviews.js - نظام التقييمات
class ReviewSystem {
  constructor() {
    this.reviews = this.loadReviews();
  }
  
  // إضافة تقييم جديد
  async addReview(serviceId, reviewData) {
    // التحقق من صحة البيانات
    if (!this.validateReview(reviewData)) {
      throw new Error('بيانات التقييم غير صحيحة');
    }
    
    const review = {
      id: this.generateId(),
      serviceId: serviceId,
      userId: reviewData.userId,
      userName: reviewData.userName,
      rating: reviewData.rating, // 1-5
      title: reviewData.title,
      comment: reviewData.comment,
      pros: reviewData.pros || [], // الإيجابيات
      cons: reviewData.cons || [], // السلبيات
      verified: false, // هل هو عميل موثق؟
      helpful: 0, // عدد الأشخاص الذين وجدوه مفيداً
      images: reviewData.images || [], // صور اختيارية
      createdAt: new Date().toISOString(),
      status: 'pending' // pending, approved, rejected
    };
    
    this.reviews.push(review);
    this.saveReviews();
    
    // إرسال للمراجعة
    await this.submitForApproval(review);
    
    return review;
  }
  
  // الحصول على تقييمات خدمة معينة
  getServiceReviews(serviceId, filters = {}) {
    let reviews = this.reviews.filter(r => 
      r.serviceId === serviceId && r.status === 'approved'
    );
    
    // فلترة حسب التقييم
    if (filters.rating) {
      reviews = reviews.filter(r => r.rating === filters.rating);
    }
    
    // فلترة العملاء الموثقين فقط
    if (filters.verifiedOnly) {
      reviews = reviews.filter(r => r.verified);
    }
    
    // الترتيب
    if (filters.sortBy === 'recent') {
      reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (filters.sortBy === 'helpful') {
      reviews.sort((a, b) => b.helpful - a.helpful);
    } else if (filters.sortBy === 'rating') {
      reviews.sort((a, b) => b.rating - a.rating);
    }
    
    return reviews;
  }
  
  // حساب متوسط التقييم
  getAverageRating(serviceId) {
    const reviews = this.getServiceReviews(serviceId);
    if (reviews.length === 0) return 0;
    
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }
  
  // إحصائيات التقييم
  getRatingStats(serviceId) {
    const reviews = this.getServiceReviews(serviceId);
    const stats = {
      total: reviews.length,
      average: this.getAverageRating(serviceId),
      distribution: {
        5: 0, 4: 0, 3: 0, 2: 0, 1: 0
      }
    };
    
    reviews.forEach(r => {
      stats.distribution[r.rating]++;
    });
    
    // حساب النسب المئوية
    Object.keys(stats.distribution).forEach(rating => {
      const count = stats.distribution[rating];
      stats.distribution[rating] = {
        count: count,
        percentage: stats.total > 0 ? (count / stats.total * 100).toFixed(1) : 0
      };
    });
    
    return stats;
  }
  
  // تحديد مراجعة كمفيدة
  markAsHelpful(reviewId) {
    const review = this.reviews.find(r => r.id === reviewId);
    if (review) {
      review.helpful++;
      this.saveReviews();
    }
  }
  
  // التحقق من صحة التقييم
  validateReview(data) {
    if (!data.rating || data.rating < 1 || data.rating > 5) return false;
    if (!data.comment || data.comment.length < 10) return false;
    if (!data.userName) return false;
    return true;
  }
  
  generateId() {
    return 'review_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  saveReviews() {
    localStorage.setItem('reviews', JSON.stringify(this.reviews));
  }
  
  loadReviews() {
    const saved = localStorage.getItem('reviews');
    return saved ? JSON.parse(saved) : [];
  }
  
  async submitForApproval(review) {
    // في الإنتاج، سيتم إرسال للخادم
    console.log('Review submitted for approval:', review);
    // يمكن إضافة إشعار بريد إلكتروني للمدير
  }
}

const reviewSystem = new ReviewSystem();
```

#### واجهة عرض التقييمات:

```html
<!-- قسم التقييمات -->
<div class="reviews-section">
  <div class="reviews-header">
    <h3>تقييمات العملاء</h3>
    <button class="btn-write-review" onclick="openReviewModal()">
      اكتب تقييمك
    </button>
  </div>
  
  <!-- ملخص التقييمات -->
  <div class="reviews-summary">
    <div class="rating-overview">
      <div class="rating-number">4.8</div>
      <div class="rating-stars">★★★★★</div>
      <div class="rating-count">256 تقييم</div>
    </div>
    
    <div class="rating-distribution">
      <div class="rating-bar">
        <span>5 نجوم</span>
        <div class="bar">
          <div class="fill" style="width: 75%"></div>
        </div>
        <span>192 (75%)</span>
      </div>
      <div class="rating-bar">
        <span>4 نجوم</span>
        <div class="bar">
          <div class="fill" style="width: 15%"></div>
        </div>
        <span>38 (15%)</span>
      </div>
      <!-- ... المزيد -->
    </div>
  </div>
  
  <!-- فلاتر التقييمات -->
  <div class="reviews-filters">
    <button class="filter-btn active" data-filter="all">الكل</button>
    <button class="filter-btn" data-filter="5">5 نجوم</button>
    <button class="filter-btn" data-filter="4">4 نجوم</button>
    <button class="filter-btn" data-filter="verified">عملاء موثقين</button>
    <select class="sort-select">
      <option value="recent">الأحدث</option>
      <option value="helpful">الأكثر إفادة</option>
      <option value="rating">الأعلى تقييماً</option>
    </select>
  </div>
  
  <!-- قائمة التقييمات -->
  <div class="reviews-list" id="reviewsList">
    <!-- Review Item Example -->
    <div class="review-item">
      <div class="review-header">
        <img src="avatar.jpg" alt="User" class="review-avatar">
        <div class="review-user-info">
          <div class="review-user-name">
            أحمد محمد
            <span class="verified-badge">✓ عميل موثق</span>
          </div>
          <div class="review-date">منذ 3 أيام</div>
        </div>
        <div class="review-rating">★★★★★</div>
      </div>
      
      <div class="review-content">
        <h4 class="review-title">خدمة ممتازة وسريعة</h4>
        <p class="review-text">
          تجربة رائعة جداً. تم إنجاز المشروع بجودة عالية وفي الوقت المحدد.
          التواصل كان ممتاز والنتيجة فاقت التوقعات.
        </p>
        
        <div class="review-pros-cons">
          <div class="pros">
            <strong>👍 الإيجابيات:</strong>
            <ul>
              <li>سرعة في التسليم</li>
              <li>جودة عالية</li>
              <li>دعم ممتاز</li>
            </ul>
          </div>
          <div class="cons">
            <strong>👎 السلبيات:</strong>
            <ul>
              <li>لا شيء تقريباً</li>
            </ul>
          </div>
        </div>
        
        <div class="review-images">
          <img src="review1.jpg" alt="Review" onclick="openImageViewer(this)">
          <img src="review2.jpg" alt="Review" onclick="openImageViewer(this)">
        </div>
      </div>
      
      <div class="review-footer">
        <button class="btn-helpful" onclick="markAsHelpful('review_123')">
          <i class="far fa-thumbs-up"></i>
          مفيد (24)
        </button>
        <button class="btn-report">
          <i class="far fa-flag"></i>
          إبلاغ
        </button>
      </div>
    </div>
  </div>
</div>

<!-- نموذج كتابة تقييم -->
<div class="review-modal" id="reviewModal">
  <div class="modal-content">
    <h3>اكتب تقييمك</h3>
    
    <div class="form-group">
      <label>التقييم العام</label>
      <div class="star-rating-input">
        <i class="far fa-star" data-rating="1"></i>
        <i class="far fa-star" data-rating="2"></i>
        <i class="far fa-star" data-rating="3"></i>
        <i class="far fa-star" data-rating="4"></i>
        <i class="far fa-star" data-rating="5"></i>
      </div>
    </div>
    
    <div class="form-group">
      <label>عنوان التقييم</label>
      <input type="text" id="reviewTitle" placeholder="مثال: خدمة ممتازة">
    </div>
    
    <div class="form-group">
      <label>تفاصيل التقييم</label>
      <textarea id="reviewComment" rows="5" 
        placeholder="شارك تجربتك مع الخدمة (10 أحرف على الأقل)"></textarea>
    </div>
    
    <div class="form-group">
      <label>الإيجابيات (اختياري)</label>
      <input type="text" id="reviewPros" placeholder="أدخل نقطة واضغط Enter">
      <div id="prosList"></div>
    </div>
    
    <div class="form-group">
      <label>السلبيات (اختياري)</label>
      <input type="text" id="reviewCons" placeholder="أدخل نقطة واضغط Enter">
      <div id="consList"></div>
    </div>
    
    <div class="form-group">
      <label>إضافة صور (اختياري)</label>
      <input type="file" id="reviewImages" multiple accept="image/*">
    </div>
    
    <div class="modal-actions">
      <button class="btn-submit" onclick="submitReview()">نشر التقييم</button>
      <button class="btn-cancel" onclick="closeReviewModal()">إلغاء</button>
    </div>
  </div>
</div>
```

---

## 💳 نظام الدفع الإلكتروني

### الخيارات المتاحة في السعودية:

#### 1. **Moyasar** (الأفضل للمشاريع الصغيرة والمتوسطة)

```javascript
// moyasar-payment.js
class MoyasarPayment {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.moyasar = null;
    this.loadScript();
  }
  
  loadScript() {
    const script = document.createElement('script');
    script.src = 'https://cdn.moyasar.com/mpf/1.7.3/moyasar.js';
    document.head.appendChild(script);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.moyasar.com/mpf/1.7.3/moyasar.css';
    document.head.appendChild(link);
  }
  
  createPaymentForm(amount, description, metadata = {}) {
    Moyasar.init({
      element: '.payment-form',
      amount: amount * 100, // بالهللات
      currency: 'SAR',
      description: description,
      publishable_api_key: this.apiKey,
      callback_url: 'https://yoursite.com/payment/callback',
      methods: ['creditcard', 'applepay', 'stcpay'],
      metadata: {
        orderId: metadata.orderId,
        userId: metadata.userId,
        services: JSON.stringify(metadata.services)
      },
      on_completed: function(payment) {
        // عند نجاح الدفع
        console.log('Payment completed:', payment);
        window.location.href = '/success?payment_id=' + payment.id;
      },
      on_error: function(error) {
        // عند فشل الدفع
        console.error('Payment error:', error);
        alert('حدث خطأ في عملية الدفع. يرجى المحاولة مرة أخرى.');
      }
    });
  }
  
  // التحقق من حالة الدفع
  async verifyPayment(paymentId) {
    const response = await fetch(`https://api.moyasar.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Basic ${btoa(this.apiKey + ':')}`
      }
    });
    
    return await response.json();
  }
}

// الاستخدام
const payment = new MoyasarPayment('pk_test_your_key_here');

// عند الضغط على "إتمام الدفع"
function proceedToPayment() {
  const total = cart.getTotalWithDiscount();
  const orderId = generateOrderId();
  
  payment.createPaymentForm(total, `طلب رقم #${orderId}`, {
    orderId: orderId,
    userId: currentUser.id,
    services: cart.items
  });
}
```

#### 2. **HyperPay** (للمشاريع الكبيرة)

```javascript
// hyperpay-payment.js
class HyperPayPayment {
  constructor(config) {
    this.entityId = config.entityId;
    this.apiUrl = config.apiUrl;
    this.loadWidget();
  }
  
  loadWidget() {
    const script = document.createElement('script');
    script.src = `${this.apiUrl}/v1/paymentWidgets.js?checkoutId=`;
    document.head.appendChild(script);
  }
  
  async createCheckout(amount, orderId) {
    const response = await fetch('/api/hyperpay/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount,
        currency: 'SAR',
        paymentType: 'DB',
        merchantTransactionId: orderId
      })
    });
    
    const data = await response.json();
    return data.id; // Checkout ID
  }
  
  renderPaymentForm(checkoutId) {
    const script = document.createElement('script');
    script.src = `${this.apiUrl}/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    script.async = true;
    
    script.onload = () => {
      const form = `
        <form action="/payment/result" class="paymentWidgets" 
              data-brands="VISA MASTER MADA APPLEPAY STC_PAY"></form>
      `;
      document.getElementById('payment-container').innerHTML = form;
    };
    
    document.head.appendChild(script);
  }
}
```

#### 3. **Tap Payments** (واجهة سهلة)

```javascript
// tap-payment.js
class TapPayment {
  constructor(publicKey) {
    this.publicKey = publicKey;
  }
  
  createPayment(amount, orderId, customer) {
    const tapConfig = {
      publicKey: this.publicKey,
      merchant: {
        id: 'YOUR_MERCHANT_ID'
      },
      transaction: {
        amount: amount,
        currency: 'SAR'
      },
      customer: {
        first_name: customer.firstName,
        last_name: customer.lastName,
        email: customer.email,
        phone: {
          country_code: '966',
          number: customer.phone
        }
      },
      order: {
        id: orderId,
        amount: amount,
        currency: 'SAR',
        description: `طلب خدمات طلابية #${orderId}`
      },
      interface: {
        locale: 'ar',
        theme: 'light',
        powered_by: 'tap',
        colorStyle: '#1a237e'
      },
      post: {
        url: 'https://yoursite.com/api/payment/callback'
      },
      redirect: {
        url: 'https://yoursite.com/payment/success'
      }
    };
    
    const goSell = new goSellElements('#payment-element');
    goSell.config(tapConfig);
    goSell.submit();
  }
}
```

### صفحة الدفع الكاملة:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <title>إتمام الدفع - منصة المنار</title>
  <style>
    .checkout-page {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 40px;
    }
    
    .order-summary {
      background: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .order-item {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .payment-methods {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin: 20px 0;
    }
    
    .payment-method {
      padding: 20px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .payment-method:hover,
    .payment-method.active {
      border-color: #10b981;
      background: #f0fdf4;
    }
    
    .total-section {
      background: #f9fafb;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    
    @media (max-width: 768px) {
      .checkout-page {
        grid-template-columns: 1fr;
      }
      
      .payment-methods {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="checkout-page">
    <!-- القسم الأيسر: نموذج الدفع -->
    <div class="payment-section">
      <h2>معلومات الدفع</h2>
      
      <!-- معلومات العميل -->
      <div class="customer-info">
        <h3>معلومات العميل</h3>
        <div class="form-grid">
          <input type="text" placeholder="الاسم الأول" required>
          <input type="text" placeholder="الاسم الأخير" required>
          <input type="email" placeholder="البريد الإلكتروني" required>
          <input type="tel" placeholder="رقم الجوال" required>
        </div>
      </div>
      
      <!-- طرق الدفع -->
      <div class="payment-options">
        <h3>اختر طريقة الدفع</h3>
        <div class="payment-methods">
          <div class="payment-method active" data-method="card">
            <i class="fas fa-credit-card fa-2x"></i>
            <p>بطاقة ائتمانية</p>
          </div>
          <div class="payment-method" data-method="mada">
            <img src="mada-logo.svg" alt="مدى">
            <p>مدى</p>
          </div>
          <div class="payment-method" data-method="applepay">
            <i class="fab fa-apple-pay fa-2x"></i>
            <p>Apple Pay</p>
          </div>
          <div class="payment-method" data-method="stcpay">
            <img src="stc-pay-logo.svg" alt="STC Pay">
            <p>STC Pay</p>
          </div>
          <div class="payment-method" data-method="bank">
            <i class="fas fa-university fa-2x"></i>
            <p>تحويل بنكي</p>
          </div>
        </div>
      </div>
      
      <!-- نموذج الدفع (سيتم حقنه بواسطة بوابة الدفع) -->
      <div class="payment-form" id="payment-element"></div>
      
      <!-- الشروط والأحكام -->
      <div class="terms">
        <label>
          <input type="checkbox" required>
          أوافق على <a href="/terms">الشروط والأحكام</a> و
          <a href="/privacy">سياسة الخصوصية</a>
        </label>
      </div>
      
      <button class="btn-pay" onclick="processPayment()">
        <i class="fas fa-lock"></i>
        إتمام الدفع الآمن
      </button>
      
      <!-- شارات الأمان -->
      <div class="security-badges">
        <img src="ssl-secure.png" alt="SSL Secure">
        <img src="pci-compliant.png" alt="PCI Compliant">
        <img src="verified-merchant.png" alt="Verified Merchant">
      </div>
    </div>
    
    <!-- القسم الأيمن: ملخص الطلب -->
    <div class="order-summary">
      <h3>ملخص الطلب</h3>
      
      <div class="order-items">
        <div class="order-item">
          <div>
            <strong>حل واجبات البرمجة</strong>
            <p class="text-muted">الكمية: 2</p>
          </div>
          <span>400 ريال</span>
        </div>
        <div class="order-item">
          <div>
            <strong>تصميم عرض تقديمي</strong>
            <p class="text-muted">الكمية: 1</p>
          </div>
          <span>200 ريال</span>
        </div>
      </div>
      
      <div class="total-section">
        <div class="total-row">
          <span>المجموع الفرعي:</span>
          <span>600 ريال</span>
        </div>
        <div class="total-row discount">
          <span>الخصم (STUDENT10):</span>
          <span class="text-success">- 60 ريال</span>
        </div>
        <div class="total-row tax">
          <span>ضريبة القيمة المضافة (15%):</span>
          <span>81 ريال</span>
        </div>
        <div class="total-row final">
          <strong>الإجمالي:</strong>
          <strong class="price">621 ريال</strong>
        </div>
      </div>
      
      <!-- كود الخصم -->
      <div class="discount-code">
        <input type="text" placeholder="كود الخصم">
        <button>تطبيق</button>
      </div>
      
      <!-- معلومات إضافية -->
      <div class="info-box">
        <h4><i class="fas fa-shield-alt"></i> الدفع الآمن</h4>
        <p>جميع معاملاتك محمية بتشفير SSL 256-bit</p>
      </div>
      
      <div class="info-box">
        <h4><i class="fas fa-truck"></i> التسليم</h4>
        <p>مدة التسليم المتوقعة: 3-5 أيام عمل</p>
      </div>
      
      <div class="info-box">
        <h4><i class="fas fa-redo"></i> سياسة الاسترجاع</h4>
        <p>ضمان استرجاع الأموال خلال 7 أيام</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## 📊 نظام إدارة الطلبات

### قاعدة بيانات الطلبات:

```javascript
// order-management.js
class OrderManagement {
  constructor() {
    this.orders = this.loadOrders();
    this.statuses = {
      pending: 'قيد الانتظار',
      confirmed: 'تم التأكيد',
      in_progress: 'قيد التنفيذ',
      review: 'قيد المراجعة',
      completed: 'مكتمل',
      cancelled: 'ملغي',
      refunded: 'تم الاسترجاع'
    };
  }
  
  // إنشاء طلب جديد
  async createOrder(orderData) {
    const order = {
      id: this.generateOrderId(),
      userId: orderData.userId,
      customer: {
        name: orderData.customer.name,
        email: orderData.customer.email,
        phone: orderData.customer.phone
      },
      services: orderData.services.map(service => ({
        id: service.id,
        name: service.name,
        category: service.category,
        quantity: service.quantity,
        price: service.price,
        deliveryDays: service.deliveryDays,
        requirements: service.requirements || '',
        files: service.files || []
      })),
      payment: {
        method: orderData.paymentMethod,
        transactionId: orderData.transactionId,
        amount: orderData.amount,
        discount: orderData.discount || 0,
        tax: orderData.tax,
        total: orderData.total,
        status: 'pending'
      },
      delivery: {
        method: orderData.deliveryMethod || 'email',
        expectedDate: this.calculateDeliveryDate(orderData.services),
        actualDate: null
      },
      status: 'pending',
      timeline: [
        {
          status: 'pending',
          date: new Date().toISOString(),
          note: 'تم إنشاء الطلب'
        }
      ],
      notes: [],
      attachments: [],
      rating: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.orders.push(order);
    this.saveOrders();
    
    // إرسال إشعارات
    await this.sendOrderNotifications(order);
    
    return order;
  }
  
  // تحديث حالة الطلب
  async updateOrderStatus(orderId, newStatus, note = '') {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) throw new Error('الطلب غير موجود');
    
    const oldStatus = order.status;
    order.status = newStatus;
    order.updatedAt = new Date().toISOString();
    
    // إضافة للسجل الزمني
    order.timeline.push({
      status: newStatus,
      date: new Date().toISOString(),
      note: note || this.statuses[newStatus],
      by: 'system' // أو userId للمدير
    });
    
    // إرسال إشعار للعميل
    await this.notifyCustomer(order, newStatus);
    
    this.saveOrders();
    return order;
  }
  
  // إضافة ملاحظة للطلب
  addNote(orderId, noteText, isPublic = false) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) throw new Error('الطلب غير موجود');
    
    order.notes.push({
      id: Date.now(),
      text: noteText,
      isPublic: isPublic,
      createdAt: new Date().toISOString(),
      createdBy: 'admin' // أو userId
    });
    
    this.saveOrders();
  }
  
  // رفع ملفات للطلب
  async uploadFile(orderId, file) {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) throw new Error('الطلب غير موجود');
    
    // رفع الملف (في الإنتاج، سيتم رفعه لخادم أو S3)
    const fileData = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      type: file.type,
      url: await this.uploadToStorage(file),
      uploadedAt: new Date().toISOString(),
      uploadedBy: 'admin'
    };
    
    order.attachments.push(fileData);
    this.saveOrders();
    
    return fileData;
  }
  
  // الحصول على طلبات العميل
  getCustomerOrders(userId, filters = {}) {
    let orders = this.orders.filter(o => o.userId === userId);
    
    if (filters.status) {
      orders = orders.filter(o => o.status === filters.status);
    }
    
    if (filters.dateFrom) {
      orders = orders.filter(o => new Date(o.createdAt) >= new Date(filters.dateFrom));
    }
    
    if (filters.dateTo) {
      orders = orders.filter(o => new Date(o.createdAt) <= new Date(filters.dateTo));
    }
    
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    return orders;
  }
  
  // إحصائيات الطلبات
  getOrderStats(filters = {}) {
    let orders = this.orders;
    
    if (filters.dateFrom) {
      orders = orders.filter(o => new Date(o.createdAt) >= new Date(filters.dateFrom));
    }
    
    if (filters.dateTo) {
      orders = orders.filter(o => new Date(o.createdAt) <= new Date(filters.dateTo));
    }
    
    const stats = {
      total: orders.length,
      totalRevenue: orders.reduce((sum, o) => sum + o.payment.total, 0),
      averageOrderValue: 0,
      byStatus: {},
      byCategory: {},
      byPaymentMethod: {}
    };
    
    // حساب متوسط قيمة الطلب
    stats.averageOrderValue = stats.total > 0 
      ? (stats.totalRevenue / stats.total).toFixed(2) 
      : 0;
    
    // تجميع حسب الحالة
    Object.keys(this.statuses).forEach(status => {
      stats.byStatus[status] = orders.filter(o => o.status === status).length;
    });
    
    // تجميع حسب الفئة
    orders.forEach(order => {
      order.services.forEach(service => {
        stats.byCategory[service.category] = (stats.byCategory[service.category] || 0) + 1;
      });
    });
    
    // تجميع حسب طريقة الدفع
    orders.forEach(order => {
      const method = order.payment.method;
      stats.byPaymentMethod[method] = (stats.byPaymentMethod[method] || 0) + 1;
    });
    
    return stats;
  }
  
  // حساب تاريخ التسليم المتوقع
  calculateDeliveryDate(services) {
    const maxDays = Math.max(...services.map(s => s.deliveryDays || 3));
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + maxDays);
    return deliveryDate.toISOString();
  }
  
  // توليد رقم طلب فريد
  generateOrderId() {
    const prefix = 'ORD';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }
  
  // إرسال إشعارات
  async sendOrderNotifications(order) {
    // إشعار للعميل
    await this.sendEmail({
      to: order.customer.email,
      subject: `تأكيد الطلب #${order.id}`,
      template: 'order-confirmation',
      data: order
    });
    
    // إشعار للمدير
    await this.sendEmail({
      to: 'admin@platform.com',
      subject: `طلب جديد #${order.id}`,
      template: 'new-order-admin',
      data: order
    });
    
    // إشعار واتساب (اختياري)
    await this.sendWhatsAppNotification(order);
  }
  
  async notifyCustomer(order, status) {
    const messages = {
      confirmed: 'تم تأكيد طلبك وسنبدأ العمل عليه قريباً',
      in_progress: 'نعمل الآن على إنجاز طلبك',
      review: 'تم إنجاز طلبك ويخضع للمراجعة النهائية',
      completed: 'تم إنجاز طلبك بنجاح! يمكنك تحميل الملفات الآن'
    };
    
    if (messages[status]) {
      await this.sendEmail({
        to: order.customer.email,
        subject: `تحديث الطلب #${order.id}`,
        template: 'order-status-update',
        data: {
          order: order,
          message: messages[status]
        }
      });
    }
  }
  
  async sendEmail(emailData) {
    // في الإنتاج، استخدم خدمة بريد إلكتروني مثل SendGrid
    console.log('Sending email:', emailData);
  }
  
  async sendWhatsAppNotification(order) {
    // يمكن استخدام Twilio WhatsApp API
    console.log('Sending WhatsApp:', order);
  }
  
  async uploadToStorage(file) {
    // في الإنتاج، رفع إلى S3 أو Firebase Storage
    return URL.createObjectURL(file);
  }
  
  saveOrders() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
  
  loadOrders() {
    const saved = localStorage.getItem('orders');
    return saved ? JSON.parse(saved) : [];
  }
}

const orderManager = new OrderManagement();
```

### صفحة تتبع الطلب:

```html
<!-- order-tracking.html -->
<div class="order-tracking-page">
  <div class="tracking-header">
    <h2>تتبع الطلب #ORD-12345678-AB3C</h2>
    <div class="order-date">تاريخ الطلب: 15 مارس 2024</div>
  </div>
  
  <!-- شريط التقدم -->
  <div class="progress-tracker">
    <div class="progress-step completed">
      <div class="step-icon">
        <i class="fas fa-check"></i>
      </div>
      <div class="step-label">تم الطلب</div>
      <div class="step-date">15 مارس</div>
    </div>
    
    <div class="progress-line completed"></div>
    
    <div class="progress-step completed">
      <div class="step-icon">
        <i class="fas fa-check"></i>
      </div>
      <div class="step-label">تم التأكيد</div>
      <div class="step-date">15 مارس</div>
    </div>
    
    <div class="progress-line active"></div>
    
    <div class="progress-step active">
      <div class="step-icon">
        <i class="fas fa-spinner fa-spin"></i>
      </div>
      <div class="step-label">قيد التنفيذ</div>
      <div class="step-date">جاري العمل</div>
    </div>
    
    <div class="progress-line"></div>
    
    <div class="progress-step">
      <div class="step-icon">
        <i class="far fa-circle"></i>
      </div>
      <div class="step-label">قيد المراجعة</div>
      <div class="step-date">-</div>
    </div>
    
    <div class="progress-line"></div>
    
    <div class="progress-step">
      <div class="step-icon">
        <i class="far fa-circle"></i>
      </div>
      <div class="step-label">مكتمل</div>
      <div class="step-date">التسليم المتوقع: 20 مارس</div>
    </div>
  </div>
  
  <!-- تفاصيل الطلب -->
  <div class="order-details-grid">
    <!-- الخدمات المطلوبة -->
    <div class="order-section">
      <h3>الخدمات المطلوبة</h3>
      <div class="service-item">
        <div class="service-info">
          <strong>حل واجبات البرمجة (Python)</strong>
          <p>الكمية: 2 | التسليم: 5 أيام</p>
        </div>
        <div class="service-price">400 ريال</div>
      </div>
      <div class="service-item">
        <div class="service-info">
          <strong>تصميم عرض تقديمي</strong>
          <p>الكمية: 1 | التسليم: 3 أيام</p>
        </div>
        <div class="service-price">200 ريال</div>
      </div>
    </div>
    
    <!-- معلومات الدفع -->
    <div class="order-section">
      <h3>معلومات الدفع</h3>
      <div class="payment-info">
        <div class="info-row">
          <span>طريقة الدفع:</span>
          <strong>بطاقة ائتمانية</strong>
        </div>
        <div class="info-row">
          <span>رقم المعاملة:</span>
          <strong>TXN-987654321</strong>
        </div>
        <div class="info-row">
          <span>حالة الدفع:</span>
          <span class="status-badge success">مدفوع</span>
        </div>
      </div>
    </div>
    
    <!-- معلومات التواصل -->
    <div class="order-section">
      <h3>معلومات التواصل</h3>
      <div class="contact-info">
        <div class="info-row">
          <i class="fas fa-user"></i>
          <span>أحمد محمد</span>
        </div>
        <div class="info-row">
          <i class="fas fa-envelope"></i>
          <span>ahmed@example.com</span>
        </div>
        <div class="info-row">
          <i class="fas fa-phone"></i>
          <span>0501234567</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- السجل الزمني -->
  <div class="order-timeline">
    <h3>السجل الزمني</h3>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <strong>بدأ العمل على الطلب</strong>
            <span class="timeline-date">16 مارس، 10:30 ص</span>
          </div>
          <p>تم تعيين الطلب للفريق المختص وبدأ العمل</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <strong>تم تأكيد الطلب</strong>
            <span class="timeline-date">15 مارس، 8:15 م</span>
          </div>
          <p>تم مراجعة الطلب وتأكيد التفاصيل</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <strong>تم إنشاء الطلب</strong>
            <span class="timeline-date">15 مارس، 8:00 م</span>
          </div>
          <p>تم استلام طلبك بنجاح</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- الملفات والمرفقات -->
  <div class="order-files">
    <h3>الملفات والمرفقات</h3>
    <div class="files-grid">
      <div class="file-item">
        <i class="fas fa-file-pdf"></i>
        <div class="file-info">
          <strong>متطلبات_المشروع.pdf</strong>
          <span>2.5 MB</span>
        </div>
        <button class="btn-download">
          <i class="fas fa-download"></i>
        </button>
      </div>
    </div>
    
    <div class="upload-section">
      <p>هل لديك ملفات إضافية؟</p>
      <button class="btn-upload">
        <i class="fas fa-upload"></i>
        رفع ملفات
      </button>
    </div>
  </div>
  
  <!-- أزرار الإجراءات -->
  <div class="order-actions">
    <button class="btn-contact">
      <i class="fab fa-whatsapp"></i>
      تواصل معنا
    </button>
    <button class="btn-cancel" onclick="requestCancellation()">
      <i class="fas fa-times"></i>
      طلب إلغاء
    </button>
  </div>
</div>
```

---

## 🎛️ لوحة التحكم الإدارية (Admin Dashboard)

### الصفحة الرئيسية للوحة التحكم:

```html
<!-- admin-dashboard.html -->
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <title>لوحة التحكم - منصة المنار</title>
  <style>
    .dashboard {
      display: grid;
      grid-template-columns: 250px 1fr;
      min-height: 100vh;
    }
    
    .sidebar {
      background: #1e293b;
      color: white;
      padding: 20px;
    }
    
    .sidebar-menu {
      list-style: none;
      padding: 0;
      margin: 30px 0;
    }
    
    .sidebar-menu li {
      margin: 10px 0;
    }
    
    .sidebar-menu a {
      color: #94a3b8;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: 6px;
      transition: all 0.3s;
    }
    
    .sidebar-menu a:hover,
    .sidebar-menu a.active {
      background: #334155;
      color: white;
    }
    
    .main-content {
      background: #f8fafc;
      padding: 30px;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .stat-card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border-left: 4px solid #10b981;
    }
    
    .stat-card.warning { border-left-color: #f59e0b; }
    .stat-card.danger { border-left-color: #ef4444; }
    .stat-card.info { border-left-color: #3b82f6; }
    
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #1e293b;
      margin: 10px 0;
    }
    
    .stat-label {
      color: #64748b;
      font-size: 0.9rem;
    }
    
    .stat-trend {
      font-size: 0.85rem;
      margin-top: 10px;
    }
    
    .stat-trend.up {
      color: #10b981;
    }
    
    .stat-trend.down {
      color: #ef4444;
    }
    
    .chart-container {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    
    .recent-orders {
      background: white;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th {
      text-align: right;
      padding: 12px;
      background: #f8fafc;
      font-weight: 600;
      color: #475569;
    }
    
    td {
      padding: 12px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    .status-badge.pending {
      background: #fef3c7;
      color: #92400e;
    }
    
    .status-badge.completed {
      background: #d1fae5;
      color: #065f46;
    }
    
    .status-badge.in-progress {
      background: #dbeafe;
      color: #1e40af;
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>منصة المنار</h2>
        <p style="color: #94a3b8; font-size: 0.9rem;">لوحة التحكم</p>
      </div>
      
      <ul class="sidebar-menu">
        <li><a href="#dashboard" class="active">
          <i class="fas fa-home"></i>
          <span>الرئيسية</span>
        </a></li>
        <li><a href="#orders">
          <i class="fas fa-shopping-bag"></i>
          <span>الطلبات</span>
          <span class="badge">12</span>
        </a></li>
        <li><a href="#services">
          <i class="fas fa-briefcase"></i>
          <span>الخدمات</span>
        </a></li>
        <li><a href="#customers">
          <i class="fas fa-users"></i>
          <span>العملاء</span>
        </a></li>
        <li><a href="#reviews">
          <i class="fas fa-star"></i>
          <span>التقييمات</span>
        </a></li>
        <li><a href="#analytics">
          <i class="fas fa-chart-bar"></i>
          <span>التحليلات</span>
        </a></li>
        <li><a href="#marketing">
          <i class="fas fa-bullhorn"></i>
          <span>التسويق</span>
        </a></li>
        <li><a href="#settings">
          <i class="fas fa-cog"></i>
          <span>الإعدادات</span>
        </a></li>
      </ul>
      
      <div style="margin-top: auto; padding-top: 50px;">
        <a href="#" style="color: #ef4444;">
          <i class="fas fa-sign-out-alt"></i>
          <span>تسجيل الخروج</span>
        </a>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
      <div class="page-header">
        <h1>مرحباً بك في لوحة التحكم</h1>
        <p style="color: #64748b;">نظرة عامة على أداء المنصة</p>
      </div>
      
      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-shopping-cart" style="color: #10b981;"></i>
          </div>
          <div class="stat-value">248</div>
          <div class="stat-label">إجمالي الطلبات</div>
          <div class="stat-trend up">
            <i class="fas fa-arrow-up"></i> +12% عن الشهر الماضي
          </div>
        </div>
        
        <div class="stat-card info">
          <div class="stat-icon">
            <i class="fas fa-money-bill-wave" style="color: #3b82f6;"></i>
          </div>
          <div class="stat-value">52,450 ريال</div>
          <div class="stat-label">الإيرادات الشهرية</div>
          <div class="stat-trend up">
            <i class="fas fa-arrow-up"></i> +25% عن الشهر الماضي
          </div>
        </div>
        
        <div class="stat-card warning">
          <div class="stat-icon">
            <i class="fas fa-hourglass-half" style="color: #f59e0b;"></i>
          </div>
          <div class="stat-value">12</div>
          <div class="stat-label">طلبات قيد الانتظار</div>
          <div class="stat-trend">
            يتطلب اهتمام
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">
            <i class="fas fa-users" style="color: #10b981;"></i>
          </div>
          <div class="stat-value">1,234</div>
          <div class="stat-label">عدد العملاء</div>
          <div class="stat-trend up">
            <i class="fas fa-arrow-up"></i> +8% عن الشهر الماضي
          </div>
        </div>
      </div>
      
      <!-- Charts -->
      <div class="chart-container">
        <h3>إحصائيات المبيعات</h3>
        <canvas id="salesChart" width="400" height="150"></canvas>
      </div>
      
      <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px; margin-bottom: 20px;">
        <div class="chart-container">
          <h3>الخدمات الأكثر طلباً</h3>
          <canvas id="servicesChart"></canvas>
        </div>
        
        <div class="chart-container">
          <h3>توزيع حالات الطلبات</h3>
          <canvas id="statusChart"></canvas>
        </div>
      </div>
      
      <!-- Recent Orders -->
      <div class="recent-orders">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3>أحدث الطلبات</h3>
          <a href="#orders" style="color: #3b82f6;">عرض الكل</a>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>العميل</th>
              <th>الخدمة</th>
              <th>المبلغ</th>
              <th>الحالة</th>
              <th>التاريخ</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>#ORD-12345</strong></td>
              <td>أحمد محمد</td>
              <td>حل واجبات البرمجة</td>
              <td>400 ريال</td>
              <td><span class="status-badge in-progress">قيد التنفيذ</span></td>
              <td>منذ ساعتين</td>
              <td>
                <button class="btn-icon" title="عرض">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" title="تعديل">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>#ORD-12344</strong></td>
              <td>فاطمة علي</td>
              <td>تصميم عرض تقديمي</td>
              <td>200 ريال</td>
              <td><span class="status-badge completed">مكتمل</span></td>
              <td>منذ 5 ساعات</td>
              <td>
                <button class="btn-icon">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td><strong>#ORD-12343</strong></td>
              <td>محمد خالد</td>
              <td>كتابة بحث أكاديمي</td>
              <td>600 ريال</td>
              <td><span class="status-badge pending">قيد الانتظار</span></td>
              <td>منذ يوم</td>
              <td>
                <button class="btn-icon">
                  <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon">
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  <!-- تضمين Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    // إنشاء مخطط المبيعات
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
        datasets: [{
          label: 'المبيعات (ريال)',
          data: [12000, 19000, 15000, 25000, 32000, 52450],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        }
      }
    });
    
    // مخطط الخدمات الأكثر طلباً
    const servicesCtx = document.getElementById('servicesChart').getContext('2d');
    new Chart(servicesCtx, {
      type: 'bar',
      data: {
        labels: ['برمجة', 'تصميم', 'بحوث', 'ترجمة', 'تحليل'],
        datasets: [{
          label: 'عدد الطلبات',
          data: [65, 45, 38, 25, 20],
          backgroundColor: [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6'
          ]
        }]
      }
    });
    
    // مخطط حالات الطلبات
    const statusCtx = document.getElementById('statusChart').getContext('2d');
    new Chart(statusCtx, {
      type: 'doughnut',
      data: {
        labels: ['مكتمل', 'قيد التنفيذ', 'قيد الانتظار', 'ملغي'],
        datasets: [{
          data: [145, 62, 28, 13],
          backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
        }]
      }
    });
  </script>
</body>
</html>
```

---

## 👤 نظام حسابات المستخدمين

### نظام التسجيل والدخول:

```javascript
// auth-system.js
class AuthSystem {
  constructor() {
    this.currentUser = this.getCurrentUser();
    this.sessionTimeout = 30 * 60 * 1000; // 30 دقيقة
    this.setupSessionMonitor();
  }
  
  // تسجيل مستخدم جديد
  async register(userData) {
    // التحقق من البيانات
    this.validateRegistration(userData);
    
    // التحقق من وجود المستخدم
    if (this.userExists(userData.email)) {
      throw new Error('البريد الإلكتروني مسجل مسبقاً');
    }
    
    const user = {
      id: this.generateUserId(),
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      password: await this.hashPassword(userData.password),
      role: 'customer', // customer, admin, moderator
      emailVerified: false,
      phoneVerified: false,
      profile: {
        avatar: null,
        university: userData.university || '',
        major: userData.major || '',
        studentId: userData.studentId || ''
      },
      preferences: {
        language: 'ar',
        notifications: {
          email: true,
          sms: false,
          whatsapp: true
        }
      },
      stats: {
        totalOrders: 0,
        completedOrders: 0,
        totalSpent: 0,
        averageRating: 0
      },
      createdAt: new Date().toISOString(),
      lastLogin: null,
      status: 'active' // active, suspended, deleted
    };
    
    // حفظ المستخدم
    this.saveUser(user);
    
    // إرسال بريد التحقق
    await this.sendVerificationEmail(user);
    
    return user;
  }
  
  // تسجيل الدخول
  async login(email, password) {
    const user = this.getUserByEmail(email);
    
    if (!user) {
      throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
    
    // التحقق من كلمة المرور
    const isValid = await this.verifyPassword(password, user.password);
    if (!isValid) {
      throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
    
    // التحقق من حالة الحساب
    if (user.status !== 'active') {
      throw new Error('الحساب معلق. يرجى التواصل مع الدعم');
    }
    
    // إنشاء جلسة
    const session = this.createSession(user);
    
    // تحديث آخر تسجيل دخول
    user.lastLogin = new Date().toISOString();
    this.updateUser(user);
    
    // حفظ الجلسة
    this.setCurrentUser(user, session);
    
    return { user, session };
  }
  
  // تسجيل الخروج
  logout() {
    this.clearSession();
    this.currentUser = null;
    window.location.href = '/';
  }
  
  // التحقق من البريد الإلكتروني
  async verifyEmail(token) {
    const verification = this.getVerificationToken(token);
    
    if (!verification) {
      throw new Error('رمز التحقق غير صالح');
    }
    
    if (new Date(verification.expiresAt) < new Date()) {
      throw new Error('رمز التحقق منتهي الصلاحية');
    }
    
    const user = this.getUserById(verification.userId);
    user.emailVerified = true;
    this.updateUser(user);
    
    this.deleteVerificationToken(token);
    
    return user;
  }
  
  // إعادة تعيين كلمة المرور
  async resetPassword(email) {
    const user = this.getUserByEmail(email);
    
    if (!user) {
      // لأسباب أمنية، لا نخبر المستخدم إذا كان البريد غير موجود
      return { success: true };
    }
    
    const resetToken = this.generateResetToken();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // ساعة واحدة
    
    this.saveResetToken({
      token: resetToken,
      userId: user.id,
      expiresAt: expiresAt.toISOString()
    });
    
    await this.sendResetEmail(user, resetToken);
    
    return { success: true };
  }
  
  // تحديث كلمة المرور
  async updatePassword(token, newPassword) {
    const reset = this.getResetToken(token);
    
    if (!reset) {
      throw new Error('رمز إعادة التعيين غير صالح');
    }
    
    if (new Date(reset.expiresAt) < new Date()) {
      throw new Error('رمز إعادة التعيين منتهي الصلاحية');
    }
    
    const user = this.getUserById(reset.userId);
    user.password = await this.hashPassword(newPassword);
    this.updateUser(user);
    
    this.deleteResetToken(token);
    
    // إلغاء جميع الجلسات النشطة
    this.revokeAllSessions(user.id);
    
    return user;
  }
  
  // التحقق من الجلسة
  validateSession() {
    const session = this.getStoredSession();
    
    if (!session) return false;
    
    // التحقق من انتهاء الصلاحية
    if (new Date(session.expiresAt) < new Date()) {
      this.clearSession();
      return false;
    }
    
    // تجديد الجلسة
    this.renewSession(session);
    
    return true;
  }
  
  // إنشاء جلسة
  createSession(user) {
    const session = {
      id: this.generateSessionId(),
      userId: user.id,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + this.sessionTimeout).toISOString(),
      ipAddress: this.getClientIP(),
      userAgent: navigator.userAgent
    };
    
    return session;
  }
  
  // تجديد الجلسة
  renewSession(session) {
    session.expiresAt = new Date(Date.now() + this.sessionTimeout).toISOString();
    this.saveSession(session);
  }
  
  // مراقبة الجلسة
  setupSessionMonitor() {
    // التحقق كل دقيقة
    setInterval(() => {
      if (!this.validateSession()) {
        this.logout();
        alert('انتهت صلاحية الجلسة. يرجى تسجيل الدخول مرة أخرى.');
      }
    }, 60000);
    
    // تجديد عند النشاط
    ['click', 'keypress', 'scroll'].forEach(event => {
      document.addEventListener(event, () => {
        const session = this.getStoredSession();
        if (session) {
          this.renewSession(session);
        }
      });
    });
  }
  
  // التحقق من الصلاحيات
  hasPermission(permission) {
    if (!this.currentUser) return false;
    
    const rolePermissions = {
      admin: ['all'],
      moderator: ['manage_orders', 'manage_reviews', 'view_analytics'],
      customer: ['view_orders', 'create_orders', 'write_reviews']
    };
    
    const userPermissions = rolePermissions[this.currentUser.role] || [];
    
    return userPermissions.includes('all') || userPermissions.includes(permission);
  }
  
  // دوال مساعدة
  validateRegistration(data) {
    if (!data.email || !this.isValidEmail(data.email)) {
      throw new Error('البريد الإلكتروني غير صالح');
    }
    
    if (!data.password || data.password.length < 8) {
      throw new Error('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
    }
    
    if (!data.firstName || !data.lastName) {
      throw new Error('الاسم الكامل مطلوب');
    }
    
    if (!data.phone || !this.isValidPhone(data.phone)) {
      throw new Error('رقم الجوال غير صالح');
    }
  }
  
  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  isValidPhone(phone) {
    return /^(05|5)[0-9]{8}$/.test(phone.replace(/\s+/g, ''));
  }
  
  async hashPassword(password) {
    // في الإنتاج، استخدم bcrypt أو argon2
    // هذا مثال بسيط فقط
    return btoa(password + 'salt');
  }
  
  async verifyPassword(password, hash) {
    return await this.hashPassword(password) === hash;
  }
  
  generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  
  generateResetToken() {
    return btoa(Date.now() + Math.random().toString(36)).substr(0, 32);
  }
  
  // LocalStorage Operations
  saveUser(user) {
    const users = this.getAllUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  updateUser(user) {
    const users = this.getAllUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      users[index] = user;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
  
  getAllUsers() {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  }
  
  getUserById(id) {
    return this.getAllUsers().find(u => u.id === id);
  }
  
  getUserByEmail(email) {
    return this.getAllUsers().find(u => u.email === email);
  }
  
  userExists(email) {
    return this.getUserByEmail(email) !== undefined;
  }
  
  setCurrentUser(user, session) {
    this.currentUser = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    this.saveSession(session);
  }
  
  getCurrentUser() {
    const saved = sessionStorage.getItem('currentUser');
    return saved ? JSON.parse(saved) : null;
  }
  
  saveSession(session) {
    sessionStorage.setItem('session', JSON.stringify(session));
  }
  
  getStoredSession() {
    const saved = sessionStorage.getItem('session');
    return saved ? JSON.parse(saved) : null;
  }
  
  clearSession() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('session');
  }
  
  getClientIP() {
    // في الإنتاج، احصل عليه من الخادم
    return '0.0.0.0';
  }
  
  async sendVerificationEmail(user) {
    console.log('Verification email sent to:', user.email);
    // تنفيذ إرسال البريد الفعلي
  }
  
  async sendResetEmail(user, token) {
    console.log('Reset email sent to:', user.email, 'with token:', token);
    // تنفيذ إرسال البريد الفعلي
  }
  
  // إدارة الرموز
  saveVerificationToken(token) {
    const tokens = JSON.parse(localStorage.getItem('verification_tokens') || '[]');
    tokens.push(token);
    localStorage.setItem('verification_tokens', JSON.stringify(tokens));
  }
  
  getVerificationToken(token) {
    const tokens = JSON.parse(localStorage.getItem('verification_tokens') || '[]');
    return tokens.find(t => t.token === token);
  }
  
  deleteVerificationToken(token) {
    let tokens = JSON.parse(localStorage.getItem('verification_tokens') || '[]');
    tokens = tokens.filter(t => t.token !== token);
    localStorage.setItem('verification_tokens', JSON.stringify(tokens));
  }
  
  saveResetToken(tokenData) {
    const tokens = JSON.parse(localStorage.getItem('reset_tokens') || '[]');
    tokens.push(tokenData);
    localStorage.setItem('reset_tokens', JSON.stringify(tokens));
  }
  
  getResetToken(token) {
    const tokens = JSON.parse(localStorage.getItem('reset_tokens') || '[]');
    return tokens.find(t => t.token === token);
  }
  
  deleteResetToken(token) {
    let tokens = JSON.parse(localStorage.getItem('reset_tokens') || '[]');
    tokens = tokens.filter(t => t.token !== token);
    localStorage.setItem('reset_tokens', JSON.stringify(tokens));
  }
  
  revokeAllSessions(userId) {
    console.log('All sessions revoked for user:', userId);
    // في الإنتاج، احذف من قاعدة البيانات
  }
}

const auth = new AuthSystem();
```

### صفحة تسجيل الدخول:

```html
<!-- login.html -->
<div class="auth-page">
  <div class="auth-container">
    <div class="auth-header">
      <img src="logo.png" alt="منصة المنار">
      <h2>تسجيل الدخول</h2>
      <p>مرحباً بك مجدداً! سجل دخولك للمتابعة</p>
    </div>
    
    <form id="loginForm" class="auth-form">
      <div class="form-group">
        <label>البريد الإلكتروني</label>
        <div class="input-with-icon">
          <i class="fas fa-envelope"></i>
          <input type="email" id="email" required 
                 placeholder="example@email.com">
        </div>
      </div>
      
      <div class="form-group">
        <label>كلمة المرور</label>
        <div class="input-with-icon">
          <i class="fas fa-lock"></i>
          <input type="password" id="password" required 
                 placeholder="••••••••">
          <button type="button" class="toggle-password">
            <i class="far fa-eye"></i>
          </button>
        </div>
      </div>
      
      <div class="form-options">
        <label class="checkbox">
          <input type="checkbox" id="rememberMe">
          <span>تذكرني</span>
        </label>
        <a href="/forgot-password" class="link">نسيت كلمة المرور؟</a>
      </div>
      
      <button type="submit" class="btn-primary">
        تسجيل الدخول
      </button>
      
      <div class="divider">أو</div>
      
      <div class="social-login">
        <button type="button" class="btn-google">
          <i class="fab fa-google"></i>
          تسجيل الدخول بجوجل
        </button>
        <button type="button" class="btn-apple">
          <i class="fab fa-apple"></i>
          تسجيل الدخول بأبل
        </button>
      </div>
      
      <div class="auth-footer">
        <p>ليس لديك حساب؟ <a href="/register">إنشاء حساب جديد</a></p>
      </div>
    </form>
  </div>
</div>

<script>
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    const { user, session } = await auth.login(email, password);
    
    // إظهار رسالة نجاح
    showToast('تم تسجيل الدخول بنجاح!', 'success');
    
    // إعادة التوجيه
    setTimeout(() => {
      window.location.href = user.role === 'admin' ? '/admin' : '/dashboard';
    }, 1000);
    
  } catch (error) {
    showToast(error.message, 'error');
  }
});

// Toggle password visibility
document.querySelector('.toggle-password').addEventListener('click', function() {
  const passwordInput = document.getElementById('password');
  const icon = this.querySelector('i');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
});
</script>
```

---

## 📈 التسويق الرقمي والتحسينات

### 1. SEO (تحسين محركات البحث):

```html
<!-- تحسين الـ Meta Tags -->
<head>
  <!-- Primary Meta Tags -->
  <title>منصة المنار - أفضل خدمات طلابية أكاديمية في السعودية 2024</title>
  <meta name="title" content="منصة المنار - خدمات طلابية احترافية">
  <meta name="description" content="نقدم خدمات طلابية أكاديمية متكاملة: حل واجبات، مشاريع تخرج، بحوث علمية، تصميم عروض، تحليل إحصائي SPSS. ✓ جودة عالية ✓ أسعار مناسبة ✓ تسليم سريع">
  <meta name="keywords" content="خدمات طلابية, حل واجبات, مشاريع جامعية, بحوث علمية, تصميم عروض, SPSS, تحليل إحصائي, برمجة, تصميم جرافيك">
  <meta name="robots" content="index, follow">
  <meta name="language" content="Arabic">
  <meta name="author" content="منصة المنار">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yoursite.com/">
  <meta property="og:title" content="منصة المنار - خدمات طلابية احترافية">
  <meta property="og:description" content="نقدم خدمات طلابية أكاديمية متكاملة بجودة عالية وأسعار مناسبة">
  <meta property="og:image" content="https://yoursite.com/og-image.jpg">
  <meta property="og:locale" content="ar_SA">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yoursite.com/">
  <meta property="twitter:title" content="منصة المنار - خدمات طلابية احترافية">
  <meta property="twitter:description" content="نقدم خدمات طلابية أكاديمية متكاملة">
  <meta property="twitter:image" content="https://yoursite.com/twitter-image.jpg">
  
  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "منصة المنار للخدمات الطلابية",
    "url": "https://yoursite.com",
    "logo": "https://yoursite.com/logo.png",
    "description": "منصة متخصصة في تقديم خدمات طلابية أكاديمية",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+966597389791",
      "contactType": "customer service",
      "availableLanguage": "Arabic"
    },
    "sameAs": [
      "https://twitter.com/yourpage",
      "https://facebook.com/yourpage",
      "https://instagram.com/yourpage"
    ]
  }
  </script>
  
  <!-- Service Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Academic Services",
    "provider": {
      "@type": "Organization",
      "name": "منصة المنار"
    },
    "areaServed": "SA",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات طلابية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "حل الواجبات الجامعية"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "مشاريع التخرج"
          }
        }
      ]
    }
  }
  </script>
</head>
```

### 2. Google Analytics المتقدم:

```javascript
// advanced-analytics.js
class AdvancedAnalytics {
  constructor() {
    this.initGA4();
    this.trackPageView();
    this.setupEventTracking();
  }
  
  initGA4() {
    // Google Analytics 4
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      'send_page_view': false, // سنتحكم يدوياً
      'custom_map': {
        'dimension1': 'user_type',
        'dimension2': 'service_category'
      }
    });
  }
  
  trackPageView(path = window.location.pathname) {
    gtag('event', 'page_view', {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href
    });
  }
  
  setupEventTracking() {
    // تتبع النقرات على أزرار واتساب
    document.addEventListener('click', (e) => {
      const whatsappBtn = e.target.closest('[href*="wa.me"]');
      if (whatsappBtn) {
        this.trackWhatsAppClick(whatsappBtn);
      }
      
      // تتبع النقر على الخدمات
      const serviceBtn = e.target.closest('[data-service-id]');
      if (serviceBtn) {
        this.trackServiceClick(serviceBtn.dataset.serviceId);
      }
    });
    
    // تتبع التمرير
    this.trackScrollDepth();
    
    // تتبع الوقت المستغرق
    this.trackTimeOnPage();
    
    // تتبع الخروج
    this.trackExitIntent();
  }
  
  trackWhatsAppClick(button) {
    const service = button.dataset.serviceName || 'غير محدد';
    
    gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: service,
      value: 1
    });
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Contact', {
        content_name: service,
        content_category: 'WhatsApp'
      });
    }
  }
  
  trackServiceClick(serviceId) {
    gtag('event', 'select_content', {
      content_type: 'service',
      content_id: serviceId
    });
  }
  
  trackScrollDepth() {
    let maxScroll = 0;
    const depths = [25, 50, 75, 90, 100];
    
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      depths.forEach(depth => {
        if (scrollPercent >= depth && maxScroll < depth) {
          maxScroll = depth;
          gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${depth}%`,
            value: depth
          });
        }
      });
    });
  }
  
  trackTimeOnPage() {
    const startTime = Date.now();
    
    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      gtag('event', 'time_on_page', {
        event_category: 'engagement',
        value: timeSpent
      });
    });
  }
  
  trackExitIntent() {
    document.addEventListener('mouseout', (e) => {
      if (e.clientY < 0 && !this.exitIntentTriggered) {
        this.exitIntentTriggered = true;
        
        gtag('event', 'exit_intent', {
          event_category: 'engagement'
        });
        
        // يمكن عرض عرض خاص هنا
        this.showExitPopup();
      }
    });
  }
  
  // تتبع التحويلات
  trackConversion(type, value, orderId) {
    gtag('event', 'conversion', {
      send_to: 'AW-XXXXXXXXX/XXXXXX', // Google Ads
      value: value,
      currency: 'SAR',
      transaction_id: orderId
    });
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'Purchase', {
        value: value,
        currency: 'SAR',
        content_ids: [orderId],
        content_type: 'product'
      });
    }
  }
  
  // تتبع إضافة للسلة
  trackAddToCart(service, price) {
    gtag('event', 'add_to_cart', {
      currency: 'SAR',
      value: price,
      items: [{
        item_id: service.id,
        item_name: service.name,
        item_category: service.category,
        price: price,
        quantity: 1
      }]
    });
  }
  
  // تتبع بدء عملية الشراء
  trackBeginCheckout(cart) {
    const items = cart.items.map(item => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity
    }));
    
    gtag('event', 'begin_checkout', {
      currency: 'SAR',
      value: cart.getTotal(),
      items: items
    });
  }
  
  showExitPopup() {
    // عرض نافذة منبثقة بعرض خاص
    console.log('Exit intent detected - showing special offer');
  }
}

const analytics = new AdvancedAnalytics();
```

### 3. حملات البريد الإلكتروني:

```javascript
// email-marketing.js
class EmailMarketing {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.lists = {
      newsletter: 'list_newsletter',
      customers: 'list_customers',
      prospects: 'list_prospects'
    };
  }
  
  // الاشتراك في النشرة البريدية
  async subscribe(email, name, listId = this.lists.newsletter) {
    try {
      const response = await fetch('/api/email/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          email: email,
          name: name,
          list_id: listId,
          tags: ['new_subscriber'],
          source: 'website'
        })
      });
      
      if (!response.ok) throw new Error('فشل الاشتراك');
      
      // إرسال بريد ترحيبي
      await this.sendWelcomeEmail(email, name);
      
      return await response.json();
    } catch (error) {
      console.error('Subscribe error:', error);
      throw error;
    }
  }
  
  // إرسال بريد ترحيبي
  async sendWelcomeEmail(email, name) {
    const template = {
      to: email,
      from: 'info@platform.com',
      subject: 'مرحباً بك في منصة المنار! 🎓',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a237e, #3949ab); 
                      color: white; padding: 40px; text-align: center; }
            .content { background: white; padding: 40px; }
            .btn { background: #10b981; color: white; padding: 15px 30px; 
                   text-decoration: none; border-radius: 8px; display: inline-block; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>مرحباً بك ${name}! 🎉</h1>
              <p>نحن سعداء بانضمامك إلى عائلة منصة المنار</p>
            </div>
            
            <div class="content">
              <h2>ما الذي يمكنك فعله الآن؟</h2>
              
              <p>✅ تصفح أكثر من 50 خدمة أكاديمية مختلفة</p>
              <p>✅ احصل على خصم 20% على طلبك الأول</p>
              <p>✅ تواصل مع فريق الدعم على مدار الساعة</p>
              
              <p style="margin: 30px 0;">
                <a href="https://yoursite.com/?discount=WELCOME20" class="btn">
                  ابدأ الآن واحصل على خصمك
                </a>
              </p>
              
              <p>كود الخصم: <strong>WELCOME20</strong></p>
              
              <hr style="margin: 40px 0;">
              
              <p style="color: #666; font-size: 14px;">
                هل لديك أسئلة؟ تواصل معنا على واتساب: 
                <a href="https://wa.me/966597389791">0597389791</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };
    
    return await this.sendEmail(template);
  }
  
  // حملة التسويق بالتنقيط (Drip Campaign)
  async setupDripCampaign(userId, campaignType) {
    const campaigns = {
      onboarding: [
        { day: 1, template: 'welcome' },
        { day: 3, template: 'features' },
        { day: 7, template: 'testimonials' },
        { day: 14, template: 'special_offer' }
      ],
      abandoned_cart: [
        { hours: 1, template: 'cart_reminder_1' },
        { hours: 24, template: 'cart_reminder_2' },
        { hours: 72, template: 'cart_final_offer' }
      ],
      post_purchase: [
        { day: 1, template: 'thank_you' },
        { day: 7, template: 'feedback_request' },
        { day: 30, template: 'comeback_offer' }
      ]
    };
    
    const schedule = campaigns[campaignType];
    if (!schedule) return;
    
    schedule.forEach(email => {
      this.scheduleEmail(userId, email.template, email.day || email.hours);
    });
  }
  
  // إرسال بريد السلة المتروكة
  async sendAbandonedCartEmail(cartData) {
    const total = cartData.items.reduce((sum, item) => sum + item.price, 0);
    
    const template = {
      to: cartData.customerEmail,
      subject: '🛒 نسيت شيئاً في سلتك!',
      html: this.generateCartReminderHTML(cartData.items, total)
    };
    
    await this.sendEmail(template);
  }
  
  generateCartReminderHTML(items, total) {
    const itemsHTML = items.map(item => `
      <div style="padding: 15px; border: 1px solid #e5e7eb; margin: 10px 0;">
        <strong>${item.name}</strong><br>
        <span style="color: #10b981;">$${item.price}</span>
      </div>
    `).join('');
    
    return `
      <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
        <h2>لا تفوت هذه الخدمات!</h2>
        <p>لاحظنا أنك تركت بعض الخدمات في سلتك:</p>
        ${itemsHTML}
        <div style="margin: 30px 0; padding: 20px; background: #f9fafb;">
          <strong>الإجمالي: ${total} ريال</strong>
        </div>
        <p>
          <a href="https://yoursite.com/checkout" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block;">
            إتمام الطلب الآن
          </a>
        </p>
        <p style="margin-top: 30px; color: #666;">
          💡 نصيحة: استخدم كود <strong>COMPLETE10</strong> للحصول على خصم 10%
        </p>
      </div>
    `;
  }
  
  async sendEmail(template) {
    // استخدام SendGrid، Mailgun، أو أي خدمة أخرى
    console.log('Sending email:', template);
    return { success: true };
  }
  
  scheduleEmail(userId, template, delay) {
    console.log(`Scheduling ${template} for user ${userId} in ${delay} days`);
  }
}
```

---

## 🤖 الأتمتة والذكاء الاصطناعي

### 1. Chatbot ذكي:

```javascript
// ai-chatbot.js
class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.init();
  }
  
  init() {
    this.createChatWidget();
    this.setupEventListeners();
    this.loadKnowledgeBase();
  }
  
  createChatWidget() {
    const widget = document.createElement('div');
    widget.innerHTML = `
      <div class="chatbot-container" id="chatbotContainer">
        <!-- زر الفتح -->
        <button class="chatbot-toggle" id="chatbotToggle">
          <i class="fas fa-comments"></i>
          <span class="badge">1</span>
        </button>
        
        <!-- نافذة الشات -->
        <div class="chatbot-window" id="chatbotWindow">
          <div class="chatbot-header">
            <div class="chatbot-header-info">
              <img src="bot-avatar.png" alt="Bot">
              <div>
                <strong>مساعد المنار</strong>
                <span class="status">متصل الآن</span>
              </div>
            </div>
            <button class="chatbot-close" id="chatbotClose">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="chatbot-messages" id="chatbotMessages">
            <div class="message bot-message">
              <div class="message-avatar">
                <img src="bot-avatar.png" alt="Bot">
              </div>
              <div class="message-content">
                <p>مرحباً! 👋 أنا مساعدك الذكي.</p>
                <p>كيف يمكنني مساعدتك اليوم؟</p>
              </div>
            </div>
          </div>
          
          <!-- أزرار سريعة -->
          <div class="quick-replies">
            <button class="quick-reply" data-message="ما هي الخدمات المتوفرة؟">
              الخدمات
            </button>
            <button class="quick-reply" data-message="كم الأسعار؟">
              الأسعار
            </button>
            <button class="quick-reply" data-message="كيف أطلب خدمة؟">
              كيف أطلب؟
            </button>
          </div>
          
          <div class="chatbot-input">
            <input type="text" id="chatbotInput" 
                   placeholder="اكتب رسالتك هنا...">
            <button id="chatbotSend">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(widget);
  }
  
  setupEventListeners() {
    const toggle = document.getElementById('chatbotToggle');
    const close = document.getElementById('chatbotClose');
    const send = document.getElementById('chatbotSend');
    const input = document.getElementById('chatbotInput');
    
    toggle.addEventListener('click', () => this.toggle());
    close.addEventListener('click', () => this.close());
    send.addEventListener('click', () => this.sendMessage());
    
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
    
    // الردود السريعة
    document.querySelectorAll('.quick-reply').forEach(btn => {
      btn.addEventListener('click', () => {
        const message = btn.dataset.message;
        this.sendMessage(message);
      });
    });
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbotWindow');
    const toggle = document.getElementById('chatbotToggle');
    
    window.classList.toggle('open', this.isOpen);
    toggle.classList.toggle('hidden', this.isOpen);
  }
  
  close() {
    this.isOpen = false;
    document.getElementById('chatbotWindow').classList.remove('open');
    document.getElementById('chatbotToggle').classList.remove('hidden');
  }
  
  async sendMessage(text = null) {
    const input = document.getElementById('chatbotInput');
    const message = text || input.value.trim();
    
    if (!message) return;
    
    // إضافة رسالة المستخدم
    this.addMessage(message, 'user');
    
    // مسح الإدخال
    input.value = '';
    
    // إظهار مؤشر الكتابة
    this.showTypingIndicator();
    
    // الحصول على الرد
    const response = await this.getAIResponse(message);
    
    // إخفاء مؤشر الكتابة
    this.hideTypingIndicator();
    
    // إضافة رد البوت
    this.addMessage(response.text, 'bot');
    
    // إضافة أزرار إجراءات إذا كانت متوفرة
    if (response.actions) {
      this.addActions(response.actions);
    }
  }
  
  addMessage(text, type) {
    const messagesContainer = document.getElementById('chatbotMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    if (type === 'bot') {
      messageDiv.innerHTML = `
        <div class="message-avatar">
          <img src="bot-avatar.png" alt="Bot">
        </div>
        <div class="message-content">
          <p>${text}</p>
          <span class="message-time">${this.getCurrentTime()}</span>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="message-content">
          <p>${text}</p>
          <span class="message-time">${this.getCurrentTime()}</span>
        </div>
      `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    this.messages.push({ text, type, timestamp: new Date() });
  }
  
  showTypingIndicator() {
    const messagesContainer = document.getElementById('chatbotMessages');
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
      <div class="message bot-message">
        <div class="message-avatar">
          <img src="bot-avatar.png" alt="Bot">
        </div>
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    
    messagesContainer.appendChild(indicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }
  
  async getAIResponse(message) {
    // محاكاة تأخير الشبكة
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const normalizedMessage = message.toLowerCase();
    
    // البحث في قاعدة المعرفة
    for (const [pattern, response] of this.knowledgeBase) {
      if (normalizedMessage.includes(pattern)) {
        return typeof response === 'function' 
          ? response(message) 
          : { text: response };
      }
    }
    
    // الرد الافتراضي
    return {
      text: 'شكراً على سؤالك! دعني أوصلك بأحد ممثلي خدمة العملاء.',
      actions: [
        {
          text: 'تواصل عبر واتساب',
          type: 'whatsapp',
          url: 'https://wa.me/966597389791'
        }
      ]
    };
  }
  
  loadKnowledgeBase() {
    this.knowledgeBase = new Map([
      ['الخدمات', {
        text: 'نقدم خدمات متنوعة:\n\n' +
              '📚 الكتابة الأكاديمية\n' +
              '💻 البرمجة والتقنية\n' +
              '📊 التحليل الإحصائي\n' +
              '🎨 التصميم والعروض\n' +
              '📝 التطوير المهني\n\n' +
              'أي خدمة تهمك؟',
        actions: [
          { text: 'عرض جميع الخدمات', type: 'link', url: '#services' }
        ]
      }],
      
      ['الأسعار', {
        text: 'أسعارنا تنافسية جداً وتبدأ من:\n\n' +
              '• حل الواجبات: من 100 ريال\n' +
              '• البحوث: من 300 ريال\n' +
              '• مشاريع التخرج: من 800 ريال\n' +
              '• التصميم: من 150 ريال\n\n' +
              'السعر النهائي يعتمد على التفاصيل.',
        actions: [
          { text: 'طلب عرض سعر', type: 'whatsapp', url: 'https://wa.me/966597389791?text=أريد عرض سعر' }
        ]
      }],
      
      ['التسليم', (msg) => ({
        text: 'مدة التسليم تختلف حسب الخدمة:\n\n' +
              '⚡ عاجل: 24-48 ساعة (رسوم إضافية)\n' +
              '📅 عادي: 3-7 أيام\n' +
              '📊 مشاريع كبيرة: 7-14 يوم\n\n' +
              'نلتزم دائماً بالمواعيد المحددة!',
        actions: [
          { text: 'طلب عاجل', type: 'whatsapp', url: 'https://wa.me/966597389791?text=طلب عاجل' }
        ]
      })],
      
      ['الدفع', {
        text: 'نقبل طرق دفع متعددة:\n\n' +
              '💳 بطاقات الائتمان (فيزا/ماستركارد)\n' +
              '🇸🇦 مدى\n' +
              '📱 Apple Pay\n' +
              '💵 STC Pay\n' +
              '🏦 تحويل بنكي\n\n' +
              'جميع المعاملات آمنة ومشفرة 🔒'
      }],
      
      ['الجودة', {
        text: 'نضمن لك:\n\n' +
              '✅ جودة عالية 100%\n' +
              '✅ أصالة المحتوى (خالي من الانتحال)\n' +
              '✅ مراجعة مجانية\n' +
              '✅ ضمان استرجاع المبلغ\n' +
              '✅ سرية تامة\n\n' +
              'رضاك هو أولويتنا! 🎯'
      }],
      
      ['مرحبا', 'مرحباً بك! 👋 كيف يمكنني مساعدتك اليوم؟'],
      ['شكرا', 'العفو! 😊 سعداء بخدمتك. هل تحتاج مساعدة أخرى؟']
    ]);
  }
  
  addActions(actions) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'bot-actions';
    
    actions.forEach(action => {
      const button = document.createElement('button');
      button.className = 'action-button';
      button.textContent = action.text;
      
      button.addEventListener('click', () => {
        if (action.type === 'whatsapp') {
          window.open(action.url, '_blank');
        } else if (action.type === 'link') {
          window.location.href = action.url;
        }
      });
      
      actionsDiv.appendChild(button);
    });
    
    messagesContainer.appendChild(actionsDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  getCurrentTime() {
    return new Date().toLocaleTimeString('ar-SA', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
}

// تهيئة الشات بوت
const chatbot = new AIChatbot();
```

---

## 📱 تطبيق الجوال (PWA)

### إضافة دعم PWA:

```html
<!-- في index.html -->
<head>
  <!-- PWA Meta Tags -->
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="منصة المنار">
  <meta name="theme-color" content="#1a237e">
  
  <!-- Icons -->
  <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon-512x512.png">
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">
  
  <!-- Manifest -->
  <link rel="manifest" href="/manifest.json">
</head>
```

```json
// manifest.json
{
  "name": "منصة المنار للخدمات الطلابية",
  "short_name": "المنار",
  "description": "منصة متخصصة في تقديم خدمات طلابية أكاديمية احترافية",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#1a237e",
  "orientation": "portrait",
  "lang": "ar",
  "dir": "rtl",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/home.png",
      "sizes": "540x720",
      "type": "image/png"
    }
  ],
  "categories": ["education", "productivity"],
  "shortcuts": [
    {
      "name": "الطلبات",
      "short_name": "الطلبات",
      "description": "عرض طلباتك",
      "url": "/orders",
      "icons": [{ "src": "/icons/orders.png", "sizes": "96x96" }]
    },
    {
      "name": "تواصل معنا",
      "short_name": "تواصل",
      "description": "تواصل عبر واتساب",
      "url": "https://wa.me/966597389791",
      "icons": [{ "src": "/icons/whatsapp.png", "sizes": "96x96" }]
    }
  ]
}
```

```javascript
// service-worker.js
const CACHE_NAME = 'manar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.css',
  '/style.css',
  '/main.js',
  '/script.js',
  '/logo.png',
  '/offline.html'
];

// التثبيت
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// التفعيل
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// الاستجابة للطلبات
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // إرجاع من الكاش أو جلب من الشبكة
        return response || fetch(event.request);
      })
      .catch(() => {
        // عرض صفحة أوفلاين
        return caches.match('/offline.html');
      })
  );
});

// الإشعارات Push
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url
    },
    actions: [
      { action: 'view', title: 'عرض' },
      { action: 'close', title: 'إغلاق' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// النقر على الإشعار
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});
```

---

## 📊 خطة التنفيذ والأولويات

### المرحلة 1: الأساسيات (1-2 أسبوع)
1. ✅ نظام سلة المشتريات
2. ✅ نظام إدارة الطلبات الأساسي
3. ✅ صفحة تتبع الطلب
4. ✅ نظام التقييمات البسيط

### المرحلة 2: البنية التحتية (2-3 أسابيع)
1. ✅ نظام حسابات المستخدمين (تسجيل/دخول)
2. ✅ لوحة تحكم العميل
3. ✅ نظام الدفع الإلكتروني (Moyasar)
4. ✅ إشعارات البريد الإلكتروني

### المرحلة 3: التحسينات (2-3 أسابيع)
1. ✅ لوحة التحكم الإدارية
2. ✅ نظام التقارير والتحليلات
3. ✅ SEO المتقدم
4. ✅ Google Analytics المتقدم

### المرحلة 4: الأتمتة (2-3 أسابيع)
1. ✅ Chatbot ذكي
2. ✅ التسويق بالبريد الإلكتروني
3. ✅ حملات التنقيط
4. ✅ PWA

### المرحلة 5: التسويق والنمو (مستمر)
1. ✅ حملات إعلانية (Google Ads, Facebook Ads)
2. ✅ برنامج الإحالة
3. ✅ برنامج الولاء
4. ✅ التسويق بالمحتوى

---

## 💰 التكاليف التقديرية

### الاشتراكات الشهرية:
- **بوابة الدفع** (Moyasar): 0-200 ريال (حسب الحجم)
- **استضافة** (Netlify/Vercel): مجاني - 100 ريال
- **قاعدة البيانات** (Firebase/Supabase): مجاني - 150 ريال
- **البريد الإلكتروني** (SendGrid): مجاني - 100 ريال
- **Google Workspace**: 24 ريال/مستخدم
- **Slack** (للفريق): مجاني - 27 ريال/مستخدم

**الإجمالي الشهري**: 0 - 600 ريال

### تكاليف التسويق:
- **Google Ads**: 500 - 2000 ريال/شهر
- **Facebook Ads**: 300 - 1500 ريال/شهر
- **SEO Tools**: 100 - 400 ريال/شهر

---

## 🎯 مؤشرات الأداء الرئيسية (KPIs)

### المبيعات:
- عدد الطلبات الشهرية
- متوسط قيمة الطلب
- معدل التحويل (زائر → عميل)
- القيمة الدائمة للعميل (CLV)

### التسويق:
- تكلفة اكتساب العميل (CAC)
- معدل الاحتفاظ بالعملاء
- معدل الإحالة
- NPS (صافي نقاط الترويج)

### العمليات:
- متوسط وقت إنجاز الطلب
- معدل رضا العملاء
- معدل إعادة العمل
- معدل الشكاوى

---

*تم بناء هذا الدليل بناءً على أفضل الممارسات في صناعة التجارة الإلكترونية والخدمات الطلابية*

*آخر تحديث: 2024*
