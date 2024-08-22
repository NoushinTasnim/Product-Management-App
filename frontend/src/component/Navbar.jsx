import React from 'react'
import '../index.css'
import {Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
  return (
      <div className='navbar'>
      <Link >
        <FaBarsStaggered size={24}/>
      </Link>
      <Link to='/'>
        <Text
            bgColor={'black'}
            bgClip="text"
            fontSize="2xl"
            fontWeight={'bold'}
            textAlign={'center'}
            letterSpacing={4}
            lineHeight={1}
            textTransform={'uppercase'}
        >
          The Sass Shop
        </Text>
      </Link>
      <div>
        <Link to={'/create'}><FaPlusSquare className='btn' size={24}/></Link>
      </div>
      </div>
  )
}

export default Navbar
