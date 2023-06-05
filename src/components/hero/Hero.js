/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={stl.main}>
      <div className={stl.main__container}>
        <div className={stl.main__content}>
          <div className={clsx(stl.main__header, stl.header_main)}>
            <h1 className={stl.header_main__title}>
              Marketing solutions that grow your business.
            </h1>
            <div className={stl.header_main__text}>
              <p>
                Growfy is a template highly suitable for modern marketing
                agencies, digital studios, startups and businesses. The design
                is made in the dark style, which makes the site memorable and
                you can easily adapt it to your brand.
              </p>
            </div>
            <div className={stl.header_main__actions}>
              <Button label="Our services" />
              <Button label="Contact us" isDark />
            </div>
          </div>
        </div>
        <div className={clsx(stl.main__images, stl.images_main)}>
          <div className={stl.images_main__column}>
            <div
              className={clsx(stl.images_main__item, stl.images_main__item_1)}
            >
              <img src="/img/main-img-01.jpg" alt="Image" />
            </div>
            <div
              className={clsx(stl.images_main__item, stl.images_main__item_2)}
            >
              <img src="/img/main-img-02.jpg" alt="Image" />
            </div>
          </div>
          <div className={stl.images_main__column}>
            <div
              className={clsx(stl.images_main__item, stl.images_main__item_3)}
            >
              <img src="/img/main-img-03.jpg" alt="Image" />
            </div>
            <div
              className={clsx(stl.images_main__item, stl.images_main__item_4)}
            >
              <img src="/img/main-img-04.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
