# Moving Company Website

A professional, responsive moving company website built with HTML, CSS, JavaScript, and Node.js. Features a modern design with a color scheme that complements the brand color #EB52ED.

## Features

### 🏠 **Navigation**
- Fixed top navigation bar with mobile-responsive hamburger menu
- Navigation links: Home, Free Quote, Professional Packing, Junk Removal, Blog
- Smooth scrolling to sections

### 🎯 **Hero Section**
- Compelling headline and call-to-action
- "Free Estimates Today" button
- "Call Now" button with phone number (555) 123-4567
- Professional gradient background

### 📝 **Quote Form (Click Funnel)**
- User-friendly form with all requested fields:
  - First Name
  - Last Name
  - Email
  - Phone Number
  - Move Type (Local/Long Distance)
- Form validation and error handling
- Success/error messages
- Phone number auto-formatting

### 💎 **Value Propositions**
- Four value cards highlighting:
  - Years of Experience
  - Reliable & Trustworthy
  - Moving with Care
  - 100% Satisfaction Guarantee
- Hover animations and professional icons

### 💰 **Pricing Section**
- Four pricing tiers:
  - Local Moves (Starting at $299)
  - Intrastate Moving (Starting at $899) - Featured
  - Professional Packing (Starting at $199)
  - Junk Removal (Starting at $149)
- Clear feature lists for each service
- Call-to-action buttons linking to quote form

### ⭐ **Customer Reviews**
- Three customer testimonials with 5-star ratings
- Professional review cards with customer names and service types
- Hover effects and animations

### ❓ **FAQ Footer**
- Comprehensive footer with company information
- Frequently Asked Questions section
- Contact information
- Service links

## Design Features

### 🎨 **Color Scheme**
- Primary: #EB52ED (Brand color)
- Secondary: #6366f1 (Complementary blue)
- Accent: #8b5cf6 (Purple)
- Professional grays and whites for text and backgrounds

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Responsive grid layouts

### ✨ **Interactive Elements**
- Smooth animations and transitions
- Hover effects on cards and buttons
- Loading states for form submission
- Scroll progress indicator
- Fade-in animations on scroll

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone or download the project**
   ```bash
   # If using git
   git clone <repository-url>
   cd moving-company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Development Mode
For development with auto-restart on file changes:
```bash
npm run dev
```

## Project Structure

```
moving-company-website/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # CSS styles
│   └── script.js           # JavaScript functionality
├── server.js               # Express server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Customization

### Changing Colors
The color scheme is defined in CSS variables in `public/styles.css`:
```css
:root {
    --primary-color: #EB52ED;
    --primary-light: #f8a4fa;
    --primary-dark: #d42fd6;
    --secondary-color: #6366f1;
    --accent-color: #8b5cf6;
    /* ... other colors */
}
```

### Updating Content
- **Company Information**: Edit the HTML content in `public/index.html`
- **Phone Number**: Update in both HTML and JavaScript files
- **Pricing**: Modify the pricing cards in the HTML
- **Reviews**: Replace with real customer testimonials

### Adding Pages
To add new pages (like Blog, Packing, Junk Removal):
1. Create new HTML files in the `public/` directory
2. Add routes in `server.js`
3. Update navigation links

## Form Handling

The quote form sends data to `/submit-quote` endpoint. Currently, it logs the data to the console. To integrate with a real backend:

1. **Email Integration**: Add nodemailer to send emails
2. **Database**: Connect to MongoDB, PostgreSQL, etc.
3. **CRM Integration**: Connect to services like HubSpot, Salesforce

Example email integration:
```javascript
// In server.js
const nodemailer = require('nodemailer');

app.post('/submit-quote', async (req, res) => {
    // Send email logic here
    // Save to database
    res.json({ success: true });
});
```

## Performance Features

- **Lazy Loading**: Images load as they come into view
- **Debounced Scroll Events**: Optimized scroll performance
- **Minified Assets**: Ready for production optimization
- **Progressive Enhancement**: Works without JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Local Production Build
```bash
npm start
```

### Cloud Deployment
The website can be deployed to:
- **Heroku**: Add `Procfile` with `web: node server.js`
- **Vercel**: Add `vercel.json` configuration
- **Netlify**: Deploy the `public/` folder
- **AWS/GCP**: Deploy to cloud platforms

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team.

---

**Built with ❤️ for professional moving services**
