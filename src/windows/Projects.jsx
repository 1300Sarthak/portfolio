import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: #f5f5f7;
  padding: 32px;
  height: 100%;
  overflow-y: auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 8px 0;
  text-align: center;
  letter-spacing: -0.5px;
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #6e6e73;
  text-align: center;
  margin: 0 0 32px 0;
  font-weight: 400;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Card = styled.a`
  display: block;
  background: white;
  border-radius: 18px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 24px;
  color: #1d1d1f;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.04);
  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  }
`;
const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 8px;
`;
const ProjectNumber = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #007AFF 0%, #0051D5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 122, 255, 0.25);
`;
const ProjectTitle = styled.div`
  flex: 1;
  font-size: 1.05rem;
  font-weight: 600;
  color: #1d1d1f;
  line-height: 1.4;
  letter-spacing: -0.2px;
`;
const ProjectDesc = styled.div`
  font-size: 0.95rem;
  color: #6e6e73;
  margin: 8px 0 12px 0;
  line-height: 1.5;
  font-weight: 400;
`;
const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;
const TechTag = styled.span`
  background: #f5f5f7;
  color: #1d1d1f;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0,0,0,0.06);
`;

const projects = [
  {
    title: 'Info-Ninja: AI-Powered Competitive Intelligence Platform - 3rd Place Winner at MCP Hackathon',
    link: 'https://github.com/1300Sarthak/mcp-hackathon-sf',
    desc: 'Multi-agent AI platform delivering executive-ready competitive intelligence in minutes. Features department-specific analysis (IT, Sales, Marketing, etc.), real-time visualizations with interactive dashboards, Redis caching achieving 90% cost reduction and 600x speed improvement, and Bright Data MCP integration for diverse web scraping across 10+ source types. Built with React, FastAPI, Google Gemini 2.0, LlamaIndex, and enterprise-grade Redis caching with intelligent TTL management.',
    tech: ['Multi-Agent AI', 'MCP', 'LlamaIndex', 'Bright Data', 'Redis', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Google Gemini 2.0', 'Docker', 'SSE'],
  },
  {
    title: 'AI-CAD: Cursor for Architecture',
    link: 'https://github.com/1300Sarthak/AI-CAD',
    desc: '3D web application for architectural design using natural language commands with real-time daylight simulation. Features drag-and-drop block editing with transform controls, AI-powered command parsing via OpenAI GPT-4, live 3D compass navigation with cardinal directions, intelligent grid snapping (0.5m default), AI layout assistant for automatic alignment and spacing, full undo/redo with 50-step history, and real-time sun positioning for shadow simulation. Built with React Three Fiber, Three.js, FastAPI, and Tailwind CSS.',
    tech: ['React', 'Three.js', 'React Three Fiber', 'FastAPI', 'OpenAI GPT-4', 'Vite', 'Tailwind CSS', 'Python', 'TypeScript', 'Pydantic', 'Web Speech API'],
  },
  {
    title: 'Unfiltered LLM - Oracle Cloud Deployed',
    link: 'https://github.com/1300Sarthak/unfilteredllm',
    desc: 'Oracle Cloud deployed large language model with no content filtering or restrictions. Full-stack implementation featuring enterprise cloud infrastructure, unrestricted AI responses, and production-grade deployment on Oracle Cloud infrastructure.',
    tech: ['Oracle Cloud', 'LLM', 'Python', 'Cloud Deployment', 'FastAPI', 'Docker'],
  },
  {
    title: 'SmartQuery',
    link: 'https://github.com/tanzilahmed0/SmartQuery',
    desc: 'SmartQuery is a full-stack application that lets users upload CSV files and query them using natural language. Built with Next.js 14 (TypeScript), Tailwind CSS, and DaisyUI on the frontend, and FastAPI, PostgreSQL, Redis, MinIO, and Celery on the backend. Features include Google OAuth authentication, JWT session management, async CSV processing and schema analysis, robust API client with retry logic, and comprehensive integration testing. The system supports file upload via presigned URLs, automatic schema analysis, and instant data visualization with Recharts. CI/CD is managed with GitHub Actions, and the infrastructure is containerized with Docker Compose.',
    tech: [
      'Next.js 14', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Zustand', 'Recharts', 'Axios', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'MinIO', 'Celery', 'Docker', 'GitHub Actions', 'Google OAuth', 'JWT', 'Vitest', 'Playwright', 'CI/CD'
    ],
  },
  {
    title: 'DataPulse',
    link: 'https://github.com/1300Sarthak/DataPulse',
    desc: 'Real-time dashboard aggregating crypto, stocks, weather, and news in one mobile-friendly interface. Built with React, FastAPI, and Supabase for seamless daily information access.',
    tech: ['React', 'FastAPI', 'TypeScript', 'Redis', 'Supabase', 'Tailwind CSS', 'Docker', 'Chart.js', 'Python', 'PostgreSQL', 'REST API', 'GitHub Actions', 'Redis','Vercel','Render'],
  },
  {
    title: 'GovChat - 1st Place Winner at Microsoft Azure Hackathon for Public Sector',
    link: 'https://youtu.be/9DnK_Y8Fuiw',
    desc: 'MCP and RAG based chatbot',
    tech: ['RAG', 'MCP', 'LLM', 'React.JS', 'Python', 'Django', 'Azure'],
  },
  {
    title: 'SJFit - 2nd Place Winner at Silicon Hacks',
    link: 'https://github.com/1300Sarthak/SJFIT',
    desc: 'Developed an app using MediaPipe for pose estimation and CNNs for joint angle analysis, achieving 20% improvement in form detection. Integrated OpenCV for real-time feedback and NumPy for efficient data handling. Achieved 95% accuracy in tracking exercises like squats and curls, providing real-time performance analysis, won 2nd place at Silicon Hacks for this innovative project.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
  },
  {
    title: 'EmbrAlrt - 2nd Place Public Safety Track Winner at SJHacks',
    link: 'https://github.com/1300Sarthak/EmbrAlrt',
    desc: 'EmbrAlert is a one-stop platform for wildfire detection, prevention, and community alerts, built for the diverse San Jose area and beyond. It offers real-time wildfire risk assessments, live weather and air quality updates, and a simple dashboard for users to interact with. Users can upload images of potential smoke, and our lightweight RNN model predicts wildfire likelihood. The app also features a multilingual chat tool powered by a custom RAG pipeline, supporting six languages common in San Jose, with both voice and text input. Live camera wildfire detection without uploads is also integrated for instant reporting.',
    tech: ['React', 'Python', 'Langchain', 'RAG & CAG', 'Typescript', 'LLM'],
  },
  {
    title: 'Harmony Health',
    link: 'https://github.com/1300Sarthak/HarmonyHealth',
    desc: 'Engineered an AI-powered app using the Hume AI API to analyze vocal tones and facial expressions, tracking emotional patterns and mental health conditions. Integrated an End-to-End Framework for Production-Ready LLM to deliver personalized wellness insights and real-time emotional analysis.',
    tech: ['Python', 'Flask'],
  },
  {
    title: 'Mass Shooting Predictor',
    link: 'https://github.com/1300Sarthak/MassShootingPredictor',
    desc: 'Developed a predictive model to analyze and forecast U.S. gun violence trends, utilizing machine learning algorithms including KNN, Logistic Regression, Decision Trees, and SVMs. Currently working on integrating the Google Maps API to visualize high-risk areas, providing actionable insights for targeted safety interventions.',
    tech: ['Python', 'Machine Learning'],
  },
  {
    title: 'Portfolio Site',
    link: 'https://github.com/1300Sarthak/portfolio',
    desc: 'I made a portfolio site to showcase my projects and skills. I used HTML, CSS, and JavaScript to create the site. Within the site I have a chatbot which uses a custom RAG pipeline to answer questions based on me, and not other random information.',
    tech: ['RAG', 'CAG', 'Python', 'HTML', 'CSS', 'JavaScript', 'Render (Deployment)', 'Supabase (Database)'],
  },
  {
    title: 'Study Group',
    link: 'https://github.com/1300Sarthak/SJSUStudyGroup',
    desc: 'Currently developing a full-stack web application to connect SJSU students for study groups. Using HTML/CSS/JS for the front-end and React.js for dynamic functionality. Progressing towards integrating Firebase for user authentication and database management. The app will feature real-time messaging, course-based group creation, and availability sharing, with a focus on user-friendly design and seamless collaboration. Beta deploying Jan 2025',
    tech: ['HTML5', 'CSS', 'JavaScript', 'Firebase'],
  },
  {
    title: 'Eventify',
    link: 'https://github.com/1300Sarthak/Eventify',
    desc: 'Currently developing a web application using React/Next.js with server-side rendering and state management via Redux. Building a Node.js back-end with RESTful APIs and real-time features using Socket.IO. Optimizing data handling with PostgreSQL and MongoDB to improve performance and reliability. Deploying the application using Docker on AWS. Also, integrating Google Maps API for location-based events, targeting a beta launch in March 2025',
    tech: ['React/Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Redis'],
  },
  {
    title: 'Uzz-ify',
    link: 'https://uzz-converter.vercel.app/',
    desc: 'With words such as "huzz" and "bruzz" becoming words that generations such as Gen Alpha, and Gen Z, use, becoming an integral part of our modern day life. I decided to created a website so that people convert your words,phrases, or even sentences into the lanaguge of a Gen Z/Alpha person.',
    tech: ['HTML5', 'CSS', 'JavaScript'],
  },
  {
    title: 'Amulanssi',
    link: 'https://github.com/1300Sarthak/amulanssi',
    desc: 'Amulanssi is a semi-autonomous, voice-controlled ambulance that responds to basic voice commands and navigates with minimal human intervention. The goal is to make it fully autonomous, allowing users to "call" it for emergency medical assistance. Helping solve the problem of extremely expensive albumance services within the United States.',
    tech: ['Arudino', 'C++'],
  },
  {
    title: 'Slue - 3rd Place Winner at Expo Hacks II',
    link: 'https://github.com/1300Sarthak/Slue',
    desc: 'Slue is an automatic watering solution designed to keep your plants healthy even when you\'re away. By measuring soil moisture and plant nutrients, SLUE waters your plants only when necessary, ensuring optimal care.',
    tech: ['Arudino', 'C++'],
  },
];

const Projects = (props) => (
  <WindowFrame title="Projects" {...props} defaultSize={{ width: 1000, height: 700 }}>
    <Content>
      <SectionTitle>Projects</SectionTitle>
      <SectionSubtitle>A showcase of my development work and achievements • {projects.length} total projects</SectionSubtitle>
      <CardGrid>
        {projects.map((project, i) => (
          <Card key={i} href={project.link} target="_blank" rel="noopener noreferrer">
            <ProjectHeader>
              <ProjectNumber>{i + 1}</ProjectNumber>
              <ProjectTitle>{project.title}</ProjectTitle>
            </ProjectHeader>
            <ProjectDesc>{project.desc}</ProjectDesc>
            <ProjectTech>
              {project.tech.map((t, j) => (
                <TechTag key={j}>{t}</TechTag>
              ))}
            </ProjectTech>
          </Card>
        ))}
      </CardGrid>
    </Content>
  </WindowFrame>
);

export default Projects;
