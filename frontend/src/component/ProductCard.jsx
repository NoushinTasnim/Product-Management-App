import { Box, HStack, IconButton, Image, Input, Modal, ModalContent, ModalFooter, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useToast, Button, Text, useColorModeValue } from '@chakra-ui/react'
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useProductStore } from '../../store/product'

const ProductCard = ({product}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const {deleteProduct, updateProduct} = useProductStore();
    const toast = useToast();

    const handleDeleteProduct = async(pid)=> {
        console.log("ho ", pid);
        const {success, message} = await deleteProduct(pid);

        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
        else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                duration: 3000,
            });
        }
    }

    const handlUpdateProduct = async(pid, updatedProduct)=> {
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();

        if(!success){
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true,
                duration: 3000,
            });
        }
        else{
            toast({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true,
                duration: 3000,
            });
        }
    }
  return (
        <Box
            shadow={'2xl'}
            transition={'all .3s'}
            rounded={'lg'}
            overflow={'hidden'}
            _hover={{transform: 'translateY(-10px)', shadow: 'x1'}}
        >
        <Image src={product.image} alt={product.name} h={80} w={'full'} objectFit={'cover'}/>
        
        <Box>
            <Box px={8}>
                <Text
                    bgColor={useColorModeValue("black", "whitesmoke")}
                    bgClip="text"
                    fontSize="2xl"
                    fontWeight="bold"
                >
                    {product.name}
                </Text>
                <Text
                    bgColor={useColorModeValue("black", "whitesmoke")}
                    bgClip="text"
                    fontSize="3xl"
                    fontWeight="regular"
                >
                    {product.price} Tk
                </Text>
            </Box>
            <HStack spacing={2} justify={'right'} p={4}>
                <IconButton icon={<EditIcon/>} onClick={onOpen} colorScheme='blue'></IconButton>
                <IconButton icon={<DeleteIcon/>} onClick={()=>handleDeleteProduct(product._id)} colorScheme='red'></IconButton>
            </HStack>
        </Box>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <Input 
                    mt={4} 
                    name='name'
                    placeholder='Product name' 
                    value={updatedProduct.name}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct, name: e.target.value})}
                />
                
                <Input 
                    mt={4} 
                    name='price'
                    placeholder='Product Price' 
                    type='number' 
                    value={updatedProduct.price}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct, price: e.target.value})}
                />
                
                <Input 
                    mt={4} 
                    name='image'
                    placeholder='Product image url' 
                    value={updatedProduct.image}
                    onChange={(e)=> setUpdatedProduct({...updatedProduct, image: e.target.value})}
                />
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={()=>handlUpdateProduct(product._id, updatedProduct)}>
                Update
                </Button>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
    
  )
}

export default ProductCard
