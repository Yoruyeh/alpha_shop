import { createContext } from 'react'

export const FormContext = createContext([
  {
    name: 'name',
    label: '持卡人姓名',
    defaultValue: 'John Doe',
  },
  {
    name: 'cardNumber',
    label: '卡號',
    defaultValue: '1111 2222 3333 4444',
  }, 
  {
    name: 'validDate',
    label: '有效期限',
    defaultValue: 'MM/YY',
  },
  {
    name: 'code',
    label: 'CVC / CCV',
    defaultValue: 123,
  }
])