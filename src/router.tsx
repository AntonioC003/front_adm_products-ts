import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import Products, { loader as productsLoader } from './views/Products'
import NewProduct, { action as newProductAction} from './views/NewProduct'



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    loader: productsLoader,
    children: [
      {
        index: true, //carga la pagina principal 
        element: <Products/>
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct/>,
        action: newProductAction
      }
    ]
  }
])