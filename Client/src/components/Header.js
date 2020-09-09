import React, { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { SidebarContext } from '../context/SidebarContext'
import { LOGOUT } from '../redux/actions/types'
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineLogoutIcon,
} from '../icons'
import { Badge, Input, Dropdown, DropdownItem, WindmillContext } from '@windmill/react-ui'

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [keyword, setKeyword] = useState("");


  const history = useHistory();
  const msgs = useSelector(state => state.msgs).length;
  const routeChange = (key) => {
    let newPath = `/app/result${key}`
    history.push(newPath);
  }

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-purple-700 shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-white dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">

            <Input
              className="pl-8 text-gray-700"
              placeholder="Search for words"
              aria-label="Search the word"
              onChange={e => setKeyword(e.target.value)}
            />
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon onClick={() => { routeChange(keyword || "You must've missed something") }} className="w-4 h-4 " aria-hidden="false" />
            </div>
          </div>
        </div>
        <p className="font-Inconsolata font-semibold text-white">Signed in as
          <span className=" mx-4 font-Inconsolata text-white border-2 p-3 mr-10  dark:bg-green-100 dark:text-purple-600 font-semibold rounded-lg text-base">
            {auth.user.name}
          </span>
        </p>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleMode}
              aria-label="Toggle color mode"
            >
              {mode === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                  <MoonIcon className="w-5 h-5" aria-hidden="true" />
                )}
            </button>
          </li>
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag={Link} to='/app/chat' className="justify-between">
                <span>Messages</span>
                <Badge type="danger">{msgs}</Badge>
              </DropdownItem>

            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative">
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <div className="w-8">
                <img src="https://img.icons8.com/cotton/64/000000/guest-male.png" />
              </div>
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="/app/profile">
                <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </DropdownItem>
              {/* <DropdownItem tag="a" href="#">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem> */}
              <DropdownItem onClick={() => dispatch({ type: LOGOUT })}>
                <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
