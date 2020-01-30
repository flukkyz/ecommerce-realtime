'use strict'

const Route = use('Route')

Route.group(() => {
    Route.resource('categories', 'CategoryController').apiOnly()
    Route.resource('products', 'ProductController').apiOnly()
    Route.resource('coupons', 'CouponController').apiOnly()
    Route.resource('orders', 'OrderController').apiOnly()
    Route.resource('images', 'ImageController').apiOnly()
    Route.resource('users', 'UserController').apiOnly()
    
    Route.get('products', 'ProductController.index')
    Route.get('products/:id', 'ProductController.show')
    
    Route.get('orders', 'OrderController.index')
    Route.get('orders/:id', 'OrderController.show')
    Route.post('orders', 'OrderController.store')
    Route.put('orders/:id', 'OrderController.put')

}).prefix('v1').namespace('Client')