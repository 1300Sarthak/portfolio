# My Portfolio Website

This is my personal portfolio website, inspired by the macOS desktop experience. As someone who works on a MacBook daily, I wanted to create a portfolio that feels familiar and interactive—where visitors can explore my work, experience, and projects through an interface that mimics the macOS environment I know and love.

## 🌟 Features

Inspired by my MacBook's interface, this portfolio recreates the macOS desktop experience:

- **macOS Desktop Interface**: Authentic macOS-style UI with menu bar, dock, and desktop icons—just like the MacBook I use every day
- **Interactive Windows**: Draggable, resizable, minimizable, and maximizable windows using `react-rnd`, giving you full control just like on macOS
- **My Portfolio Sections**:
  - About Me
  - Projects
  - Skills & Technologies
  - Internships & Experience
  - Hackathon Wins
  - Resume
  - Blog/Stories
  - Photos
  - Contact Form
  - AI Chatbot Integration
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions that feel native
- **Responsive Design**: Optimized for desktop viewing with mobile warning

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Emotion** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **react-rnd** - Draggable and resizable window components
- **React Icons** - Icon library

## 🚀 Development

### Prerequisites

- Node.js 20+ and npm

### Running Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Dock.jsx         # macOS-style dock component
│   │   ├── DesktopIcon.jsx  # Desktop icon component
│   │   ├── WindowFrame.jsx  # Window wrapper with controls
│   │   └── ...
│   ├── windows/              # Portfolio section windows
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Internships.jsx
│   │   └── ...
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── public/                   # Static assets
├── dist/                     # Production build output
└── vite.config.js           # Vite configuration
```

## 🎨 Key Components

- **App.jsx**: Main application state management and window orchestration
- **Dock**: Bottom dock with application shortcuts and active window indicators
- **WindowFrame**: Reusable window component with macOS-style controls (close, minimize, maximize)
- **Desktop Icons**: Clickable icons on the desktop for quick access to sections

## 🚢 Deployment

My portfolio is automatically deployed to GitHub Pages via GitHub Actions whenever I push changes to the `main` branch. The site is live at [www.sarthak.lol](https://www.sarthak.lol).

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 How to Use

Just like using a MacBook:

1. **Open Windows**: Click desktop icons or dock icons to open different sections of my portfolio
2. **Interact with Windows**:
   - Drag windows by their title bar
   - Resize windows by dragging edges/corners
   - Minimize, maximize, or close windows using the macOS-style traffic light buttons
3. **Navigate**: Use the dock at the bottom to quickly switch between sections
4. **Contact**: Use the Contact window or Chatbot to get in touch with me

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` file includes:

- Base path configuration for GitHub Pages
- Build output directory (`dist/`)
- Source maps for debugging
- Custom server middleware for redirects

## 📄 License

This project is private and personal.

## 👤 Author

**Sarthak Sethi**

- GitHub: [@1300Sarthak](https://github.com/1300Sarthak)
- LinkedIn: [sarsethi](https://linkedin.com/in/sarsethi)
- Website: [www.sarthak.lol](https://www.sarthak.lol)

---

Built with ❤️ using React and Vite
