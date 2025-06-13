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
  background: rgba(245,255,245,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1px solid #e0e0e0;
  &:hover {
    background: #eaffea;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
`;

const fakeInternships = [
  { name: 'Software Engineering Intern @ Google', link: 'https://careers.google.com', desc: 'Worked on scalable backend systems for Google Search.' },
  { name: 'Data Science Intern @ Facebook', link: 'https://www.facebook.com/careers', desc: 'Analyzed user data to improve engagement.' },
  { name: 'Web Dev Intern @ StartupX', link: 'https://startupx.com', desc: 'Built a React dashboard for analytics.' },
];

const Internships = (props) => (
  <WindowFrame title="Internships" {...props}>
    <h2>Internships</h2>
    <CardGrid>
      {fakeInternships.map((intern, i) => (
        <Card key={i} href={intern.link} target="_blank" rel="noopener noreferrer">
          <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{intern.name}</div>
          <div style={{ fontSize: '0.97rem', color: '#444', marginTop: 4 }}>{intern.desc}</div>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Internships; 