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
            <p>Connect apps like Google, GitHub, and Slack with one-click OAuth to automate workflows.</p>
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
            <p>A structured roadmap to learn full-stack development with 850+ topics and progress tracking.</p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="Authjs" />
              <Tag hashtag="Tailwind Css" />
            </Tags>
          </Content>
          <CardActions visit="https://www.fullstacksheet.tech/" source="https://github.com/qubydev/full-stack-sheet" />
        </ProjectCard>
        <ProjectCard>
          <img src='logocat.png' alt='Logocat' />
          <Content>
            <h3>Logocat</h3>
            <p>Instantly fetch logos from any website using smart fallbacks like favicon, Open Graph, and meta tags.</p>
            <Tags>
              <Tag hashtag="Nextjs" />
              <Tag hashtag="better-auth" />
              <Tag hashtag="Tailwind Css" />
              <Tag hashtag="langchain" />
            </Tags>
          </Content>
          <CardActions visit="https://logocat.vercel.app" source="https://github.com/qubydev/logocat" />
        </ProjectCard>
        <ProjectCard>
          <img src='hotkeys.png' alt='HOTKEYS' />
          <Content>
            <h3>HOTKEYS</h3>
            <p>Learn and master keyboard shortcuts to boost productivity and stay in flow.</p>
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
            <p>A full-stack blogging platform with markdown editing, auth, and scalable architecture.</p>
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
            <p>A browser-based IDE for coding and running programs instantly in multiple languages.</p>
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
            <p>A fun Chrome dino game that runs entirely inside your browser’s URL bar.</p>
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
            <p>Create custom social media badges with unique styles inspired by “Open to Work”.</p>
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
            <p>My first portfolio showcasing projects, skills, and experience as a web developer.</p>
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