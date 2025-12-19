import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
        <h1>sidebar</h1>
        <h1>navbar</h1>
        <Outlet/>    
    </div>
    //outlet kısmı sayfanın ana içeriğini gösterir, sidebar navbar sabit kalır burası gezinen sayfaya gore degisir icerik bakımından
  )
}

export default DashboardLayout