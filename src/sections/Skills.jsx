import { useState } from 'react'
import SkillCard from '../components/SkillCard'
import Toggle from '../components/Toggle';
import '../styles/Skills.css'
import { useCursor } from '../hooks/useCursor';
import { IoMdInformationCircleOutline } from "react-icons/io";

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
                    <IoMdInformationCircleOutline />
                    <i>move your cursor over the items quickly to see satisfying color animation.</i>
                </p>
            )}

            <SkillCard heading='Languages' hcolor="#4CAF50" skills={[
                { 'name': 'Python', 'icon': 'python' },
                { 'name': 'C++', 'icon': 'cplusplus' },
                { 'name': 'JavaScript', 'icon': 'javascript' },
                { 'name': 'TypeScript', 'icon': 'typescript' },
                { 'name': 'SQL', 'icon': 'mysql' },
            ]} playMode={playMode} />

            <SkillCard heading='Frontend' hcolor="#FF6F61" skills={[
                { 'name': 'React', 'icon': 'react' },
                { 'name': 'Tailwind CSS', 'icon': 'tailwindcss' },
                { 'name': 'shadcn/ui', 'icon': 'https://simpleicons.org/icons/shadcnui.svg' },
                { 'name': 'HTML', 'icon': 'html5' },
                { 'name': 'CSS', 'icon': 'css3' },
            ]} playMode={playMode} />

            <SkillCard heading='Backend' hcolor="#6A5ACD" skills={[
                { 'name': 'Next.js', 'icon': 'nextjs' },
                { 'name': 'Express', 'icon': 'express' },
                { 'name': 'Supabase', 'icon': 'supabase' },
                { 'name': 'Flask', 'icon': 'flask' },
            ]} playMode={playMode} />

            <SkillCard heading='Databases' hcolor="#FFB400" skills={[
                { 'name': 'MongoDB', 'icon': 'mongodb' },
                { 'name': 'PostgreSQL', 'icon': 'postgresql' },
            ]} playMode={playMode} />


            <SkillCard heading='Tools' hcolor="#00BFFF" skills={[
                { 'name': 'Git', 'icon': 'git' },
                { 'name': 'VS Code', 'icon': 'vscode' },
                { 'name': 'Postman', 'icon': 'postman' },
                { 'name': 'Figma', 'icon': 'figma' },
            ]} playMode={playMode} />

            <SkillCard heading='Extras' hcolor="#FF69B4" skills={[
                { 'name': 'LangChain', 'icon': 'https://simpleicons.org/icons/langchain.svg' },
                { 'name': 'LangGraph', 'icon': 'https://simpleicons.org/icons/langgraph.svg' },
                { 'name': 'Selenium', 'icon': 'selenium' }
            ]} playMode={playMode} />
        </div>
    )
}
