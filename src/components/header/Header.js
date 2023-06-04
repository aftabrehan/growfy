import { useState } from 'react'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Header.module.scss'

const Header = () => {
  const [showMenu, setIsShowMenu] = useState(false)

  const links = ['Home', 'About', 'Pages', 'Services']

  return (
    <header className={clsx(stl.header, showMenu && stl.menu_open)}>
      <div className={stl.header__container}>
        <a href="" className={stl.header__logo}>
          <img src="/img/Logo.svg" alt="logo" />
        </a>
        <nav className={clsx(stl.header__menu, stl.menu)}>
          <div className={stl.menu__body}>
            <ul className={stl.menu__list}>
              {links.map(link => (
                <li key={link} className={stl.menu__item}>
                  <a href="" className={stl.menu__link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <a href="" className={clsx(stl.header__cart, stl.cart_header)}>
          <span className={stl.cart_header__text}>Cart</span>
          <span className={stl.cart_header__quantity}>0</span>
        </a>
        <Button label="Get Started" customClass={stl.header__button} />
        <button
          className={stl.icon_menu}
          type="button"
          onClick={() => setIsShowMenu(!showMenu)}
        >
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
