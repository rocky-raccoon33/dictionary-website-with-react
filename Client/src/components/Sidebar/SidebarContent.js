import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import Doc from '../../data/Doc'
import AddForm from '../AddForm'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <div className="flex flex-row ml-5"> <a href="/">
        <FontAwesomeIcon icon={faAndroid} color='gray' size='2x' /></a>
        <h2 className='mx-2'>
          <span className="text-gray-500 px-2 text-2xl  font-concert">我是一本字典</span>
        </h2>
      </div>

      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
              <li className="relative px-6 py-3" key={route.name}>
                <NavLink
                  exact
                  to={route.path}
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  activeClassName="text-gray-800 dark:text-gray-100"
                >
                  <Route path={route.path} exact={route.exact}>
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  </Route>
                  <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </li>
            )
        )}
      </ul>
      <div className="px-6 my-6">

        <Doc />
        <AddForm />

      </div>
    </div>
  )
}

export default SidebarContent
