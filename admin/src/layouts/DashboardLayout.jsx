import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id='my-drawer' type='checkbox' className='drawer-toggle' defaultChecked/>
        <div className='drawer-content'>
          <Navbar/>
          <main className='p-6'>
            <Outlet/>
            {/*outlet kısmı sayfanın ana içeriğini gösterir, sidebar navbar sabit kalır burası gezinen sayfaya gore degisir icerik bakımından */}
          </main>
          
        </div>
          <Sidebar/>
    </div>
    
  )
}

export default DashboardLayout