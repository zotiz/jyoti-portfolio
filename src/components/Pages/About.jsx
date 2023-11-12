import React from 'react'
import { Link } from 'react-router-dom'

import { Progress } from 'antd';

//Json object 
const progressBar = [
  {
    label:'React.js',
    perct: 85
  },
  {
    label:'JavaScript',
    perct: 85
  },
  {
    label:'HTML',
    perct: 95
  },
  {
    label:'CSS',
    perct: 90
  },
  {
    label:'Tailwind.CSS',
    perct: 70
  },
  {
    label:'Node.js',
    perct: 50
  },
  {
    label:'Express',
    perct: 50
  },
  {
    label:'MongoDB',
    perct: 50
  },
  {
    label:'GitHub',
    perct: 50
  },
  {
    label:'Photoshop',
    perct: 60
  }
]
const About = () => {
  return (
    <div className=''>
       <div className='text-center md:text-left'>
          
          <p className='text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold '>I'm Jyoti Dahal and <span className='text-[#ec1839]'>React Developer</span></p>
          <p className='xs:text-base md:text-lg xl:text-2xl py-4 text-left'>
          Hello, my name is Jyoti Dahal.I am a self-taught front-end developer. I primarily focus on writing clean, elegant, and efficient code. I am proficient in React, Redux, JavaScript, Tailwind, Material UI, MongoDB, NodeJs, Express, CSS and HTML. I also review existing code and can consult with you on how to improve it.
            </p>

            <p className='xs:text-base md:text-lg xl:text-2xl text-left'>
            With a strong design background, I approach projects as a front-end developer holistically. I value the collaboration among designers, developers, and stakeholders, as their collective expertise forms exceptional user experiences. My focus lies in comprehending user expectations, goals, and weaving them into effective storytelling and enhanced functionality. As a designer and developer, I aim to join like-minded teams and apply my skills to craft sophisticated digital products.
             </p>
         
        </div>
    <div className='w-full grid md:grid-cols-2  gap-4 '>
      <div className=' flex flex-col gap-8'>
        <table>
          <tr>
            <td>Name:</td>
            <td>Jyoti Raj Dahal</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>Dallas, Texas, USA</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>jyotidahal1234@gmail.com</td>
          </tr>
          <tr>
            <td>Degree:</td>
            <td>Masters of Eduction in Mathematices(T.U. Nepal)</td>
          </tr>
          <tr> 
            <td>Certifications:</td>
            <td>
              <ul>
                <li>McCombs School of Business, UTA || Professional Certification in Full Stack Software Development: Building Scalable Cloud Applications </li>
                <li>
                Bootcamp || JavaScript, React, Redux & Next js.
              WAP Institute, Internet Based, India
              Web Development Course
                </li>
                <li>
                Bootcamp | Front-End Web Development
                Codecademy, Internet Based, TX
               Front-End Development Course
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>+1-682-221-6008</td>
          </tr>
          <tr>
            <td>Freelnace:</td>
            <td>Available</td>
          </tr>
        </table>
      
          <div className="pb-12 pt-4 flex justify-center xs:justify-start">
          <Link to='/portfolio'  className='  font-semibold text-base bg-[#ec1839] hover:border-[#ec1839] hover:bg-teal-400  hover:text-[#ec1839] border-2 border-white rounded-lg shadow-xl text-white p-2 px-4 sm:px-10'>Hire Me</Link>
          </div>
    
          
      </div>
    
       
      <div className="">
        {
          progressBar.map((item,index)=>{
            return(
              <div className="px-12 flex w-full">
            <h5 className='flex-1'>{item.label}</h5>
           <Progress className='flex-1 w-11/12' percent={item.perct} status="active" strokeColor="#ec1839" trailColor='#efefef'/>
           </div>
            )
          })
        }
        
          
        
       

     
      </div>
    </div>
    </div>
  )
}

export default About