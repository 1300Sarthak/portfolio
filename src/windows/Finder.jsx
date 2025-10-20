import React, { useState, useMemo } from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaSearch, FaFolder, FaFile, FaUser, FaBriefcase, FaCode, FaTrophy, FaTools, FaHeart, FaEnvelope } from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: #f6f6f6;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.div`
  background: white;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 1rem;
  background: #f8f9fa;
  
  &:focus {
    outline: none;
    border-color: #007AFF;
    background: white;
  }
`;

const SearchIcon = styled.div`
  color: #666;
  font-size: 1.1rem;
`;

const ResultsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
`;

const CategorySection = styled.div`
  margin-bottom: 24px;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1d1d1f;
`;

const CategoryIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #007AFF;
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ResultItem = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f8f9fa;
    border-color: #007AFF;
    transform: translateX(4px);
  }
`;

const ResultTitle = styled.div`
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 4px;
`;

const ResultDescription = styled.div`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

const ResultPath = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 4px;
  font-family: 'SF Mono', Monaco, monospace;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
  font-size: 1.1rem;
`;

// Comprehensive search data
const searchData = [
  // About Me
  {
    id: 'about-me',
    title: 'About Me',
    description: 'CS & Applied Math Student • Dean\'s Scholar (2x) • 5x Hackathon Winner',
    category: 'Personal',
    path: '/about',
    keywords: ['sarthak', 'sethi', 'student', 'computer science', 'applied math', 'dean scholar', 'hackathon', 'winner']
  },
  {
    id: 'contact-info',
    title: 'Contact Information',
    description: 'Schedule meetings, email, GitHub, LinkedIn',
    category: 'Contact',
    path: '/contact',
    keywords: ['contact', 'email', 'schedule', 'meeting', 'cal.com', 'github', 'linkedin', 'sarthakluv@gmail.com']
  },
  
  // Work Experience
  {
    id: 'gilead-internship',
    title: 'Software Engineering Intern - Gilead Sciences',
    description: 'Built MCP AI agent, migrated 20K+ records, automated UI testing',
    category: 'Experience',
    path: '/internships',
    keywords: ['gilead', 'software engineering', 'intern', 'mcp', 'ai agent', 'oracle', 'etl', 'power bi']
  },
  {
    id: 'ml-research',
    title: 'Machine Learning Research Assistant - MICoSys Lab',
    description: 'Adversarial attacks on LLMs, fine-tuning, model interpretability',
    category: 'Experience',
    path: '/internships',
    keywords: ['machine learning', 'research', 'llm', 'adversarial', 'fine-tuning', 'lora', 'llama']
  },
  {
    id: 'cequence-intern',
    title: 'Data Engineering Intern - Cequence Security',
    description: 'REST-traffic analytics pipeline, OPA integration, anomaly detection',
    category: 'Experience',
    path: '/internships',
    keywords: ['data engineering', 'cequence', 'security', 'rest', 'analytics', 'opa', 'nginx', 'anomaly detection']
  },
  {
    id: 'resident-assistant',
    title: 'Resident Assistant - SJSU',
    description: 'Community building, crisis management, student mentorship',
    category: 'Experience',
    path: '/experience',
    keywords: ['resident assistant', 'ra', 'sjsu', 'community', 'mentorship', 'crisis management']
  },
  
  // Projects
  {
    id: 'smartquery',
    title: 'SmartQuery - AI Analytics Platform',
    description: 'Full-stack application for CSV queries using natural language',
    category: 'Projects',
    path: '/projects',
    keywords: ['smartquery', 'ai', 'analytics', 'csv', 'natural language', 'nextjs', 'fastapi', 'postgresql']
  },
  {
    id: 'datapulse',
    title: 'DataPulse - Real-time Dashboard',
    description: 'Crypto, stocks, weather, and news aggregation platform',
    category: 'Projects',
    path: '/projects',
    keywords: ['datapulse', 'dashboard', 'crypto', 'stocks', 'weather', 'news', 'react', 'fastapi']
  },
  {
    id: 'govchat',
    title: 'GovChat - Government AI Assistant',
    description: '1st Place Winner at Microsoft Azure Hackathon',
    category: 'Projects',
    path: '/projects',
    keywords: ['govchat', 'government', 'ai', 'assistant', 'microsoft', 'azure', 'hackathon', 'winner', 'rag', 'mcp']
  },
  {
    id: 'sjfit',
    title: 'SJFit - Exercise Form Detection',
    description: '2nd Place Winner at Silicon Hacks using MediaPipe and CNNs',
    category: 'Projects',
    path: '/projects',
    keywords: ['sjfit', 'exercise', 'form detection', 'mediapipe', 'cnn', 'silicon hacks', 'opencv', 'computer vision']
  },
  
  // Hackathon Wins
  {
    id: 'azure-hackathon',
    title: '1st Place: Microsoft Azure Hackathon @SJSU',
    description: 'Government AI assistant with RAG + MCP integration',
    category: 'Achievements',
    path: '/hackathonwins',
    keywords: ['microsoft', 'azure', 'hackathon', 'first place', 'government', 'ai', 'assistant', 'rag', 'mcp']
  },
  {
    id: 'vibe-hackathon',
    title: '1st Place: Vibe-02 Hackathon',
    description: 'Full-stack AI analytics SaaS platform',
    category: 'Achievements',
    path: '/hackathonwins',
    keywords: ['vibe', 'hackathon', 'first place', 'ai', 'analytics', 'saas', 'langchain', 'react', 'supabase']
  },
  {
    id: 'sjhacks',
    title: '2nd Place: SJHacks',
    description: 'EmbrAlert wildfire detection and prevention platform',
    category: 'Achievements',
    path: '/hackathonwins',
    keywords: ['sjhacks', 'second place', 'embralert', 'wildfire', 'detection', 'prevention', 'rnn', 'weather']
  },
  
  // Skills
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description: 'Python, Java, TypeScript, JavaScript, SQL, HTML5, CSS3, C++',
    category: 'Skills',
    path: '/skills',
    keywords: ['python', 'java', 'typescript', 'javascript', 'sql', 'html', 'css', 'c++', 'programming']
  },
  {
    id: 'ai-ml-skills',
    title: 'AI & Machine Learning',
    description: 'OpenAI, TensorFlow, PyTorch, LLMs, RAG, MCP, Fine-tuning',
    category: 'Skills',
    path: '/skills',
    keywords: ['ai', 'machine learning', 'openai', 'tensorflow', 'pytorch', 'llm', 'rag', 'mcp', 'fine-tuning', 'lora']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'AWS, Azure, Docker, Kubernetes, CI/CD, GitHub Actions',
    category: 'Skills',
    path: '/skills',
    keywords: ['aws', 'azure', 'docker', 'kubernetes', 'cicd', 'github actions', 'cloud', 'devops']
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'PostgreSQL, Oracle DB, MongoDB, Redis, Vector Databases',
    category: 'Skills',
    path: '/skills',
    keywords: ['postgresql', 'oracle', 'mongodb', 'redis', 'vector database', 'pinecone', 'sql', 'nosql']
  },
  
  // Leadership
  {
    id: 'data-analytics-lead',
    title: 'Data Analytics Lead - Mozilla RCC@SJSU',
    description: 'Power BI dashboards, predictive modeling, KPI tracking',
    category: 'Leadership',
    path: '/club',
    keywords: ['data analytics', 'mozilla', 'rcc', 'power bi', 'tableau', 'predictive modeling', 'kpi']
  },
  {
    id: 'ml-dev-team',
    title: 'Machine Learning Dev Team - SJSU SCES',
    description: 'Contributing to ML projects and software development',
    category: 'Leadership',
    path: '/club',
    keywords: ['machine learning', 'dev team', 'sjsu', 'sces', 'software development', 'collaboration']
  },
  {
    id: 'director-outreach',
    title: 'Director of Outreach',
    description: 'Community engagement, external partnerships, program management',
    category: 'Leadership',
    path: '/club',
    keywords: ['director', 'outreach', 'community engagement', 'partnerships', 'program management']
  }
];

const categoryIcons = {
  'Personal': <FaUser />,
  'Experience': <FaBriefcase />,
  'Projects': <FaCode />,
  'Achievements': <FaTrophy />,
  'Skills': <FaTools />,
  'Leadership': <FaHeart />,
  'Contact': <FaEnvelope />
};

const Finder = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return searchData;
    }

    const query = searchQuery.toLowerCase();
    return searchData.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const groupedResults = useMemo(() => {
    const groups = {};
    filteredResults.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredResults]);

  const handleResultClick = (result) => {
    // In a real implementation, this would navigate to the appropriate section
    console.log('Navigate to:', result.path, result);
  };

  return (
    <WindowFrame title="Finder" {...props} defaultSize={{ width: 800, height: 600 }}>
      <Content>
        <SearchBar>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search projects, experience, skills, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
        
        <ResultsContainer>
          {Object.keys(groupedResults).length === 0 ? (
            <NoResults>
              No results found for "{searchQuery}"
            </NoResults>
          ) : (
            Object.entries(groupedResults).map(([category, items]) => (
              <CategorySection key={category}>
                <CategoryHeader>
                  <CategoryIcon>
                    {categoryIcons[category] || <FaFolder />}
                  </CategoryIcon>
                  {category} ({items.length})
                </CategoryHeader>
                <ResultsList>
                  {items.map(item => (
                    <ResultItem key={item.id} onClick={() => handleResultClick(item)}>
                      <ResultTitle>{item.title}</ResultTitle>
                      <ResultDescription>{item.description}</ResultDescription>
                      <ResultPath>{item.path}</ResultPath>
                    </ResultItem>
                  ))}
                </ResultsList>
              </CategorySection>
            ))
          )}
        </ResultsContainer>
      </Content>
    </WindowFrame>
  );
};

export default Finder;
