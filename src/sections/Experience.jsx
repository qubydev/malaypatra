import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import Internship from '../assets/internship.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Upwork from '../assets/icons/upwork.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'
import Souloxy from '../assets/souloxy.png'

export default function Experience() {
    return (
        <div className='experience-section section' style={{ paddingBottom: '0' }} id="experience">
            <h2>Work Experience</h2>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Internships</h3>
                    <p>Gained hands-on experience through internship by contributing to real-world projects, implementing features, fixing bugs, and optimizing workflows. Collaborated with team members to deliver solutions and improve overall project quality.</p>
                    <Timeline>
                        <TimelineItem icon={Souloxy} color="rgb(223, 109, 20)" to="https://www.linkedin.com/posts/qubydev_internship-jobs-remotejobs-activity-7348456010967044096-rSzK">
                            <h4>Souloxy</h4>
                            <TimeStamp stamp="2024" />
                            <p>Worked as a Full Stack Web Developer using the MERN stack. During this internship, I gained hands-on experience in working with production environments, writing and executing test cases, and creating documentation.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Internship />
                </div>
            </div>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Freelancing</h3>
                    <p>For the past 1.5 years, I have been working as a freelancer, specializing in web APIs and automation solutions. This journey has provided me with valuable real-world problem-solving experience through collaborations with diverse individuals and teams.</p>
                    <Timeline>
                        <TimelineItem icon={<Upwork />} color="#6fda44" to="https://www.upwork.com/freelancers/~013f6c37770776680c?mp_source=share">
                            <h4>API & Automation Expert, Upwork</h4>
                            <TimeStamp stamp="2023 - 2024" />
                            <p>Specialized in creating automated solutions & web APIs, while crafting modern web interfaces for the tools.</p>
                        </TimelineItem>
                        <TimelineItem icon={<img src={Vinoai} />} color="#d4a7b4" bgColor="white" to="https://www.vino-app.com/">
                            <h4>Automation Developer, Vino.ai</h4>
                            <TimeStamp stamp="2023, Feb" />
                            <p>Built an automated documentation generator for input git repo integrating Openai, GPT-4 model.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Open Source Contribution</h3>
                    <p>Actively contributed to open-source projects by developing new features, resolving issues, and enhancing documentation. Engaged with the community through code reviews and discussions to drive improvements.</p>
                    <div className="repo-list">
                        <a href="https://github.com/Ripple-TS/ripple" target="_blank" rel="noopener noreferrer" className="repo-button">
                            <Github />
                            Ripple-TS/ripple
                        </a>
                        <a href="https://github.com/al1abb/invoify" target="_blank" rel="noopener noreferrer" className="repo-button">
                            <Github />
                            al1abb/invoify
                        </a>
                    </div>
                    <Timeline>
                        <TimelineItem icon={<Github />} color="#5f5f5fff" to="https://github.com/qubydev">
                            <h4>Github</h4>
                            <TimeStamp stamp="2022 - now" />
                            <p>Contributed to repositories, collaborating on code, issues, and pull requests.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Opensource />
                </div>
            </div>
        </div>
    )
}
