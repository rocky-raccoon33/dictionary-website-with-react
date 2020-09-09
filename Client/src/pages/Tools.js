import React from 'react'
import { Express } from '../icons'
export default function Tools() {
    return (
        <div>
            <div className="grid grid-cols-2 text-2xl font-script p-4  dark:text-green-200  container px-6">
                <div className="flex flex-row rounded-lg   bg-white dark:bg-gray-700 items-center m-4 ">
                    <img src="https://img.icons8.com/plasticine/150/000000/react.png" className="w-1/3" />
                    <p className="p-3">I was googling "Which framework is better for building user interfaces or UI components, Vue.js or React.js"
                    then <span className="underline text-red-400">React Native</span> popped up, which means that if I can build my Web Application with React, I can also build Ios/Android application.
                      So I choose React over Vue.</p>
                </div>
                <div className="flex flex-row rounded-lg  dark:bg-gray-700 bg-white items-center m-4">
                    <img className="w-1/3 m-4" src="https://img.icons8.com/color/150/000000/nodejs.png" />

                    <p className="p-3">I was using  <span className="underline text-red-400">Spring Boot</span> to build my server but then I
                    changed my mind and turned to express. Finally everything is Javascript.</p>
                </div>

                <div className="flex flex-row rounded-lg  dark:bg-gray-700 bg-white items-center m-4">
                    <img className="m-8" src="https://img.icons8.com/color/100/000000/amazon-web-services.png" />
                    <p className="p-3">I use AWS to host this website and my personal website, and my postgres is installed on Amazon EC2.</p>
                </div>


                <div className="flex flex-row rounded-lg  dark:bg-gray-700 bg-white items-center m-4">
                    <img className="m-8" src="https://img.icons8.com/color/100/000000/postgreesql.png" />
                    <p className="p=3"><span className="underline text-red-400">PostgrSql</span> is 100% open-source、highly extensible and most importantly, it's free. </p>
                </div>

                <div className="flex flex-row rounded-lg dark:bg-gray-700  bg-white items-center m-4">
                    <img className='m-4' src="https://img.icons8.com/color/150/000000/javascript.png" />
                    <p className="p-3">It took me several months to learn <span className="underline text-red-400">Javascript</span>  and fall in love with it.
                    (Just kidding) </p>
                </div>

                <div className="flex flex-row rounded-lg  dark:bg-gray-700 bg-white items-center m-4">
                    <img className='m-4' src="https://img.icons8.com/plasticine/150/000000/visual-studio-code-2019.png" />
                    <p><span className="underline text-red-400">VScode</span> is my favorite IDE. </p>
                </div>


            </div>
            <div className="flex flex-row rounded-lg justify-center m-5 dark:bg-gray-700 bg-white items-center mx-8 ">
                <p className="font-script underline text-red-300 text-2xl">Actually there's only one thing programmers need to learn. </p>
                <img src="https://img.icons8.com/plasticine/150/000000/google-logo.png" />
            </div>


        </div>
    )
}
