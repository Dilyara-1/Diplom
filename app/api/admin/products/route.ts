import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'Не авторизован' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const products = await ProductModel.find()
  return Response.json(products)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'Не авторизован' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const product = new ProductModel({
    name: 'Название',
    slug: 'Код' + Math.random(),
    image: '/images/sample.jpg',
    price: 0,
    category: 'Категория',
    brand: 'Коллекция',
    countInStock: 0,
    description: 'Описание',
    rating: 0,
    numReviews: 0,
  })
  try {
    await product.save()
    return Response.json(
      { message: 'Товар создан успешно', product },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
