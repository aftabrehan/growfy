import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ type = '', label, isDark, customClass }) => {
  return (
    <button
      type={type}
      className={clsx(stl.button, isDark && stl.dark, customClass)}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  isDark: PropTypes.bool,
  customClass: PropTypes.string,
}

export default Button
