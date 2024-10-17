import { ProductService } from "../services/productService";

export class ProductController {
  constructor(
    private readonly productService: ProductService = new ProductService(),
  ) {}
}
  