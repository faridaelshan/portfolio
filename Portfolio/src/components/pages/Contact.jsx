import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contactpage">
        <div className="col-6 ps-5 pt-5">
          <div className="email d-flex">
            <MdEmail style={{ "fontSize": "3rem" }} />
            <div className="mail ms-4">
              <h2>Email:</h2>
              <p><span onClick={() => window.location = 'mailto:feride565a3@gmail.com'}>feride565a3@gmail.com</span> <br /><span onClick={() => window.location = 'mailto:faridaelshann@gmail.com'}>faridaelshann@gmail.com</span></p>
            </div>
          </div>
          <div className="phone d-flex">
            <FaPhoneAlt style={{ "fontSize": "3rem" }} />
            <div className="number  ms-4">
              <h2>Call:</h2>
              <a className='text-light text-decoration-none' href='tel:+994503554174'>+994503554174</a>
            </div>
          </div>
          <div className="location mt-4 d-flex">
            <ImLocation style={{ "fontSize": "3rem" }} />
            <div className="area  ms-4">
              <h2>Location:</h2>
              <p>Azerbaijan, Baku city, Sabunchu <br /> district, Ramana settlement, dairy <br /> farm massif, 2nd plot house 1A</p>
            </div>
          </div>
        </div>
        <div className="col-6 map">
        <iframe className='small' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d189.67880968502584!2d50.006106193100585!3d40.47834101523364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI4JzQxLjgiTiA1MMKwMDAnMjIuMSJF!5e0!3m2!1saz!2saz!4v1695906770030!5m2!1saz!2saz" width={200} height={200} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <iframe className='normal' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d189.67880968502584!2d50.006106193100585!3d40.47834101523364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI4JzQxLjgiTiA1MMKwMDAnMjIuMSJF!5e0!3m2!1saz!2saz!4v1695906259212!5m2!1saz!2saz" width={450} height={350} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  )
}

export default Contact