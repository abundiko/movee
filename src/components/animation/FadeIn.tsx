"use client"

import {HTMLMotionProps, motion} from 'framer-motion'

export type FadeInProps = HTMLMotionProps<'div'> & {
    once?: boolean;
}

const _animate = {
    opacity: 1,
    y: 0,
}
const _initial = {
    opacity: 0,
    y: 30,
}

export default function FadeIn({animate, exit, initial, transition, once, children, ...props}:FadeInProps){
    
    return (
        <motion.div {...props} 
        whileInView={_animate}
            initial={initial ?? _initial}
            // animate={animate ?? _animate}
            exit={exit ?? _initial}
            transition={transition ?? {duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}