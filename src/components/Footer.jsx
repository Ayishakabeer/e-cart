//rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className=' bg-violet-600 w-full p-5 text-white mt-20'>
    <div className="grid grid-cols-4 d-flex mx-3">
      <div>
      <Link className='text-2xl font-bold' to={'/'}> <i className="fa-solid fa-truck-fast me-1"></i> E Cart</Link>
      <p className='text-l'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
      <p>Code licensed Luminar, docs CC BT 3.0.</p>
      <p>Currently v5.3.2</p>
      </div>
      <div className='mx-20'>
        <h1 className='text-2xl font-bold'>Links</h1>
        <ul>
          <li><a href="">Landing Page</a></li>
          <li><a href="">Home Page</a></li>
          <li><a href="">Watch History Page</a></li>
        </ul>
      </div>
      <div className='mx-20'>
        <h1 className='text-2xl font-bold'>Guides</h1>
        <ul>
          <li><a href="">React</a></li>
          <li><a href="">React Bootsrap</a></li>
          <li><a href="">React Router</a></li>
        </ul>
      </div>
      <div className='mx-20'>
        <h1 className='text-2xl font-bold'>Contact Us</h1>
        <div className='flex gap-3'>
          <input className='rounded p-1 text-black' type="text" placeholder='Enter your email here' /><a href=""><i className="fa-solid fa-arrow-right mt-3"></i></a>
        </div>
        <ul className='flex mt-4 gap-8'>
          <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
          <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
          <li><a href=""><i className="fa-brands fa-github"></i></a></li>
          <li><a href=""><i className="fa-solid fa-phone"></i></a></li>
        </ul>
      </div>
    </div>
    <h1 className='text-white text-center'>Copyright &copy; Ayisha, E Cart. Built with React Redux</h1>
    </div>
    </>
  )
}

export default Footer