import bgImg from "/bgimg.jpg"
import { motion } from "framer-motion";

const Hero = () => {

    const heroText = "A self taught Web Developer.".split(" ")
  return (
    <div style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover"
    }} className='w-full h-[70vh] md:text-[50px] text-[40px] poppins-regular dark:text-white text-white bg-slate-500'>
        <p>Hello, I&apos;m Amaan Hussain,</p>
        <div>{heroText.map((text, i) => (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.25,
                    delay: i / 10,
                }}
                key={i}
            >
                {text}{" "}
            </motion.span>
        ))}</div>
    </div>
  )
}

export default Hero