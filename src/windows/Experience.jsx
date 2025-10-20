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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #007AFF, #5856D6);
  }
`;

const ExperienceCard = styled.div`
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 24px;
  color: #222;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-left: 50px;
  margin-bottom: 24px;
  position: relative;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -38px;
    top: 24px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #007AFF;
    border: 3px solid #f6f6f6;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const ExperienceTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1d1d1f;
  flex: 1;
`;

const ExperienceType = styled.div`
  background: #007AFF;
  color: white;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 12px;
`;

const Company = styled.div`
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
  white-space: pre-line;
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

const allExperiences = [
  {
    title: 'Machine Learning Research Assistant',
    company: 'MICoSys Lab - San Jose State University Research Foundation',
    duration: 'Jan 2025 – Present • 9 mos',
    location: 'San Jose, California, United States • Hybrid',
    type: 'Research',
    description: 'Researched adversarial attacks on LLMs, designing jailbreak tests pre/post fine-tuning to measure robustness/alignment. Fine-tuned LLaMA models with LoRA adapters, boosting performance on novel datasets and analyzing generalization. Explored unlearning methods by altering LoRA adapters and analyzing delta weights to interpret model representations.',
    skills: ['Python', 'LLMs', 'LLaMA', 'LoRA', 'Fine-tuning', 'Adversarial ML', 'Model Interpretability']
  },
  {
    title: 'Resident Assistant',
    company: 'San Jose State University',
    duration: 'Jul 2024 – Present • 1 yr 3 mos',
    location: 'San Jose, California, United States • On-site',
    type: 'Student Employment',
    description: 'Supervised and mentored residents in university housing, ensuring community safety and fostering an inclusive living environment. Organized educational and social programs, handled crisis situations, and maintained open communication with residents and staff.',
    skills: ['Leadership', 'Crisis Management', 'Community Building', 'Mentorship', 'Program Planning']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Gilead Sciences',
    duration: 'May 2025 – Aug 2025 • 4 mos',
    location: 'Foster City, California • On-site',
    type: 'Internship',
    description: 'Built MCP AI agent on a fine-tuned LLM with intranet integration, reducing IAM access tickets by 37% through real-time status queries and automated alerts. Migrated 20K+ records into Oracle via Python ETL; exposed a secure REST API and delivered Power BI dashboards with row-level security, cutting reporting cycles 60%. Automated UI and database consistency checks, enforcing CI security gates that stopped 15+ high-risk defects.',
    skills: ['Python', 'LLM', 'MCP', 'Oracle', 'ETL', 'Power BI', 'REST API', 'CI/CD']
  },
  {
    title: 'Data Analytics Lead',
    company: 'Mozilla RCC@SJSU',
    duration: 'Feb 2025 – May 2025',
    location: 'San Jose, CA',
    type: 'Leadership',
    description: 'Led data analytics initiatives across 3+ projects, building Power BI dashboards and Tableau visualizations to track key performance indicators (KPIs) for student engagement and technical training outcomes. Built predictive models in Python (scikit-learn) to forecast event attendance with 85% accuracy using regression and classification. Designed analytics workflows on 10K+ records, extracting insights that improved program efficiency and decision-making.',
    skills: ['Python', 'Power BI', 'Tableau', 'Scikit-learn', 'Data Analytics', 'Predictive Modeling']
  },
  {
    title: 'Data Engineering Intern',
    company: 'Cequence Security',
    duration: 'Jan 2025 – Mar 2025',
    location: 'Santa Clara, CA',
    type: 'Internship',
    description: 'Engineered REST-traffic analytics pipeline (Python + SQL) with 1h/24h aggregations & alerts, improving system efficiency 15%. Integrated Open Policy Agent (OPA) with NGINX, enforcing API access control via Rego policy-as-code while keeping P99 latency under 5ms. Automated anomaly detection of REST API traffic in CI/CD, reducing mean time to detection by 45%.',
    skills: ['Python', 'SQL', 'NGINX', 'OPA', 'Rego', 'API Security', 'Anomaly Detection', 'CI/CD']
  },
  {
    title: 'Machine Learning Dev Team',
    company: 'SJSU Software & Computer Engineering Society',
    duration: 'Feb 2025 – Aug 2025 • 6 mos',
    location: 'San Jose, California, United States • Remote',
    type: 'Club',
    description: 'Contributing to machine learning projects and collaborating with fellow developers on innovative software solutions.',
    skills: ['Machine Learning', 'Python', 'Collaboration', 'Software Development']
  },
  {
    title: 'Director of Outreach',
    company: 'Student Organization',
    duration: 'Sep 2024 – Feb 2025 • 6 mos',
    location: 'San Jose, California, United States',
    type: 'Leadership',
    description: 'Managed outreach initiatives, coordinated community engagement programs, and built relationships with external partners to expand organizational reach.',
    skills: ['Leadership', 'Communication', 'Community Outreach', 'Program Management']
  },
  {
    title: 'Social Media Chair',
    company: 'Student Organization',
    duration: 'Nov 2023 – Sep 2024 • 11 mos',
    location: 'San Jose, California, United States',
    type: 'Club',
    description: 'Managed social media presence, created engaging content, and grew follower engagement through strategic digital marketing campaigns.',
    skills: ['Social Media Marketing', 'Content Creation', 'Digital Marketing', 'Brand Management']
  },
  {
    title: 'Social Media Chair',
    company: 'Kappa Sigma Fraternity',
    duration: 'Jan 2024 – May 2024 • 5 mos',
    location: 'San Jose, California, United States • Remote',
    type: 'Club',
    description: 'Developed and executed social media strategy for fraternity events and activities, increasing member engagement and community visibility.',
    skills: ['Social Media Strategy', 'Event Promotion', 'Community Building', 'Content Management']
  },
  {
    title: 'Code Sensei',
    company: 'Code Ninjas',
    duration: 'Jun 2023 – Aug 2023 • 3 mos',
    location: 'San Jose, California, United States • On-site',
    type: 'Part-time Job',
    description: 'Taught students aged 4-14, programming (JS, Python, and Scratch). Guided young learners through coding fundamentals and game development projects.',
    skills: ['Teaching', 'JavaScript', 'Python', 'Scratch', 'Youth Education', 'Curriculum Development']
  },
  {
    title: 'Intramural Sports Staff',
    company: 'Student Union, Inc. of SJSU',
    duration: 'Jun 2023 – Sep 2024 • 1 yr 9 mos',
    location: 'San Jose, California, United States • On-site',
    type: 'Part-time Job',
    description: 'Coordinated intramural sports events, managed equipment, and ensured safe participation for students across various athletic activities.',
    skills: ['Event Coordination', 'Sports Management', 'Safety Protocols', 'Customer Service']
  },
  {
    title: 'Cashier',
    company: 'Panera Bread',
    duration: 'Aug 2021 – Feb 2022 • 7 mos',
    location: 'Livermore, California, United States • On-site',
    type: 'Part-time Job',
    description: 'Provided excellent customer service, handled cash transactions, and maintained clean work environment in fast-paced food service setting.',
    skills: ['Customer Service', 'Cash Handling', 'Time Management', 'Teamwork']
  },
  {
    title: 'Ice Cream Vendor',
    company: 'Dippin\' Dots, LLC',
    duration: 'May 2021 – Sep 2021 • 5 mos',
    location: 'Livermore, California, United States • On-site',
    type: 'Seasonal Job',
    description: 'Served customers at outdoor events and festivals, managed inventory, and provided friendly customer service in high-energy environments.',
    skills: ['Customer Service', 'Inventory Management', 'Sales', 'Event Work']
  }
];

