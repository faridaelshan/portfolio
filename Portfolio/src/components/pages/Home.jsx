import React from 'react'
import img from '../../assets/img/f.png'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {AiFillFilePdf} from 'react-icons/ai'

const FILE_URL = 'http://localhost:3000/CVFaridaMamedovaFrontEnd.pdf'

const Home = () => {
  const download=(url)=>{
    const filename =url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url ;
    aTag.setAttribute("download",filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <div className='home'>
      <div className="homepage">
        <div className="col-8">
           <h1>Farida Mammadova</h1>
           <p>I'm Front End Developer</p>
           <div className="d-flex">
            <a href="https://www.linkedin.com/in/feride-elshan-7a74291b6/"><BsLinkedin /></a>
            <a href="https://github.com/faridaelshan"><BsGithub /></a>
            <button className='bg-transparent border-0 fs-1 text-light' onClick={()=>{download(FILE_URL);}}><AiFillFilePdf /></button>
           </div>
        </div>
        <div className="col-4">
          <img src={img} />
        </div>
      </div>
    </div>
  )
}

export default Home