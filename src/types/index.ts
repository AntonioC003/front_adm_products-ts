import { boolean, number, object, string, array, type InferOutput } from "valibot"

export const DraftProductSchema = object({
  name: string(),
  price: number(),
  
})

// Esquema de la respuesta del servidor 
export const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
})

// Esquema en forma de array para multiples products
export const ProductsSchema = array(ProductSchema)

// Creando type con Output que convierte el ProrductSchema a type
export type Product = InferOutput<typeof ProductSchema> 