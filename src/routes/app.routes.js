import auth from './auth.routes.js'
import catalog from './catalogo.route.js'
import client from './client.route.js'
import product from './product.route.js'
import price from './precio.route.js'
import order from './pedido.route.js'
import orderDet from './pedido_det.route.js'

const indexRouter = [
    ('/auth', auth),
    ('/product', product),
    ('/catalogs', catalog),
    ('/price', price),
    ('/client', client),
    ('/order', order),
    ('/order-det', orderDet),
];

export default indexRouter