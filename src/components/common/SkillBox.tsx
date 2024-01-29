import React from 'react'

type Props = {
    title : string;
    icon : React.ReactNode;
    style : boolean;
}

function SkillBox({title, icon, style} : Props) {
  return (
    <div className={`w-56 h-56 px-12 py-5 ${style === true ? 'bg-zinc-200' : 'bg-zinc-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'} flex-col justify-start items-center gap-6 inline-flex`}>
        <div className={`font-bold text-xl ${style && 'text-zinc-400'}`}>{title}</div>
        <div className={`text-[100px] ${style && 'text-zinc-400'}`}>{icon}</div>
    </div>
    
  )
}

export default SkillBox