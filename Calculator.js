import React, { useEffect, useState } from 'react'
import {
  VStack,
  HStack,
  Button,
  Box,
  Heading,
  Text,
  SimpleGrid
} from 'native-base'
import R from 'ramda'

export default Calculator = () => {
  const numbers = R.range(0, 10)

  return (
    // <Center flex={1}>
    <Box>
      <Heading mb="5" textAlign="center">
        Calculator
      </Heading>
      <Text fontSize="lg" borderWidth="1" textAlign="right" paddingRight="1">
        6xl
      </Text>

      <SimpleGrid columns={3} spacing={2}>
        {numbers.map((_item, index) => {
          return <Box key={index} bg="emerald.400" size={16} rounded="lg" />
        })}
      </SimpleGrid>

      <VStack space={1}>
        <HStack space={1}>
          <Button key={Date.now()} size="md">
            7
          </Button>
          <Button key={Date.now()} size="md">
            8
          </Button>
          <Button key={Date.now()} size="md">
            9
          </Button>
        </HStack>
        <HStack space={1}>
          <Button key={Date.now()} size="md">
            4
          </Button>
          <Button key={Date.now()} size="md">
            5
          </Button>
          <Button key={Date.now()} size="md">
            6
          </Button>
        </HStack>
      </VStack>
    </Box>
    // </Center>
  )
}
