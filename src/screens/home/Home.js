/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Header from 'components/header'
import Button from 'components/button'
import Hero from 'components/hero'
import Client from 'components/client'
import Services from 'components/services'
import Choose from 'components/choose'
import Adv from 'components/adv'
import Testimonials from 'components/testimonials'
import Blog from 'components/blog'
import Footer from 'components/footer'

import stl from './Home.module.scss'

// https://growfy-template.webflow.io

const Home = () => (
  <div className={stl.wrapper}>
    <Head>
      <title>Growfy - Marketing Solutions that grow your b usiness.</title>
    </Head>

    <div className="wrapper">
      <Header />

      <main className="page">
        <Hero />
        <Client />
        <Services />
        <Choose />
        <Adv />
        <Testimonials />
        <Blog />

        <section className="page__start start">
          <div className="start__container">
            <div className="start__body">
              <div className="start__column">
                <h2 className="start__title">
                  Ready to start <br /> scaling your business now?
                </h2>
                <div className="start__text text">
                  <p>
                    Lorem ipsum dolor sit am consectetur adipiscing varius enim
                    in eros.
                  </p>
                </div>
              </div>
              <div className="start__column">
                <div className="start__actions">
                  <Button label="Our services" />
                  <Button label="Contact us" isDark />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </div>
)

export default Home
