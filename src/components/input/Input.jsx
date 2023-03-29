const Input = (props) => {
  const { type, onChange, value, id } = props
  return (
    <input
      {...props}
      type={type}
      id={id}
      onChange={onChange}
      value={value}
      className='py-2 px-4 shadow-md rounded-md border-none outline-none focus:ring-2 focus:ring-violet-500 focus:border focus:border-slate-300 text-slate-800 transition duration-300 placeholder:text-base placeholder:text-slate-400'
    />
  )
}

export default Input
