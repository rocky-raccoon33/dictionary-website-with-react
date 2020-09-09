import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, Button } from '@windmill/react-ui'
import { updateUser } from '../redux/actions/users'
import { useDispatch } from 'react-redux'

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const [gender, setGender] = useState(user.gender || "");
    const [role, setRole] = useState(user.role || "");
    const [mail, setMail] = useState(user.mail || "");

    return (
        <Card className="w-1/2 m-20">
            <div className="m-10   items-center font-concert dark:text-green-100">
                <p className="underline text-4xl">Profile</p>

                <div className="flex flex-row">
                    <p className=" text-4xl ">User:<span className="ml-5 underline">{user.name}</span></p>
                </div>

                <div className="flex flex-row">
                    <p className=" text-4xl ">Role:</p>
                    <input className="ml-5 pl-4 text-4xl mt-1 h-12 w-1/4 rounded-lg dark:bg-gray-600"
                        defaultValue={user.role}
                        onChange={e => setRole(e.target.value)}
                    />
                </div>

                <div className="flex flex-row">
                    <p className=" text-4xl ">Gender:</p>
                    <input className="rounded-lg ml-5 pl-4 text-4xl mt-1 h-12 w-1/4 dark:bg-gray-600"
                        defaultValue={user.gender}
                        onChange={e => setGender(e.target.value)}
                    />
                </div>

                <div className="flex flex-row">
                    <p className=" text-4xl ">Mail:</p>
                    <input className="rounded-lg ml-5 pl-4 text-4xl mt-1 h-12 w-full dark:bg-gray-600"
                        defaultValue={user.mail}
                        onChange={e => setMail(e.target.value)}
                    />

                </div>
                <div className="flex justify-end">
                    <Button layout="outline" className="font-semibold text-2xl mt-10 "
                        onClick={() => updateUser(dispatch, { name: user.name, role, gender, mail })}
                    >Save</Button>
                </div>
            </div >
        </Card>


    )
}
