export const getCommonMotionProps = (animation, setAnimation) => {
  return {
    onViewportEnter: () => setAnimation(true),
    initial: { translateY: '50%', opacity: 0 },
    animate: {
      translateY: animation ? 0 : '100%',
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.75, delay: 0.1 },
  }
}
