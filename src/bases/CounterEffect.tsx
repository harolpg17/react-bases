import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10;

export const CounterEffect = ({initialValue = 5}) => {

    const [counter, setCounter] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
      if (counter >= MAXIMUN_COUNT) return;
      
        setCounter(prev => prev + 1);
    }

    useLayoutEffect(() => {
      if (counter < 10 ) return;

      console.log('%cSe llego al valor máximo.', 'color: red');

      const tl = gsap.timeline();

      tl.to(counterElement.current, { y: -10, duration: 0.5, ease: 'ease.out' })
        .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'});

    }, [counter]);
    

  return (
    <>
        <h1>CounterEffect:</h1>
        <h2 ref={counterElement}>{ counter }</h2>

        <button onClick={ handleClick }>+1</button>
    </>
  )
}
