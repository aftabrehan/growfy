/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Services.module.scss'

const Services = () => {
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
    <section className={stl.services}>
      <div className={stl.services__container}>
        <div className={stl.services__content}>
          <div className={clsx(stl.services__header, stl.header_main)}>
            <motion.a
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.1 }}
              href="#"
              className={stl.header_main__label}
            >
              services
            </motion.a>
            <motion.h2 {...motionProps} className={stl.header_main__title}>
              Services we offer
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
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__actions}
            >
              <Button label="All services" />
            </motion.div>
          </div>
        </div>
        <div className={stl.services__items}>
          <div className={stl.services__column}>
            <motion.article
              {...getScaleAnimation(0.25)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-01.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>
                Social Media Marketing
              </h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </motion.article>
            <motion.article
              {...getScaleAnimation(0.35)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-02.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>Email Marketing</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </motion.article>
          </div>
          <div className={stl.services__column}>
            <motion.article
              {...getScaleAnimation(0.4)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-03.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>Paid Advertising</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </motion.article>
            <motion.article
              {...getScaleAnimation(0.45)}
              className={clsx(stl.services__item, stl.item_service)}
            >
              <div className={stl.item_service__icon}>
                <img src="/img/Services-04.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>SEO Optimization</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
