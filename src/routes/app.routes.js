import auth from './auth.routes.js'
import product from './product.route.js'

const indexRouter = [
    ('/auth', auth),
    ('/product', product)
];

export default indexRouter