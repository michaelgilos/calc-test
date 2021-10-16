import { Box, Button, Heading, SimpleGrid, Text, VStack } from 'native-base'
import React, { useState } from 'react'

const CButton = ({ label, disabled = false, onPress }) => (
  <Button
    key={label}
    size="20"
    colorScheme={disabled ? 'dark' : 'primary'}
    onPress={() => onPress(label)}
    disabled={disabled}>
    {label}
  </Button>
)

export default Calculator = () => {
  const ARABIC = 'arabic'
  const ROMAN = 'roman'
  const OPERATOR = {
    Add: '+',
    Sub: '-',
    Div: '÷',
    Mul: 'x'
  }

  const [input, setInput] = useState('')

  const [digitType, setDigitType] = useState(ARABIC)

  const [firstNumber, setFirstNumber] = useState(0)
  const [secondNumber, setSecondNumber] = useState(0)
  const [op, setOp] = useState()

  const toggleDigitType = () =>
    setDigitType(digitType === ARABIC ? ROMAN : ARABIC)

  const switchText = digitType === ARABIC ? 'Use Roman' : 'Use Arabic'

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

    setFirstNumber(+input)
    setOp(op)

    setInput(`${input} ${op} `)
  }

  const outputResult = () => {}

  const hasNoInput = () => input.length === 0

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
          <CButton
            label={OPERATOR.Div}
            disabled={hasNoInput()}
            onPress={useOperator}
          />

          <CButton label="4" onPress={appendNumber} />
          <CButton label="5" onPress={appendNumber} />
          <CButton label="6" onPress={appendNumber} />
          <CButton
            label={OPERATOR.Mul}
            disabled={hasNoInput()}
            onPress={useOperator}
          />

          <CButton label="3" onPress={appendNumber} />
          <CButton label="2" onPress={appendNumber} />
          <CButton label="1" onPress={appendNumber} />
          <CButton
            label={OPERATOR.Sub}
            disabled={hasNoInput()}
            onPress={useOperator}
          />

          <CButton label="0" onPress={appendNumber} />
          <CButton label="C" onPress={clearInput} />
          <CButton label="=" onPress={outputResult} />
          <CButton
            label={OPERATOR.Add}
            disabled={hasNoInput()}
            onPress={useOperator}
          />
        </SimpleGrid>

        <Button onPress={toggleDigitType}>{switchText}</Button>
      </VStack>
    </Box>
  )
}
