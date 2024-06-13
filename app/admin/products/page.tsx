import AdminLayout from '@/components/admin/AdminLayout'
import Products from './Products'

export const metadata = {
  title: 'Панель управления товарами',
}
const AdminProductsPage = () => {
  return (
    <AdminLayout activeItem="products">
      <Products />
    </AdminLayout>
  )
}

export default AdminProductsPage
