import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap'

export const useCounter = ({maxCount = 10}) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef(gsap.timeline());

    const handleClick = () => {
      if (counter >= maxCount) return;
      
        setCounter(prev => prev + 1);
    }

    useLayoutEffect(() => {

        if (!elementToAnimate.current) return;

        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.5, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out'})
            .pause();

    }, [])

    useLayoutEffect(() => {
      if (counter < maxCount ) return;

    //   console.log('%cSe llego al valor máximo.', 'color: red');

      tl.current.play(0);
    }, [counter]);

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}