import { NavLink } from "react-router-dom"

const NavigationLink = ({url, text, Icon}) => {
  return (
    <NavLink
      to={url}
      className="hover:text-violet-500 h-12 w-12 md:object-contain md:w-full md:h-full md:py-2 md:px-4 md:mb-2 inline-flex items-center gap-3 md:justify-start justify-center transition duration-300"
    >
      <span className="text-2xl">
        {Icon}
      </span>
      <span className="hidden md:block">
        {text}
      </span>
    </NavLink>
  )
}

export default NavigationLink
