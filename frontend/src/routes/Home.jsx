import { Container, SimpleGrid, Text, textDecoration, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../../store/product'
import ProductCard from '../component/ProductCard'

const Home = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(()=>{
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW='container.xl' py={24}>
      <VStack spacing={8}>
        <Text 
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
        >
          Current Products
        </Text>
        <SimpleGrid 
          columns={{
            base: 1,
            md: 2,
            lg: 4,
          }}
          spacing={10}
          w={'full'}>
            {products.map((product) =>(
              <ProductCard key={product._id} product={product}/>
            ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize='xl' textAlign={'center'} fontWeight={600} color={'grey'}>
          No products found{" "}
          <Link to= {"/create"}>
            <Text as='span' color={'blue'} _hover={{textDecoration: 'underline'}}>
              Create product
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  )
}

export default Home
