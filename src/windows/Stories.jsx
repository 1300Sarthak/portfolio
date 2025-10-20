import React, { useState } from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaChevronDown, FaChevronUp, FaLightbulb, FaRocket, FaTrophy, FaHeart } from 'react-icons/fa';

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

const StoriesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StoryCard = styled.div`
  background: rgba(255,255,255,0.95);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  overflow: hidden;
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  }
`;

const StoryHeader = styled.div`
  background: linear-gradient(135deg, #007AFF, #5856D6);
  color: white;
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StoryHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StoryIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const StoryHeaderText = styled.div``;

const StoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 4px 0;
`;

const StorySubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
`;

const ExpandIcon = styled.div`
  font-size: 1.2rem;
  transition: transform 0.2s ease;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const StoryContent = styled.div`
  max-height: ${props => props.expanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => props.expanded ? '24px' : '0 24px'};
`;

const StoryText = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: #444;
  margin-bottom: 20px;
  
  p {
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  strong {
    color: #1d1d1f;
    font-weight: 600;
  }
`;

const StoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const StoryTag = styled.span`
  background: #f2f2f7;
  color: #333;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e5e5e7;
`;

const stories = [
  {
    id: 'hackathon-journey',
    title: 'My Hackathon Journey',
    subtitle: '5 wins across different competitions',
    icon: <FaTrophy />,
    content: `
      <p><strong>From First-Timer to 5x Winner</strong></p>
      
      <p>My hackathon journey started with curiosity and has become one of the most rewarding aspects of my tech career. What began as a way to challenge myself has led to 5 competition wins and countless learning experiences.</p>
      
      <p><strong>The Microsoft Azure Hackathon Win</strong> was particularly special. We built a government AI assistant using RAG and MCP technologies, focusing on streamlining citizen services. The 48-hour sprint taught me the importance of rapid prototyping and user-centered design. Seeing our solution potentially impact real government workflows was incredibly motivating.</p>
      
      <p>At <strong>SJHacks</strong>, our EmbrAlert wildfire detection platform earned 2nd place in the Public Safety track. We integrated real-time weather data, machine learning models for risk assessment, and multilingual support for diverse communities. This project showed me how technology can directly address community safety challenges.</p>
      
      <p>Each hackathon has been a masterclass in collaboration, time management, and creative problem-solving. The pressure of limited time forces you to focus on what truly matters, while the diverse team dynamics teach you to leverage everyone's strengths effectively.</p>
      
      <p><strong>Key Lessons:</strong> Think big, start small, iterate fast. The best solutions often come from understanding the human problem first, then applying the right technology to solve it.</p>
    `,
    tags: ['Hackathons', 'AI/ML', 'Team Leadership', 'Rapid Prototyping', 'Problem Solving']
  },
  {
    id: 'research-experience',
    title: 'AI Research at MICoSys Lab',
    subtitle: 'Exploring LLM safety and adversarial attacks',
    icon: <FaLightbulb />,
    content: `
      <p><strong>Diving Deep into LLM Safety Research</strong></p>
      
      <p>Working at the MICoSys Lab has been an incredible journey into the cutting-edge world of AI safety research. Under Dr. Sengupta's guidance, I've been exploring one of the most critical challenges in AI today: making large language models more robust against adversarial attacks.</p>
      
      <p><strong>The Challenge:</strong> As LLMs become more powerful and widespread, understanding their vulnerabilities becomes crucial. We're investigating how these models can be "jailbroken" and how fine-tuning affects their robustness and alignment with human values.</p>
      
      <p>My work involves designing sophisticated jailbreak tests, fine-tuning LLaMA models with LoRA adapters, and analyzing the delta weights to understand what the model is actually learning. It's fascinating to see how small changes in the training process can significantly impact model behavior.</p>
      
      <p><strong>The "Aha" Moment:</strong> Discovering that certain LoRA adapter modifications could help models "unlearn" problematic behaviors while maintaining their useful capabilities. This research has real implications for making AI systems safer and more aligned with human intentions.</p>
      
      <p>This experience has taught me that research is as much about asking the right questions as it is about finding answers. Every experiment opens up three new questions, and that's the beauty of pushing the boundaries of knowledge.</p>
    `,
    tags: ['AI Research', 'LLM Safety', 'Fine-tuning', 'Adversarial ML', 'Academic Research']
  },
  {
    id: 'gilead-internship',
    title: 'Building AI Solutions at Gilead Sciences',
    subtitle: 'From intern to impact in pharmaceutical tech',
    icon: <FaRocket />,
    content: `
      <p><strong>Making Real Impact in Pharmaceutical Technology</strong></p>
      
      <p>My internship at Gilead Sciences was a transformative experience where I got to see how AI can revolutionize enterprise operations. Working on cutting-edge projects in a Fortune 500 pharmaceutical company showed me the scale and complexity of real-world tech challenges.</p>
      
      <p><strong>The MCP AI Agent Project</strong> was my flagship contribution. We built an intelligent agent that integrated with the company's intranet to handle IAM (Identity and Access Management) queries. The impact was immediate and measurable: a 37% reduction in support tickets and much faster resolution times for employees.</p>
      
      <p>But the technical challenge that really pushed me was the <strong>Oracle database migration project</strong>. Moving 20,000+ records while ensuring data integrity, building secure APIs, and creating Power BI dashboards with row-level security taught me about enterprise-scale data engineering. Seeing our solution cut reporting cycles by 60% was incredibly rewarding.</p>
      
      <p><strong>The Learning Curve:</strong> Working in a highly regulated pharmaceutical environment taught me about compliance, security, and the importance of thorough testing. Every line of code had to meet strict standards, and the CI/CD pipeline we implemented caught 15+ high-risk defects before they could impact users.</p>
      
      <p>This internship showed me that the best technology solutions don't just work—they make people's jobs easier and more meaningful. That's the kind of impact I want to create in my career.</p>
    `,
    tags: ['Enterprise AI', 'Data Engineering', 'Oracle', 'Power BI', 'Pharmaceutical Tech']
  },
  {
    id: 'leadership-growth',
    title: 'Leadership Through Service',
    subtitle: 'From RA to club leadership roles',
    icon: <FaHeart />,
    content: `
      <p><strong>Learning to Lead by Serving Others</strong></p>
      
      <p>My leadership journey began with becoming a Resident Assistant, and it's been one of the most personally rewarding aspects of my college experience. Being responsible for the wellbeing and community building of fellow students taught me that true leadership is about service, not authority.</p>
      
      <p><strong>Crisis Management Lessons:</strong> As an RA, you're often the first responder to student crises—from academic stress to personal emergencies. These experiences taught me to stay calm under pressure, listen actively, and connect people with the right resources. Every situation was a lesson in empathy and problem-solving.</p>
      
      <p>Transitioning to roles like <strong>Director of Outreach</strong> and <strong>Data Analytics Lead</strong> allowed me to apply these interpersonal skills to organizational challenges. Leading data analytics initiatives across multiple projects taught me how to translate technical insights into actionable strategies for student engagement.</p>
      
      <p><strong>The Social Media Chair Experience</strong> was particularly interesting—managing digital communities for both student organizations and Greek life showed me how different audiences require different communication strategies. Growing engagement while maintaining authentic community connection is both an art and a science.</p>
      
      <p>What I've learned is that leadership isn't about having all the answers—it's about asking the right questions, empowering others to contribute their best, and creating environments where everyone can thrive. Whether it's organizing community programs or building data dashboards, the goal is always to serve the community better.</p>
    `,
    tags: ['Leadership', 'Community Building', 'Crisis Management', 'Data Analytics', 'Student Life']
  }
];

const Stories = (props) => {
  const [expandedStories, setExpandedStories] = useState(new Set());

  const toggleStory = (storyId) => {
    const newExpanded = new Set(expandedStories);
    if (newExpanded.has(storyId)) {
      newExpanded.delete(storyId);
    } else {
      newExpanded.add(storyId);
    }
    setExpandedStories(newExpanded);
  };

  return (
    <WindowFrame title="My Stories" {...props} defaultSize={{ width: 1000, height: 800 }}>
      <Content>
        <SectionTitle>My Stories & Experiences</SectionTitle>
        <SectionSubtitle>Personal narratives and insights from my journey</SectionSubtitle>
        <StoriesGrid>
          {stories.map((story) => (
            <StoryCard key={story.id}>
              <StoryHeader onClick={() => toggleStory(story.id)}>
                <StoryHeaderContent>
                  <StoryIcon>{story.icon}</StoryIcon>
                  <StoryHeaderText>
                    <StoryTitle>{story.title}</StoryTitle>
                    <StorySubtitle>{story.subtitle}</StorySubtitle>
                  </StoryHeaderText>
                </StoryHeaderContent>
                <ExpandIcon expanded={expandedStories.has(story.id)}>
                  <FaChevronDown />
                </ExpandIcon>
              </StoryHeader>
              <StoryContent expanded={expandedStories.has(story.id)}>
                <StoryText dangerouslySetInnerHTML={{ __html: story.content }} />
                <StoryTags>
                  {story.tags.map((tag, j) => (
                    <StoryTag key={j}>{tag}</StoryTag>
                  ))}
                </StoryTags>
              </StoryContent>
            </StoryCard>
          ))}
        </StoriesGrid>
      </Content>
    </WindowFrame>
  );
};

export default Stories;
