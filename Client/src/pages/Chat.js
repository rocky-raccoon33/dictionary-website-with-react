import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMsg } from '../redux/actions/msgs'
import { GET_MSGS } from '../redux/actions/types'

// make a copy of the data, for the second table


function Messages() {
    /**
     * DISCLAIMER: This code could be badly improved, but for the sake of the example
     * and readability, all the logic for both table are here.
     * You would be better served by dividing each table in its own
     * component, like Table(?) and TableWithActions(?) hiding the
     * presentation details away from the page view.
     */
    const name = useSelector(state => state.auth.user.name);
    const msgs = useSelector(state => state.msgs).slice(0, 100).reverse();

    const dispatch = useDispatch();
    const [msg, setMsg] = useState("");

    useEffect(() => {
        const fetchMsgs = async () => {
            try {
                const response = await fetch("http://localhost:8080/messages");
                const payload = await response.json();
                dispatch({ type: GET_MSGS, payload });
            } catch (error) {
                console.log(error.message)
                dispatch({ type: GET_MSGS, payload: [] });
            }
        }
        fetchMsgs();
    }, []);
    return (
        <div className="flex flex-1 h-screen-2 font-sans antialiased flex-col bg-gray-200 font-semibold dark:bg-gray-700 dark:text-gray-400">
            <div className="border-b flex px-6 py-2 items-center flex-none bg-green-200 dark:bg-gray-700">
                <div className="flex flex-col ">
                    <h3 className="text-grey-darkest mb-1 font-extrabold font-Noto text-2xl">ChatRoom</h3>
                </div>
            </div>

            <div className="overflow-y-auto font-Noto h-screen-2" >
                {msgs.map((msg, index) => (
                    <div className={"px-6 py-4 flex-1 flex mx-10 " + `${msg.name === name && 'justify-end'}`}
                        key={index}>
                        <div className="flex items-start mb-4 text-sm">
                            <div className="flex-1 overflow-hidden">
                                <div>
                                    <span className="pr-5 font-bold">{msg.name}</span>
                                    <span className="bg-purple-200 py-1 px-2 dark:text-gray-800 rounded-lg text-grey text-xs">{msg.time !== null
                                        && (msg.time.substring(5, 10) + ' ' + msg.time.substring(11, 19))}
                                    </span>
                                </div>

                                <div className="p-2 flex " >
                                    <p className={'p-4 rounded-lg text-black leading-normal bg-white ' + `${msg.name === name && 'bg-green-200'}`}>
                                        {msg.msg}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pb-6 px-4 flex-none mt-4 font-Noto">
                <div className="flex rounded-lg border-2 border-grey ">
                    <button
                        onClick={() => addMsg(dispatch, { name, msg, time: new Date().toISOString(Date.now()) })}
                        className="text-3xl text-grey border-r-2 border-grey p-2">
                        <svg className="fill-current h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path
                                d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
                        </svg>
                    </button>
                    <input type="text" className="w-full px-4" placeholder="Add a new message!"
                        onChange={e => setMsg(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Messages
