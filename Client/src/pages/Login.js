import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ImageJS from '../assets/img/login.jpg'
import { GithubIcon } from '../icons'
import { Label, Input, Button, HelperText } from '@windmill/react-ui'
import { loadSuccess, loadFail } from '../redux/actions/auth'
import { getUsers } from '../redux/actions/users'
import WeChat from '../components/WeChat'

function Login() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidU] = useState(true);
  const [validPass, setValidP] = useState(true);


  const login = e => {
    for (let user of users) {
      if (name === user.name) {
        setValidU(true);
        if (password === user.password) {
          loadSuccess(dispatch, user);
          return;
        }
        else {
          e.preventDefault();
          setValidP(false);
          return;
        }
      }

    }
    e.preventDefault();
    loadFail(dispatch)
    setValidU(false);
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://172.31.1.95:8080/users");
        const users = await response.json();
        getUsers(dispatch, users);
      } catch (error) {
        getUsers(dispatch, [])
        console.log(error.message)
      }
    }
    fetchUsers();



  }
    , []);
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full "
              src={ImageJS}
              alt="Office"
            />

          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

            <div className="w-full">
              <form>
                <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                <Label>
                  <span>User</span>
                  <Input className="mt-1" type="email" valid={validUser}
                    onChange={e => setName(e.target.value)}
                    defaultValue={name} />
                  <HelperText hidden={!validUser} valid={validUser}>Valid user name.</HelperText>
                  <HelperText hidden={validUser} valid={validUser}>There is no such user exists.</HelperText>
                </Label>

                <Label className="mt-4">
                  <span>Password</span>
                  <Input hidden={validPass} valid={validPass} className="mt-1"
                    onChange={e => setPassword(e.target.value)}
                    type="password" defaultValue={password} />
                  <HelperText hidden={validPass} valid={validPass}>Wrong password.</HelperText>
                  <HelperText hidden={!validPass} valid={validPass}>Please set your password carefully.</HelperText>
                </Label>

                <Button className="mt-4" block tag={Link} to="/"
                  onClick={e => login(e)}>
                  Log in
              </Button>
              </form>
              <hr className="my-8" />
              <a href="https://github.com/rocky-raccoon94">
                <Button block layout="outline">
                  <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />

                Github
              </Button>   </a>
              <WeChat />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forget password
                </Link>
              </p>
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create a new account
                </Link>
              </p>

            </div>
          </main>
        </div>
      </div>
    </div >
  )
}

export default Login
