import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { 
  FaUser, FaCode, FaBriefcase, FaTools, FaTrophy, 
  FaUsers, FaStar, FaFolderOpen, FaHeart,
  FaGithub, FaLinkedin, FaFileAlt, FaImages, FaComments, FaEnvelope,
  FaCalendarAlt
} from 'react-icons/fa';
import IPhoneAppIcon from './iPhoneAppIcon';

const HomeScreenContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const AppGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 0;
  justify-items: center;
  padding-bottom: 20px;
`;

const DockContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 16px 28px;
  background: linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%);
`;

const DockInner = styled.div`
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 32px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 
    0 0 0 0.5px rgba(255, 255, 255, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.15);
`;

const HomeIndicator = styled.div`
  position: fixed;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

// Main app grid - all the portfolio content apps
const apps = [
  { id: 'about', icon: <FaUser size={26} />, label: 'About Me', gradient: 'linear-gradient(180deg, #5AC8FA 0%, #007AFF 100%)' },
  { id: 'resume', icon: <FaFileAlt size={26} />, label: 'Resume', gradient: 'linear-gradient(180deg, #FF6B6B 0%, #EE5A5A 100%)' },
  { id: 'projects', icon: <FaCode size={26} />, label: 'Projects', gradient: 'linear-gradient(180deg, #A8E063 0%, #56AB2F 100%)' },
  { id: 'internships', icon: <FaBriefcase size={26} />, label: 'Internships', gradient: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)' },
  { id: 'hackathonwins', icon: <FaTrophy size={26} />, label: 'Hackathons', gradient: 'linear-gradient(180deg, #FFD93D 0%, #FF9500 100%)' },
  { id: 'skills', icon: <FaTools size={26} />, label: 'Skills', gradient: 'linear-gradient(180deg, #F093FB 0%, #F5576C 100%)' },
  { id: 'club', icon: <FaUsers size={26} />, label: 'Leadership', gradient: 'linear-gradient(180deg, #4ECDC4 0%, #44A08D 100%)' },
  { id: 'contact', icon: <FaEnvelope size={26} />, label: 'Contact', gradient: 'linear-gradient(180deg, #A18CD1 0%, #5D26C1 100%)' },
  { id: 'stories', icon: <FaStar size={26} />, label: 'Stories', gradient: 'linear-gradient(180deg, #FA709A 0%, #FEE140 100%)' },
  { id: 'finder', icon: <FaFolderOpen size={26} />, label: 'Finder', gradient: 'linear-gradient(180deg, #74b9ff 0%, #0984e3 100%)' },
  { id: 'personal', icon: <FaHeart size={26} />, label: 'Personal', gradient: 'linear-gradient(180deg, #fd79a8 0%, #e84393 100%)' },
  { id: 'chatbot', icon: <FaComments size={26} />, label: 'Chatbot', gradient: 'linear-gradient(180deg, #00B4DB 0%, #0083B0 100%)' },
  { id: 'photos', icon: <FaImages size={26} />, label: 'Photos', gradient: 'linear-gradient(180deg, #FFECD2 0%, #FCB69F 100%)' },
  { id: 'github', icon: <FaGithub size={26} />, label: 'GitHub', gradient: 'linear-gradient(180deg, #434343 0%, #000000 100%)', isExternal: true, href: 'https://github.com/1300Sarthak' },
  { id: 'linkedin', icon: <FaLinkedin size={26} />, label: 'LinkedIn', gradient: 'linear-gradient(180deg, #0077B5 0%, #005885 100%)', isExternal: true, href: 'https://linkedin.com/in/sarsethi' },
  { id: 'calendar', icon: <FaCalendarAlt size={26} />, label: 'Schedule', gradient: 'linear-gradient(180deg, #FF3B30 0%, #C41E3A 100%)', isExternal: true, href: 'https://cal.com/sxthak' },
];

// Dock apps - most important for recruiters
const dockApps = [
  { id: 'resume', icon: <FaFileAlt size={22} />, label: 'Resume', gradient: 'linear-gradient(180deg, #FF6B6B 0%, #EE5A5A 100%)' },
  { id: 'about', icon: <FaUser size={22} />, label: 'About', gradient: 'linear-gradient(180deg, #5AC8FA 0%, #007AFF 100%)' },
  { id: 'contact', icon: <FaEnvelope size={22} />, label: 'Contact', gradient: 'linear-gradient(180deg, #A18CD1 0%, #5D26C1 100%)' },
  { id: 'linkedin', icon: <FaLinkedin size={22} />, label: 'LinkedIn', gradient: 'linear-gradient(180deg, #0077B5 0%, #005885 100%)', isExternal: true, href: 'https://linkedin.com/in/sarsethi' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 350, damping: 25 }
  }
};

const IPhoneHomeScreen = ({ onAppSelect }) => {
  const handleAppClick = (app) => {
    if (app.isExternal && app.href) {
      window.open(app.href, '_blank', 'noopener,noreferrer');
    } else {
      onAppSelect(app.id);
    }
  };

  return (
    <>
      <HomeScreenContainer>
        <AppGrid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {apps.map((app) => (
            <motion.div key={app.id} variants={itemVariants}>
              <IPhoneAppIcon
                icon={app.icon}
                label={app.label}
                gradient={app.gradient}
                onClick={() => handleAppClick(app)}
              />
            </motion.div>
          ))}
        </AppGrid>
      </HomeScreenContainer>

      <DockContainer>
        <DockInner>
          {dockApps.map((app) => (
            <IPhoneAppIcon
              key={app.id}
              icon={app.icon}
              gradient={app.gradient}
              onClick={() => handleAppClick(app)}
              isDock={true}
            />
          ))}
        </DockInner>
      </DockContainer>

      <HomeIndicator />
    </>
  );
};

export default IPhoneHomeScreen;
