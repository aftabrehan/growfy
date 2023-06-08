/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Hero.module.scss'

const Hero = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  const getImageAnimation = (delay = 0.25) => {
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
    <section className={stl.main}>
      <div className={stl.main__container}>
        <div className={stl.main__content}>
          <div className={clsx(stl.main__header, stl.header_main)}>
            <motion.h1 {...motionProps} className={stl.header_main__title}>
              Marketing solutions that grow your business.
            </motion.h1>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                Growfy is a template highly suitable for modern marketing
                agencies, digital studios, startups and businesses. The design
                is made in the dark style, which makes the site memorable and
                you can easily adapt it to your brand.
              </p>
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__actions}
            >
              <Button label="Our services" />
              <Button label="Contact us" isDark />
            </motion.div>
          </div>
        </div>
        <div className={clsx(stl.main__images, stl.images_main)}>
          <div className={stl.images_main__column}>
            <motion.div
              {...getImageAnimation(0.25)}
              className={clsx(stl.images_main__item, stl.images_main__item_1)}
            >
              <img src="/img/main-img-01.jpg" alt="Image" />
            </motion.div>
            <motion.div
              {...getImageAnimation(0.35)}
              className={clsx(stl.images_main__item, stl.images_main__item_2)}
            >
              <img src="/img/main-img-02.jpg" alt="Image" />
            </motion.div>
          </div>
          <div className={stl.images_main__column}>
            <motion.div
              {...getImageAnimation(0.4)}
              className={clsx(stl.images_main__item, stl.images_main__item_3)}
            >
              <img src="/img/main-img-03.jpg" alt="Image" />
            </motion.div>
            <motion.div
              {...getImageAnimation(0.45)}
              className={clsx(stl.images_main__item, stl.images_main__item_4)}
            >
              <img src="/img/main-img-04.jpg" alt="Image" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
