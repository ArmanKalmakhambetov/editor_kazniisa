const express=require('express');
const { getAllUserProjects } = require('../controllers/projectController');
const router=express.Router()



// router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee,validateResume, createResume)
router.get('/api/user/project/allprojects', getAllUserProjects);
// router.get('/api/store/product/:id', getProductById);

// router.get('/api/store/order/:id', getOrderById);
// router.get('/api/store/allorders', getAllOrders);
// router.post('/api/store/createproduct', upload.array('image',5), createProduct);
// router.delete('/api/store/product/:id', deleteProductById);
// router.post('/api/store/product/:id', upload.array('image',5), editProduct);
// router.post('/api/store/createorder', createOrder);
// router.post('/api/store/order/:id/editorder', editOrder);

module.exports = router;