const Label = ({ htmlFor, text, children }) => {
  return (
    <label htmlFor={htmlFor} className='text-slate-700 mb-1'>{ children || text}</label>
  )
}

export default Label
