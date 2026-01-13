import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f2f2f7;
  z-index: 1000;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: rgba(242, 242, 247, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 17px;
  font-weight: 600;
  color: #000;
  margin: 0;
  letter-spacing: -0.4px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.15s ease;
  padding: 0;

  &:active {
    background: rgba(0, 0, 0, 0.12);
    transform: scale(0.95);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#8e8e93" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Content = styled.div`
  padding: 0;
  padding-bottom: 40px;
  color: #000;
  min-height: calc(100vh - 56px);
`;

const MobileFullScreenView = ({ isOpen, title, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 350 }}
        >
          <Header>
            <Title>{title}</Title>
            <CloseButton onClick={onClose} aria-label="Close">
              <CloseIcon />
            </CloseButton>
          </Header>
          <Content>
            {children}
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default MobileFullScreenView;
