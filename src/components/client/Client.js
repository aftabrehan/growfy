/* eslint-disable @next/next/no-img-element */
import stl from './Client.module.scss'

const Client = () => {
  return (
    <section className={stl.clients}>
      <div className={stl.clients__container}>
        <h2 className={stl.clients__title}>
          TRUSTED BY startups and large enterprises
        </h2>
        <div className={stl.clients__items}>
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
        </div>
      </div>
    </section>
  )
}

export default Client