const getTypeColor = (type) => {
  switch (type) {
    case 'Internship': return '#34C759';
    case 'Research': return '#5856D6';
    case 'Leadership': return '#FF9500';
    case 'Club': return '#007AFF';
    case 'Student Employment': return '#FF3B30';
    case 'Part-time Job': return '#8E8E93';
    case 'Seasonal Job': return '#32D74B';
    default: return '#007AFF';
  }
};

const Experience = (props) => (
  <WindowFrame title="All Experience" {...props} defaultSize={{ width: 1200, height: 800 }}>
    <Content>
      <SectionTitle>Complete Experience Timeline</SectionTitle>
      <SectionSubtitle>All internships, jobs, research, leadership roles, and positions</SectionSubtitle>
      <Timeline>
        {allExperiences.map((experience, i) => (
          <ExperienceCard key={i}>
            <ExperienceHeader>
              <ExperienceTitle>{experience.title}</ExperienceTitle>
              <ExperienceType style={{ background: getTypeColor(experience.type) }}>
                {experience.type}
              </ExperienceType>
            </ExperienceHeader>
            <Company>{experience.company}</Company>
            <Duration>{experience.duration}</Duration>
            <Description>{experience.description}</Description>
            <SkillTags>
              {experience.skills.map((skill, j) => (
                <SkillTag key={j}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </ExperienceCard>
        ))}
      </Timeline>
    </Content>
  </WindowFrame>
);

export default Experience;
