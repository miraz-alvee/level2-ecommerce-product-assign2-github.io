import express, { Request, Response } from 'express'
import { ecommerceRoutes } from './modules/ecommerce/ecommerce.routes';
import { orderRoutes } from './modules/ecomerce-order/order.routes';
//import cors from "cors"
const app = express();

//parsers
app.use(express.json());
//app.use(cors())

app.use('/api/products', ecommerceRoutes)// route for ecomerce products
app.use('/api/orders', orderRoutes) // route for ecomerce orders

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;