import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact, FaBootstrap } from 'react-icons/fa'
import { SiRedux, SiTailwindcss } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { DiCss3, DiSass, DiJavascript1, DiJqueryLogo } from "react-icons/di";

const BACHELOR_FILE_URL = 'http://localhost:3000/Bakalavr.pdf'
const MASTER_FILE_URL = 'http://localhost:3000/Magistr.pdf'
const IRM_FILE_URL = 'http://localhost:3000/AutoCAD.pdf'
const ELIF_FILE_URL = 'http://localhost:3000/Muhasibat.pdf'
const MATRIX_FILE_URL = 'http://localhost:3000/FrontEnd.pdf'

const About = () => {
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
    <div className='about'>
      <div className="aboutpage row row-cols-1 row-cols-lg-3 row-cols-md-2  g-0">
        <div className="col px-5">
          <h1>Education</h1>
          <div onClick={()=>{download(BACHELOR_FILE_URL);}} className="edu">
            <p>
              <span>Mechanical Engineer</span><br />
              <span>Azerbaijan Technical University</span><br />
              <span>Bachelor</span><br />
              <span>2015-2019</span>
            </p>
          </div>
          <div onClick={()=>{download(MASTER_FILE_URL);}}  className="edu">
            <p>
              <span>Computer technologies in mechanical engineering</span><br />
              <span>Azerbaijan Technical University</span><br />
              <span>Master</span><br />
              <span>2019-2021</span>
            </p>
          </div>
          <div onClick={()=>{download(IRM_FILE_URL );}}  className="edu">
            <p>
              <span>AutoCAD</span><br />
              <span>IRM Education Center</span><br />
              <span>2018</span>
            </p>
          </div>
          <div onClick={()=>{download(ELIF_FILE_URL);}}  className="edu">
            <p>
              <span>Accountin 1C</span><br />
              <span>"Elif" Education Center </span><br />
              <span>2021</span>
            </p>
          </div>
          <div onClick={()=>{download(MATRIX_FILE_URL);}}  className="edu">
            <p>
              <span>Front-End Development Course</span><br />
              <span>Matrix Training Center</span><br />
              <span>2022</span>
            </p>
          </div>
        </div>
        <div className="col px-5">
          <h1>Skills</h1>
          <div className='row'>
            <div className='col-6'>
              <div className="edu">
                <p><AiFillHtml5 style={{ "color": "rgb(233, 98, 39)", "fontSize": "2rem" }} />HTML</p>
              </div>
              <div className="edu">
                <p><DiCss3 style={{ "color": "rgb(47, 75, 216)", "fontSize": "2rem" }} />CSS</p>
              </div>
              <div className="edu">
                <p><DiSass style={{ "color": "rgb(198, 99, 148)", "fontSize": "2rem" }} />SASS</p>
              </div>
              <div className="edu">
                <p><FaBootstrap style={{ "color": "rgb(112, 16, 239)", "fontSize": "2rem" }} />Bootstrap</p>
              </div>
              <div className="edu">
                <p><SiTailwindcss style={{ "color": "rgb(112, 16, 239)", "fontSize": "2rem" }} />Tailwind CSS</p>
              </div>
              <div className="edu">
                <p><DiJavascript1 style={{ "color": "rgb(0, 0, 0)", "fontSize": "2rem" }} />JavaScript</p>
              </div>
              <div className="edu">
                <p><DiJqueryLogo style={{ "color": "rgb(8, 101, 166)", "fontSize": "2rem" }} />JQuery</p>
              </div>
              <div className="edu">
                <p><FaReact style={{ "color": "rgb(94, 211, 243)", "fontSize": "2rem" }} />React</p>
              </div>
            </div>
            <div className='col-6'>
            <div className="edu">
                <p><SiRedux style={{ "color": "rgb(112, 71, 178)", "fontSize": "2rem" }} />Redux</p>
              </div>
              <div className="edu">
                <p><FiFigma style={{ "fontSize": "2rem" }} />Figma</p>
              </div>
              <div className="edu">
                <p><span >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={36} height={36} viewBox="0,0,256,256" style={{ fill: '#000000' }}>
                    <defs><clipPath id="clip-1"><path d="M-40.802,33.105c0.496,-1.331 1.264,-2.903 1.318,-3.001c-0.03,0.056 -0.909,1.908 -1.318,3.001c-0.002,0.004 -0.004,0.009 -0.005,0.013c0.001,-0.004 0.003,-0.009 0.005,-0.013M-27.918,9.194c0.399,0.668 4.179,8.489 5.401,11.228c-1.203,0.611 -14.25,7.538 -16.969,9.686c1.304,-2.373 9.918,-19.954 10.494,-21.032h-0.001c0.265,-0.494 0.622,-0.636 1.075,0.118M-44.216,31.878c-0.31,0.815 -0.581,1.54 -0.814,2.167c-0.596,1.605 -0.938,2.565 -1.035,2.727l-0.139,0.511c-0.902,3.33 -1.583,6.057 -1.795,7.301l2.421,1.062h0.064c0.532,-1.871 2.656,-7.268 3.196,-8.676l0.046,-0.121c0.357,-0.945 0.951,-2.349 1.46,-3.718c6.839,-2.743 13.863,-4.877 21.07,-6.404c1.21,2.605 2.524,5.253 3.017,6.335c0.072,0.158 0.129,0.281 0.166,0.373c0.538,1.239 3.086,6.431 3.861,8.258c0.602,1.42 1.133,3.088 1.339,3.763l2.359,-0.754c0,0 -0.594,-2.418 -0.838,-3.066c-0.1,-0.266 -0.434,-1.523 -0.932,-3.389c-0.608,-1.786 -1.261,-3.587 -1.943,-5.383c-0.844,-2.221 -1.733,-4.43 -2.636,-6.588c-1.007,-2.406 -2.031,-4.749 -3.033,-6.967c-3.519,-7.791 -6.758,-14.068 -7.933,-16.309h-4.49c-5.163,9.304 -9.634,18.93 -13.411,28.878z" id="_tcPC28ZsEauYvlMQO0K_b" fill="none" /></clipPath><linearGradient x1="32.405" y1="2.81" x2="22.997" y2="50.864" gradientUnits="userSpaceOnUse" id="color-1_2JfzmJYy7OGc_gr1"><stop offset="0.457" stopColor="#cb2123" /><stop offset={1} stopColor="#752425" /></linearGradient><linearGradient x1="21.953" y1="26.277" x2="22.463" y2="14.022" gradientUnits="userSpaceOnUse" id="color-2_2JfzmJYy7OGc_gr2"><stop offset="0.1" stopColor="#b75e5a" /><stop offset="0.949" stopColor="#6c272d" /></linearGradient><linearGradient x1="30.743" y1="30.664" x2="14.914" y2="36.409" gradientUnits="userSpaceOnUse" id="color-3_2JfzmJYy7OGc_gr3"><stop offset={0} stopColor="#a32424" /><stop offset={1} stopColor="#752425" /></linearGradient><linearGradient x1="10.056" y1="46.027" x2="14.081" y2="34.329" gradientUnits="userSpaceOnUse" id="color-4_2JfzmJYy7OGc_gr4"><stop offset="0.343" stopColor="#d77670" /><stop offset="0.949" stopColor="#a62224" /></linearGradient><linearGradient x1="40.506" y1="46.935" x2="32.254" y2="31.827" gradientUnits="userSpaceOnUse" id="color-5_2JfzmJYy7OGc_gr5"><stop offset="0.343" stopColor="#d77670" /><stop offset="0.949" stopColor="#a62224" /></linearGradient></defs><g fillOpacity={0} fill="#f10000" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,256v-256h256v256z" id="bgRectangle" /></g><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.33333,5.33333)"><path d="M-40.802,33.105c0.496,-1.331 1.264,-2.903 1.318,-3.001c-0.03,0.056 -0.909,1.908 -1.318,3.001c-0.002,0.004 -0.004,0.009 -0.005,0.013c0.001,-0.004 0.003,-0.009 0.005,-0.013M-27.918,9.194c0.399,0.668 4.179,8.489 5.401,11.228c-1.203,0.611 -14.25,7.538 -16.969,9.686c1.304,-2.373 9.918,-19.954 10.494,-21.032h-0.001c0.265,-0.494 0.622,-0.636 1.075,0.118M-30.805,3c-5.163,9.304 -9.634,18.93 -13.411,28.878c-0.31,0.815 -0.581,1.54 -0.814,2.167c-0.596,1.605 -0.938,2.565 -1.035,2.727l-0.139,0.511c-0.902,3.33 -1.583,6.057 -1.795,7.301l2.421,1.062h0.064c0.532,-1.871 2.656,-7.268 3.196,-8.676l0.046,-0.121c0.357,-0.945 0.951,-2.349 1.46,-3.718c6.839,-2.743 13.863,-4.877 21.07,-6.404c1.21,2.605 2.524,5.253 3.017,6.335c0.072,0.158 0.129,0.281 0.166,0.373c0.538,1.239 3.086,6.431 3.861,8.258c0.602,1.42 1.133,3.088 1.339,3.763l2.359,-0.754c0,0 -0.594,-2.418 -0.838,-3.066c-0.1,-0.266 -0.434,-1.523 -0.932,-3.389c-0.608,-1.786 -1.261,-3.587 -1.943,-5.383c-0.844,-2.221 -1.733,-4.43 -2.636,-6.588c-1.007,-2.406 -2.031,-4.749 -3.033,-6.967c-3.519,-7.791 -6.758,-14.068 -7.933,-16.309h-4.49z" id="_tcPC28ZsEauYvlMQO0K_a 1" fill="#d86666" /><g clipPath="url(#clip-1)"><rect x="-58.115" y="-6.288" width="59.232" height="61.221" id="_tcPC28ZsEauYvlMQO0K_c 1" fill="#d86666" /></g><path d="M22.2,3c-5.17,9.3 -9.64,18.93 -13.42,28.88c-0.31,0.81 -0.58,1.54 -0.81,2.17c-0.6,1.61 -0.94,2.56 -1.04,2.72c0.23,-0.83 0.47,-1.71 0.72,-2.6c0.18,-0.63 0.36,-1.27 0.54,-1.92c1.4,-4.9 3.25,-10.13 4.46,-13.68c1.815,-4.99 3.951,-9.832 6.416,-14.527c0.337,-0.642 1.009,-1.043 1.735,-1.043z" fill="#942d32" /><path d="M13.52,30.1c1.32,-2.41 9.91,-19.95 10.49,-21.02c0.13,-0.25 0.29,-0.41 0.47,-0.41c0.18,0 0.38,0.15 0.6,0.52c0.4,0.67 4.18,8.49 5.4,11.23c-1.2,0.61 -14.22,7.52 -16.96,9.68zM42.84,44.97c0.01,0 0.01,0 0.02,-0.01c0.6,-0.44 0.91,-1.23 0.7,-2c-0.15,-0.54 -0.3,-1.07 -0.4,-1.32c-0.1,-0.27 -0.43,-1.53 -0.93,-3.39c-0.61,-1.79 -1.26,-3.59 -1.94,-5.39c-0.85,-2.22 -1.74,-4.43 -2.64,-6.58c-1.01,-2.41 -2.03,-4.75 -3.03,-6.97c-3.52,-7.79 -6.76,-14.07 -7.93,-16.31h-4.49c-5.17,9.3 -9.64,18.93 -13.42,28.88c-0.31,0.81 -0.58,1.54 -0.81,2.17c-0.6,1.6 -0.94,2.56 -1.04,2.72l-0.13,0.51c-0.64,2.33 -1.16,4.36 -1.49,5.8c-0.16,0.7 0.1,1.4 0.62,1.84c0.45,0.2 0.99,0.4 1.61,0.56c0.6,-2.02 2.62,-7.14 3.14,-8.51l0.05,-0.11v-0.01c0.35,-0.95 0.95,-2.35 1.46,-3.72c6.84,-2.74 13.86,-4.88 21.07,-6.4c1.21,2.6 2.52,5.25 3.01,6.33c0.02,0.03 0.03,0.05 0.04,0.08c0.01,0.02 0.03,0.05 0.03,0.07c0.01,0.02 0.02,0.05 0.03,0.07c0.03,0.06 0.05,0.11 0.07,0.15c0.54,1.24 3.09,6.43 3.86,8.26c0.34,0.8 0.65,1.68 0.9,2.41c0.03,0.08 0.06,0.16 0.08,0.24c0.13,0.39 0.24,0.74 0.32,0.98c0,0.02 0.01,0.04 0.01,0.05h0.01z" fill="url(#color-1_2JfzmJYy7OGc_gr1)" /><path d="M42.23,38.25c-0.61,-1.79 -1.26,-3.59 -1.94,-5.39c-0.85,-2.22 -1.74,-4.43 -2.64,-6.58c-1.01,-2.41 -2.03,-4.75 -3.03,-6.97c-3.52,-7.79 -6.76,-14.07 -7.94,-16.31h0.938c0.866,0 1.674,0.462 2.097,1.218c1.768,3.162 3.316,6.428 4.645,9.812c0.53,1.28 1.23,2.84 1.81,4.57c0.78,2.31 1.96,4.92 2.72,7.52c0.67,2.31 1.31,4.61 1.88,6.71c0.57,2.06 1.07,3.93 1.46,5.42z" fill="#e02b2b" /><path d="M30.48,20.42c-1.07,0.6 -1.63,0.96 -2.85,1.59c-1.17,-3.25 -2.21,-6.07 -2.49,-6.74c-0.4,-0.95 -1.03,-0.86 -1.37,0.12c-1.87,5.28 -3.3,8.73 -4.1,10.93c-2.64,1.46 -4.24,2.62 -6.15,3.79h-0.01c1.32,-2.4 9.92,-20 10.5,-21.03l-0.01,-0.01c0.26,-0.44 0.4,-0.62 0.52,-0.62c0.17,0 0.28,0.33 0.56,0.74c0.45,0.67 4.19,8.52 5.4,11.23z" fill="url(#color-2_2JfzmJYy7OGc_gr2)" /><path d="M36.28,33.06c-1.49,0.13 -2.59,0.3 -4.55,0.51l-0.11,0.01c-4.03,0.45 -9.01,1.1 -14.72,2.06l-0.58,0.09c-1.97,0.34 -3.46,0.71 -5.59,1.12c0.36,-0.96 0.95,-2.37 1.46,-3.71v-0.01c6.8,-2.85 13.83,-4.99 21.07,-6.4c1.21,2.6 2.52,5.25 3.02,6.33z" fill="url(#color-3_2JfzmJYy7OGc_gr3)" /><path d="M16.32,35.74c-0.22,0.56 -0.43,1.12 -0.65,1.67c-0.17,0.44 -0.34,0.88 -0.51,1.31c-0.67,1.78 -1.28,3.42 -1.78,4.73c-0.1,0.3 -0.21,0.58 -0.3,0.84c-0.18,0.47 -0.33,0.88 -0.46,1.22c-1.1,0.28 -2.07,0.32 -2.79,0.3c-0.01,0.01 -0.02,0.01 -0.02,0c-0.07,0 -0.15,-0.01 -0.22,-0.01l-0.34,-0.03h-0.03c-0.06,0 -0.12,0 -0.17,-0.01c-0.01,0 -0.03,0 -0.04,-0.01c-0.53,-0.05 -1.02,-0.15 -1.47,-0.27c0.6,-2.02 2.62,-7.14 3.14,-8.51l0.05,-0.11c2.13,-0.42 3.62,-0.79 5.59,-1.12z" fill="url(#color-4_2JfzmJYy7OGc_gr4)" /><path d="M41.62,45.37h-0.01c-0.75,0.18 -1.3,0.2 -2.38,0.22c-1.31,0.04 -2.08,0.05 -2.91,-0.18c-0.2,-0.55 -0.43,-1.19 -0.7,-1.88c-0.01,-0.01 -0.01,-0.03 -0.01,-0.04c-0.25,-0.68 -0.54,-1.43 -0.84,-2.21c-0.2,-0.51 -0.41,-1.05 -0.63,-1.61c-0.43,-1.1 -0.89,-2.26 -1.35,-3.44c-0.35,-0.88 -0.7,-1.77 -1.06,-2.66c1.96,-0.22 3.05,-0.39 4.54,-0.51h0.01c0.02,0.05 0.05,0.11 0.06,0.15c0.01,0.02 0.02,0.05 0.03,0.07c0.03,0.06 0.05,0.11 0.07,0.15c0.54,1.24 3.09,6.43 3.86,8.26c0.34,0.8 0.65,1.68 0.9,2.41c0.03,0.08 0.06,0.16 0.08,0.24c0.13,0.39 0.24,0.74 0.32,0.98c0.01,0.02 0.01,0.04 0.02,0.05z" fill="url(#color-5_2JfzmJYy7OGc_gr5)" /><path d="M36.3,45.41c-0.11,-0.03 -0.22,-0.07 -0.34,-0.11c-0.43,-0.15 -0.77,-0.33 -0.99,-0.44l-0.01,-0.01l-0.1,-0.07c-0.65,-0.44 -1.07,-1.15 -1.13,-1.94c-0.06,-0.82 -0.18,-1.64 -0.35,-2.45c-0.47,-2.3 -1.06,-4.57 -1.76,-6.81l0.1,-0.01c0.83,2.07 1.66,4.17 2.42,6.1c0.22,0.56 0.43,1.1 0.63,1.61c0.61,1.6 1.14,3.02 1.53,4.13z" fill="#a12930" /><path d="M16.9,35.64c-0.26,1.34 -0.46,2.46 -0.53,2.75c-0.11,0.44 -0.2,2.45 -0.25,3.9c-0.04,0.96 -0.55,1.84 -1.36,2.34l-0.63,0.39c-0.29,0.12 -0.61,0.24 -0.94,0.34c-0.19,0.06 -0.38,0.11 -0.57,0.15c0.13,-0.34 0.28,-0.75 0.46,-1.22c0.09,-0.26 0.2,-0.54 0.3,-0.84c0.5,-1.31 1.11,-2.95 1.78,-4.73c0.17,-0.43 0.34,-0.87 0.51,-1.31c0.22,-0.55 0.43,-1.11 0.65,-1.67z" fill="#a12930" /></g></g>
                  </svg>
                </span>AutoCAD</p>
              </div>
              <div className="edu">
                <p>English</p>
              </div>
              <div className="edu">
                <p>Responsive design</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-5">
          <h1>Work Experience</h1>
          <div className="work">
            <p>
              <span>Saleswoman-Cashier</span><br />
              <span>Araz Store</span><br />
              <span>2020</span>
            </p>
          </div>
          <div className="work">
            <p>
              <span>Warehousewoman</span><br />
              <span>Araz Store</span><br />
              <span>2021</span>
            </p>
          </div>
          <div className="work">
            <p>
              <span>Frontend Developer</span><br />
              <span>High Result Academy</span><br />
              <span>2023</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About