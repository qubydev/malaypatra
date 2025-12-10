import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div className='about-section section' id="about">
      <h2>About</h2>
      <p>
        I'm <span className="hl">Malay Patra</span>, an undergraduate (2028) engineering student at <a href="https://jadavpuruniversity.in">Jadavpur University</a>. I am passionate about building dynamic and efficient web applications with the <span className="hl">MERN stack</span>. As a self-taught developer, I am constantly exploring new technologies to sharpen my skills.
      </p>
      <p>
        In 2023, I began my freelancing journey on <span className="hl">Upwork</span>, collaborating with clients before pausing in mid-2024 to focus on advancing my technical expertise and balancing my engineering academics. I have also gained hands-on experience working with <span className="hl">startups</span>, contributing to real-world projects and production environments.
      </p>
      <p>
        Currently, I am actively seeking a <span className="hl">full-stack web developer</span> role where I can apply my skills, grow professionally, and build impactful digital solutions
      </p>
      <p>Let’s build something great! ✨</p>
      <a href="https://drive.google.com/file/d/1y6b5iGTslsp1Ha9gmsb4X0XKTd3icEZj/view?usp=sharing" target='_blank'>
        <Button1>
          <SvgIcon icon={Pdf} />
          Resume
        </Button1>
      </a>
    </div>
  )
}
