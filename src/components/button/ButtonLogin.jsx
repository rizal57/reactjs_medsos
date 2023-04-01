import clsx from "clsx"

const ButtonLogin = (props) => {
  const { children, onClick, text, variant = 'bg-slate-50 text-slate-600 hover:bg-slate-100' } = props

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        variant,
        'py-2 px-4 w-full rounded-lg shadow-md flex gap-3 items-center justify-center transition duration-300'
        )}
    >
      {children || text}
    </button>
  )
}

export default ButtonLogin
