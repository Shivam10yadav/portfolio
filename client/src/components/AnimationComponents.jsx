// AnimationComponents.jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Base Animation Component
export const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  className = "",
  variant = "slideUp",
  once = false // Set to false so animations retrigger every time
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const variants = {
    slideUp: {
      hidden: { opacity: 0, y: 75, scale: 0.95 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.7 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 1.0,
          delay,
          ease: [0.34, 1.56, 0.64, 1],
        }
      }
    },
    scaleRotate: {
      hidden: { opacity: 0, scale: 0.5, rotate: -10 },
      visible: { 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.34, 1.56, 0.64, 1],
        }
      }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 1.5,
          delay,
          ease: "easeOut"
        }
      }
    },
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
      visible: { 
        opacity: 1, 
        filter: "blur(0px)", 
        y: 0,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }
      }
    },
    bounce: {
      hidden: { opacity: 0, y: -50, scale: 0.8 },
      visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 1.2,
          delay,
          ease: [0.68, -0.55, 0.265, 1.55],
        }
      }
    },
    popUp: {
      hidden: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
      visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 20,
          delay
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Shorthand Components for convenience
export const BlurFadeIn = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="blur" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export const PopUp = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="popUp" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export const SlideIn = ({ children, direction = "left", delay = 0, className = "", once = false }) => {
  const variantMap = {
    left: "slideLeft",
    right: "slideRight",
    up: "slideUp"
  };
  
  return (
    <ScrollAnimation variant={variantMap[direction]} delay={delay} className={className} once={once}>
      {children}
    </ScrollAnimation>
  );
};

export const ScaleIn = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="scale" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export const FadeIn = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="fade" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export const Bounce = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="bounce" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export const RotateScale = ({ children, delay = 0, className = "", once = false }) => (
  <ScrollAnimation variant="scaleRotate" delay={delay} className={className} once={once}>
    {children}
  </ScrollAnimation>
);

export default ScrollAnimation;

// ============================================
// USAGE EXAMPLES
// ============================================

/*

// Import in your component
import { ScrollAnimation } from './components/AnimationComponents';

// Use with different variants
<ScrollAnimation variant="blur" delay={0.1}>
  <About />
</ScrollAnimation>

<ScrollAnimation variant="slideRight" delay={0.1}>
  <Projects />
</ScrollAnimation>

<ScrollAnimation variant="scale" delay={0.1}>
  <Services />
</ScrollAnimation>

<ScrollAnimation variant="slideLeft" delay={0.1}>
  <Contact />
</ScrollAnimation>

// Available variants:
- "slideUp" - Slides from bottom with scale
- "slideLeft" - Slides from left (straight, no rotation)
- "slideRight" - Slides from right (straight, no rotation)
- "scale" - Pops out with bouncy scale
- "scaleRotate" - Scales and rotates
- "fade" - Simple fade
- "blur" - Blur fade with upward motion
- "bounce" - Bouncy from top
- "popUp" - Spring pop with blur

// Or use shorthand components
import { BlurFadeIn, PopUp, SlideIn } from './components/AnimationComponents';

<BlurFadeIn>
  <Component />
</BlurFadeIn>

*/