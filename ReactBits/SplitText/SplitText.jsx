import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SplitText = ({
  text = '',
  className = '',
  delay = 0.03,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const containerVariants = {
    visible: (i = 1) => ({
      transition: {
        staggerChildren: delay,
        delayChildren: i * delay,
      },
    }),
    hidden: {},
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={`split-parent ${className}`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      custom={1}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.map((letter, letterIndex) => {
            const index = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;

            return (
              <motion.span
                key={index}
                variants={letterVariants}
                onAnimationComplete={() => {
                  animatedCount.current += 1;
                  if (animatedCount.current === letters.length && onLetterAnimationComplete) {
                    onLetterAnimationComplete();
                  }
                }}
                style={{
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </motion.p>
  );
};

export default SplitText;
