/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Blog.module.scss'

const Blog = () => {
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
    <section className={stl.blog}>
      <div className={stl.blog__container}>
        <div className={clsx(stl.blog__header, stl.header_main)}>
          <motion.a
            {...motionProps}
            transition={{ duration: 0.75, delay: 0.1 }}
            href="#"
            className={stl.header_main__label}
          >
            blog
          </motion.a>
          <motion.h2 {...motionProps} className={stl.header_main__title}>
            Read our <br /> articles & news
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
              <Button label="All Posts" />
            </motion.div>
          </div>
        </div>
        <div className={stl.blog__items}>
          <motion.article
            {...getScaleAnimation(0.25)}
            className={clsx(stl.blog__item, stl.item_blog)}
          >
            <div className={stl.item_blog__header}>
              <a href="" className={stl.item_blog__image}>
                <img src="/img/blog-image-01.jpg" alt="image" />
              </a>
              <a href="" className="item_blog__category">
                Social Media
              </a>
            </div>
            <div className={stl.item_blog__body}>
              <div className={stl.item_blog__date}>August 28, 2022</div>
              <h4 className={clsx(stl.item_blog__title, stl.item_blog__)}>
                <a href="" className={stl.item_blog__link_title}>
                  How to Use Social Proof in Marketing
                </a>
              </h4>
              <div className={clsx(stl.item_blog__text, stl.text)}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit viverra sit
                  semper lorem.
                </p>
              </div>
              <a href="" className={stl.item_blog__link}>
                Read now
              </a>
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.35)}
            className={clsx(stl.blog__item, stl.item_blog)}
          >
            <div className={stl.item_blog__header}>
              <a href="" className={stl.item_blog__image}>
                <img src="/img/blog-image-02.jpg" alt="image" />
              </a>
              <a href="" className="item_blog__category">
                SEO
              </a>
            </div>
            <div className={stl.item_blog__body}>
              <div className={stl.item_blog__date}>August 28, 2022</div>
              <h4 className={clsx(stl.item_blog__title, stl.item_blog__)}>
                <a href="" className={stl.item_blog__link_title}>
                  Make a great first impression with these titles
                </a>
              </h4>
              <div className={clsx(stl.item_blog__text, stl.text)}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit viverra sit
                  semper lorem.
                </p>
              </div>
              <a href="" className={stl.item_blog__link}>
                Read now
              </a>
            </div>
          </motion.article>
          <motion.article
            {...getScaleAnimation(0.4)}
            className={clsx(stl.blog__item, stl.item_blog)}
          >
            <div className={stl.item_blog__header}>
              <a href="" className={stl.item_blog__image}>
                <img src="/img/blog-image-03.jpg" alt="image" />
              </a>
              <a href="" className="item_blog__category">
                Strategy
              </a>
            </div>
            <div className={stl.item_blog__body}>
              <div className={stl.item_blog__date}>August 28, 2022</div>
              <h4 className={clsx(stl.item_blog__title, stl.item_blog__)}>
                <a href="" className={stl.item_blog__link_title}>
                  How to Grab Your Reader’s Attention
                </a>
              </h4>
              <div className={clsx(stl.item_blog__text, stl.text)}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  lobortis arcu enim urna adipiscing praesent velit viverra sit
                  semper lorem.
                </p>
              </div>
              <a href="" className={stl.item_blog__link}>
                Read now
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Blog
