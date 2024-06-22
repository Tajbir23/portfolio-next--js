import { TypewriterEffectSmooth } from "./ui/typewriter-effect"


const TypeWriter = () => {
    const words = [
        {
            text: "Tajbir islam"
        }
    ]
  return (
    <TypewriterEffectSmooth words={words} />
  )
}

export default TypeWriter