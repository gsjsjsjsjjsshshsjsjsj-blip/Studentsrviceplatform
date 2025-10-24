# Developer Guide - دليل المطورين

## منصة المنار للخدمات الطلابية - دليل المطور الشامل

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Architecture Overview](#architecture-overview)
4. [Adding New Features](#adding-new-features)
5. [Data Management](#data-management)
6. [State Management](#state-management)
7. [Event System](#event-system)
8. [Styling Guide](#styling-guide)
9. [Best Practices](#best-practices)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

```bash
- Basic HTML/CSS/JavaScript knowledge
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Live Server extension (for development)
```

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd workspace
   ```

2. **Open with Live Server**
   ```bash
   # Using VS Code Live Server extension
   # Right-click on index.html → Open with Live Server
   ```

3. **Or use Python HTTP Server**
   ```bash
   python -m http.server 8000
   # Navigate to http://localhost:8000
   ```

### File Structure Overview

```
workspace/
├── index.html              # Main HTML file
├── Gpa.html               # GPA calculator page
├── main.css               # Global styles
├── style.css              # Component styles
├── portfilo style.css     # Portfolio styles
├── portfolio-modal.css    # Portfolio modal styles
├── main.js                # Main utilities & initialization
├── script.js              # Main app logic
├── data.js                # Service cards data
├── messages-data.js       # WhatsApp message templates
├── portfilo.js            # Portfolio management
├── portfolio-modal.js     # Portfolio modal functionality
├── logo.png               # Logo image
└── README.md              # Project readme
```

---

## Project Structure

### HTML Structure

#### index.html

The main page is divided into semantic sections:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <!-- Meta tags, fonts, CSS -->
</head>
<body>
  <!-- Loading Screen -->
  <div class="loading-screen"></div>
  
  <!-- Header Navigation -->
  <header class="header"></header>
  
  <!-- Hero Section -->
  <section class="hero"></section>
  
  <!-- Service Cards Container -->
  <div class="cards-container" id="cardsContainer"></div>
  
  <!-- Service Modal -->
  <div class="msc-details-popup"></div>
  
  <!-- Details Modal -->
  <div class="msc-details-popup" id="detailsModal"></div>
  
  <!-- Templates -->
  <template id="card-template"></template>
  <template id="service-item-template"></template>
  
  <!-- Portfolio Section -->
  <section id="portfolio"></section>
  
  <!-- Other sections: How it works, Features, FAQ, Contact, Footer -->
  
  <!-- Scripts -->
  <script src="main.js"></script>
  <script src="data.js"></script>
  <script src="messages-data.js"></script>
  <script src="script.js"></script>
  <script src="portfolio-modal.js"></script>
  <script src="portfilo.js"></script>
</body>
</html>
```

### JavaScript Architecture

#### Module Pattern

The project uses a modular approach with different JavaScript files handling specific concerns:

```javascript
// main.js - Initialization and utilities
document.addEventListener('DOMContentLoaded', () => {
  initializeComponents();
  initializeNewNavigation();
});

// script.js - Main application logic
const App = {
  elements: { /* DOM references */ },
  state: { /* Application state */ },
  init() { /* Initialize app */ },
  // ... methods
};

// portfilo.js - Portfolio management
class EnhancedPortfolio {
  constructor() { /* Initialize */ }
  // ... methods
}
```

---

## Architecture Overview

### Data Flow

```
┌─────────────┐
│   data.js   │ ──> Provides service card data
└─────────────┘
       │
       ↓
┌─────────────┐
│  script.js  │ ──> Renders cards dynamically
└─────────────┘
       │
       ↓
┌─────────────┐
│ localStorage│ ──> Stores user preferences
└─────────────┘
       │
       ↓
┌─────────────┐
│     UI      │ ──> Displays updated state
└─────────────┘
```

### Component Hierarchy

```
App (script.js)
├── Card Components
│   ├── Service Modal
│   └── Details Modal
├── Portfolio System (portfilo.js)
│   ├── Grid View
│   ├── Carousel View
│   └── Project Modal (portfolio-modal.js)
└── Utilities (main.js)
    ├── Navigation
    ├── Counters
    ├── Contact Form
    └── Back to Top
```

---

## Adding New Features

### Adding a New Service Card

#### Step 1: Update data.js

```javascript
// Add to cardData array in data.js
const newCard = {
  id: 'unique_card_id',
  title: 'عنوان البطاقة',
  image: 'https://example.com/image.jpg',
  ratingText: '5.0 (100+ تقييم)',
  deliveryText: 'التسليم: 1-3 أيام',
  priceText: 'أسعار تنافسية',
  views: '2.5K',
  likes: 450,
  whatsappLink: 'https://wa.me/966597389791?text=استفسار',
  tags: ['تاج 1', 'تاج 2', 'تاج 3'],
  services: {
    title: "عنوان قسم الخدمات",
    items: [
      {
        id: 'service_1',
        name: 'اسم الخدمة',
        details: [
          {
            icon: 'fas fa-icon-name',
            title: 'عنوان الميزة',
            text: 'وصف الميزة'
          }
        ],
        baseLikes: 100,
        baseRatingSum: 500,
        baseVotes: 100
      }
      // ... more services
    ]
  }
};

cardData.push(newCard);
```

#### Step 2: Test

Reload the page. The new card should appear automatically.

### Adding a New Portfolio Project

#### Update portfilo.js

```javascript
// Add to portfolioData array
const newProject = {
  id: getNextId(), // Generate unique ID
  title: "عنوان المشروع",
  category: "programming", // or other category
  categoryName: "البرمجة والتقنية",
  description: "وصف مختصر",
  image: "assets/images/project.jpg",
  views: 0,
  rating: 5,
  date: "2024-03-20",
  deliveryDate: "5 أيام",
  detailedDescription: "وصف تفصيلي كامل...",
  features: [
    "ميزة 1",
    "ميزة 2",
    "ميزة 3"
  ],
  screenshots: [
    "assets/screenshots/1.jpg",
    "assets/screenshots/2.jpg"
  ],
  clientReview: "تقييم العميل الإيجابي...",
  clientReviewImage: "assets/reviews/review.jpg"
};

portfolioData.push(newProject);

// Helper function
function getNextId() {
  return Math.max(...portfolioData.map(p => p.id)) + 1;
}
```

### Adding a Custom WhatsApp Message Template

#### Update messages-data.js

```javascript
const messageTemplates = {
  // ... existing templates
  
  customRequest: "رسالتك المخصصة مع {placeholder}",
  urgentRequest: "طلب عاجل: {serviceName} - الموعد: {deadline}"
};
```

#### Use in your code

```javascript
const message = messageTemplates.customRequest
  .replace('{placeholder}', 'القيمة');
  
const url = `https://wa.me/966597389791?text=${encodeURIComponent(message)}`;
```

### Adding a New Search Filter

```javascript
// In script.js, extend filterMainCards

App.filterMainCards = function(query) {
  const normalized = query.toLowerCase().trim();
  
  // Add custom filter logic
  const customResults = cardData.filter(card => {
    return card.customField?.toLowerCase().includes(normalized);
  });
  
  // ... rest of the function
};
```

### Creating a Custom Modal

```javascript
// 1. Add HTML structure
const modalHTML = `
  <div class="custom-modal" id="customModal">
    <div class="modal-content">
      <button class="close-btn">&times;</button>
      <h2>عنوان النافذة</h2>
      <div class="modal-body"></div>
    </div>
  </div>
`;

document.body.insertAdjacentHTML('beforeend', modalHTML);

// 2. Add open/close functions
function openCustomModal(data) {
  const modal = document.getElementById('customModal');
  const body = modal.querySelector('.modal-body');
  
  body.innerHTML = generateContent(data);
  modal.classList.add('show');
  
  document.body.style.overflow = 'hidden';
}

function closeCustomModal() {
  const modal = document.getElementById('customModal');
  modal.classList.remove('show');
  
  document.body.style.overflow = '';
}

// 3. Add event listeners
document.querySelector('#customModal .close-btn')
  .addEventListener('click', closeCustomModal);

document.getElementById('customModal')
  .addEventListener('click', (e) => {
    if (e.target.id === 'customModal') {
      closeCustomModal();
    }
  });
```

---

## Data Management

### Data Structure Best Practices

#### Consistent ID Naming

```javascript
// ✅ Good
id: 'comprehensive_services_card'
id: 'web_dev_help'

// ❌ Bad
id: '1'
id: 'card1'
```

#### Complete Data Objects

```javascript
// ✅ Good - All fields present
{
  id: 'service_1',
  name: 'Service Name',
  details: [...],
  baseLikes: 100,
  baseRatingSum: 500,
  baseVotes: 100
}

// ❌ Bad - Missing fields
{
  id: 'service_1',
  name: 'Service Name'
}
```

### Adding Validation

```javascript
// Validate card data before use
function validateCardData(card) {
  const required = ['id', 'title', 'image', 'services'];
  
  for (const field of required) {
    if (!card[field]) {
      console.error(`Missing required field: ${field} in card`, card);
      return false;
    }
  }
  
  return true;
}

// Use in buildCards
App.buildCards = function() {
  cardData.forEach(data => {
    if (validateCardData(data)) {
      const cardElement = this.createCardElement(data);
      this.elements.cardsContainer.appendChild(cardElement);
    }
  });
};
```

### Data Migration

When updating data structure:

```javascript
// Migration function
function migrateOldData() {
  const oldData = JSON.parse(localStorage.getItem('old_key'));
  
  if (!oldData) return;
  
  const newData = {};
  
  Object.keys(oldData).forEach(cardId => {
    newData[cardId] = {
      services: oldData[cardId],
      timestamp: Date.now()
    };
  });
  
  localStorage.setItem('services_prefs', JSON.stringify(newData));
  localStorage.removeItem('old_key');
}

// Run once on init
if (localStorage.getItem('old_key')) {
  migrateOldData();
}
```

---

## State Management

### LocalStorage Schema

```javascript
{
  "services_prefs": {
    "card_id_1": {
      "service_id_1": {
        "userRating": 5,
        "userLiked": true
      },
      "service_id_2": {
        "userRating": 4,
        "userLiked": false
      }
    },
    "card_id_2": {
      // ...
    }
  }
}
```

### Reading State

```javascript
function getServiceState(cardId, serviceId) {
  const allPrefs = JSON.parse(
    localStorage.getItem('services_prefs') || '{}'
  );
  
  return allPrefs[cardId]?.[serviceId] || {
    userRating: 0,
    userLiked: false
  };
}
```

### Writing State

```javascript
function saveServiceState(cardId, serviceId, state) {
  const allPrefs = JSON.parse(
    localStorage.getItem('services_prefs') || '{}'
  );
  
  if (!allPrefs[cardId]) {
    allPrefs[cardId] = {};
  }
  
  allPrefs[cardId][serviceId] = state;
  
  localStorage.setItem('services_prefs', JSON.stringify(allPrefs));
}
```

### State Reset

```javascript
// Reset specific card
function resetCardState(cardId) {
  const allPrefs = JSON.parse(
    localStorage.getItem('services_prefs') || '{}'
  );
  
  delete allPrefs[cardId];
  
  localStorage.setItem('services_prefs', JSON.stringify(allPrefs));
}

// Reset all
function resetAllState() {
  localStorage.removeItem('services_prefs');
}
```

---

## Event System

### Event Delegation Pattern

The app uses a centralized event delegation system:

```javascript
// Central event handler
App.handleDynamicAction = function(e) {
  const actionTarget = e.target.closest('[data-action]');
  if (!actionTarget) return;
  
  const action = actionTarget.dataset.action;
  
  const actions = {
    'action-name': () => this.actionHandler(),
    'another-action': () => this.anotherHandler()
  };
  
  if (actions[action]) {
    e.preventDefault();
    actions[action]();
  }
};

// Bind to body
document.body.addEventListener('click', 
  App.handleDynamicAction.bind(App)
);
```

### Adding New Actions

```javascript
// 1. Add data-action attribute to HTML
<button data-action="new-action">Click Me</button>

// 2. Add handler in handleDynamicAction
const actions = {
  // ... existing actions
  'new-action': () => this.handleNewAction()
};

// 3. Implement handler
App.handleNewAction = function() {
  console.log('New action triggered!');
  // Your logic here
};
```

### Custom Events

```javascript
// Dispatch custom event
function notifyRatingChanged(serviceId, newRating) {
  const event = new CustomEvent('ratingChanged', {
    detail: { serviceId, newRating }
  });
  
  document.dispatchEvent(event);
}

// Listen for custom event
document.addEventListener('ratingChanged', (e) => {
  console.log('Rating changed:', e.detail);
  
  // Update analytics
  trackRating(e.detail.serviceId, e.detail.newRating);
});
```

---

## Styling Guide

### CSS Architecture

The project uses a modular CSS approach:

```
main.css           → Global styles, variables, utilities
style.css          → Component-specific styles
portfilo style.css → Portfolio section styles
portfolio-modal.css → Portfolio modal styles
```

### CSS Variables

Define in `:root` for easy theming:

```css
:root {
  --primary-color: #1a237e;
  --secondary-color: #3949ab;
  --success-color: #10b981;
  --error-color: #ef4444;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --bg-light: #f8fafc;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --transition-normal: 0.3s ease;
}
```

### Naming Convention

Use BEM (Block Element Modifier) for clarity:

```css
/* Block */
.service-card { }

/* Element */
.service-card__title { }
.service-card__image { }

/* Modifier */
.service-card--featured { }
.service-card__title--large { }
```

### Responsive Design

Mobile-first approach:

```css
/* Base styles (mobile) */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### Adding Dark Mode

```css
/* Define dark mode variables */
[data-theme="dark"] {
  --bg-primary: #1e293b;
  --bg-secondary: #0f172a;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
}

/* Use in components */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

```javascript
// Toggle dark mode
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
```

---

## Best Practices

### Code Organization

#### 1. Use Descriptive Names

```javascript
// ✅ Good
function calculateAverageRating(ratings) { }
const userPreferences = {};

// ❌ Bad
function calc(r) { }
const up = {};
```

#### 2. Comment Complex Logic

```javascript
// Calculate weighted average rating
// Formula: (baseRating + userRating) / (baseVotes + 1)
function calculateWeightedRating(service) {
  const totalRating = service.baseRatingSum + service.state.userRating;
  const totalVotes = service.baseVotes + (service.state.userRating > 0 ? 1 : 0);
  
  return (totalRating / totalVotes).toFixed(1);
}
```

#### 3. Avoid Global Variables

```javascript
// ✅ Good - Encapsulated
const App = {
  config: {
    apiUrl: 'https://api.example.com',
    timeout: 5000
  },
  
  getData() {
    // Use this.config
  }
};

// ❌ Bad - Global pollution
var apiUrl = 'https://api.example.com';
var timeout = 5000;
```

#### 4. Use const/let Instead of var

```javascript
// ✅ Good
const MAX_ITEMS = 10;
let currentIndex = 0;

// ❌ Bad
var MAX_ITEMS = 10;
var currentIndex = 0;
```

### Performance Optimization

#### 1. Debounce Search Input

```javascript
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  App.filterServices(query);
}, 500);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

#### 2. Lazy Load Images

```html
<img 
  src="placeholder.jpg" 
  data-src="actual-image.jpg" 
  loading="lazy"
  alt="Description"
/>
```

```javascript
// Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
```

#### 3. Minimize DOM Manipulation

```javascript
// ✅ Good - Single DOM update
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const element = createItemElement(item);
  fragment.appendChild(element);
});
container.appendChild(fragment);

// ❌ Bad - Multiple DOM updates
items.forEach(item => {
  const element = createItemElement(item);
  container.appendChild(element); // Causes reflow each time
});
```

### Security Best Practices

#### 1. Sanitize User Input

```javascript
function sanitizeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Usage
const safeName = sanitizeHTML(userInput);
element.textContent = safeName; // Use textContent, not innerHTML
```

#### 2. Validate Data

```javascript
function validateServiceData(data) {
  // Type checking
  if (typeof data.id !== 'string') return false;
  if (typeof data.baseLikes !== 'number') return false;
  
  // Range checking
  if (data.baseLikes < 0) return false;
  if (data.baseRating < 0 || data.baseRating > 5) return false;
  
  // Required fields
  if (!data.name || !data.details) return false;
  
  return true;
}
```

#### 3. Safe URL Encoding

```javascript
function createWhatsAppURL(phoneNumber, message) {
  // Validate phone number
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
  if (!cleanPhone.startsWith('+') && !cleanPhone.startsWith('966')) {
    console.error('Invalid phone number');
    return null;
  }
  
  // Encode message
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
```

---

## Testing

### Manual Testing Checklist

#### Functionality Tests

- [ ] All cards render correctly
- [ ] Service modals open/close properly
- [ ] Search filters work
- [ ] Ratings save and load
- [ ] Likes increment/decrement
- [ ] WhatsApp links work
- [ ] Portfolio carousel functions
- [ ] GPA calculator computes correctly

#### Responsive Tests

- [ ] Mobile (< 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (> 768px)
- [ ] Touch events work on mobile
- [ ] Hover effects work on desktop

#### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Automated Testing Setup

```javascript
// Example test file: tests.js

const tests = {
  // Test data validation
  testValidateCardData() {
    const validCard = {
      id: 'test_card',
      title: 'Test',
      image: 'test.jpg',
      services: { items: [] }
    };
    
    console.assert(
      validateCardData(validCard),
      'Valid card should pass validation'
    );
    
    const invalidCard = { id: 'test' };
    console.assert(
      !validateCardData(invalidCard),
      'Invalid card should fail validation'
    );
  },
  
  // Test rating calculation
  testCalculateRating() {
    const service = {
      baseRatingSum: 400,
      baseVotes: 80,
      state: { userRating: 5 }
    };
    
    const avgRating = (405 / 81).toFixed(1);
    const calculated = calculateWeightedRating(service);
    
    console.assert(
      avgRating === calculated,
      `Expected ${avgRating}, got ${calculated}`
    );
  },
  
  // Run all tests
  runAll() {
    Object.keys(this).forEach(key => {
      if (key !== 'runAll' && typeof this[key] === 'function') {
        try {
          this[key]();
          console.log(`✅ ${key} passed`);
        } catch (error) {
          console.error(`❌ ${key} failed:`, error);
        }
      }
    });
  }
};

// Run tests
tests.runAll();
```

---

## Deployment

### Pre-Deployment Checklist

- [ ] Update all WhatsApp phone numbers
- [ ] Replace placeholder images
- [ ] Update meta tags (title, description, keywords)
- [ ] Update Open Graph tags
- [ ] Test all links
- [ ] Minify CSS/JS (optional)
- [ ] Optimize images
- [ ] Test on multiple devices
- [ ] Check Google Analytics tracking

### Netlify Deployment

1. **Create `netlify.toml`**

```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. **Deploy**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### GitHub Pages Deployment

```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages

# Enable GitHub Pages in repository settings
# Select gh-pages branch as source
```

### Custom Domain Setup

1. Add DNS records:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

2. Update Netlify domain settings

3. Enable HTTPS

---

## Troubleshooting

### Common Issues

#### Issue: Cards Not Rendering

**Possible Causes:**
- JavaScript error before `buildCards()`
- `cardData` not loaded
- Missing DOM element `#cardsContainer`

**Solution:**
```javascript
// Add error handling
try {
  App.buildCards();
} catch (error) {
  console.error('Error building cards:', error);
}

// Check if data loaded
if (!cardData || cardData.length === 0) {
  console.error('Card data not loaded');
}

// Check if container exists
const container = document.getElementById('cardsContainer');
if (!container) {
  console.error('Cards container not found');
}
```

#### Issue: LocalStorage Not Working

**Possible Causes:**
- Private browsing mode
- Cookies disabled
- Storage quota exceeded

**Solution:**
```javascript
function testLocalStorage() {
  try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
    return true;
  } catch (e) {
    console.error('LocalStorage not available:', e);
    return false;
  }
}

if (!testLocalStorage()) {
  alert('يرجى تفعيل تخزين البيانات في المتصفح');
}
```

#### Issue: Modal Not Closing

**Possible Causes:**
- Event listener not attached
- Incorrect selector
- CSS animation blocking

**Solution:**
```javascript
// Ensure event listener is attached
document.querySelector('.close-btn').addEventListener('click', () => {
  console.log('Close button clicked');
  closeModal();
});

// Force close
function forceCloseModal() {
  const modal = document.getElementById('modalId');
  modal.style.display = 'none';
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
```

### Debug Mode

```javascript
// Enable debug mode
const DEBUG = true;

function log(...args) {
  if (DEBUG) {
    console.log('[DEBUG]', ...args);
  }
}

// Usage
log('Card opened:', cardId);
log('State saved:', state);
```

### Performance Profiling

```javascript
// Measure function performance
function measurePerformance(fn, label) {
  console.time(label);
  const result = fn();
  console.timeEnd(label);
  return result;
}

// Usage
measurePerformance(() => {
  App.buildCards();
}, 'Build Cards');
```

---

## Advanced Features

### Adding Backend Integration

```javascript
// API configuration
const API_CONFIG = {
  baseURL: 'https://api.example.com',
  endpoints: {
    getServices: '/services',
    submitRating: '/ratings',
    getProjects: '/projects'
  }
};

// Fetch services from API
async function fetchServices() {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.getServices}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching services:', error);
    // Fallback to local data
    return cardData;
  }
}

// Submit rating to API
async function submitRating(serviceId, rating) {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${API_CONFIG.endpoints.submitRating}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ serviceId, rating })
      }
    );
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting rating:', error);
  }
}
```

### Adding Analytics

```javascript
// Google Analytics event tracking
function trackEvent(category, action, label, value) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  }
}

// Track service views
App.openMainModal = function(cardId) {
  trackEvent('Services', 'modal_open', cardId);
  // ... rest of the function
};

// Track WhatsApp clicks
document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.addEventListener('click', () => {
    trackEvent('Engagement', 'whatsapp_click', link.dataset.service);
  });
});

// Track search queries
App.filterMainCards = function(query) {
  if (query.trim()) {
    trackEvent('Search', 'query', query);
  }
  // ... rest of the function
};
```

---

## Contributing Guidelines

### Code Style

1. **Indentation**: 2 spaces
2. **Quotes**: Single quotes for JS, double for HTML
3. **Semicolons**: Required
4. **Comments**: Arabic for user-facing, English for technical

### Commit Messages

```
feat: Add new service category
fix: Resolve modal closing issue
docs: Update API documentation
style: Improve card responsiveness
refactor: Optimize search function
test: Add validation tests
```

### Pull Request Process

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'feat: Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Create Pull Request

---

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [FontAwesome Icons](https://fontawesome.com/icons)

### Libraries Used
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Google Fonts - Tajawal & Cairo](https://fonts.google.com/)

---

## License

This project is proprietary software. All rights reserved.

---

## Support

For technical support:
- WhatsApp: +966597389791
- Telegram: [Channel Link]

---

*Last Updated: 2024-03-20*
*Developer Guide Version: 1.0.0*
