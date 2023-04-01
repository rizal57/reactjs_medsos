import clsx from 'clsx';
import React from 'react'

const ButtonPrimary = (props) => {
  const { children, onClick, text, opacity } = props;

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        opacity,
        'py-1 px-4 rounded-full bg-violet-500 text-white hover:bg-violet-600 transition duration-300 disabled:cursor-not-allowed'
      )}
    >
      {children || text}
    </button>
  )
}

export default ButtonPrimary
