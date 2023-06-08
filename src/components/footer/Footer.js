/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Button from 'components/button'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Footer.module.scss'

const Footer = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  return (
    <footer className={stl.footer}>
      <div className={clsx(stl.footer__main, stl.main_footer)}>
        <div className={stl.main_footer__container}>
          <div className={stl.main_footer__column}>
            <motion.a
              {...motionProps}
              href="#"
              className={stl.main_footer__logo}
            >
              <img src="/img/Logo.svg" alt="Logo" />
            </motion.a>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.15 }}
              className={clsx(stl.main_footer__text, stl.text)}
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
              transition={{ duration: 0.75, delay: 0.25 }}
              className={clsx(stl.main_footer__social, stl.social)}
            >
              <a href="#" className={stl.social__link}>
                <img src="/img/footer-image-01.svg" alt="social" />
              </a>
              <a href="#" className={stl.social__link}>
                <img src="/img/footer-image-02.svg" alt="social" />
              </a>
              <a href="#" className={stl.social__link}>
                <img src="/img/footer-image-03.svg" alt="social" />
              </a>
              <a href="#" className={stl.social__link}>
                <img src="/img/footer-image-04.svg" alt="social" />
              </a>
              <a href="#" className={stl.social__link}>
                <img src="/img/footer-image-05.svg" alt="social" />
              </a>
            </motion.div>
          </div>
          <div className={stl.main_footer__column}>
            <div className={stl.main_footer__label}>Pages</div>
            <nav className={clsx(stl.main_footer__menu, stl.menu_footer)}>
              <motion.ul
                {...motionProps}
                transition={{ duration: 0.75, delay: 0.3 }}
                className={stl.menu_footer__list}
              >
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Home
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    About
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Services
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Packages
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Blog
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Contact
                  </a>
                </li>
              </motion.ul>
            </nav>
          </div>
          <div className={stl.main_footer__column}>
            <div className={stl.main_footer__label}>Utility pages</div>
            <nav className={clsx(stl.main_footer__menu, stl.menu_footer)}>
              <motion.ul
                {...motionProps}
                transition={{ duration: 0.75, delay: 0.35 }}
                className={stl.menu_footer__list}
              >
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Instructions
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Style guide
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Licenses
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Changelog
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    404 Not found
                  </a>
                </li>
                <li className={stl.menu_footer__item}>
                  <a href="#" className={stl.menu_footer__link}>
                    Password protected
                  </a>
                </li>
              </motion.ul>
            </nav>
          </div>
          <div className={stl.main_footer__column}>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.25 }}
              className={stl.main_footer__label}
            >
              Subscribe to our newsletter
            </motion.div>
            <motion.div
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.25 }}
              className={clsx(stl.main_footer__text, stl.text)}
            >
              Lorem ipsum dolor sit am consectetur adipiscing
            </motion.div>
            <motion.form
              {...motionProps}
              transition={{ duration: 0.75, delay: 0.25 }}
              className={stl.subscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={stl.subscribe__input}
              />
              <Button type="submit" label="Subscribe" />
            </motion.form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
