import React, { useState } from 'react'
import {useColorModeValue, Input, Button, useToast, Box, VStack, Text} from "@chakra-ui/react";
import { useProductStore } from '../../store/product';

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const {createProduct} = useProductStore();
  const handleAddProduct = async () =>{
    const {success, message} = await createProduct(newProduct);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    }
    else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  }

  return (
    <Box py={36} px ={24}>
      <Text 
          bgGradient="linear(to-l, #7928CA66, #FF008066)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
          textAlign={'center'}
          textShadow='-3.5px -3.5px #000000dd'
        >
          Create New Product
        </Text>
      <VStack py={8} spacing={4} justifyContent={'space-between'} bg ={'rgb(255, 247, 236)'}>
        <Input
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}
        />
        <Input
          placeholder="Product Price"
          name="price"
          type='Number'
          value={newProduct.price}
          onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}
        />
        <Input
          placeholder="Product Image URL"
          name="image"
          value={newProduct.image}
          onChange={(e)=> setNewProduct({...newProduct, image: e.target.value})}
        b/>
      </VStack>
      <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
        Add Product
      </Button>
    </Box>
  )
}

export default CreateProduct
