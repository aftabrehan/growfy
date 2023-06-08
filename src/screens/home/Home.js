/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Header from 'components/header'
import Button from 'components/button'
import Hero from 'components/hero'
import Client from 'components/client'
import Services from 'components/services'
import Choose from 'components/choose'
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

        <section className="page__advantages advantages">
          <div className="advantages__container">
            <div className="advantages__items">
              <article className="advantages__item">
                <h4 className="advantages__value">1.2M+</h4>
                <div className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </div>
              </article>
              <article className="advantages__item">
                <h4 className="advantages__value">3.4B</h4>
                <div className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </div>
              </article>
              <article className="advantages__item">
                <h4 className="advantages__value">98%</h4>
                <div className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </div>
              </article>
              <article className="advantages__item">
                <h4 className="advantages__value">10+</h4>
                <div className="advantages__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim.
                </div>
              </article>
            </div>
            <div className="advantages__image">
              <img src="/img/advantage-image-01.jpg" alt="Image" />
            </div>
          </div>
        </section>

        <section className="page__testimonials testimonials">
          <div className="testimonials__container">
            <div className="testimonials__header header-main">
              <a href="" className="header-main__label">
                testimonials
              </a>
              <h2 className="header-main__title">See what our clients say</h2>
              <div className="header-main__body">
                <div className="header-main__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="header-main__actions">
                  <Button label="Get in touch" />
                </div>
              </div>
            </div>
            <div className="testimonials__items">
              <article className="testimonials__item item-testimonial">
                <div className="item-testimonial__user user-testimonial">
                  <div className="user-testimonial__avatar user-testimonial__avatar_1">
                    <img src="/img/testimonials-image-01.jpg" alt="Avatars" />
                  </div>
                  <div className="user-testimonial__body">
                    <div className="user-testimonial__title">John Doe</div>
                    <div className="user-testimonial__company">
                      Company Name
                    </div>
                  </div>
                </div>
                <h4 className="item-testimonial__title">
                  I recommend this agency
                </h4>
                <div className="item-testimonial__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="item-testimonial__raiting">
                  <img src="/img/testimonials-raiting.svg" alt="raiting" />
                </div>
              </article>
              <article className="testimonials__item item-testimonial">
                <div className="item-testimonial__user user-testimonial">
                  <div className="user-testimonial__avatar user-testimonial__avatar_2">
                    <img src="/img/testimonials-image-02.jpg" alt="Avatars" />
                  </div>
                  <div className="user-testimonial__body">
                    <div className="user-testimonial__title">Alice Smith</div>
                    <div className="user-testimonial__company">
                      Company Name
                    </div>
                  </div>
                </div>
                <h4 className="item-testimonial__title">
                  The support is awesome
                </h4>
                <div className="item-testimonial__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="item-testimonial__raiting">
                  <img src="/img/testimonials-raiting.svg" alt="raiting" />
                </div>
              </article>
              <article className="testimonials__item item-testimonial">
                <div className="item-testimonial__user user-testimonial">
                  <div className="user-testimonial__avatar user-testimonial__avatar_3">
                    <img src="/img/testimonials-image-03.jpg" alt="Avatars" />
                  </div>
                  <div className="user-testimonial__body">
                    <div className="user-testimonial__title">Sophia Miller</div>
                    <div className="user-testimonial__company">
                      Company Name
                    </div>
                  </div>
                </div>
                <h4 className="item-testimonial__title">
                  A game changer for us
                </h4>
                <div className="item-testimonial__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="item-testimonial__raiting">
                  <img src="/img/testimonials-raiting.svg" alt="raiting" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="page__blog blog">
          <div className="blog__container">
            <div className="blog__header header-main">
              <a href="" className="header-main__label">
                Blog
              </a>
              <h2 className="header-main__title">
                Read our <br /> articles & news
              </h2>
              <div className="header-main__body">
                <div className="header-main__text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero.
                  </p>
                </div>
                <div className="header-main__actions">
                  <Button label="All Posts" />
                </div>
              </div>
            </div>
            <div className="blog__items">
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-01.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    Social Media
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      How to Use Social Proof in Marketing
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-02.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    SEO
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      Make a great first impression with these titles
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
              <artcile className="blog__item item-blog">
                <div className="item-blog__header">
                  <a href="" className="item-blog__image">
                    <img src="/img/blog-image-03.jpg" alt="image" />
                  </a>
                  <a href="" className="item-blog__category">
                    Strategy
                  </a>
                </div>
                <div className="item-blog__body">
                  <div className="item-blog__date">August 28, 2022</div>
                  <h4 className="item-blog__title item-blog__">
                    <a href="" className="item-blog__link-title">
                      How to Grab Your Reader’s Attention
                    </a>
                  </h4>
                  <div className="item-blog__text text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      lobortis arcu enim urna adipiscing praesent velit viverra
                      sit semper lorem.
                    </p>
                  </div>
                  <a href="" className="item-blog__link">
                    Read now
                  </a>
                </div>
              </artcile>
            </div>
          </div>
        </section>

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
