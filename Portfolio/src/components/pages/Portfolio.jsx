import React from 'react'
import universitylife from '../../assets/img/Screenshot 2023-10-02 213651.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2  g-0 m-0">
        <div className="col p-0 d-flex justify-content-center align-items-center">
          <a className='d-flex flex-column text-decoration-none' href="http://universitylife.co.uk/">
            <img width={230} src={universitylife} />
            <span className='text-light mt-1'>http://universitylife.co.uk/</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio