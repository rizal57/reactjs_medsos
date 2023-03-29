import FooterText from './FooterText'

const Footer = () => {

  return (
    <>
      <footer className="bottom-0 absolute w-full md:block md:px-2 lg:px-4 bg-white md:py-2 lg:py-4">
        <div className="md:flex justify-between hidden">
          <FooterText />
        </div>
      </footer>
    </>
  )
}

export default Footer
