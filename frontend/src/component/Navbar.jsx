import React from 'react'
import '../index.css'
import {Button, IconButton, Text, useColorMode} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { PlusSquareIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <div className='navbar'>
      <Link to='/'>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
          _hover={{ bgGradient: "linear(to-l, #4028CA, #8F0080)" ,
            textShadow:'3px 3px #00000019'}}
        >
          Product Screen 🏪
        </Text>
      </Link>
      <div className='navbar-right'>
        <Link to={'/create'}><Button ><PlusSquareIcon/></Button></Link>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <IoMoon/> : <LuSun/>}
        </Button>
      </div>
    </div>
  )
}

export default Navbar
