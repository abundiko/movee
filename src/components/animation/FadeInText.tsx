'use client'

import { motion } from 'framer-motion';
import { useIntersection } from 'react-use';
import { Fragment, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { splitStringToNestedArrays } from '@/functions/helpers';

export type FadeInTextProps = HTMLAttributes<HTMLSpanElement> & {
    children: string;
    start?: number;
    letterDuration?: number;
    after?: ReactNode;
}

export default function FadeInText({ children, start = 0, letterDuration = 0.02, className = '', after }: FadeInTextProps) {
    const [animate, setAnimate] = useState(false);
    const items = splitStringToNestedArrays(children);
    const ref = useRef(null);
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: '80px',
        threshold: 1
    });

    useEffect(() => {
        if (animate) return;
        if (intersection?.isIntersecting) setAnimate(true);
    }, [animate, intersection])

    return (
        <span className={`${className} animate-text`}>
            {
                items.map((item, index) => (
                    <Fragment
                        key={index}
                    >
                        <span ref={index == 0 ? ref : undefined}>
                            {
                                item.map((i, inx) => (
                                    animate ? <motion.span
                                        key={inx}
                                        className='inline-block origin-bottom-left'
                                        initial={{ opacity: 0, y: '10px', rotate: "10deg" }}
                                        animate={{ opacity: 1, y: '0px', rotate: "0deg" }}
                                        exit={{ opacity: 0, y: '10px', rotate: "10deg" }}
                                        transition={{ delay: (start * letterDuration) + i.i * letterDuration }}>
                                        {i.v}
                                    </motion.span>
                                        : null
                                ))
                            }
                        </span>
                        <>{" "}</>
                    </Fragment>
                ))
            }
            {after}
        </span>
    );
}