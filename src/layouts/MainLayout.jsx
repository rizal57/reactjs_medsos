import { Outlet } from 'react-router-dom'
import { Navbar, Rightside } from '../components'

const MainLayout = () => {
  return (
    <div className='flex'>
      <Navbar />

      <main className='ml-[72px] md:ml-[302px] lg:ml-[352px] flex-1'>
        <Outlet />
      </main>

      <aside className='xl:w-[400px] lg:w-[300px] hidden lg:block'>
        <Rightside />
      </aside>
    </div>
  )
}

export default MainLayout
