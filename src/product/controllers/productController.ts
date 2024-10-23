import { Request, Response } from "express";
import { ProductService } from "../services/productService";

import { success } from "../../utils/responses";
import { catchFunctions } from "../../utils/catchFunctions";

export class ProductController {
  constructor(
    private readonly productService: ProductService = new ProductService(),
  ) {}

    getProducts = catchFunctions(async (req: Request, res: Response) => {
      const products = await this.productService.getProducts()
      success(res, 200, products)
    })

    getProductByID = catchFunctions(async(req: Request, res: Response) => {
      const { id } = req.params
      const deleted = await this.productService.getProductById(id)
      success(res, 200, deleted)
    })

    createProduct = catchFunctions(async (req: Request, res: Response) => {
      console.log('me llegó');
      
      const product = await this.productService.createProduct(req.body)
      success(res, 200, product)
    })
  
    updateProduct = catchFunctions(async (req: Request, res: Response) => {
      const { id } = req.params
  
      const product = await this.productService.updateProduct(id, req.body)
      success(res, 200, product)
    })
  
    deleteProduct = catchFunctions(async (req: Request, res: Response) => {
      const { id } = req.params
  
      const product = await this.productService.deleteProduct(id)
      success(res, 200, product)
    })
}
  