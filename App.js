import React from 'react'
import { NativeBaseProvider, Box } from 'native-base'
import Calculator from './Calculator'

export default function App() {
  return (
    <NativeBaseProvider>
      <Calculator />
    </NativeBaseProvider>
  )
}
