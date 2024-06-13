import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
  title: 'Оформление заказа',
}

export default async function PlaceOrderPage() {
  return <Form />
}
