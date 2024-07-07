import express from 'express';
import { UserController } from './controllers/userController';
import { CategoryController } from './controllers/categoryController';
import { ActivityController } from './controllers/activityController';
// import { registerUser } from './auth/auth.routers';
const router = express.Router();
const userController = new UserController();
const categoryController = new CategoryController()
const activityController = new ActivityController()
//users
router.post('/users/register/:name/:email/:password', (req, res) => userController.handleCreateUser(req, res)) // create user
router.get('/users', (req, res)=> userController.handleGetUsers(req,res))  // lista users
router.get('/users/:id', (req, res) => userController.handleGetUser(req, res)) // data user
router.put('/users/update_user/:id/:name/:email/:password', (req, res)=> userController.handleUpdadeUser(req, res))
router.delete('/users/delete_user/:id', (req, res) => userController.handleDeleteUser(req, res)) // delete user

// categories
router.post('/categories/create_category/:name/:idUser', (req, res) => categoryController.handleCreateCategory(req, res))
router.get('/categories/get_category_user/:idUser', (req, res) => categoryController.handleGetCategories(req, res))
router.get('/categories/', (req, res) => categoryController.handleGetAllCategories(req, res))
router.get('/categories/:id', (req, res) => categoryController.handleGetCategory(req, res))
router.put('/categories/update_category/:id/:name', (req, res) => categoryController.handleUpdateCategory(req, res))
router.delete('/categories/delete_category/:id', (req, res) => categoryController.handleDeleteCategory(req, res))

// Activities
router.post('/activities/create_activity/:title/:description/:idUser/:idCategory', (req, res) => activityController.handleCreateActivity(req, res))
router.get('/activities/', (req, res) => activityController.handleGetActivities(req, res))
router.get('/activities/:id', (req, res) => activityController.handleGetActivity(req, res))
router.get('/activities/get_activity_user/:idCategory', (req, res) => activityController.handleGetActivitiesCategory(req, res))
router.put('/activities/update_activity/:id/:title/:description', (req, res) => activityController.handleUpdateActivity(req, res))
router.delete('/activities/delete_activity/:id', (req, res) => activityController.handleDeleteActivity(req, res))

export { router };
