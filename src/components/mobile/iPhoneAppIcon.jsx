import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  width: 76px;
`;

const IconSquare = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 13.5px; /* iOS uses ~22.5% corner radius */
  background: ${props => props.gradient || 'linear-gradient(180deg, #5AC8FA 0%, #007AFF 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 4px 8px rgba(0, 0, 0, 0.08),
    inset 0 0.5px 0 rgba(255, 255, 255, 0.25);
  position: relative;
  overflow: hidden;

  /* iOS-style highlight at top */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      180deg, 
      rgba(255, 255, 255, 0.25) 0%, 
      rgba(255, 255, 255, 0.08) 50%,
      transparent 100%
    );
    pointer-events: none;
    border-radius: 13.5px 13.5px 0 0;
  }
`;

const IconLabel = styled.span`
  font-size: 11px;
  color: #fff;
  text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.3);
  max-width: 74px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: -0.08px;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
`;

const IPhoneAppIcon = ({ icon, label, gradient, onClick, isDock = false }) => {
  return (
    <IconContainer
      onClick={onClick}
      whileTap={{ scale: 0.88, opacity: 0.7 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <IconSquare gradient={gradient} style={isDock ? { width: 50, height: 50, borderRadius: 11 } : {}}>
        {icon}
      </IconSquare>
      {!isDock && <IconLabel>{label}</IconLabel>}
    </IconContainer>
  );
};

export default IPhoneAppIcon;
