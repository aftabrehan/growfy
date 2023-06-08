/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './CTA.module.scss'

const CTA = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <section className={clsx(stl.page__start, stl.start)}>
      <div className={stl.start__container}>
        <div className={stl.start__body}>
          <div className={stl.start__column}>
            <motion.h2 {...motionProps} className={stl.start__title}>
              Ready to start <br /> scaling your business now?
            </motion.h2>
            <motion.p
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={clsx(stl.start__text, stl.text)}
            >
              Lorem ipsum dolor sit am consectetur adipiscing varius enim in
              eros.
            </motion.p>
          </div>
          <div className={stl.start__column}>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.2 }}
              className={stl.start__actions}
            >
              <Button label="Our services" />
              <Button label="Contact us" isDark />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
