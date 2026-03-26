import '../styles/projects.css'
import ProjectCard, { Holder, Content, Tags, Tag, CardActions } from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className='section projects-section' id="projects">
      <h2>Projects</h2>
      <Holder>
        <ProjectCard>
          <img src='infia.png' alt='Infia' />
          <Content>
            <h3>Infia</h3>
            <p>Infia does it for you - A seamless integration platform that connects with Google, GitHub, Notion, Slack, and more. One-click OAuth authentication to automate tasks across your favorite tools. Just connect and let Infia handle the rest.</p>
            <Tags>
              <Tag hashtag="better-auth" />
              <Tag hashtag="Nextjs" />
              <Tag hashtag="OpenAI" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://infia.vercel.app" source="https://github.com/qubydev/infia" />
        </ProjectCard>
        <ProjectCard>
          <img src='fullstacksheet.png' alt='Full Stack Sheet' />
          <Content>
            <h3>Full Stack Sheet</h3>
            <p>Master web development from frontend basics to advanced backend concepts. A comprehensive learning roadmap covering 850+ topics across HTML, CSS, JavaScript, React, Next.js, databases, and system architecture with progress tracking.</p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Authjs" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://www.fullstacksheet.tech/" source="https://github.com/qubydev/full-stack-sheet" />
        </ProjectCard>
        <ProjectCard>
          <img src='hotkeys.png' alt='HOTKEYS' />
          <Content>
            <h3>HOTKEYS</h3>
            <p>Learn the keys, kill the 🐀. Master keyboard shortcuts with ease. Discover, learn, and use hotkeys faster than ever. Boost your productivity - No more guessing - No more clicking - Just pure flow.</p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Reactjs" />
              <Tag hashtag="shadcn/ui" />
              <Tag hashtag="MagicUI" />
              <Tag hashtag="TailwindCSS" />
            </Tags>
          </Content>
          <CardActions visit="https://gethotkeys.vercel.app" source="https://github.com/malay77patra/hotkeys" />
        </ProjectCard>
        <ProjectCard>
          <img src='flamecoders.png' alt='Flamecoders' />
          <Content>
            <h3>Flamecoders</h3>
            <p>A full-stack article platform with a rich markdown editor, theme support, and secure JWT-based auth. Designed with scalable, decoupled architecture and production-grade structure for seamless writing, deployment, and user experience.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Mongodb" />
              <Tag hashtag="Express js" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="daisy UI" />
            </Tags>
          </Content>
          <CardActions visit="https://flamecoders.vercel.app/" source="https://github.com/malay77patra/flamecoders-frontend" />
        </ProjectCard>
        <ProjectCard>
          <img src='voidide.png' alt='VoidIDE' />
          <Content>
            <h3>VoidIDE</h3>
            <p>A web-based IDE powered by OneCompiler, tailored for competitive programming and DSA in multiple languages. No installation required—just hit "Run" and start coding!</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="Compiler API" />
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://voidide.vercel.app" source="https://github.com/malay77patra/flameide" />
        </ProjectCard>
        <ProjectCard>
          <img src='url-dino.png' alt='URL Dino' />
          <Content>
            <h3>URL Dino</h3>
            <p>The iconic Chrome dino game, but it lives in your URL bar! A creative twist on the classic endless runner where the game state is encoded directly in the URL. Press space to jump and watch the magic happen in your browser's address bar.</p>
            <Tags>
              <Tag hashtag="JavaScript" />
              <Tag hashtag="Creativity" />
              <Tag hashtag="URL Encoding" />
            </Tags>
          </Content>
          <CardActions visit="https://url-dino.vercel.app/" source="https://github.com/qubydev/url-dino" />
        </ProjectCard>
        <ProjectCard>
          <img src='crackedbadges.png' alt='Cracked Badges' />
          <Content>
            <h3>Cracked Badges</h3>
            <p>Generate stunning cracked badges for your LinkedIn, Twitter, Instagram, and other social profiles. Inspired by LinkedIn's "Open to Work" badge, customize colors, text, and backgrounds to create eye-catching profile badges that stand out.</p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Canvas API" />
              <Tag hashtag="Design Tool" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://crackedbadges.vercel.app/" source="https://github.com/qubydev/cracked-badges" />
        </ProjectCard>
        <ProjectCard>
          <img src='malay-patrav1.png' alt='Portfolio v1' />
          <Content>
            <h3>Malay Patra, Portfolio v1</h3>
            <p>This is the first version of my personal portfolio website. It showcases my skills, projects, and experiences as a web developer. The portfolio is designed to be visually appealing and easy to navigate, providing a detailed introduction about myself.</p>
            <Tags>
              <Tag hashtag="React" />
              <Tag hashtag="React-Scroll" />
            </Tags>
          </Content>
          <CardActions visit="https://malaypatra.vercel.app/" source="https://github.com/malay77patra/portfolio" />
        </ProjectCard>
      </Holder>
    </div>
  )
}
