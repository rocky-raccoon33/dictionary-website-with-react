import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_SUCCESS } from '../redux/actions/types'
import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { GithubIcon } from '../icons'
import { Input, Label, Button, HelperText } from '@windmill/react-ui'
import WeChat from '../components/WeChat'

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  const [msg, setMsg] = useState("");
  const [valid, setValid] = useState(true);
  const used = useSelector(state => state.users).map(user => user.name).includes(name);

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


  const register = async e => {
    if (!used && name !== '' && password !== '' && password === confirm && agree) {
      dispatch({ type: REGISTER_SUCCESS, payload: { name, password } });
      try {
        const response = await fetch("http://54.151.249.232:8080/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password })
        })
        await delay(1000)
        dispatch({ type: REGISTER_SUCCESS, payload: { name, password } });
      } catch (error) {
        console.error(error.message)
      }
    } else {
      e.preventDefault();
      setValid(false);
      if (name === '') {
        setMsg("The user name can not be empty.")
      } else if (used) {
        setMsg("User name has already been userd.")
      }
      else if (password === '') {
        setMsg('The password cannot be empty.')

      } else if (password !== confirm) {
        setMsg("The passwords do not match.")
      } else if (!agree) {
        setMsg("You must agree with the privacy policy.")
      }
    }

  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                <button>
                  Create account
                     </button>
              </h1>
              <Label>
                <span>Name</span>
                <Input className="mt-1" type="Name"
                  onChange={e => setName(e.target.value)}
                />
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" type="password"
                  onChange={e => setPassword(e.target.value)} />
              </Label>
              <Label className="mt-4">
                <span >Confirm password</span>
                <Input className="mt-1" type="password"
                  onChange={e => setConfirm(e.target.value)} />
              </Label>
              <div>
                <HelperText valid={valid} hidden={valid}>{msg}</HelperText>
                <HelperText valid={valid} hidden={!valid}>"Everything seems ok."</HelperText>
              </div>

              <Label className="mt-6" check>
                <Input type="checkbox" onChange={() => setAgree(!agree)} />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button tag={Link} to='/' block className="mt-4" onClick={e => register(e)}>
                Create account
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                <a href="https://github.com/rocky-raccoon94">Github</a>

              </Button>

              <WeChat />



              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/login"
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Login
