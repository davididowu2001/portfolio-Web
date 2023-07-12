import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import {CgProfile} from 'react-icons/cg';
import {RiCodeSSlashLine} from 'react-icons/ri';
import {BsBuildingsFill} from 'react-icons/bs';
import {BsFillTelephoneFill} from 'react-icons/bs';
import{LiaToolsSolid} from 'react-icons/lia';
import { useState } from 'react';
const Navbar = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav >
       
          <a href="#home" className={activeNav ==='#'? 'active':''}><CgProfile/></a>

          <a href="#skill" onClick={()=> setActiveNav('#skill')} className={activeNav ==='#projects'? 'active':''}><BsBuildingsFill/></a>
      
       
          <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav ==='#projects'? 'active':''}><RiCodeSSlashLine/></a>
       
          <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav ==='#projects'? 'active':''}><LiaToolsSolid/></a>
        
        
          <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#projects'? 'active':''}><BsFillTelephoneFill/></a>
        
      
    </nav>
  );
}

export default Navbar;
