/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { motion } from 'framer-motion'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Client.module.scss'

const Client = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <section className={stl.clients}>
      <div className={stl.clients__container}>
        <motion.h2 {...motionProps} className={stl.clients__title}>
          TRUSTED BY startups and large enterprises
        </motion.h2>
        <motion.div
          {...motionProps}
          transition={{ duration: 0.75, delay: 0.15 }}
          className={stl.clients__items}
        >
          <div className={stl.clients__item}>
            <img src="/img/clients-01.svg" alt="client" />
          </div>
          <div className={stl.clients__item}>
            <img src="/img/clients-02.svg" alt="client" />
          </div>
          <div className={stl.clients__item}>
            <img src="/img/clients-03.svg" alt="client" />
          </div>
          <div className={stl.clients__item}>
            <img src="/img/clients-04.svg" alt="client" />
          </div>
          <div className={stl.clients__item}>
            <img src="/img/clients-05.svg" alt="client" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Client
