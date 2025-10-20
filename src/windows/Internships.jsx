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
const InternTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const InternCompany = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2px;
`;
const InternMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
  font-style: italic;
`;
const InternDesc = styled.div`
  font-size: 0.97rem;
  color: #444;
  margin: 6px 0 8px 0;
  line-height: 1.6;
  
  /* Better bullet point spacing */
  ul {
    margin: 0;
    padding-left: 16px;
    
    li {
      margin-bottom: 8px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
const InternTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const TechTag = styled.span`
  background: #f2f2f7;
  color: #333;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.93rem;
  border: 1px solid #e5e5e7;
`;

const internships = [
  {
    title: 'Software Engineering Intern',
    company: 'Gilead Sciences',
    location: 'Foster City, CA',
    duration: 'May 2025 – Aug 2025',
    desc: '• Built MCP AI agent on a fine-tuned LLM with intranet integration, reducing IAM access tickets by 37% through real-time status queries and automated alerts\n• Migrated 20K+ records into Oracle via Python ETL; exposed a secure REST API and delivered Power BI dashboards with row-level security, cutting reporting cycles 60%\n• Automated UI and database consistency checks, enforcing CI security gates that stopped 15+ high-risk defects',
    tech: ['Python', 'LLM', 'MCP', 'Oracle', 'ETL', 'Power BI', 'REST API', 'CI/CD'],
  },
  {
    title: 'Data Engineering Intern',
    company: 'Cequence Security',
    location: 'Santa Clara, CA',
    duration: 'Jan 2025 – Mar 2025',
    desc: '• Engineered REST-traffic analytics pipeline (Python + SQL) with 1h/24h aggregations & alerts, improving system efficiency 15%\n• Integrated Open Policy Agent (OPA) with NGINX, enforcing API access control via Rego policy-as-code while keeping P99 latency under 5ms\n• Automated anomaly detection of REST API traffic in CI/CD, reducing mean time to detection by 45%',
    tech: ['Python', 'SQL', 'NGINX', 'OPA', 'Rego', 'REST API', 'CI/CD', 'Anomaly Detection'],
  },
  {
    title: 'Machine Learning Research Assistant',
    company: 'MICoSys Lab @SJSU',
    location: 'San Jose, CA',
    duration: 'Jan 2025 – Present',
    desc: '• Researched adversarial attacks on LLMs, designing jailbreak tests pre/post fine-tuning to measure robustness/alignment\n• Fine-tuned LLaMA models with LoRA adapters, boosting performance on novel datasets and analyzing generalization\n• Explored unlearning methods by altering LoRA adapters and analyzing delta weights to interpret model representations',
    tech: ['Python', 'LLMs', 'LLaMA', 'LoRA', 'Fine-tuning', 'Adversarial ML', 'Model Interpretability'],
  },
];

const Internships = (props) => (
  <WindowFrame title="Internships" {...props} defaultSize={{ width: 1000, height: 700 }}>
    <Content>
      <SectionTitle>Internship Experience</SectionTitle>
      <SectionSubtitle>Professional internships and research positions</SectionSubtitle>
      <CardGrid>
        {internships.map((intern, i) => (
          <Card key={i}>
            <InternTitle>{intern.title}</InternTitle>
            <InternCompany>{intern.company}</InternCompany>
            <InternMeta>{intern.location} • {intern.duration}</InternMeta>
            <InternDesc style={{ whiteSpace: 'pre-line' }}>{intern.desc}</InternDesc>
            <InternTech>
              {intern.tech.map((t, j) => (
                <TechTag key={j}>{t}</TechTag>
              ))}
            </InternTech>
          </Card>
        ))}
      </CardGrid>
    </Content>
  </WindowFrame>
);

export default Internships; 