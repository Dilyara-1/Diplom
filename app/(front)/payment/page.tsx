import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Метод оплаты',
}

export default async function PaymentPage() {
  return <Form />
}
