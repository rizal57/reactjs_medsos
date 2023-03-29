import { Link } from 'react-router-dom'

const FooterText = () => {
  const d = new Date()
  const year = d.getFullYear()
  return (
    <>
      <p className="text-sm text-slate-500">
        &copy; {year} Social Media App
      </p>

      <Link to={'/help'} className='text-sm text-blue-500'>
        help?
      </Link>
    </>
  )
}

export default FooterText
