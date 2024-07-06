import auth from './auth.routes.js'
import catalog from './catalogo.route.js'
import client from './client.route.js'
import product from './product.route.js'
import price from './precio.route.js'

const indexRouter = [
    ('/auth', auth),
    ('/product', product),
    ('/catalogs', catalog),
    ('/price', price),
    ('/client', client)
];

export default indexRouter