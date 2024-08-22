import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import CreateProduct from './routes/CreateProduct'
import {Box, useColorModeValue} from "@chakra-ui/react";
import Navbar from './component/Navbar';

function App() {
  return (
    <Box minH={"100vh"} bg ={useColorModeValue("whitesmoke", "black.700")}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreateProduct/>}></Route>
      </Routes>
    </Box>
  )
}

export default App
