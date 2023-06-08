/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Testimonials.module.scss'

const Testimonials = () => {
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
    <section className={stl.testimonials}>
      <div className={stl.testimonials__container}>
        <div className={clsx(stl.testimonials__header, stl.header_main)}>
          <motion.a
            {...motionProps}
            transition={{ duration: 0.75, delay: 0.1 }}
            href="#"
            className={stl.header_main__label}
          >
            testimonials
          </motion.a>
          <motion.h2 {...motionProps} className={stl.header_main__title}>
            See what our clients say
          </motion.h2>
          <div className={stl.header_main__body}>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={stl.header_main__text}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero.
              </p>
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.header_main__actions}
            >
              <Button label="Get in touch" />
            </motion.div>
          </div>
        </div>
        <div className={stl.testimonials__items}>
          <motion.article
            {...getScaleAnimation(0.35)}
            className={clsx(stl.testimonials__item, stl.item_testimonial)}
          >
            <div
              className={clsx(stl.item_testimonial__user, stl.user_testimonial)}
            >
              <div
                className={clsx(
                  stl.user_testimonial__avatar,
                  stl.user_testimonial__avatar_1
                )}
              >
                <img src="/img/testimonials-image-01.jpg" alt="Avatars" />
              </div>
              <div className={stl.user_testimonial__body}>
                <div className={stl.user_testimonial__title}>John Doe</div>
                <div className={stl.user_testimonial__company}>
                  Company Name
                </div>
              </div>
            </div>
            <h4 className={stl.item_testimonial__title}>
              I recommend this agency
            </h4>
            <div className={stl.item_testimonial__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero.
              </p>
            </div>
            <div className={stl.item_testimonial__raiting}>
              <img src="/img/testimonials-raiting.svg" alt="raiting" />
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.4)}
            className={clsx(stl.testimonials__item, stl.item_testimonial)}
          >
            <div
              className={clsx(stl.item_testimonial__user, stl.user_testimonial)}
            >
              <div
                className={clsx(
                  stl.user_testimonial__avatar,
                  stl.user_testimonial__avatar_2
                )}
              >
                <img src="/img/testimonials-image-02.jpg" alt="Avatars" />
              </div>
              <div className={stl.user_testimonial__body}>
                <div className={stl.user_testimonial__title}>Alice Smith</div>
                <div className={stl.user_testimonial__company}>
                  Company Name
                </div>
              </div>
            </div>
            <h4 className={stl.item_testimonial__title}>
              The support is awesome
            </h4>
            <div className={stl.item_testimonial__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero.
              </p>
            </div>
            <div className={stl.item_testimonial__raiting}>
              <img src="/img/testimonials-raiting.svg" alt="raiting" />
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.45)}
            className={clsx(stl.testimonials__item, stl.item_testimonial)}
          >
            <div
              className={clsx(stl.item_testimonial__user, stl.user_testimonial)}
            >
              <div
                className={clsx(
                  stl.user_testimonial__avatar,
                  stl.user_testimonial__avatar_3
                )}
              >
                <img src="/img/testimonials-image-03.jpg" alt="Avatars" />
              </div>
              <div className={stl.user_testimonial__body}>
                <div className={stl.user_testimonial__title}>Sophia Miller</div>
                <div className={stl.user_testimonial__company}>
                  Company Name
                </div>
              </div>
            </div>
            <h4 className={stl.item_testimonial__title}>
              A game changer for us
            </h4>
            <div className={stl.item_testimonial__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero.
              </p>
            </div>
            <div className={stl.item_testimonial__raiting}>
              <img src="/img/testimonials-raiting.svg" alt="raiting" />
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
