import { createContext } from 'react'

export const FormContext = createContext([
  {
    name: 'name',
    label: '持卡人姓名',
    defaultValue: 'John Doe',
    value: ''
  },
  {
    name: 'cardNumber',
    label: '卡號',
    defaultValue: '1111 2222 3333 4444',
    value: '',
  }, 
  {
    name: 'validDate',
    label: '有效期限',
    defaultValue: 'MM/YY',
    value: '',
  },
  {
    name: 'code',
    label: 'CVC / CCV',
    defaultValue: 123,
    value: '',
  }
])