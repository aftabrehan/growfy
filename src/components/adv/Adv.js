/* eslint-disable @next/next/no-img-element */

import stl from './Adv.module.scss'

const Adv = () => {
  return (
    <section className={stl.advantages}>
      <div className={stl.advantages__container}>
        <div className={stl.advantages__items}>
          <article className={stl.advantages__item}>
            <h4 className={stl.advantages__value}>1.2M+</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </article>
          <article className={stl.advantages__item}>
            <h4 className={stl.advantages__value}>3.4B</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </article>
          <article className={stl.advantages__item}>
            <h4 className={stl.advantages__value}>98%</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </article>
          <article className={stl.advantages__item}>
            <h4 className={stl.advantages__value}>10+</h4>
            <div className={stl.advantages__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim.
            </div>
          </article>
        </div>
        <div className={stl.advantages__image}>
          <img src="/img/advantage-image-01.jpg" alt="Image" />
        </div>
      </div>
    </section>
  )
}

export default Adv
