import React from 'react';
import { Link } from 'react-router-dom';
import {XMarkIcon} from "@heroicons/react/24/solid";

const SignUpModal = ({ showModal, closeModal }) => {
    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-40">
                        <div className="backdrop-blur-sm backdrop-filter relative bg-navygreen-200 rounded-lg p-8 max-w-md z-10 bg-opacity-60">
                            <button className="absolute top-2 right-2 text-gray-100" onClick={closeModal}>
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                            <p className="text-sm mb-4">Sign up to become part of the Plantify community!</p>
                            <form className="space-y-4 text-gray-100">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium">Username</label>
                                    <input type="text" id="username" name="username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                                    <input type="password" id="password" name="password" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <p>New here? <span><Link to="/home"><u className='hover:text-navygreen-400'>create an account</u></Link></span></p>
                                <button type="submit" className="bg-navygreen-300 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-navygreen-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default SignUpModal;