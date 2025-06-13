import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;
const Card = styled.a`
  display: block;
  background: rgba(245,245,255,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1px solid #e0e0e0;
  &:hover {
    background: #eaf1ff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
`;

const fakeSkills = [
  { name: 'React', link: 'https://react.dev', desc: 'Modern frontend library for building UIs.' },
  { name: 'Python', link: 'https://python.org', desc: 'General-purpose programming language.' },
  { name: 'Machine Learning', link: 'https://scikit-learn.org', desc: 'Experience with scikit-learn, TensorFlow, and PyTorch.' },
];

const Skills = (props) => (
  <WindowFrame title="Skills" {...props}>
    <h2>Skills</h2>
    <CardGrid>
      {fakeSkills.map((skill, i) => (
        <Card key={i} href={skill.link} target="_blank" rel="noopener noreferrer">
          <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{skill.name}</div>
          <div style={{ fontSize: '0.97rem', color: '#444', marginTop: 4 }}>{skill.desc}</div>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Skills; 