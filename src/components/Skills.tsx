import React from 'react'
import SkillBox from './common/SkillBox'
import { SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiSwr,SiRedux, SiFigma, SiTailwindcss } from 'react-icons/si'



const skills = [
    {title : "React", icon : <SiReact/>, style : true},
    {title : "Next.js", icon : <SiNextdotjs/>, style : false},
    {title : "JavaScript", icon : <SiJavascript/>, style : true},
    {title : "TypeScript", icon : <SiTypescript/>, style : false},
    {title : "SWR", icon : <SiSwr/>, style : false},
    {title : "Redux", icon : <SiRedux/>, style : true},
    {title : "Figma", icon : <SiFigma/>, style : false},
    {title : "Tailwind CSS", icon : <SiTailwindcss/>, style : true},
]
function Skills() {
  return (
    <section className='w-full flex justify-center'>
        <div className='flex items-center justify-center gap-10 flex-wrap w-[1200px]'>
            {skills.map((skill) => <SkillBox title={skill.title} icon={skill.icon} style={skill.style} key={skill.title}/>)}
        </div>
    </section>
  )
}

export default Skills