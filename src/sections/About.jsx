import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';
import TechBadge from '../components/TechBadge';
import '../styles/about.css';

export default function About() {


  return (
    <div className='about-section section' id="about">
      <h2>About</h2>
      <p>
        I'm <span className='hl'>Malay Patra</span>, a <span className='hl'>Full-Stack developer</span> & <span className='hl'>Agentic AI</span> enthusiast. I build web apps using <TechBadge tech="ts" />, <TechBadge tech="react" />, <TechBadge tech="next" /> and <TechBadge tech="tailwind" />, while also having a keen interest in building agentic AI solutions using <TechBadge tech="langchain" />.
      </p>
      <p>
        Being good at <TechBadge tech="figma" /> gives me an edgge in UI/UX design, I also draw small doodles sometimes.
      </p>
      <p>
        In short, <br /> → "I create full stack solutions to the problems I face in my daily development journey"
      </p>
      <p>Let’s build something great! ✨</p>
      <a href="https://drive.google.com/file/d/1ndeSxjR6InKTRdrs69jDwf1PTqHN_JSt/view?usp=drive_link" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
