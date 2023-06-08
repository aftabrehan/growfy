/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Services.module.scss'

const Services = () => {
  return (
    <section className={stl.services}>
      <div className={stl.services__container}>
        <div className={stl.services__content}>
          <div className={clsx(stl.services__header, stl.header_main)}>
            <a href="" className={stl.header_main__label}>
              services
            </a>
            <h2 className={stl.header_main__title}>Services we offer</h2>
            <div className={stl.header_main__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor.
              </p>
            </div>
            <div className={stl.header_main__actions}>
              <Button label="All services" />
            </div>
          </div>
        </div>
        <div className={stl.services__items}>
          <div className={stl.services__column}>
            <article className={clsx(stl.services__item, stl.item_service)}>
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
            </article>
            <article className={clsx(stl.services__item, stl.item_service)}>
              <div className={stl.item_service__icon}>
                <img src="/img/Services-02.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>Email Marketing</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </article>
          </div>
          <div className={stl.services__column}>
            <article className={clsx(stl.services__item, stl.item_service)}>
              <div className={stl.item_service__icon}>
                <img src="/img/Services-03.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>Paid Advertising</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </article>
            <article className={clsx(stl.services__item, stl.item_service)}>
              <div className={stl.item_service__icon}>
                <img src="/img/Services-04.svg" alt="Service" />
              </div>
              <h4 className={stl.item_service__title}>SEO Optimization</h4>
              <div className={clsx(stl.item_service__text, stl.text)}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis
                arcu enim urna adipiscing praesent velit.
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
