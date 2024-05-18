<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import logo from '../images/leaf.png';
import { Link } from "react-router-dom";
import SignUpModal from '../popups/signup-modal';
import avatar from '../images/testimonial-3.jpeg';
import ProfileDropdown from '../dropdowns/profile-dropdown';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // // Retrieve user information from local storage
        // const storedUser = localStorage.getItem('user');
        // if (storedUser) {
        //     const parsedUser = JSON.parse(storedUser);
        //     setUser(parsedUser);
        // }


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Retrieve user information from local storage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
        }
    }, []);

    useEffect(() => {
        if (user) {
            console.log('user: ' + user._id)
            console.log('user: ' + user.username);
            console.log('user: ' + user.password);  // Be cautious about logging sensitive information
            console.log('user: ' + user.email);
            console.log('user: ' + user.isSocial);
        }
    }, [user]);

    const listItemStyle = {
        transition: 'color 1s ease-in-out',
        color: isScrolled ? '#ffffff' : '#222'
    };

    //for the popup
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return(
        <nav className={`fixed w-full z-30 top-0 start-0  ${isScrolled ? 'bg-gray-100' : 'bg-transparent'} transition-colors duration-1000 ease-in-out`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Plantify Logo"></img> <span className='font-josefin-sans text-lg font-semibold text-navygreen-300 '>Plantify</span>
                </Link>
                <div className="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {user ? (
                        <>
                            <p className='self-center'>{user.username}</p>
                            <ProfileDropdown/>
                        </>
                    ) : (
                        <button type="button" onClick={openModal} className={`font-josefin-sans text-sm font-semibold text-gray-100 p-4 rounded hover:rounded-full border-2 border-gray-100 ${isScrolled ? 'border-white text-white' : 'border-gray-100 text-gray-100'} transition-colors duration-1000 ease-in-out`}>Become a member</button>
                    )}
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
=======
import React from "react";
import logo from '../logo.png';

const NavBar = () => {
    return(
        <nav class="bg-nav-green fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Flowbite Logo"></img>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class="font-josefins bg-sage-200 text-sm font-semibold text-light-black p-2 rounded-full">Start Donating</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
<<<<<<< HEAD
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className={`flex flex-col p-4 md:p-0 mt-4 font-josefin-sans text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ${isScrolled ? 'text-white' : 'text-gray-100'} transition-colors duration-1000 ease-in-out`}>
                        <li>
                            <Link to="/home"  className="navbar-link py-2 px-3 hover:font-semibold" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className="navbar-link py-2 px-3 hover:font-semibold">Shop</Link>
                        </li>
                        <li>
                            <Link to="/campaign" className="navbar-link py-2 px-3 hover:font-semibold">Campaigns</Link>
                        </li>
                        <li>
                            <Link to="/plantify-network" className="navbar-link py-2 px-3 hover:font-semibold">Plantify Network</Link>
                        </li>
                        {user && (
                            <li>
                                <Link to="/personal-growth" className="navbar-link py-2 px-3 hover:font-semibold">Personal Growth</Link>
                            </li>
                        )}
                        {user && (
                            <li>
                                <Link to="/dashboard" className="navbar-link py-2 px-3 hover:font-semibold">Dashboard</Link>
                            </li>
                        )}
                        <li>
                            <Link to="/about-us" className="navbar-link py-2 px-3 hover:font-semibold">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="navbar-link py-2 px-3 hover:font-semibold">Contact us</Link>
=======
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-josefins text-sm md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 ">
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">Shop</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">Campaigns</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">Plantify Network</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">Personal Growth</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">About us</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-light-black hover:text-white">Contact us</a>
>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
                        </li>
                    </ul>
                </div>
            </div>
<<<<<<< HEAD
            <SignUpModal showModal={showModal} closeModal={closeModal} />
        </nav>
=======
        </nav>

>>>>>>> b3291e92832e236fa7cdce97e49d448b2bcf4342
    );
}

export default NavBar;
