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
  <Button key={label} size="20" onPress={() => onPress(label)}>
    {label}
  </Button>
)

export default Calculator = () => {
  const appendNumber = (num) => console.log(num)

  const clearInput = () => {}

  const useOperator = (op) => {
    console.log(op)
  }

  const outputResult = () => {}

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
          <CButton label="7" onPress={appendNumber} />
          <CButton label="8" onPress={appendNumber} />
          <CButton label="9" onPress={appendNumber} />
          <CButton label="÷" onPress={useOperator} />

          <CButton label="4" onPress={appendNumber} />
          <CButton label="5" onPress={appendNumber} />
          <CButton label="6" onPress={appendNumber} />
          <CButton label="x" onPress={useOperator} />

          <CButton label="3" onPress={appendNumber} />
          <CButton label="2" onPress={appendNumber} />
          <CButton label="1" onPress={appendNumber} />
          <CButton label="-" onPress={useOperator} />

          <CButton label="0" onPress={appendNumber} />
          <CButton label="C" onPress={clearInput} />
          <CButton label="=" onPress={outputResult} />
          <CButton label="+" onPress={useOperator} />
        </SimpleGrid>
        <Button>Switch</Button>
      </VStack>
    </Box>
  )
}
