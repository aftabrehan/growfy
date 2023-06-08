/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { motion } from 'framer-motion'

import stl from './Adv.module.scss'

const Adv = () => {
  const [animation, setAnimation] = useState(false)

  const getScaleAnimation = (delay = 0.25) => {
    return {
      onViewportEnter: () => setAnimation(true),
      initial: { scale: '0', opacity: 0 },
      animate: {
        scale: animation ? 1 : 0,
        opacity: animation ? 1 : 0,
      },
      transition: { duration: 0.5, delay },
    }
  }

  return (
    <section className={stl.advantages}>
      <div className={stl.advantages__container}>
        <div className={stl.advantages__items}>
          <motion.article
            {...getScaleAnimation(0.25)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>1.2M+</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.35)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>3.4B</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.45)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>98%</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.5)}
            className={stl.advantages__item}
          >
            <h4 className={stl.advantages__value}>10+</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </motion.article>
        </div>
        <motion.div
          {...getScaleAnimation(0.55)}
          className={stl.advantages__image}
        >
          <img src="/img/advantage-image-01.jpg" alt="Image" />
        </motion.div>
      </div>
    </section>
  )
}

export default Adv
