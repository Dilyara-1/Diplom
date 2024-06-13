import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Регистрация',
}

export default async function Register() {
  return <Form />
}
