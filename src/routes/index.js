const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController')
const AuthorController = require('../controllers/AuthorController')
const BookController = require('../controllers/BookController')

router.get('/category/', CategoryController.index);
router.get('/category/show/:id', CategoryController.show);
router.post('/category/', CategoryController.store);
router.patch('/category/update/:id', CategoryController.update);
router.delete('/category/delete/:id', CategoryController.destroy);

router.get('/author/', AuthorController.index);
router.get('/author/show/:id', AuthorController.show);
router.post('/author/', AuthorController.store);
router.patch('/author/update/:id', AuthorController.update);
router.delete('/author/delete/:id', AuthorController.destroy);

router.get('/book/', BookController.index);
router.get('/book/show/:id', BookController.show);
router.post('/book/', BookController.store);
router.patch('/book/update/:id', BookController.update);
router.delete('/book/delete/:id', BookController.destroy);

module.exports = router;