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
import { pipe, range, reverse } from 'ramda'

const CButton = ({ label, onPress }) => (
  <Button key={label} size="20" onPress={onPress}>
    {label}
  </Button>
)

export default Calculator = () => {
  return (
    <Box alignItems="center">
      <Heading mb="5" textAlign="center">
        Calculator
      </Heading>
      <Text
        width="100%"
        fontSize="xl"
        borderWidth="1"
        textAlign="right"
        paddingRight="1">
        6xl
      </Text>

      <VStack space={2} marginTop="10">
        <SimpleGrid columns={4} space={1}>
          <CButton label="7" />
          <CButton label="8" />
          <CButton label="9" />
          <CButton label="÷" />

          <CButton label="4" />
          <CButton label="5" />
          <CButton label="6" />
          <CButton label="x" />

          <CButton label="3" />
          <CButton label="2" />
          <CButton label="1" />
          <CButton label="-" />

          <CButton label="0" />
          <CButton label="C" />
          <CButton label="=" />
          <CButton label="+" />
        </SimpleGrid>
        <Button>Switch</Button>
      </VStack>
    </Box>
  )
}
