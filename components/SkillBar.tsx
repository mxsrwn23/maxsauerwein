export default function SkillBar({name, level}:{name:string, level:number}){
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className="text-white/60">{level}%</span>
      </div>
      <div className="h-2 bg-base-700 rounded-full mt-2">
        <div className="h-2 rounded-full bg-accent-500" style={{width: `${level}%`}} />
      </div>
    </div>
  )
}
