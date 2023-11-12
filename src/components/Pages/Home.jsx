import React from 'react'
import TypingAnimation from '../Animation/TypingAnimation'
import { Link } from 'react-router-dom'
import {CaretRightOutlined} from '@ant-design/icons'
const Home = () => {
  return (
   
    <div className=''>
       <div className='text-center md:text-left'>
          <h1 className='text-2xl xs:text-3xl sm:text-4xl  font-bold pt-4' style={{fontFamily:"Clicker Script,cursive"}}>Hello! This is</h1>
          <p className='text-2xl xs:text-4xl sm:text-5xl font-bold my-2 text-[#ec1839]'>Jyoti Dahal</p>
          <div className='flex justify-center md:justify-start xs:flex-row flex-col  gap-2 my-4 '>
          <p className='text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold '>I am a</p>
          <TypingAnimation />
          </div>
         
        </div>
    <div className='w-full flex  gap-4 flex-wrap-reverse md:flex-nowrap'>
      <div className=' flex flex-col gap-8'>
      <div className='flex flex-col gap-2 justify-center items-center md:pt-12 pb-2'>
            <p className='xs:text-base md:text-lg xl:text-2xl '>
           
             Hello! I'm a seasoned software developer with 2+ years of experience. My expertise lies in creating sleek user interfaces for web and mobile applications. Proudly graduated from the <i>McCombs School of Business, University of Texas at Austin</i>, I combine academic knowledge with hands-on skills.


            </p>
          
             <p className='xs:text-base md:text-lg xl:text-2xl'>
             My journey is a blend of imagination and precision. Each project is a story where aesthetics meet functionality. Explore my portfolio showcasing my dedication to simplifying intricate ideas into user-centered designs. Let's shape the digital world together!"
             </p>

            
          </div>
          <div className="pb-12 pt-4 flex justify-center xs:justify-start">
          <Link to='/portfolio'  className='flex justify-center items-center gap-2  font-semibold text-base bg-[#ec1839] hover:border-[#ec1839] hover:bg-teal-400  hover:text-[#ec1839] border-2 border-white rounded-lg shadow-xl text-white p-2 px-4 sm:px-8'>View Work <CaretRightOutlined /></Link>
          </div>
    
          
      </div>
      <div className=''>
        <div>
          <img src="myImg1.png" alt="Jyoti"/>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default Home