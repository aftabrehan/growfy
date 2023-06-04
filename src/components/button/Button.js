import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, isDark, customClass }) => {
  return (
    <button className={clsx(stl.button, isDark && stl.dark, customClass)}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  isDark: PropTypes.bool,
  customClass: PropTypes.string,
}

export default Button
