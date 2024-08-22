import { Box, HStack, IconButton, Input, Modal, ModalContent, ModalFooter, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, useToast, Button, Text, useColorModeValue } from '@chakra-ui/react'
import {DeleteIcon, EditIcon} from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useProductStore } from '../../store/product'
import '../index.css'

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
    <Box>
        <Box
            transition={'all .3s'}
            overflow={'hidden'}
            marginBottom={4}
        >
        <img 
            className='product-img'
            src={product.image} 
            alt={product.name} 
            h={72} />
        </Box>
        <Box>
            <Box px={8} textAlign={'center'}>
                <Text
                    bgColor={useColorModeValue("black", "whitesmoke")}
                    bgClip="text"
                    fontSize="xl"
                    letterSpacing={2}
                    lineHeight={1}
                    textTransform={'uppercase'}
                    marginBottom={2}
                >
                    {product.name}
                </Text>
                <Text
                    bgColor={useColorModeValue("black", "whitesmoke")}
                    bgClip="text"
                    fontSize="xl"
                >
                    TK. {product.price}
                </Text>
            </Box>
            <HStack spacing={2} justify={'center'} p={4}>
                <IconButton icon={<EditIcon bg={'transparent'}/>} onClick={onOpen} colorScheme='blue'></IconButton>
                <IconButton icon={<DeleteIcon bg={'transparent'}/>} onClick={()=>handleDeleteProduct(product._id)} colorScheme='red'></IconButton>
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
