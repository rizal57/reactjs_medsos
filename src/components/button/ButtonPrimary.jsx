import clsx from 'clsx';
import React from 'react'

const ButtonPrimary = (props) => {
  const { children, onClick, text } = props;

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx('py-1 px-4 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition duration-300')}
    >
      {children || text}
    </button>
  )
}

export default ButtonPrimary
