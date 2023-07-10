import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CustComLink from './CustComLink'

export default function Header() {
  return (
    <ul>


<li>
          <NavLink
            to="/team"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    background: '#7600dc',
                  }
                : { color: '#545e6f', background: 'red' }
            }
          >MyPage
            </NavLink>
          </li>
          <li>
          <CustComLink
            to="/posts/new"
           
          >posts
            </CustComLink>
          </li>
          <li>
            <Link to='/'>dashboard</Link>
          </li>
        
    </ul>
  )
}
