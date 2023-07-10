import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Posts() {
  return (
    <>

    <ul><li>This is menu need to impelemted for child</li></ul>
    
    <Outlet>
        
        </Outlet>

        <footer>This is footer</footer>
    
    </>
    
  )
}
