import React from 'react';
import styled from '@emotion/styled';
import WindowFrame from '../components/WindowFrame';
import { FaUserGraduate } from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #222;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 32px 24px 32px;
  min-width: 420px;
`;
const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
`;
const Photo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  border: 2px solid #fff;
`;
const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #222;
`;
const Subtitle = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
`;
const Summary = styled.div`
  margin: 24px 0 32px 0;
  font-size: 1.08rem;
  color: #333;
`;
const SkillsRow = styled.div`
  display: flex;
  gap: 48px;
  width: 100%;
`;
const SkillCol = styled.div`
  flex: 1;
`;
const SkillTitle = styled.div`
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
`;
const SkillList = styled.div`
  color: #555;
  font-size: 1rem;
`;

const About = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  return (
    <WindowFrame
      title="About Me"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 540, height: 420 }}
    >
      <Content>
        <TopRow>
          <Photo src="/profile.jpg" alt="Profile" />
          <NameBlock>
            <Name>Sarthak Sethi</Name>
            <Subtitle>Computer Science &amp; Applied Math Student</Subtitle>
          </NameBlock>
        </TopRow>
        <Summary>
          Passionate software engineer and student at San Jose State University. I specialize in full-stack web development, machine learning, and cloud technologies. I love building modern web applications, exploring new tech, and collaborating on impactful projects.
        </Summary>
        <SkillsRow>
          <SkillCol>
            <SkillTitle>Frontend</SkillTitle>
            <SkillList>React, Next.js, JavaScript, HTML5, CSS, Tailwind CSS</SkillList>
          </SkillCol>
          <SkillCol>
            <SkillTitle>Backend</SkillTitle>
            <SkillList>Python, Flask, Django, Node.js, SQL, PostgreSQL, MongoDB</SkillList>
          </SkillCol>
        </SkillsRow>
      </Content>
    </WindowFrame>
  );
};

export default About;
