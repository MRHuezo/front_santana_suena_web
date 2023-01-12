import React,{useState, useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import NavbarHome from '../Components/Navbar/NavbarHome';
import { Link } from "react-router-dom";



import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";



function HomeLayout() {
  return (
    <div>
       
      <NavbarHome />
      HomeLayout
      <RegisterParticipant/> 
      <Outlet />
      
    </div>
  )
}

const RegisterParticipant = () => {
  try {
    return(
      <div>
        <Button 
        variant="contained" 
        margin="normal" 
        component={Link}
        to="/inscripcion">
          REGISTRARSE EN EL CONCURSO
        </Button>
     
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}
export default HomeLayout

