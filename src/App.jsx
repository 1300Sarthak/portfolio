import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dock from './components/Dock';
import DesktopIcon from './components/DesktopIcon';
import About from './windows/About';
import Club from './windows/Club';
import Internships from './windows/Internships';
import Certificates from './windows/Certificates';
import Projects from './windows/Projects';
import Skills from './windows/Skills';
import Blog from './windows/Blog';
import Chatbot from './windows/Chatbot';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/catalina-wallpaper.jpg') center center/cover no-repeat;
  overflow: hidden;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.5px);
    z-index: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  right: 6vw;
  transform: translateY(-50%);
  text-align: right;
  z-index: 2;
`;

const Name = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.2);
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2);
`;

const DesktopIconsColumn = styled.div`
  position: absolute;
  top: 60px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
`;

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 24px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 12px;
  color: #333;
  z-index: 1000;
`;

const MenuItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const initialWindowState = {
  about: { open: false, minimized: false, maximized: false },
  club: { open: false, minimized: false, maximized: false },
  internships: { open: false, minimized: false, maximized: false },
  certificates: { open: false, minimized: false, maximized: false },
  projects: { open: false, minimized: false, maximized: false },
  skills: { open: false, minimized: false, maximized: false },
  blog: { open: false, minimized: false, maximized: false },
  contact: { open: false, minimized: false, maximized: false },
  chatbot: { open: false, minimized: false, maximized: false },
};

function getRandomPosition() {
  const padding = 100;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.floor(Math.random() * (width - 500 - padding)) + padding;
  const y = Math.floor(Math.random() * (height - 350 - padding - 100)) + 48;
  return { x, y };
}

const App = () => {
  const [windows, setWindows] = useState(initialWindowState);
  const [windowPositions, setWindowPositions] = useState({});

  const handleWindowSelect = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        open: true,
        minimized: false,
      }
    }));
    setWindowPositions(prev => ({
      ...prev,
      [windowId]: getRandomPosition(),
    }));
  };

  const handleWindowClose = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        open: false,
        minimized: false,
        maximized: false,
      }
    }));
  };

  const handleWindowMinimize = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        minimized: true,
      }
    }));
  };

  const handleWindowMaximize = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        maximized: true,
      }
    }));
  };

  const handleWindowRestore = (windowId) => {
    setWindows(prev => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        maximized: false,
        minimized: false,
      }
    }));
  };

  const desktopIcons = [
    {
      type: 'github',
      label: 'GitHub',
      href: 'https://github.com/1300Sarthak',
      position: { x: 20, y: 20 }
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sarsethi',
      position: { x: 20, y: 140 }
    },
    {
      type: 'resume',
      label: 'Resume',
      href: '/resume.pdf',
      position: { x: 20, y: 260 }
    },
    {
      type: 'chatbot',
      label: 'Chatbot',
      onClick: () => handleWindowSelect('chatbot'),
      position: { x: 20, y: 380 }
    }
  ];

  return (
    <AppContainer>
      <Overlay>
        <Name>Sarthak Sethi</Name>
        <Subtitle>Computer Science &amp; Applied Math Student</Subtitle>
      </Overlay>
      <MenuBar>
        <MenuItem>🍎</MenuItem>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Window</MenuItem>
        <MenuItem>Help</MenuItem>
      </MenuBar>
      <DesktopIconsColumn>
        {desktopIcons.map((icon) => (
          <DesktopIcon key={icon.type} {...icon} />
        ))}
      </DesktopIconsColumn>
      <About
        isOpen={windows.about.open}
        isMinimized={windows.about.minimized}
        isMaximized={windows.about.maximized}
        onClose={() => handleWindowClose('about')}
        onMinimize={() => handleWindowMinimize('about')}
        onMaximize={() => handleWindowMaximize('about')}
        onRestore={() => handleWindowRestore('about')}
        defaultPosition={windowPositions.about || { x: 100, y: 100 }}
      />
      <Club
        isOpen={windows.club.open}
        isMinimized={windows.club.minimized}
        isMaximized={windows.club.maximized}
        onClose={() => handleWindowClose('club')}
        onMinimize={() => handleWindowMinimize('club')}
        onMaximize={() => handleWindowMaximize('club')}
        onRestore={() => handleWindowRestore('club')}
        defaultPosition={windowPositions.club || { x: 120, y: 120 }}
      />
      <Internships
        isOpen={windows.internships.open}
        isMinimized={windows.internships.minimized}
        isMaximized={windows.internships.maximized}
        onClose={() => handleWindowClose('internships')}
        onMinimize={() => handleWindowMinimize('internships')}
        onMaximize={() => handleWindowMaximize('internships')}
        onRestore={() => handleWindowRestore('internships')}
        defaultPosition={windowPositions.internships || { x: 140, y: 140 }}
      />
      <Certificates
        isOpen={windows.certificates.open}
        isMinimized={windows.certificates.minimized}
        isMaximized={windows.certificates.maximized}
        onClose={() => handleWindowClose('certificates')}
        onMinimize={() => handleWindowMinimize('certificates')}
        onMaximize={() => handleWindowMaximize('certificates')}
        onRestore={() => handleWindowRestore('certificates')}
        defaultPosition={windowPositions.certificates || { x: 160, y: 160 }}
      />
      <Projects
        isOpen={windows.projects.open}
        isMinimized={windows.projects.minimized}
        isMaximized={windows.projects.maximized}
        onClose={() => handleWindowClose('projects')}
        onMinimize={() => handleWindowMinimize('projects')}
        onMaximize={() => handleWindowMaximize('projects')}
        onRestore={() => handleWindowRestore('projects')}
        defaultPosition={windowPositions.projects || { x: 180, y: 180 }}
      />
      <Skills
        isOpen={windows.skills.open}
        isMinimized={windows.skills.minimized}
        isMaximized={windows.skills.maximized}
        onClose={() => handleWindowClose('skills')}
        onMinimize={() => handleWindowMinimize('skills')}
        onMaximize={() => handleWindowMaximize('skills')}
        onRestore={() => handleWindowRestore('skills')}
        defaultPosition={windowPositions.skills || { x: 200, y: 200 }}
      />
      <Blog
        isOpen={windows.blog.open}
        isMinimized={windows.blog.minimized}
        isMaximized={windows.blog.maximized}
        onClose={() => handleWindowClose('blog')}
        onMinimize={() => handleWindowMinimize('blog')}
        onMaximize={() => handleWindowMaximize('blog')}
        onRestore={() => handleWindowRestore('blog')}
        defaultPosition={windowPositions.blog || { x: 220, y: 220 }}
      />
      <Chatbot
        isOpen={windows.chatbot.open}
        isMinimized={windows.chatbot.minimized}
        isMaximized={windows.chatbot.maximized}
        onClose={() => handleWindowClose('chatbot')}
        onMinimize={() => handleWindowMinimize('chatbot')}
        onMaximize={() => handleWindowMaximize('chatbot')}
        onRestore={() => handleWindowRestore('chatbot')}
        defaultPosition={windowPositions.chatbot || { x: 240, y: 240 }}
      />
      <Dock
        activeWindow={Object.entries(windows).find(([, w]) => w.open && !w.minimized)?.[0]}
        onWindowSelect={handleWindowSelect}
      />
    </AppContainer>
  );
};

export default App; 