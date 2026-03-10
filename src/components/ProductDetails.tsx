import { useNavigate } from 'react-router-dom'
import type { Product } from "../types"
import { formatCurrency } from "../utils"

type ProductDetailsProps = {
  product: Product
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
          </div>
        </td>
    </tr> 
  )
}