import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaMusic, FaDumbbell, FaGamepad, FaWalking, FaBullseye, FaSpotify } from 'react-icons/fa';

const Content = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  padding: 0;
  height: 100%;
  overflow-y: auto;
`;

const RoomContainer = styled.div`
  min-height: 100%;
  padding: 48px;
  background: 
    radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, rgba(15, 12, 41, 0.95) 0%, rgba(48, 43, 99, 0.95) 50%, rgba(36, 36, 62, 0.95) 100%);
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0 0 16px 0;
  text-align: center;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin: 0 0 48px 0;
  font-weight: 400;
`;

const Section = styled.div`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const MusicCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const MusicCategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SpotifyEmbed = styled.iframe`
  border-radius: 12px;
  width: 100%;
  height: 152px;
  border: none;
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SpotifyLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #1DB954;
  color: white;
  padding: 12px 24px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(29, 185, 84, 0.3);
  margin-top: 16px;
  &:hover {
    background: #1ed760;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(29, 185, 84, 0.4);
  }
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const GameCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  }
`;

const GameImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.bg || '#1d1d1f'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%);
  }
`;

const GameTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  padding: 16px;
  text-align: center;
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;

const HobbyCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  }
`;

const HobbyIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.color || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px ${props => props.shadowColor || 'rgba(102, 126, 234, 0.4)'};
`;

const HobbyTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0 0 8px 0;
`;

const HobbyDesc = styled.p`
  font-size: 0.95rem;
  color: #6e6e73;
  margin: 0;
  line-height: 1.5;
`;

const GoalCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(255, 215, 0, 0.6);
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
`;

const GoalEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 16px;
`;

const GoalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1d1d1f;
  margin: 0 0 12px 0;
`;

const GoalText = styled.p`
  font-size: 1.2rem;
  color: #6e6e73;
  margin: 0;
  font-weight: 500;
