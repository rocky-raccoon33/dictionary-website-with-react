import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faKissWinkHeart } from '@fortawesome/free-solid-svg-icons';
import { faConnectdevelop, faDev, faFacebook, faGithubAlt, faHackerrank, faReddit, faTwitter, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode, faGrin } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <main className="main-layout container px-6">
            <div className="mx-auto flex flex-col lg:flex-row lg:mb-32">
                <div className="flex-col w-full">
                    <div className="container mx-auto flex justify-center">
                        <div className="text-center inline-flex flex-col justify-center w-7/8">
                            <div className="overflow-auto container-wide mx-auto flex flex-col lg:flex-row justify-start lg:mt-5  p-5 border-b-2">
                                <div>
                                    <h1 className="text-3xl xl:text-4xl leading-tight font-semibold font-Inconsolata dark:text-green-100">
                                        Hi, This is
                                        <span className="bg-purple-600 text-white px-3  py-2 rounded-lg">Morse</span>
                                    </h1>
                                    <p className="text-lg lg:text-xl xl:text-xl mt-3 font-light leading-tight font-Inconsolata dark:text-green-100">
                                        I'm a self-taught Full-stack Developer who shares programming goodness with the community&nbsp;<FontAwesomeIcon icon={faGrin} color="gray" /></p>
                                    <ul className=" font-Inconsolata text-lg flex mt-4 dark:text-green-100 text-purple-600 flex-wrap align-items-center justify-around xl:w-3/4 ml-5">
                                        <li><FontAwesomeIcon icon={faCode} color="gray" size="1x" />	&nbsp;JavaScript</li>
                                        <li><FontAwesomeIcon icon={faCode} color="gray" size="1x" />	&nbsp;Java</li>
                                        <li><FontAwesomeIcon icon={faCode} color="gray" size="1x" />	&nbsp;React</li>
                                        <li><FontAwesomeIcon icon={faCode} color="gray" size="1x" />	&nbsp;Spring boot</li>
                                        <li><FontAwesomeIcon icon={faCode} color="gray" size="1x" />	&nbsp;PostgreSql</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="mt-6 text-black-50 text-xl  font-semibold dark:text-green-100 font-Inconsolata">
                                    Feel free to reach out if you would like to learn more about me or just say hi.
                               &nbsp; <FontAwesomeIcon icon={faKissWinkHeart} size="1.5x" />
                                </p>
                            </div>
                            <div className="mt-12 text-4xl">
                                <ul className="inline-flex sm:flex lg:inline-flex flex-wrap sm:justify-between md:inline-flex">
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank" aria-label="Follow me on Instagram"
                                            className="inline-block mb-2">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faWeixin} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://twitter.com/vikryder1994" rel="noopener noreferrer" target="_blank"
                                            aria-label="Follow me on Twitter"
                                            className="inline-block mb-2">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faTwitter} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://www.hackerrank.com/rockyRaccoon" rel="noopener noreferrer" target="_blank"
                                            aria-label="Hackerrank"
                                            className="inline-block mb-2">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faHackerrank} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://github.com/rocky-raccoon94/" rel="noopener noreferrer" target="_blank"
                                            aria-label="Follow me on Github"
                                            className="inline-block mb-2 ">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faGithubAlt} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a href="https://dev.to/morse1994" rel="noopener noreferrer" target="_blank"
                                            aria-label="Follow me on Dev.to"
                                            className="inline-block mb-2">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faDev} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className="w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://www.reddit.com/user/rocky_raccoon94" rel="noopener noreferrer"
                                            target="_blank" aria-label="Reddit"
                                            className="inline-block mb-2">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faReddit} color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className=" w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://leetcode.com/morse1994/" rel="noopener noreferrer"
                                            target="_blank" aria-label="Follow me on Leetcode"
                                            className=" mb-2 text-fuscia ">
                                            <FontAwesomeIcon icon={faConnectdevelop} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" color="#7a34eb" />
                                        </a>
                                    </li>
                                    <li className=" w-1/4 sm:w-auto lg:w-1/4 md:w-1/4">
                                        <a
                                            href="https://www.facebook.com/morse2work/" rel="noopener noreferrer"
                                            target="_blank" aria-label="Follow me on Facebook"
                                            className="inline-block mb-2 ">
                                            <FontAwesomeIcon className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-150" icon={faFacebook} color="#7a34eb" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="mt-10 mb-10 border-gray-lighter" />
                            <section className="lg:flex lg:flex-no-wrap justify-center sm:justify-between">
                                <div>
                                    <p className="text-lg leading-tight font-Inconsolata font-bold text-gray-400">
                                        Spot a bug on the site?
                                    </p>
                                    <a
                                        href="https://github.com/rocky-raccoon94/devmorse-2/issues/new"
                                        rel="noopener noreferrer" target="_blank"
                                        className="text-base text-red-400 font-Inconsolata font-bold">
                                        Submit issue&nbsp;
                                        <span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </span>
                                    </a>
                                </div>
                                <div className="mx-0 md:mx-10 my-6 md:my-5 lg:my-0">
                                    <p className="text-lg leading-tight font-Inconsolata font-bold text-gray-400">
                                        Can the site be improved?
                                    </p>
                                    <a
                                        href="https://github.com/rocky-raccoon94/devmorse-2/issues/new"
                                        rel="noopener noreferrer" target="_blank"
                                        className="text-base text-red-400 font-Inconsolata font-bold">
                                        Request feature&nbsp;
                                        <span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </span>
                                    </a>
                                </div>
                                <div>
                                    <p className="text-lg leading-tight font-Inconsolata font-bold text-gray-400">
                                        Got a topic you want me to cover?
                                    </p>
                                    <a
                                        href="https://github.com/rocky-raccoon94/devmorse-2/issues/new"
                                        rel="noopener noreferrer" target="_blank"
                                        className="text-base text-red-400 font-Inconsolata font-bold">
                                        Suggest content&nbsp;
                                        <span >
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </span>
                                    </a>
                                </div>
                            </section>
                            <hr className="mt-10 mb-10 border-gray-lighter" />
                            <p className="leading-tight text-2xl dark:text-green-100">
                                <strong className="font-mono font-bold">
                                    For all business inquiries, please email me <FontAwesomeIcon icon={faEnvelope} />
                                </strong></p>
                            <div className="mt-4">
                                <a href="mailto:morse2work@gmail.com"
                                    className="text-blue-600 text-2xl">
                                    <span className=" text-white bg-purple-600 px-4  py-1 mt-2 rounded-full border-2 border-gray-300 font-concert"> morse2work@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section className="mt-10">
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Contact;