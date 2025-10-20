// CACHE BUSTER v2.0 - NEW DESIGN
import React from 'react';
import styled from '@emotion/styled';
import WindowFrame from '../components/WindowFrame';
import { 
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaTrophy
} from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: #f6f6f6;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  color: #1d1d1f;
`;

const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 24px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 3px solid #ffffff;
`;

const SystemName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  text-align: center;
  color: #1d1d1f;
`;

const Version = styled.div`
  font-size: 1.1rem;
  color: #86868b;
  margin-bottom: 32px;
  text-align: center;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 48px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 32px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e5e5e7;
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  font-size: 0.95rem;
  color: #86868b;
  font-weight: 500;
`;

const InfoValue = styled.div`
  font-size: 0.95rem;
  color: #1d1d1f;
  font-weight: 500;
  text-align: right;
  max-width: 200px;
  word-wrap: break-word;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: center;
`;

const MacButton = styled.a`
  background: #007AFF;
  color: white;
  padding: 8px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease, transform 0.1s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #0056CC;
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(MacButton)`
  background: #F2F2F7;
  color: #1d1d1f;
  
  &:hover {
    background: #E5E5EA;
  }
`;

const SkillsSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e5e7;
`;

const SkillsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 16px 0;
  text-align: center;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: #F2F2F7;
  color: #1d1d1f;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid #e5e5e7;
`;

const About = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  return (
    <WindowFrame
      title="About This Developer"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 700, height: 650 }}
    >
      <Content>
        <ProfilePhoto src="/me.jpg" alt="Sarthak Sethi" />
        
        <SystemName>Sarthak Sethi</SystemName>
        <Version>CS & Applied Math Student • Dean's Scholar (2x) • 5x Hackathon Winner</Version>
        
        <InfoGrid>
          <InfoRow>
            <InfoLabel>University</InfoLabel>
            <InfoValue>San Jose State University</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Expected Graduation</InfoLabel>
            <InfoValue>Dec 2026</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Location</InfoLabel>
            <InfoValue>San Jose, CA</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>LinkedIn</InfoLabel>
            <InfoValue>sarsethi</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Email</InfoLabel>
            <InfoValue>sarthakluv@gmail.com</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>GitHub</InfoLabel>
            <InfoValue>1300Sarthak</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Current Role</InfoLabel>
            <InfoValue>ML Research Assistant</InfoValue>
          </InfoRow>
          
          <InfoRow>
            <InfoLabel>Specialization</InfoLabel>
            <InfoValue>Full-Stack, GenAI, ML</InfoValue>
          </InfoRow>
        </InfoGrid>

        <ButtonRow>
          <MacButton href="https://cal.com/sxthak" target="_blank">
            <FaCalendarAlt /> Schedule a Meeting
          </MacButton>
          <SecondaryButton href="https://github.com/1300Sarthak" target="_blank">
            <FaGithub /> GitHub
          </SecondaryButton>
          <SecondaryButton href="https://linkedin.com/in/sarsethi" target="_blank">
            <FaLinkedin /> LinkedIn
          </SecondaryButton>
          <SecondaryButton href="mailto:sarthakluv@gmail.com">
            <FaEnvelope /> Email
          </SecondaryButton>
        </ButtonRow>

        <SkillsSection>
          <SkillsTitle>Technical Skills</SkillsTitle>
          <SkillTags>
            <SkillTag>Python</SkillTag>
            <SkillTag>Java</SkillTag>
            <SkillTag>TypeScript</SkillTag>
            <SkillTag>JavaScript</SkillTag>
            <SkillTag>React</SkillTag>
            <SkillTag>Next.js</SkillTag>
            <SkillTag>Spring Boot</SkillTag>
            <SkillTag>Django</SkillTag>
            <SkillTag>Flask</SkillTag>
            <SkillTag>PostgreSQL</SkillTag>
            <SkillTag>MongoDB</SkillTag>
            <SkillTag>LLMs</SkillTag>
            <SkillTag>RAG</SkillTag>
            <SkillTag>MCP</SkillTag>
            <SkillTag>Fine-tuning</SkillTag>
            <SkillTag>AWS</SkillTag>
            <SkillTag>Docker</SkillTag>
            <SkillTag>Kubernetes</SkillTag>
            <SkillTag>CI/CD</SkillTag>
          </SkillTags>
        </SkillsSection>
      </Content>
    </WindowFrame>
  );
};

export default About;