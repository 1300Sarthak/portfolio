import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #222;
  padding: 32px 32px 24px 32px;
  min-width: 480px;
`;
const Heading = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 18px;
`;
const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Card = styled.div`
  background: #fafaff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  border: 1px solid #ececec;
`;
const CardTitle = styled.div`
  font-size: 1.13rem;
  font-weight: 700;
  margin-bottom: 4px;
`;
const CardDesc = styled.div`
  color: #444;
  font-size: 1.01rem;
  margin-bottom: 10px;
`;
const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
`;
const Badge = styled.span`
  display: inline-block;
  background: ${props => props.bg || '#eee'};
  color: ${props => props.color || '#222'};
  border-radius: 6px;
  font-size: 0.97rem;
  font-weight: 600;
  padding: 2px 10px;
  letter-spacing: 0.01em;
`;

const projects = [
  {
    title: 'EmbrAlert',
    desc: 'A full-stack wildfire detection and alert app for San Jose. Real-time risk, AI smoke detection, multilingual chatbot, and live camera integration.',
    stack: [
      { name: 'React', bg: '#e3f0ff', color: '#3578e5' },
      { name: 'Node.js', bg: '#e6ffe3', color: '#2e7d32' },
      { name: 'MongoDB', bg: '#f3eaff', color: '#8e24aa' }
    ]
  },
  {
    title: 'SJFit',
    desc: 'A fitness tracker for SJSU students. Uses AI and MediaPipe to count reps, track exercises, and give real-time feedback.',
    stack: [
      { name: 'React', bg: '#e3f0ff', color: '#3578e5' },
      { name: 'Python', bg: '#fffbe3', color: '#e6a100' },
      { name: 'TensorFlow', bg: '#eafff3', color: '#00897b' }
    ]
  },
  {
    title: 'Harmony Health',
    desc: 'AI-powered app for emotional analysis using Hume AI. Tracks vocal/facial patterns and delivers wellness insights.',
    stack: [
      { name: 'React', bg: '#e3f0ff', color: '#3578e5' },
      { name: 'Node.js', bg: '#e6ffe3', color: '#2e7d32' },
      { name: 'Hume AI', bg: '#eafff3', color: '#00897b' }
    ]
  }
];

const Projects = (props) => (
  <WindowFrame title="Projects" {...props}>
    <Content>
      <Heading>Featured Projects</Heading>
      <CardList>
        {projects.map((proj, i) => (
          <Card key={i}>
            <CardTitle>{proj.title}</CardTitle>
            <CardDesc>{proj.desc}</CardDesc>
            <BadgeRow>
              {proj.stack.map((badge, j) => (
                <Badge key={j} bg={badge.bg} color={badge.color}>{badge.name}</Badge>
              ))}
            </BadgeRow>
          </Card>
        ))}
      </CardList>
    </Content>
  </WindowFrame>
);

export default Projects;
