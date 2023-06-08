/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

import Button from 'components/button'

import stl from './CTA.module.scss'

const CTA = () => {
  return (
    <section className={clsx(stl.page__start, stl.start)}>
      <div className={stl.start__container}>
        <div className={stl.start__body}>
          <div className={stl.start__column}>
            <h2 className={stl.start__title}>
              Ready to start <br /> scaling your business now?
            </h2>
            <p className={clsx(stl.start__text, stl.text)}>
              Lorem ipsum dolor sit am consectetur adipiscing varius enim in
              eros.
            </p>
          </div>
          <div className={stl.start__column}>
            <div className={stl.start__actions}>
              <Button label="Our services" />
              <Button label="Contact us" isDark />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
