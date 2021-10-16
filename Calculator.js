import { Box, Button, Heading, SimpleGrid, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import { includes, nth, values, split, pipe } from 'ramda'

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
    Mul: '*'
  }

  const [input, setInput] = useState('')

  const [digitType, setDigitType] = useState(ARABIC)

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

    setInput(`${input} ${op} `)
  }

  const applyOperation = (num1, num2) => ({
    [OPERATOR.Add]: num1 + num2,
    [OPERATOR.Sub]: num1 - num2,
    [OPERATOR.Mul]: num1 * num2,
    [OPERATOR.Div]: num1 / num2
  })

  const outputResult = () => {
    const [num1, op, num2] = input.split(' ')
    const result = applyOperation(+num1, +num2)[op]

    setInput(result.toString())
  }

  const disallowOperator = () => {
    const noInput = input.length === 0
    const operator = pipe(split(' '), nth(1))(input)
    const hasOperator = includes(operator, values(OPERATOR))

    return noInput || hasOperator
  }

  const canComputeResult = () => {
    const [num1, op, num2] = input.split(' ')
    return num1 && op && num2
  }

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
            disabled={disallowOperator()}
            onPress={useOperator}
          />

          <CButton label="4" onPress={appendNumber} />
          <CButton label="5" onPress={appendNumber} />
          <CButton label="6" onPress={appendNumber} />
          <CButton
            label={OPERATOR.Mul}
            disabled={disallowOperator()}
            onPress={useOperator}
          />

          <CButton label="3" onPress={appendNumber} />
          <CButton label="2" onPress={appendNumber} />
          <CButton label="1" onPress={appendNumber} />
          <CButton
            label={OPERATOR.Sub}
            disabled={disallowOperator()}
            onPress={useOperator}
          />

          <CButton label="0" onPress={appendNumber} />
          <CButton label="C" onPress={clearInput} />
          <CButton
            label="="
            disabled={!canComputeResult()}
            onPress={outputResult}
          />
          <CButton
            label={OPERATOR.Add}
            disabled={disallowOperator()}
            onPress={useOperator}
          />
        </SimpleGrid>

        <Button onPress={toggleDigitType}>{switchText}</Button>
      </VStack>
    </Box>
  )
}
