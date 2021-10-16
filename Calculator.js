import { Box, Button, Heading, SimpleGrid, Text, VStack } from 'native-base'
import React, { useState } from 'react'

const CButton = ({ label, onPress }) => (
  <Button key={label} size="20" onPress={() => onPress(label)}>
    {label}
  </Button>
)

export default Calculator = () => {
  const [input, setInput] = useState('')

  const appendNumber = (num) => {
    if (input.startsWith('0')) {
      setInput(num)
      return
    }

    setInput(input + num)
  }

  const clearInput = () => {
    setInput('')
  }

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
        {input}
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
