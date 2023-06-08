/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Choose.module.scss'

const Choose = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

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
    <section className={stl.why}>
      <div className={stl.why__container}>
        <div className={clsx(stl.why__images, stl.images_why)}>
          <motion.div
            {...getScaleAnimation(0.25)}
            className={clsx(stl.images_why__item, stl.images_why__item_1)}
          >
            <img src="/img/why-image-01.jpg" alt="Image" />
          </motion.div>
          <motion.div
            {...getScaleAnimation(0.4)}
            className={clsx(stl.images_why__item, stl.images_why__item_2)}
          >
            <img src="/img/why-image-02.jpg" alt="Image" />
          </motion.div>
        </div>
        <div className={stl.why__content}>
          <div className={clsx(stl.why__header, stl.header_main)}>
            <motion.a
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.1 }}
              href="#"
              className={stl.header_main__label}
            >
              why choose us
            </motion.a>
            <motion.h2 {...motionProps} className={stl.header_main__title}>
              We help great brands scale with content marketing.
            </motion.h2>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor.
              </p>
            </motion.div>
            <motion.ul
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__list}
            >
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
