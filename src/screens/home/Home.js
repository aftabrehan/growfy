/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'

import Header from 'components/header'
import Hero from 'components/hero'
import Client from 'components/client'
import Services from 'components/services'
import Choose from 'components/choose'
import Adv from 'components/adv'
import Testimonials from 'components/testimonials'
import Blog from 'components/blog'
import CTA from 'components/cta'
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
        <CTA />
      </main>
      <Footer />
    </div>
  </div>
)

export default Home
