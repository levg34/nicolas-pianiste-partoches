import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
    index('routes/home.tsx'),
    route('/cart/:id', 'routes/cart.tsx'),
    route('*', 'components/error/NotFound.tsx')
] satisfies RouteConfig
