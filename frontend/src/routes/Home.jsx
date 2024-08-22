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
    <Container maxW='container.2xl' py={36}>
      <VStack spacing={8}>
        <Text 
          bgGradient="linear(to-l, #7928CA66, #FF008066)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="bold"
          textAlign={'center'}
          textShadow='-3.5px -3.5px #000000dd'
        >
          Current Products
        </Text>
        <SimpleGrid 
          columns={{
            sm:2,
            base: 1,
            md:3,
            lg: 4,
            xl:5
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
