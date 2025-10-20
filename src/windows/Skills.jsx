import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaCode, FaBrain, FaDatabase, FaTools, FaPalette, FaCloud, FaUsers, FaGraduationCap } from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: #f6f6f6;
  padding: 32px;
  height: 100%;
  overflow-y: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SkillCard = styled.div`
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

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #007AFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
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

const skillsData = [
  {
    title: 'Programming Languages',
    icon: <FaCode />,
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'C++']
  },
  {
    title: 'Frontend Development',
    icon: <FaPalette />,
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design']
  },
  {
    title: 'Backend Development',
    icon: <FaDatabase />,
    skills: ['Spring Boot', 'Django', 'Flask', 'Node.js', 'REST APIs', 'GraphQL', 'NGINX']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Oracle DB', 'MongoDB', 'Redis', 'Vector DBs', 'Pinecone']
  },
  {
    title: 'AI & Machine Learning',
    icon: <FaBrain />,
    skills: ['OpenAI', 'Hugging Face', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'LLMs', 'RAG', 'MCP', 'Fine-tuning (LoRA)', 'LLM-based Agents']
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud />,
    skills: ['AWS (Lambda, EC2, S3)', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions']
  },
  {
    title: 'Development Tools',
    icon: <FaTools />,
    skills: ['Git', 'Postman', 'Jira', 'Agile', 'Linux', 'Windows', 'macOS', 'VS Code', 'IntelliJ']
  },
  {
    title: 'Design & Media',
    icon: <FaPalette />,
    skills: ['Figma', 'Adobe Photoshop', 'Final Cut Pro X', 'UI/UX Design', 'Prototyping']
  },
  {
    title: 'Soft Skills',
    icon: <FaUsers />,
    skills: ['Communication', 'Leadership', 'Teamwork', 'Time Management', 'Problem Solving', 'Adaptability', 'Critical Thinking', 'Public Speaking', 'Growth Mindset']
  },
  {
    title: 'Academic Coursework',
    icon: <FaGraduationCap />,
    skills: ['Data Structures & Algorithms', 'Database Systems', 'Machine Learning', 'Object Oriented Programming', 'Intro to Java', 'Intro to Data Structures', 'Advanced Python', 'Calculus I, II, III', 'Linear Algebra', 'Statistics & Probability', 'Linear & Non-Linear Optimization']
  }
];

const Skills = (props) => (
  <WindowFrame title="Technical Skills" {...props} defaultSize={{ width: 1200, height: 700 }}>
    <Content>
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>A comprehensive overview of my technical expertise and capabilities</SectionSubtitle>
      <SkillsGrid>
        {skillsData.map((skillCategory, i) => (
          <SkillCard key={i}>
            <SkillHeader>
              <SkillIcon>{skillCategory.icon}</SkillIcon>
              <SkillTitle>{skillCategory.title}</SkillTitle>
            </SkillHeader>
            <SkillTags>
              {skillCategory.skills.map((skill, j) => (
                <SkillTag key={j}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Content>
  </WindowFrame>
);

export default Skills; 