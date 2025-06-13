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
  background: rgba(255,250,245,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1px solid #e0e0e0;
  &:hover {
    background: #fff5e6;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
`;

const fakeCertificates = [
  { name: 'AWS Certified Solutions Architect', link: 'https://aws.amazon.com/certification/', desc: 'Credential for cloud architecture.' },
  { name: 'Google Data Analytics Certificate', link: 'https://coursera.org/professional-certificates/google-data-analytics', desc: 'Professional certificate in data analytics.' },
  { name: 'Stanford Machine Learning', link: 'https://www.coursera.org/learn/machine-learning', desc: 'Completed Andrew Ng\'s ML course.' },
];

const Certificates = (props) => (
  <WindowFrame title="Certificates" {...props}>
    <h2>Certificates</h2>
    <CardGrid>
      {fakeCertificates.map((cert, i) => (
        <Card key={i} href={cert.link} target="_blank" rel="noopener noreferrer">
          <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cert.name}</div>
          <div style={{ fontSize: '0.97rem', color: '#444', marginTop: 4 }}>{cert.desc}</div>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Certificates; 