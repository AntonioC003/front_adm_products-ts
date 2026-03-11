import { Form, redirect, useNavigate, type ActionFunctionArgs } from 'react-router-dom'
import type { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from '../services/ProductService'

type ProductDetailsProps = {
  product: Product
}

export async function action({params} :  ActionFunctionArgs){
  if(params.id !== undefined) {
    await deleteProduct(+params.id)
    return redirect('/')
  }
}


export default function ProductDetails({product} : ProductDetailsProps) {

  // useNavigate se puede usar en cualquier parte del codigo
  const navigate = useNavigate()
  const isAvailability = product.availability
  return (
    <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-lg text-gray-800">
          {isAvailability ? 'Disponible': 'No disponible'}
        </td>
        <td className="p-3 text-lg text-gray-800 ">
          <div className="flex gap-2 items-center">
            {/*<Link
              to={`/productos/${product.id}/editar`}
              className='bg-indigo-600 text-white text-center rounded-lg w-full p-2 uppercase font-bold text-ts'
            >Editar</Link> */}
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className='bg-indigo-600 text-white text-center rounded-lg w-full p-2 uppercase font-bold text-ts'
            >Editar</button>
            <Form
              className='w-full'
              method='POST'
              action={`productos/${product.id}/eliminar`}
              onSubmit={(e) => {
                if(!confirm('¿Eliminar?')){
                  e.preventDefault()
                }
              } }
              >
              <input 
                type="submit" 
                value="Eliminar"
                className='bg-red-600 text-white text-center rounded-lg w-full p-2 uppercase font-bold text-ts'    
              />
            </Form>
          </div>
        </td>
    </tr> 
  )
}