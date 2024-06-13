import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Адрес доставки',
}

export default async function ShippingPage() {
  return <Form />
}
