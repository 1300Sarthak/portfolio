import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import IPhoneHomeScreen from './iPhoneHomeScreen';
import MobileFullScreenView from './MobileFullScreenView';
import About from '../../windows/About';
import Club from '../../windows/Club';
import Internships from '../../windows/Internships';
import Projects from '../../windows/Projects';
import Skills from '../../windows/Skills';
import Chatbot from '../../windows/Chatbot';
import Resume from '../../windows/Resume';
import HackathonWins from '../../windows/HackathonWins';
import Stories from '../../windows/Stories';
import Finder from '../../windows/Finder';
import Personal from '../../windows/Personal';
import Photos from '../../windows/Photos';
import Contact from '../../windows/Contact';

const MobileContainer = styled.div`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background: url('/catalina-wallpaper.jpg') center center/cover no-repeat;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }
`;

const StatusBar = styled.div`
  position: relative;
  z-index: 10;
  height: 54px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px 28px 0;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.2);
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
`;

const StatusLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 80px;
`;

const StatusRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 80px;
  justify-content: flex-end;
`;

// Dynamic Island styles
const DynamicIslandContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const DynamicIsland = styled(motion.div)`
  background: #000;
  border-radius: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const IslandContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 4px;
`;

const IslandDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1a1a1a;
`;

const IslandCamera = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #1e3a5f, #0a1929);
  box-shadow: 
    inset 0 0 2px rgba(255, 255, 255, 0.1),
    0 0 1px rgba(0, 0, 0, 0.5);
`;

const BatteryIcon = styled.div`
  width: 25px;
  height: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px;

  &::after {
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 5px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 0 2px 2px 0;
  }
`;

const BatteryFill = styled.div`
  width: 80%;
  height: 100%;
  background: #fff;
  border-radius: 1.5px;
`;

const SignalBars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
  height: 12px;
`;

const SignalBar = styled.div`
  width: 3px;
  background: #fff;
  border-radius: 1px;
  height: ${props => props.height}px;
`;

const WifiIcon = styled.div`
  width: 16px;
  height: 12px;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    border: 2px solid transparent;
    border-top-color: #fff;
    border-radius: 50% 50% 0 0;
    transform: translateX(-50%);
  }
  
  &::before {
    width: 14px;
    height: 7px;
  }
  
  &::after {
    width: 8px;
    height: 4px;
    bottom: 0;
  }
`;

const MobileContentWrapper = styled.div`
  color: #333;
  
  h1, h2, h3, h4, h5, h6 {
    color: #000;
  }
  
  p, li, span {
    color: #333;
  }
  
  a {
    color: #007AFF;
  }
`;

const windowTitles = {
  about: 'About Me',
  projects: 'Projects',
  hackathonwins: 'Hackathon Wins',
  internships: 'Internships',
  skills: 'Skills',
  club: 'Leadership',
  stories: 'Stories',
  finder: 'Finder',
  personal: 'Personal',
  resume: 'Resume',
  chatbot: 'Chatbot',
  photos: 'Photos',
  contact: 'Contact',
};

const MobileApp = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAppSelect = (appId) => {
    setActiveApp(appId);
  };

  const handleClose = () => {
    setActiveApp(null);
  };

  const renderContent = () => {
    if (!activeApp) return null;

    const mobileProps = {
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      onClose: handleClose,
      onMinimize: () => {},
      onMaximize: () => {},
      onRestore: () => {},
      defaultPosition: { x: 0, y: 0 },
      isMobile: true,
    };

    switch (activeApp) {
      case 'about':
        return <About {...mobileProps} />;
      case 'projects':
        return <Projects {...mobileProps} />;
      case 'hackathonwins':
        return <HackathonWins {...mobileProps} />;
      case 'internships':
        return <Internships {...mobileProps} />;
      case 'skills':
        return <Skills {...mobileProps} />;
      case 'club':
        return <Club {...mobileProps} />;
      case 'stories':
        return <Stories {...mobileProps} />;
      case 'finder':
        return <Finder {...mobileProps} />;
      case 'personal':
        return <Personal {...mobileProps} />;
      case 'resume':
        return <Resume {...mobileProps} />;
      case 'chatbot':
        return <Chatbot {...mobileProps} />;
      case 'photos':
        return <Photos {...mobileProps} />;
      case 'contact':
        return <Contact {...mobileProps} />;
      default:
        return null;
    }
  };

  return (
    <MobileContainer>
      <StatusBar>
        <StatusLeft>
          {currentTime}
        </StatusLeft>
        <StatusRight>
          <SignalBars>
            <SignalBar height={4} />
            <SignalBar height={6} />
            <SignalBar height={8} />
            <SignalBar height={11} />
          </SignalBars>
          <BatteryIcon>
            <BatteryFill />
          </BatteryIcon>
        </StatusRight>
      </StatusBar>

      {/* Dynamic Island */}
      <DynamicIslandContainer>
        <AnimatePresence mode="wait">
          <DynamicIsland
            key={activeApp ? 'expanded' : 'collapsed'}
            initial={{ width: 126, height: 37 }}
            animate={{ 
              width: activeApp ? 160 : 126, 
              height: 37,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 500, 
              damping: 35 
            }}
          >
            <IslandContent>
              <IslandDot />
              <IslandCamera />
            </IslandContent>
          </DynamicIsland>
        </AnimatePresence>
      </DynamicIslandContainer>

      <IPhoneHomeScreen onAppSelect={handleAppSelect} />

      <MobileFullScreenView
        isOpen={activeApp !== null}
        title={activeApp ? windowTitles[activeApp] : ''}
        onClose={handleClose}
      >
        <MobileContentWrapper>
          {renderContent()}
        </MobileContentWrapper>
      </MobileFullScreenView>
    </MobileContainer>
  );
};

export default MobileApp;
