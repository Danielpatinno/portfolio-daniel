import { IconType } from "react-icons"

interface SkilsContainerProps {
  title: string
  Icon: IconType
}

export function Skilscontainer({
  title,
  Icon
}:SkilsContainerProps) {
  return (
    <div>
      <div className="border-2 h-32 flex flex-col items-center justify-center hover:text-primary">
        <Icon size={80}/>
        <p>{title}</p>
      </div>      
    </div>
  )
}
