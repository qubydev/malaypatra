import IconCloud from '../components/IconCloud'
import { ThemeContext } from "../context/ThemeContext"
import { useEffect, useState, useContext } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim";
import { particleNasaTheme } from '../utils/utils'
import Sparkles from '../components/Sparkles'
import '../styles/home.css'
import Pfp from '../assets/pfp.jpg'
import SpaceBg from '../components/SpaceBg';



export default function Home() {
    const { theme, _ } = useContext(ThemeContext);
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            <div className="hero-container">
                <div className='hero-1'>
                    <IconCloud />
                </div>
                <div className='hero-2'>
                    <div>
                        <div className='pf-info'>
                            <div className='malay-img-cont'>
                                <img src={Pfp} alt="Malay" className='malay-img' />
                            </div>
                            <div>
                                <span className='country-badge'>📍India</span>
                                <p className='name'>Hi, I'm Malay<span className="wave">👋</span></p>
                            </div>
                        </div>
                        <div>
                            <Sparkles scale={1.5} color="#FDBC01">
                                <h1 className='highlight-txt'>FULLSTACK</h1>
                                <h1><span>DEVELOPER</span> &</h1>
                                <h1><span className='highlight-txt'>AGENTIC AI</span></h1>
                            </Sparkles>
                        </div>
                    </div>
                </div>

                <div id="space-container" className='space-container'>
                    <SpaceBg />
                    {init && (
                        <Particles
                            id="tsparticles"
                            options={particleNasaTheme(theme)}
                        />
                    )}
                </div>

            </div>
        </>
    )
}