import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import CreateProduct from './routes/CreateProduct'
import {Box, useColorModeValue} from "@chakra-ui/react";
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreateProduct/>}></Route>
      </Routes>
    </div>
  )
}

export default App
