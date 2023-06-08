/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={stl.footer}>
      <div className={clsx(stl.footer__main, stl.main_footer)}>
        <div className={stl.main_footer__container}>
          <div className={stl.main_footer__column}>
            <a href="#" className={stl.main_footer__logo}>
              <img src="/img/Logo.svg" alt="Logo" />
            </a>
            <div className={clsx(stl.main_footer__text, stl.text)}>
              <p>
                Growfy is a template highly suitable for modern marketing
                agencies, digital studios, startups and businesses. The design
                is made in the dark style, which makes the site memorable and
                you can easily adapt it to your brand.
              </p>
            </div>
            <div className={clsx(stl.main_footer__social, stl.social)}>
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
            </div>
          </div>
          <div className={stl.main_footer__column}>
            <div className={stl.main_footer__label}>Pages</div>
            <nav className={clsx(stl.main_footer__menu, stl.menu_footer)}>
              <ul className={stl.menu_footer__list}>
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
              </ul>
            </nav>
          </div>
          <div className={stl.main_footer__column}>
            <div className={stl.main_footer__label}>Utility pages</div>
            <nav className={clsx(stl.main_footer__menu, stl.menu_footer)}>
              <ul className={stl.menu_footer__list}>
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
              </ul>
            </nav>
          </div>
          <div className={stl.main_footer__column}>
            <div className={stl.main_footer__label}>
              Subscribe to our newsletter
            </div>
            <div className={clsx(stl.main_footer__text, stl.text)}>
              Lorem ipsum dolor sit am consectetur adipiscing
            </div>
            <form action="" className={stl.subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className={stl.subscribe__input}
              />
              <Button type="submit" label="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <div className={clsx(stl.footer__bottom, stl.bottom_footer)}>
        <div className={stl.bottom_footer__container}>
          <div className={stl.bottom_footer__copy}>
            © Growfy — Powered by Webflow - Growfy Webflow Template — Created by
            Elison Santos.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