`;

const Personal = (props) => (
  <WindowFrame title="Personal Space" {...props} defaultSize={{ width: 1200, height: 800 }}>
    <Content>
      <RoomContainer>
        <PageTitle>My Personal Space 🎨</PageTitle>
        <Subtitle>The real me beyond the terminal</Subtitle>

        {/* Music Section */}
        <Section>
          <SectionTitle>
            <FaMusic /> Music I Vibe To
          </SectionTitle>
          <MusicGrid>
            <MusicCard>
              <MusicCategoryTitle>🇮🇳 Hindi/Punjabi Hits</MusicCategoryTitle>
              <SpotifyEmbed 
                src="https://open.spotify.com/embed/track/2FFcfGuCTpQRUB5QZMuGNa?utm_source=generator&theme=0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </MusicCard>
            <MusicCard>
              <MusicCategoryTitle>🎵 English Favorites</MusicCategoryTitle>
              <SpotifyEmbed 
                src="https://open.spotify.com/embed/track/2FFcfGuCTpQRUB5QZMuGNa?utm_source=generator&theme=0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              <SpotifyEmbed 
                src="https://open.spotify.com/embed/track/0hrBpAOgrt8RXigk83LcVP?utm_source=generator&theme=0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </MusicCard>
          </MusicGrid>
          <div style={{ textAlign: 'center' }}>
            <SpotifyLink href="https://open.spotify.com/user/f7zsgys3n5sg86bla65l56xbo?si=537bafac377f4d20" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={20} /> Check Out My Full Spotify Profile
            </SpotifyLink>
          </div>
        </Section>

        {/* Games Section */}
        <Section>
          <SectionTitle>
            <FaGamepad /> Games I Play
          </SectionTitle>
          <GamesGrid>
            <GameCard>
              <GameImage bg="linear-gradient(135deg, #00D4FF 0%, #0099CC 100%)">
                <span style={{ position: 'relative', zIndex: 1 }}>🎈</span>
              </GameImage>
              <GameTitle>Bloons TD 6</GameTitle>
            </GameCard>
            <GameCard>
              <GameImage bg="linear-gradient(135deg, #8B4513 0%, #654321 100%)">
                <span style={{ position: 'relative', zIndex: 1 }}>⛏️</span>
              </GameImage>
              <GameTitle>Minecraft</GameTitle>
            </GameCard>
            <GameCard>
              <GameImage bg="linear-gradient(135deg, #7B68EE 0%, #483D8B 100%)">
                <span style={{ position: 'relative', zIndex: 1 }}>🏗️</span>
              </GameImage>
              <GameTitle>Fortnite</GameTitle>
            </GameCard>
            <GameCard>
              <GameImage bg="linear-gradient(135deg, #32CD32 0%, #228B22 100%)">
                <span style={{ position: 'relative', zIndex: 1 }}>🚗</span>
              </GameImage>
              <GameTitle>GTA V</GameTitle>
            </GameCard>
          </GamesGrid>
        </Section>

        {/* Hobbies Section */}
        <Section>
          <SectionTitle>
            Hobbies
          </SectionTitle>
          <HobbiesGrid>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" shadowColor="rgba(102, 126, 234, 0.4)">
                💻
              </HobbyIcon>
              <HobbyTitle>CS Related Stuff</HobbyTitle>
              <HobbyDesc>Coding, hackathons, building cool projects</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #fa709a 0%, #fee140 100%)" shadowColor="rgba(250, 112, 154, 0.4)">
                <FaDumbbell />
              </HobbyIcon>
              <HobbyTitle>Gym</HobbyTitle>
              <HobbyDesc>Gainz season never stops 💪</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" shadowColor="rgba(79, 172, 254, 0.4)">
                🏊
              </HobbyIcon>
              <HobbyTitle>Swimming</HobbyTitle>
              <HobbyDesc>Best cardio and full-body workout</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" shadowColor="rgba(67, 233, 123, 0.4)">
                🥾
              </HobbyIcon>
              <HobbyTitle>Hiking</HobbyTitle>
              <HobbyDesc>Exploring trails and nature</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" shadowColor="rgba(240, 147, 251, 0.4)">
                <FaGamepad />
              </HobbyIcon>
              <HobbyTitle>Gaming</HobbyTitle>
              <HobbyDesc>Relaxing with friends online</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" shadowColor="rgba(79, 172, 254, 0.4)">
                <FaWalking />
              </HobbyIcon>
              <HobbyTitle>Walking</HobbyTitle>
              <HobbyDesc>Clearing my head, one step at a time</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #fa709a 0%, #fee140 100%)" shadowColor="rgba(250, 112, 154, 0.4)">
                📈
              </HobbyIcon>
              <HobbyTitle>Self Improvement</HobbyTitle>
              <HobbyDesc>Always leveling up mentally & physically</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" shadowColor="rgba(102, 126, 234, 0.4)">
                🧬
              </HobbyIcon>
              <HobbyTitle>Bio-Hacking</HobbyTitle>
              <HobbyDesc>Research purposes, optimizing health</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" shadowColor="rgba(240, 147, 251, 0.4)">
                📱
              </HobbyIcon>
              <HobbyTitle>Doomscrolling</HobbyTitle>
              <HobbyDesc>Let's be honest, we all do it</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" shadowColor="rgba(255, 236, 210, 0.4)">
                🏛️
              </HobbyIcon>
              <HobbyTitle>History</HobbyTitle>
              <HobbyDesc>Learning from the past</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" shadowColor="rgba(168, 237, 234, 0.4)">
                💡
              </HobbyIcon>
              <HobbyTitle>Fun Facts</HobbyTitle>
              <HobbyDesc>Random knowledge is the best knowledge</HobbyDesc>
            </HobbyCard>
            <HobbyCard>
              <HobbyIcon color="linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" shadowColor="rgba(255, 154, 158, 0.4)">
                🧠
              </HobbyIcon>
              <HobbyTitle>Gaining Knowledge</HobbyTitle>
              <HobbyDesc>Never stop learning new things</HobbyDesc>
            </HobbyCard>
          </HobbiesGrid>
        </Section>

        {/* Goals Section */}
        <Section>
          <SectionTitle>
            <FaBullseye /> Personal Goals
          </SectionTitle>
          <GoalCard>
            <GoalEmoji>💪🏋️</GoalEmoji>
            <GoalTitle>Getting Jacked</GoalTitle>
            <GoalText>NGL, that's the main goal right now 😤</GoalText>
          </GoalCard>
        </Section>
      </RoomContainer>
    </Content>
  </WindowFrame>
);

export default Personal;

