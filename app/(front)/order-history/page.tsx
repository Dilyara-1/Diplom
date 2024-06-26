import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
  title: 'История заказов',
}
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-2xl py-2">История заказов</h1>
      <MyOrders />
    </>
  )
}
