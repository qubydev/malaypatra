import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import Toggle from '../components/Toggle';
import '../styles/Skills.css'
import { useCursor } from '../hooks/useCursor';

export default function Skills() {
    const [playMode, setPlayMode] = useState(false);
    const { hasCursor } = useCursor();

    const handleToggle = () => {
        setPlayMode(!playMode);
    }

    return (
        <div className='skills-section section' id="skills">
            <div className='skills-header'>
                <h2>Skills</h2>
                <div style={{
                    flex: 1
                }}></div>
                {hasCursor && (
                    <div className='play-mode'>
                        <p>Play mode</p>
                        <Toggle value={playMode} onToggle={handleToggle} />
                    </div>
                )}
            </div>
            {playMode && (
                <p className='play-info'>
                    <i>move your cursor over the items quickly to see satisfying color animation.</i>
                </p>
            )}

            <SkillCard heading='Frontend' hcolor="#FF6F61" skills={[
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'shadcn/ui', 'icon': 'https://simpleicons.org/icons/shadcnui.svg' },
            ]} playMode={playMode} />

            <SkillCard heading='Backend' hcolor="#6A5ACD" skills={[
                { 'name': 'Node.js', 'icon': 'nodejs' },
                { 'name': 'Express', 'icon': 'express' },
                { 'name': 'Next.js', 'icon': 'nextjs' },
                { 'name': 'Supabase', 'icon': 'supabase' },
                { 'name': 'Flask', 'icon': 'flask' },
                { 'name': 'REST APIs', 'icon': 'postman' },
            ]} playMode={playMode} />

            <SkillCard heading='Databases' hcolor="#FFB400" skills={[
                { 'name': 'MongoDB', 'icon': 'mongodb' },
                { 'name': 'PostgreSQL', 'icon': 'postgresql' },
            ]} playMode={playMode} />

            <SkillCard heading='Languages' hcolor="#4CAF50" skills={[
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'C++', 'icon': 'cplusplus' },
            ]} playMode={playMode} />

            <SkillCard heading='Tools' hcolor="#00BFFF" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'GitHub', 'icon': 'github' },
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Vercel', 'icon': 'vercel' },
                { 'name': 'Figma', 'icon': 'figma' },
            ]} playMode={playMode} />

            <SkillCard heading='Extras' hcolor="#FF69B4" skills={[
                { 'name': 'Selenium', 'icon': 'selenium' },
                { 'name': 'Web Scraping', 'icon': 'https://simpleicons.org/icons/chromewebstore.svg' },
                { 'name': 'OpenAI', 'icon': 'https://logo.svgcdn.com/logos/openai-icon.svg' },
                { 'name': 'HuggingFace', 'icon': 'https://simpleicons.org/icons/huggingface.svg' },
                { 'name': 'Gemini', 'icon': 'https://simpleicons.org/icons/googlegemini.svg' },
            ]} playMode={playMode} />
        </div>
    )
}
