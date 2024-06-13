import AdminLayout from '@/components/admin/AdminLayout'
import Orders from './Orders'

export const metadata = {
  title: 'Панель управления заказами',
}
const AdminOrdersPage = () => {
  return (
    <AdminLayout activeItem="orders">
      <Orders />
    </AdminLayout>
  )
}

export default AdminOrdersPage
