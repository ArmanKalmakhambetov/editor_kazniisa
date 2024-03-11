const express=require('express');
const { getAllUserProjects, createProject } = require('../controllers/projectController');
const { getAllProjectDocuments, createDocument, getDocumentById } = require('../controllers/documentController');
const { getAllUsers, createUser } = require('../controllers/userController');
const { getAllRoles, createRole } = require('../controllers/roleController');
const router=express.Router()



// router.post('/api/resume', passport.authenticate('jwt', {session: false}), isEmployee,validateResume, createResume)

//USER
router.get('/api/user/allusers', getAllUsers);
router.post('/api/user', createUser);

//PROJECT 
router.get('/api/user/project/allprojects', getAllUserProjects);
router.post('/api/user/project', createProject);


//DOCUMENT
router.get('/api/user/project/alldocuments', getAllProjectDocuments);
router.get('/api/user/project/document/:id', getDocumentById);
router.post('/api/user/project/createdocument', createDocument);


//ROLE
router.get('/api/user/role/allroles', getAllRoles);
router.post('/api/user/role', createRole);

// router.get('/api/store/product/:id', getProductById);

// router.get('/api/store/order/:id', getOrderById);
// router.get('/api/store/allorders', getAllOrders);
// router.post('/api/store/createproduct', upload.array('image',5), createProduct);
// router.delete('/api/store/product/:id', deleteProductById);
// router.post('/api/store/product/:id', upload.array('image',5), editProduct);
// router.post('/api/store/createorder', createOrder);
// router.post('/api/store/order/:id/editorder', editOrder);

module.exports = router;