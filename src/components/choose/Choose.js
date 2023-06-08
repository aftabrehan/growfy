/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import stl from './Choose.module.scss'

const Choose = () => {
  return (
    <section className={stl.why}>
      <div className={stl.why__container}>
        <div className={clsx(stl.why__images, stl.images_why)}>
          <div className={clsx(stl.images_why__item, stl.images_why__item_1)}>
            <img src="/img/why-image-01.jpg" alt="Image" />
          </div>
          <div className={clsx(stl.images_why__item, stl.images_why__item_2)}>
            <img src="/img/why-image-02.jpg" alt="Image" />
          </div>
        </div>
        <div className={stl.why__content}>
          <div className={clsx(stl.why__header, stl.header_main)}>
            <a href="" className={stl.header_main__label}>
              why choose us
            </a>
            <h2 className={stl.header_main__title}>
              We help great brands scale with content marketing.
            </h2>
            <div className={stl.header_main__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor.
              </p>
            </div>
            <ul className={stl.header_main__list}>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
              <li>This is some text inside of a div.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose
