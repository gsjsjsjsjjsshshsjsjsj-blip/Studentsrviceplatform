# API Documentation - منصة المنار للخدمات الطلابية

## Table of Contents
- [Overview](#overview)
- [Core Data Structures](#core-data-structures)
- [Main Application (script.js)](#main-application-scriptjs)
- [Data Management (data.js)](#data-management-datajs)
- [Portfolio System (portfilo.js)](#portfolio-system-portfilojs)
- [Portfolio Modal (portfolio-modal.js)](#portfolio-modal-portfolio-modaljs)
- [Utilities (main.js)](#utilities-mainjs)
- [Message Templates (messages-data.js)](#message-templates-messages-datajs)
- [Usage Examples](#usage-examples)

---

## Overview

This is a comprehensive student services platform built with vanilla JavaScript. The platform provides an interactive card-based interface for browsing services, managing ratings, and contacting via WhatsApp.

**Key Features:**
- Dynamic service cards with filtering and search
- Interactive rating and like system
- Portfolio showcase with carousel view
- Responsive design with touch support detection
- LocalStorage-based state persistence
- WhatsApp integration for service requests

---

## Core Data Structures

### cardData Array
Located in `data.js`. Contains all service cards displayed on the main page.

```javascript
const cardData = [
  {
    id: string,              // Unique card identifier
    title: string,           // Card title (e.g., "الحاسب والتقنية")
    image: string,           // Card background image URL
    ratingText: string,      // Display rating text
    deliveryText: string,    // Delivery time text
    priceText: string,       // Price text
    views: string,           // View count (e.g., "5.2K")
    likes: number,           // Like count
    whatsappLink: string,    // WhatsApp contact URL
    tags: string[],          // Array of service tags
    services: {
      title: string,         // Services section title
      items: ServiceItem[]   // Array of service items
    }
  }
]
```

### ServiceItem Structure
```javascript
{
  id: string,              // Unique service identifier
  name: string,            // Service name
  details: DetailItem[],   // Array of service details
  baseLikes: number,       // Initial like count
  baseRatingSum: number,   // Initial rating sum
  baseVotes: number        // Initial vote count
}
```

### DetailItem Structure
```javascript
{
  icon: string,            // FontAwesome icon class
  title: string,           // Detail title
  text: string             // Detail description
}
```

### portfolioData Array
Located in `portfilo.js`. Contains portfolio project items.

```javascript
{
  id: number,                    // Unique project ID
  title: string,                 // Project title
  category: string,              // Category ID
  categoryName: string,          // Category display name
  description: string,           // Short description
  image: string,                 // Project image URL
  views: number,                 // View count
  rating: number,                // Rating (1-5)
  date: string,                  // Completion date (YYYY-MM-DD)
  detailedDescription: string,   // Full description
  features: string[],            // Array of features
  screenshots: string[],         // Array of screenshot URLs
  clientReview: string,          // Client testimonial
  clientReviewImage: string      // Review screenshot URL
}
```

---

## Main Application (script.js)

The main application is organized as an `App` object with modular functions.

### App Object

#### Initialization

##### `App.init()`
Initializes the application.

**Usage:**
```javascript
// Called automatically on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
```

**What it does:**
- Builds service cards from `cardData`
- Adds global event listeners
- Shows welcome notification

---

### Card Management

##### `App.buildCards()`
Generates all service cards from `cardData`.

**Usage:**
```javascript
App.buildCards();
```

**Returns:** void

---

##### `App.createCardElement(data)`
Creates a single card DOM element.

**Parameters:**
- `data` (Object): Card data from `cardData`

**Returns:** HTMLElement - The created card element

**Usage:**
```javascript
const cardElement = App.createCardElement(cardData[0]);
document.getElementById('cardsContainer').appendChild(cardElement);
```

---

### Modal Management

##### `App.openMainModal(cardId)`
Opens the services modal for a specific card.

**Parameters:**
- `cardId` (string): The ID of the card to display

**Usage:**
```javascript
App.openMainModal('comprehensive_services_card');
```

**Features:**
- Loads saved preferences from localStorage
- Renders service list
- Applies visual effects to highlight selected card
- Sets up WhatsApp links

---

##### `App.closeMainModal()`
Closes the main services modal.

**Usage:**
```javascript
App.closeMainModal();
```

**Features:**
- Removes modal visibility
- Restores card styles to normal
- Removes transition effects

---

##### `App.showDetails(serviceId)`
Opens detailed view for a specific service.

**Parameters:**
- `serviceId` (string): The service ID to display

**Usage:**
```javascript
App.showDetails('prog1_help');
```

**Features:**
- Displays service details with icons
- Sets up WhatsApp order link
- Closes main modal
- Opens details modal

---

##### `App.closeDetailsAndReopenMain()`
Closes details modal and reopens the main services modal.

**Usage:**
```javascript
App.closeDetailsAndReopenMain();
```

---

### State Management

##### `App.loadState()`
Loads user preferences from localStorage for the current card.

**Usage:**
```javascript
App.loadState();
```

**Features:**
- Retrieves ratings and likes from localStorage
- Calculates current metrics based on base values + user preferences
- Updates `App.state.currentServices` Map

---

##### `App.saveState()`
Saves current preferences to localStorage.

**Usage:**
```javascript
App.saveState();
```

**Stored Data:**
```javascript
{
  "services_prefs": {
    "cardId": {
      "serviceId": {
        "userRating": number,
        "userLiked": boolean
      }
    }
  }
}
```

---

##### `App.resetState()`
Resets all preferences for the current card category.

**Usage:**
```javascript
App.resetState();
```

---

### Service Interactions

##### `App.toggleServiceLike(serviceId, likeBtnElement)`
Toggles like status for a service.

**Parameters:**
- `serviceId` (string): Service identifier
- `likeBtnElement` (HTMLElement): The like button element

**Usage:**
```javascript
App.toggleServiceLike('web_dev_help', likeBtnElement);
```

**Features:**
- Updates like count
- Saves to localStorage
- Shows toast notification
- Updates UI immediately

---

##### `App.rateService(serviceId, value, ratingContainer)`
Sets or updates the rating for a service.

**Parameters:**
- `serviceId` (string): Service identifier
- `value` (string): Rating value (1-5)
- `ratingContainer` (HTMLElement): Rating container element

**Usage:**
```javascript
App.rateService('data_struct_help', '5', ratingContainer);
```

**Features:**
- Calculates average rating
- Tracks user votes
- Prevents duplicate voting
- Shows confirmation toast

---

### Search and Filter

##### `App.filterServices(query)`
Filters services based on search query.

**Parameters:**
- `query` (string): Search term

**Usage:**
```javascript
App.filterServices('برمجة');
```

**Features:**
- Case-insensitive search
- Shows/hides matching services
- Displays "no results" message

---

##### `App.filterMainCards(query)`
Searches and filters main service cards.

**Parameters:**
- `query` (string): Search term

**Usage:**
```javascript
App.filterMainCards('تصميم');
```

**Features:**
- Direct matching (title, tags, rating, delivery, price)
- Indirect matching (searches within service items)
- Smart multi-choice toast for multiple results
- Auto-scrolls to single match

---

##### `App.scrollToCard(cardId, highlight)`
Scrolls to a specific card and optionally highlights it.

**Parameters:**
- `cardId` (string): Card ID to scroll to
- `highlight` (boolean): Whether to apply highlight effect (default: false)

**Usage:**
```javascript
App.scrollToCard('academic_writing_card', true);
```

---

### Notifications

##### `App.showToast(message, duration)`
Displays a toast notification.

**Parameters:**
- `message` (string): HTML message content
- `duration` (number): Display duration in milliseconds (default: 3000)

**Usage:**
```javascript
App.showToast('تم حفظ التفضيلات بنجاح!', 5000);

// HTML content supported
App.showToast('<b>مرحباً!</b> نورت المنصة 🌟', 10000);
```

---

##### `App.showModalToast(message)`
Shows a toast notification inside the modal.

**Parameters:**
- `message` (string): Message text

**Usage:**
```javascript
App.showModalToast('شكراً لتقييمك!');
```

---

##### `App.showMultiChoiceToast(message, buttons)`
Displays a toast with multiple action buttons.

**Parameters:**
- `message` (string): HTML message to display
- `buttons` (Array): Array of button objects

**Button Object Structure:**
```javascript
{
  text: string,      // Button label
  action: Function   // Click handler
}
```

**Usage:**
```javascript
App.showMultiChoiceToast(
  'وجدنا 3 نتائج:',
  [
    { text: 'الحاسب والتقنية', action: () => App.scrollToCard('tech_card') },
    { text: 'البرمجة', action: () => App.scrollToCard('programming_card') },
    { text: 'التصميم', action: () => App.scrollToCard('design_card') }
  ]
);
```

---

##### `App.showWelcomeNotification()`
Shows welcome message on first page load (session-based).

**Usage:**
```javascript
App.showWelcomeNotification();
```

**Features:**
- Only shown once per session
- Uses sessionStorage to track
- Delayed appearance (2 seconds)
- Extended duration (10 seconds)

---

### Event Handlers

##### `App.handleDynamicAction(event)`
Central event handler for all `[data-action]` elements.

**Supported Actions:**
- `open-services-modal`
- `close-details-modal`
- `reset-prefs`
- `show-details`
- `like-service`
- `rate-service`

**Usage:**
```html
<button data-action="open-services-modal">عرض الخدمات</button>
```

---

##### `App.handleCardMouseMove(event)`
Handles 3D tilt effect on card hover (desktop only).

**Usage:**
Automatically attached to cards on non-touch devices.

---

##### `App.handleCardLike(event)`
Handles card-level like button clicks.

**Usage:**
Automatically attached to card like buttons.

---

##### `App.handleCardRate(event)`
Handles card-level rating clicks.

**Usage:**
Automatically attached to card rating stars.

---

##### `App.handleEscape(event)`
Handles Escape key to close modals.

**Usage:**
Automatically attached to document.

---

### Rendering

##### `App.renderServiceList()`
Renders all services for the current card.

**Usage:**
```javascript
App.renderServiceList();
```

**Features:**
- Creates list items from templates
- Applies current filter
- Updates ratings and likes

---

##### `App.createServiceElement(item)`
Creates a single service list item.

**Parameters:**
- `item` (Object): Service item with state

**Returns:** HTMLElement

**Usage:**
```javascript
const serviceItem = App.createServiceElement({
  id: 'web_dev_help',
  name: 'تطوير مواقع الويب',
  state: { likes: 250, rating: 4.8, votes: 26, userRating: 0, userLiked: false }
});
```

---

##### `App.updateServiceItemUI(serviceId)`
Updates the UI for a specific service item.

**Parameters:**
- `serviceId` (string): Service ID to update

**Usage:**
```javascript
App.updateServiceItemUI('ml_fun_help');
```

---

## Data Management (data.js)

### cardData
Main data source for service cards.

**Access:**
```javascript
// Get all cards
const allCards = cardData;

// Find specific card
const card = cardData.find(c => c.id === 'comprehensive_services_card');

// Get all services from a card
const services = card.services.items;
```

**Example Service Access:**
```javascript
// Get a specific service
const programmingService = cardData
  .find(c => c.id === 'comprehensive_services_card')
  .services.items
  .find(s => s.id === 'web_dev_help');
```

---

## Portfolio System (portfilo.js)

### EnhancedPortfolio Class

The portfolio system is implemented as a class with comprehensive functionality.

#### Constructor
```javascript
const portfolio = new EnhancedPortfolio();
```

**Properties:**
- `currentFilter` - Active category filter
- `currentSort` - Current sort option
- `searchTerm` - Current search term
- `filteredData` - Filtered portfolio items
- `currentView` - View mode ('grid' or 'carousel')
- `currentCarouselIndex` - Current carousel position
- `autoplayEnabled` - Autoplay status
- `autoplayInterval` - Autoplay delay (ms)

---

### Public Methods

##### `portfolio.init()`
Initializes the portfolio system.

**Usage:**
```javascript
portfolio.init();
```

---

##### `portfolio.switchView(viewType)`
Switches between grid and carousel views.

**Parameters:**
- `viewType` (string): 'grid' or 'carousel'

**Usage:**
```javascript
portfolio.switchView('carousel');
```

---

##### `portfolio.openModal(itemId)`
Opens the portfolio modal for a project.

**Parameters:**
- `itemId` (number): Project ID

**Usage:**
```javascript
portfolio.openModal(1);
```

**Features:**
- Displays project details
- Shows features list
- Renders screenshots
- Shows client reviews
- Provides WhatsApp contact

---

##### `portfolio.closeModal()`
Closes the portfolio modal.

**Usage:**
```javascript
portfolio.closeModal();
```

---

##### `portfolio.nextCarouselItem()`
Moves to next carousel item.

**Usage:**
```javascript
portfolio.nextCarouselItem();
```

---

##### `portfolio.previousCarouselItem()`
Moves to previous carousel item.

**Usage:**
```javascript
portfolio.previousCarouselItem();
```

---

##### `portfolio.goToCarouselItem(index)`
Jumps to specific carousel item.

**Parameters:**
- `index` (number): Item index

**Usage:**
```javascript
portfolio.goToCarouselItem(3);
```

---

##### `portfolio.startAutoplay()`
Starts carousel autoplay.

**Usage:**
```javascript
portfolio.startAutoplay();
```

---

##### `portfolio.stopAutoplay()`
Stops carousel autoplay.

**Usage:**
```javascript
portfolio.stopAutoplay();
```

---

##### `portfolio.pauseAutoplay()`
Pauses autoplay (temporary).

**Usage:**
```javascript
portfolio.pauseAutoplay();
```

---

##### `portfolio.resumeAutoplay()`
Resumes autoplay.

**Usage:**
```javascript
portfolio.resumeAutoplay();
```

---

##### `portfolio.orderServiceDirect(itemId)`
Opens WhatsApp to order a service.

**Parameters:**
- `itemId` (number): Project/service ID

**Usage:**
```javascript
portfolio.orderServiceDirect(5);
```

---

##### `portfolio.shareService()`
Shares current service via native share or clipboard.

**Usage:**
```javascript
portfolio.shareService();
```

---

##### `portfolio.showNotification(message, type)`
Shows a notification.

**Parameters:**
- `message` (string): Notification text
- `type` (string): 'success' or 'error' (default: 'success')

**Usage:**
```javascript
portfolio.showNotification('تم الحفظ بنجاح', 'success');
portfolio.showNotification('حدث خطأ', 'error');
```

---

### Filtering and Sorting

##### `portfolio.applyFilters()`
Applies current filters and sorting.

**Usage:**
```javascript
// Set filter
portfolio.currentFilter = 'academic_writing';
portfolio.applyFilters();
```

**Supported Filters:**
- `all` - All projects
- `academic_writing` - الأبحاث والكتابة الأكاديمية
- `statistical_analysis` - التحليل الإحصائي والبيانات
- `financial_analysis` - التحليل المالي والمحاسبي
- `programming` - البرمجة والتقنية
- `design` - التصميم والعروض التقديمية
- `career_development` - التطوير المهني
- `consulting` - الاستشارات الأكاديمية والشخصية

**Supported Sorts:**
- `default` - Original order
- `rating` - Highest rated first
- `views` - Most viewed first
- `date` - Newest first

---

### Utility Methods

##### `portfolio.formatNumber(num)`
Formats numbers for display (e.g., 5200 → "5.2k").

**Parameters:**
- `num` (number): Number to format

**Returns:** string

**Usage:**
```javascript
const formatted = portfolio.formatNumber(5200); // "5.2k"
```

---

##### `portfolio.generateStars(rating)`
Generates HTML for star rating display.

**Parameters:**
- `rating` (number): Rating value (0-5)

**Returns:** string (HTML)

**Usage:**
```javascript
const stars = portfolio.generateStars(4.5);
// Returns: '<i class="fas fa-star"></i><i class="fas fa-star"></i>...'
```

---

## Portfolio Modal (portfolio-modal.js)

### Global Functions

##### `openPortfolioModal(projectId)`
Opens the enhanced portfolio modal.

**Parameters:**
- `projectId` (number): Project ID from portfolioData

**Usage:**
```javascript
openPortfolioModal(1);
```

**Features:**
- Full project details
- Screenshot gallery
- Client reviews
- Statistics display
- WhatsApp integration

---

##### `closePortfolioModal()`
Closes the portfolio modal.

**Usage:**
```javascript
closePortfolioModal();
```

---

##### `openImageViewer(imageSrc)`
Opens fullscreen image viewer.

**Parameters:**
- `imageSrc` (string): Image URL

**Usage:**
```javascript
openImageViewer('https://example.com/image.jpg');
```

---

##### `formatNumber(num)`
Formats numbers with K suffix.

**Parameters:**
- `num` (number): Number to format

**Returns:** string

**Usage:**
```javascript
formatNumber(1500); // "1.5k"
formatNumber(500);  // "500"
```

---

##### `formatDate(dateString)`
Formats date to Arabic locale.

**Parameters:**
- `dateString` (string): Date in YYYY-MM-DD format

**Returns:** string

**Usage:**
```javascript
formatDate('2024-03-15'); // "١٥ مارس ٢٠٢٤"
```

---

## Utilities (main.js)

### Initialization

##### `hideLoadingScreen()`
Hides the loading screen after delay.

**Usage:**
```javascript
hideLoadingScreen();
```

---

##### `initializeComponents()`
Initializes all page components.

**Usage:**
```javascript
initializeComponents();
```

**Initializes:**
- Counters
- Service filters
- Back to top button
- Step animations
- Contact form
- Navigation

---

### Navigation

##### `initializeNewNavigation()`
Sets up responsive navigation.

**Usage:**
```javascript
initializeNewNavigation();
```

**Features:**
- Mobile menu toggle
- Smooth scrolling
- Sticky header on scroll

---

##### `scrollToSection(sectionId)`
Scrolls smoothly to a section.

**Parameters:**
- `sectionId` (string): Element ID

**Usage:**
```javascript
scrollToSection('services');
```

---

### Animations

##### `initCounters()`
Initializes animated counters.

**Usage:**
```javascript
initCounters();
```

**Features:**
- Intersection Observer based
- Smooth number animation
- Supports decimals

---

##### `animateCounter(element, target)`
Animates a single counter.

**Parameters:**
- `element` (HTMLElement): Counter element
- `target` (number): Target value

**Usage:**
```javascript
const counter = document.querySelector('.counter');
animateCounter(counter, 3500);
```

---

##### `initializeStepAnimations()`
Sets up step-by-step animations.

**Usage:**
```javascript
initializeStepAnimations();
```

---

### Contact Form

##### `initializeNewContactForm()`
Sets up WhatsApp contact form.

**Usage:**
```javascript
initializeNewContactForm();
```

**Features:**
- Form validation
- WhatsApp message formatting
- Automatic redirect

---

### UI Utilities

##### `initBackToTop()`
Creates and initializes back-to-top button.

**Usage:**
```javascript
initBackToTop();
```

---

##### `scrollToTop()`
Smoothly scrolls to page top.

**Usage:**
```javascript
scrollToTop();
```

---

##### `showError(message)`
Displays error/success toast.

**Parameters:**
- `message` (string): Message text

**Usage:**
```javascript
showError('تم الإرسال بنجاح!');
```

---

### Validation Utilities

##### `Utils.validateEmail(email)`
Validates email format.

**Parameters:**
- `email` (string): Email address

**Returns:** boolean

**Usage:**
```javascript
if (Utils.validateEmail('user@example.com')) {
  // Valid email
}
```

---

##### `Utils.validatePhone(phone)`
Validates Saudi phone number.

**Parameters:**
- `phone` (string): Phone number

**Returns:** boolean

**Usage:**
```javascript
if (Utils.validatePhone('0501234567')) {
  // Valid phone
}
```

---

##### `Utils.formatText(text)`
Trims and normalizes text.

**Parameters:**
- `text` (string): Text to format

**Returns:** string

**Usage:**
```javascript
const clean = Utils.formatText('  hello   world  '); // "hello world"
```

---

## Message Templates (messages-data.js)

### messageTemplates Object

Provides WhatsApp message templates.

**Structure:**
```javascript
const messageTemplates = {
  orderRequest: string,    // Service order template
  generalRequest: string,  // General inquiry template
  quoteRequest: string     // Quote request template
}
```

**Usage:**
```javascript
// Order specific service
const message = messageTemplates.orderRequest
  .replace('{serviceName}', 'تصميم العروض التقديمية');
const url = `https://wa.me/966597389791?text=${encodeURIComponent(message)}`;

// General inquiry
const generalMsg = messageTemplates.generalRequest
  .replace('{cardTitle}', 'الحاسب والتقنية');

// Request quote
const quoteMsg = messageTemplates.quoteRequest;
```

---

## Usage Examples

### Example 1: Creating a New Service Card

```javascript
// Add new card to data.js
const newCard = {
  id: 'new_service_card',
  title: 'خدمات جديدة',
  image: 'https://example.com/image.jpg',
  ratingText: '5.0 (100+ تقييم)',
  deliveryText: 'تسليم: 1-3 أيام',
  priceText: 'أسعار مميزة',
  views: '1.5K',
  likes: 320,
  whatsappLink: 'https://wa.me/966597389791?text=استفسار عن الخدمات الجديدة',
  tags: ['خدمة جديدة', 'مميز', 'سريع'],
  services: {
    title: "خدماتنا الجديدة",
    items: [
      {
        id: 'new_service_1',
        name: 'خدمة تجريبية',
        details: [
          {
            icon: 'fas fa-star',
            title: 'ميزة رائعة',
            text: 'وصف الميزة'
          }
        ],
        baseLikes: 50,
        baseRatingSum: 250,
        baseVotes: 50
      }
    ]
  }
};

cardData.push(newCard);
```

### Example 2: Adding a Portfolio Project

```javascript
// Add to portfilo.js portfolioData array
const newProject = {
  id: 100,
  title: "مشروع جديد رائع",
  category: "programming",
  categoryName: "البرمجة والتقنية",
  description: "وصف مختصر للمشروع",
  image: "assets/images/project.jpg",
  views: 500,
  rating: 5,
  date: "2024-03-20",
  detailedDescription: "وصف تفصيلي كامل للمشروع...",
  features: [
    "ميزة 1",
    "ميزة 2",
    "ميزة 3"
  ],
  screenshots: [
    "screenshot1.jpg",
    "screenshot2.jpg"
  ],
  clientReview: "رأي العميل الإيجابي"
};

portfolioData.push(newProject);
```

### Example 3: Custom Search Handler

```javascript
// Add custom search functionality
document.getElementById('customSearch').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  
  // Search in cards
  const results = cardData.filter(card => {
    return card.title.toLowerCase().includes(query) ||
           card.tags.some(tag => tag.toLowerCase().includes(query));
  });
  
  // Display results
  results.forEach(result => {
    console.log('Found:', result.title);
  });
});
```

### Example 4: Programmatic Modal Control

```javascript
// Open specific service modal
function showService(cardId, serviceId) {
  // Open the card modal
  App.openMainModal(cardId);
  
  // Wait for modal to open, then show details
  setTimeout(() => {
    App.showDetails(serviceId);
  }, 300);
}

// Usage
showService('comprehensive_services_card', 'web_dev_help');
```

### Example 5: Custom Portfolio Filter

```javascript
// Filter portfolio by date range
function filterByDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return portfolioData.filter(project => {
    const projectDate = new Date(project.date);
    return projectDate >= start && projectDate <= end;
  });
}

// Usage
const recentProjects = filterByDateRange('2024-01-01', '2024-03-31');
```

### Example 6: Analytics Integration

```javascript
// Track service views
function trackServiceView(cardId, serviceId) {
  // Your analytics code
  gtag('event', 'service_view', {
    'card_id': cardId,
    'service_id': serviceId
  });
}

// Track WhatsApp clicks
document.querySelectorAll('.card-whatsapp-link').forEach(link => {
  link.addEventListener('click', () => {
    gtag('event', 'whatsapp_click', {
      'card_title': link.closest('.msc-service-card')
        .querySelector('.card-title-text').textContent
    });
  });
});
```

### Example 7: Export User Preferences

```javascript
// Export all user preferences
function exportUserPreferences() {
  const prefs = JSON.parse(localStorage.getItem('services_prefs') || '{}');
  const blob = new Blob([JSON.stringify(prefs, null, 2)], {
    type: 'application/json'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'preferences.json';
  a.click();
}
```

### Example 8: Batch Operations

```javascript
// Reset all ratings for all services
function resetAllRatings() {
  localStorage.removeItem('services_prefs');
  location.reload();
}

// Like all services (for demo)
function likeAllServices() {
  cardData.forEach(card => {
    card.services.items.forEach(service => {
      App.state.currentCardId = card.id;
      App.loadState();
      
      const item = App.state.currentServices.get(service.id);
      if (item && !item.state.userLiked) {
        item.state.userLiked = true;
        item.state.likes++;
        App.saveState();
      }
    });
  });
}
```

---

## Browser Compatibility

**Minimum Requirements:**
- ES6 support
- LocalStorage API
- Intersection Observer API
- CSS Grid and Flexbox

**Tested Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Performance Considerations

1. **Lazy Loading**: Images use `loading="lazy"` attribute
2. **Event Delegation**: Single event listener for multiple elements
3. **Debounced Search**: 500ms delay on search input
4. **LocalStorage Caching**: Minimizes recalculations
5. **CSS Animations**: GPU-accelerated transforms

---

## Security Notes

1. **XSS Prevention**: HTML escaping for user input
2. **Data Validation**: Input validation on all forms
3. **Safe WhatsApp URLs**: Proper URL encoding
4. **No Inline Scripts**: Separate JS files
5. **CSP Ready**: No eval() or inline handlers

---

## Future API Extensions

Planned features for future versions:

```javascript
// Planned: Server-side data sync
App.syncPreferences(async function() {
  await fetch('/api/sync', {
    method: 'POST',
    body: JSON.stringify(localStorage.getItem('services_prefs'))
  });
});

// Planned: Advanced analytics
portfolio.trackEvent('project_view', { projectId, duration, source });

// Planned: User accounts
App.login(username, password);
App.logout();
```

---

## Support and Contact

For questions or issues with the API:
- WhatsApp: +966597389791
- Telegram: [Join Channel]

---

*Last Updated: 2024-03-20*
*Version: 1.0.0*
