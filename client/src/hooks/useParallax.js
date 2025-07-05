import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useParallax = (ref, y = -50) => {
  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap.to(element, {
        y,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    return () => {
      // Clean up ScrollTrigger instance on component unmount
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, y]);
};

export default useParallax;
