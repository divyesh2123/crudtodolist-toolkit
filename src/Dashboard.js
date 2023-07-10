import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {

  useEffect(()=> {

  },[])
  return (
    <div>
        
        <Outlet/>

    </div>
  )
}
