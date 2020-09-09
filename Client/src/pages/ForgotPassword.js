import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import ImageLight from '../assets/img/forgot-password-office.jpeg'
import { Label, Input, Button, HelperText } from '@windmill/react-ui'

function ForgotPassword() {
  const [mail, setMail] = useState("");
  const [users] = useState(useSelector(state => state.users));
  const [mails] = useState(users.map(user => user.mail));
  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const recover = () => {
    if (mails.includes(mail)) {
      setValid(true);
      setPassword(users.filter(user => user.mail === mail)[0].password);
    }

  }

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full "
              src={ImageLight}
              alt="Office"
            />

          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input className="mt-1" onChange={e => setMail(e.target.value)} />
              </Label>
              <HelperText hidden={valid}>Enter your mail to recover your password.</HelperText>
              <HelperText hidden={!valid}>Your password is {password}</HelperText>
              <Button block className="mt-4"
                onClick={() => recover()}
              >
                Recover password
              </Button>

              <Button tag={Link} to='/login'
                block className="mt-4"
                layout='outline'
              >
                go back
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
