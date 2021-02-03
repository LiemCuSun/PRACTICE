const router = require('express').Router()

const { categoryController } = require('../controllers')

router.get('/getAllCate', categoryController.getAllCate)
router.get('/getAllbyParent', categoryController.getAllbyParent)
router.get('/getAllbyChildren', categoryController.getAllbyChildren)
router.get('/parentCate', categoryController.getCateDetParent)
router.get('/childCate', categoryController.getCateDetChild)
router.get('/children', categoryController.cateChildren)
router.get('/topNode', categoryController.getTopNode)
router.get('/leavesNode', categoryController.getLeavesNode)
router.get('/parentCatebyid', categoryController.getCateDetParentById)
router.post('/addCate', categoryController.addCate)
router.delete('/delCate/:id', categoryController.deleteCate)
router.patch('/editCate/:id', categoryController.editCate)

module.exports = router