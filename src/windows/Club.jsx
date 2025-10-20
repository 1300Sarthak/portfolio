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
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }
`;

const PositionTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1d1d1f;
`;

const Organization = styled.div`
  font-size: 1rem;
  color: #007AFF;
  margin: 4px 0 8px 0;
  font-weight: 500;
`;

const Duration = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 12px;
  font-style: italic;
`;

const Description = styled.div`
  font-size: 0.97rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background: #f2f2f7;
  color: #333;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e5e5e7;
`;

const clubPositions = [
  {
    title: 'Machine Learning Dev Team',
    organization: 'SJSU Software & Computer Engineering Society',
    duration: 'Feb 2025 – Aug 2025 • 6 mos',
    location: 'San Jose, California, United States • Remote',
    description: 'Contributing to machine learning projects and collaborating with fellow developers on innovative software solutions.',
    skills: ['Machine Learning', 'Python', 'Collaboration', 'Software Development']
  },
  {
    title: 'Data Analytics Lead',
    organization: 'Responsible Computing Club (RCC) at SJSU',
    duration: 'Jan 2025 – May 2025 • 5 mos',
    location: 'San Jose, California, United States • Remote',
    description: 'Led data analytics initiatives across 3+ projects, building Power BI dashboards and Tableau visualizations to track key performance indicators (KPIs) for student engagement and technical training outcomes.',
    skills: ['Python', 'NumPy', 'Pandas', 'Power BI', 'Tableau', 'Data Analytics', 'Leadership']
  },
  {
    title: 'ACM, Association for Computing Machinery',
    organization: 'San Jose State University',
    duration: '1 yr 4 mos',
    location: 'San Jose, California, United States',
    description: 'Active member participating in computing and technology events, networking with industry professionals and fellow students.',
    skills: ['Networking', 'Professional Development', 'Technology', 'Computing']
  },
  {
    title: 'Director of Outreach',
    organization: 'Student Organization',
    duration: 'Sep 2024 – Feb 2025 • 6 mos',
    location: 'San Jose, California, United States',
    description: 'Managed outreach initiatives, coordinated community engagement programs, and built relationships with external partners to expand organizational reach.',
    skills: ['Leadership', 'Communication', 'Community Outreach', 'Program Management']
  },
  {
    title: 'Social Media Chair',
    organization: 'Student Organization',
    duration: 'Nov 2023 – Sep 2024 • 11 mos',
    location: 'San Jose, California, United States',
    description: 'Managed social media presence, created engaging content, and grew follower engagement through strategic digital marketing campaigns.',
    skills: ['Social Media Marketing', 'Content Creation', 'Digital Marketing', 'Brand Management']
  },
  {
    title: 'Social Media Chair',
    organization: 'Kappa Sigma Fraternity',
    duration: 'Jan 2024 – May 2024 • 5 mos',
    location: 'San Jose, California, United States • Remote',
    description: 'Developed and executed social media strategy for fraternity events and activities, increasing member engagement and community visibility.',
    skills: ['Social Media Strategy', 'Event Promotion', 'Community Building', 'Content Management']
  }
];

const Club = (props) => (
  <WindowFrame title="Club & Leadership" {...props} defaultSize={{ width: 1000, height: 700 }}>
    <Content>
      <SectionTitle>Club & Leadership</SectionTitle>
      <SectionSubtitle>Leadership roles and organizational involvement</SectionSubtitle>
      <CardGrid>
        {clubPositions.map((position, i) => (
          <Card key={i}>
            <PositionTitle>{position.title}</PositionTitle>
            <Organization>{position.organization}</Organization>
            <Duration>{position.duration}</Duration>
            <Description>{position.description}</Description>
            <SkillTags>
              {position.skills.map((skill, j) => (
                <SkillTag key={j}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </Card>
        ))}
      </CardGrid>
    </Content>
  </WindowFrame>
);

export default Club; 