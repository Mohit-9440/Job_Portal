# Job Portal UI

A modern, responsive job portal website built with React 19 and Tailwind CSS, implementing the design from the Dribbble reference. This project demonstrates advanced frontend development skills with a focus on component architecture, responsive design, and user experience.

## 🚀 Live Demo

**Live Application**: [https://job-portal-kappa-livid.vercel.app/](https://job-portal-kappa-livid.vercel.app/)

**GitHub Repository**: [https://github.com/Mohit-9440/Job_Portal](https://github.com/Mohit-9440/Job_Portal)

## 📁 Repository

**Source Code**: [https://github.com/Mohit-9440/Job_Portal](https://github.com/Mohit-9440/Job_Portal)

## 🎯 Assignment Implementation

This project successfully implements all required features from the assignment:

### ✅ Core Requirements Implemented

1. **Framework**: React 19 with Vite build tool
2. **Styling**: Tailwind CSS with custom purple theme
3. **Responsiveness**: Fully responsive across mobile, tablet, and desktop
4. **Mock Data**: Comprehensive mock data for jobs, companies, and testimonials

### ✅ Required Features Implemented

#### 1. Header Section ✅
- **Logo**: JobHunt logo displayed on the left
- **Navigation**: "Find Jobs" and "For Companies" links
- **Auth Buttons**: "Log in" and "Sign up" buttons
- **Post Job Button**: Distinct purple "Post a Job" button
- **Dark Mode Toggle**: Icon-based theme switcher in header

#### 2. Hero Section ✅
- **Prominent Heading**: "Search, Apply & Get Your Dream Job"
- **Search Bar**: Fields for job title, location, and company
- **Search Button**: Purple "Search" button
- **Suggested Keywords**: "Designer", "Developer", "Tester" with hover effects
- **Background Elements**: Curved dotted lines with company logos

#### 3. Featured Jobs Section ✅
- **Card Layout**: Professional job cards with hover effects
- **Job Information**: Company logo, title, location, type, salary
- **Mobile Carousel**: Swipe-enabled carousel for mobile devices
- **Featured Card**: Highlighted purple card for featured jobs

#### 4. How It Works Section ✅
- **Four Steps**: Create Account, Upload CV/Resume, Find Suitable Job, Apply for Job
- **Step Cards**: Staggered layout with icons and descriptions
- **Connecting Lines**: SVG curved lines connecting the steps
- **Responsive Design**: Adapts to different screen sizes

#### 5. Top Companies Section ✅
- **Company Logos**: Google, Microsoft, NVIDIA, Amazon, Facebook, Netflix
- **Dark Mode Logos**: Automatic logo switching for dark theme
- **Responsive Grid**: Desktop grid and mobile carousel
- **Job Counts**: Number of open positions per company

#### 6. Footer Section ✅
- **Company Info**: Logo, description, and contact information
- **Quick Links**: Navigation links organized by category
- **Legal Links**: Terms, Privacy Policy, Help Center
- **Social Links**: Facebook, Instagram, LinkedIn, Twitter
- **Contact Info**: Phone and address with icons

### ✅ Bonus Features Implemented

#### Dark Mode Toggle ✅
- **Real-time Switching**: Instant theme changes
- **Logo Updates**: Logos update immediately when switching themes
- **Persistent State**: Theme preference saved in localStorage
- **Smooth Transitions**: 200ms transition animations

#### Hover Effects & Micro-interactions ✅
- **Button Hover**: All buttons have hover states
- **Card Hover**: Job cards and company cards have hover effects
- **Link Hover**: Navigation links have smooth transitions
- **Icon Animations**: Icons have subtle hover animations

#### Mobile Carousel ✅
- **Featured Jobs**: Swipe-enabled carousel on mobile
- **Touch Support**: Native touch gestures for navigation
- **Dot Indicators**: Visual progress indicators
- **Smooth Animations**: 300ms transition animations

## 🛠️ Technical Stack

### Core Technologies
- **React 19.1.0**: Latest React with modern features
- **Vite 7.0.4**: Fast development and build tooling
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Lucide React 0.525.0**: Beautiful, customizable icons

### Development Tools
- **ESLint 9.30.1**: Code linting and quality
- **Prettier 3.6.2**: Code formatting
- **PostCSS 8.4.31**: CSS processing
- **Autoprefixer 10.4.14**: CSS vendor prefixing

## 📁 Project Structure

```
job_portal/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx      # Navigation with dark mode toggle
│   │   ├── Hero.jsx        # Hero section with search and background lines
│   │   ├── BackgroundLines.jsx # Curved dotted lines with company logos
│   │   ├── FeaturedJobs.jsx # Job listings with mobile carousel
│   │   ├── HowItWorks.jsx  # Process steps with connecting lines
│   │   ├── CareerOptions.jsx # Job categories with featured cards
│   │   ├── WhatWeOffer.jsx # Services section with numbered cards
│   │   ├── TopCompanies.jsx # Company showcase with dark mode logos
│   │   ├── Testimonials.jsx # User testimonials with profile carousel
│   │   └── Footer.jsx      # Footer with contact info and links
│   ├── data/
│   │   └── mockData.js     # Mock data for jobs, companies, testimonials
│   ├── hooks/
│   │   └── useDarkMode.js  # Custom hook for dark mode functionality
│   ├── assets/
│   │   └── logo.png        # JobHunt logo
│   ├── App.jsx             # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles and Tailwind
├── public/                 # Static assets
├── tailwind.config.js     # Tailwind configuration with purple theme
├── postcss.config.js      # PostCSS configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mohit-9440/Job_Portal.git
   cd Job_Portal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎨 Design System

### Color Palette

- **Primary**: Purple (#8B5CF6) - Main brand color
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: Orange for highlights, Green for success states
- **Dark Mode**: Custom dark theme with proper contrast

### Typography

- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components

- **Buttons**: Primary (purple), Secondary, Outline variants
- **Cards**: Consistent spacing and hover effects
- **Inputs**: Form fields with focus states
- **Icons**: Lucide React icon library
- **Carousels**: Mobile-friendly swipe functionality

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (with carousels and swipe)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Jobs

Edit `src/data/mockData.js` to add new job listings:

```javascript
export const featuredJobs = [
  {
    id: 7,
    company: 'Your Company',
    title: 'Your Job Title',
    location: 'Location',
    description: 'Job description...',
    positions: '5',
    type: 'Full Time',
    salary: '$Salary Range',
    logoComponent: <YourLogoComponent />,
    isFeatured: false
  },
];
```

### Adding Dark Mode Logos

For companies that need dark mode logos:

```javascript
{
  id: 1,
  name: "Company Name",
  logo: "light-mode-logo-url",
  logoDark: "dark-mode-logo-url",
  jobs: 25,
}
```

### Styling Customization

Modify `tailwind.config.js` to customize:

- Colors (purple theme)
- Typography
- Spacing
- Animations


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🙏 Acknowledgments

- Design inspiration from [Dribbble Job Portal](https://dribbble.com/shots/20254545-Job-Portal-Website)
- Icons from Lucide React
- Styling with Tailwind CSS
- Build tooling with Vite
- Dark mode implementation with custom hooks

---

**Built with ❤️ using React 19 + Vite + Tailwind CSS + Purple Theme** 