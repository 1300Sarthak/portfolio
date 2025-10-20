import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: #f6f6f6;
  padding: 32px;
  height: 100%;
  overflow-y: auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 8px 0;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #86868b;
  text-align: center;
  margin: 0 0 32px 0;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px;
  color: #222;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }
  
  &::before {
    content: '🏆';
    position: absolute;
    top: 20px;
    right: 24px;
    font-size: 1.5rem;
    opacity: 0.6;
  }
`;

const HackathonTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 40px;
`;

const HackathonEvent = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2px;
`;

const HackathonMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
  font-style: italic;
`;

const HackathonDesc = styled.div`
  font-size: 0.97rem;
  color: #444;
  margin: 6px 0 8px 0;
  line-height: 1.6;
`;

const HackathonTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const TechTag = styled.span`
  background: #f2f2f7;
  color: #333;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e5e5e7;
`;

const PlaceTag = styled.span`
  background: #007AFF;
  color: white;
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 8px;
  display: inline-block;
`;

const hackathonWins = [
  {
    place: '🥇 1st Place',
    title: 'Microsoft Azure Hackathon @SJSU',
    event: 'Microsoft Azure Hackathon for Public Sector',
    date: 'May 2025',
    desc: 'Developed government AI assistant (RAG + MCP) with location-aware form autofill and query handling, integrating secure pipelines and real-time inference to streamline citizen service workflows.',
  },
  {
    place: '🥇 1st Place',
    title: 'Vibe-02 Hackathon',
    event: 'Vibe-02 Hackathon',
    date: 'June 2025',
    desc: 'Built innovative solution focusing on user experience and cutting-edge technology integration.',
  },
  {
    place: '🥈 2nd Place',
    title: 'SJHacks',
    event: 'SJHacks',
    date: 'April 2025',
    desc: 'Created impactful solution addressing real-world problems with innovative technology approach.',
  },
  {
    place: '🥈 2nd Place',
    title: 'SiliconXHacks',
    event: 'SiliconXHacks',
    date: 'April 2024',
    desc: 'Developed comprehensive platform showcasing technical excellence and creative problem-solving.',
  },
  {
    place: '🥉 3rd Place',
    title: 'MCP Hackathon',
    event: 'MCP Hackathon in San Francisco',
    date: 'Sep 2025',
    desc: 'Built full-stack multi-agent AI platform with Bright Data MCP and LlamaIndex to automate research, generate department-specific analyses, and deliver executive-ready insights through real-time dashboards.',
  },
];

const HackathonWins = (props) => (
  <WindowFrame title="Hackathon Wins" {...props} defaultSize={{ width: 1000, height: 700 }}>
    <Content>
      <SectionTitle>Hackathon Wins</SectionTitle>
      <SectionSubtitle>Competition victories and recognition in hackathons</SectionSubtitle>
      <CardGrid>
        {hackathonWins.map((hackathon, i) => (
          <Card key={i}>
            <PlaceTag>{hackathon.place}</PlaceTag>
            <HackathonTitle>{hackathon.title}</HackathonTitle>
            <HackathonEvent>{hackathon.event}</HackathonEvent>
            <HackathonMeta>{hackathon.date}</HackathonMeta>
            <HackathonDesc>{hackathon.desc}</HackathonDesc>
            {hackathon.tech && (
              <HackathonTech>
                {hackathon.tech.map((t, j) => (
                  <TechTag key={j}>{t}</TechTag>
                ))}
              </HackathonTech>
            )}
          </Card>
        ))}
      </CardGrid>
    </Content>
  </WindowFrame>
);

export default HackathonWins;
