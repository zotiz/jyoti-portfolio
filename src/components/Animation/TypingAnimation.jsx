import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
  return (
   
      <Typewriter
    
       options={{
        strings: [
          '<span class="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold my-2 text-[#ec1839]">React Developer</span>',
          '<span class="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold  my-2 text-[#ec1839]">MERN Developer</span>',
          '<span class="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold  my-2 text-[#ec1839]">Freelancer</span>',
          '<span class="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold  my-2 text-[#ec1839]">UI/UX Designer</span>',
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        html:true,
      }}
      style={{fontSize: '22px'}}
      />

  )
}

export default TypingAnimation