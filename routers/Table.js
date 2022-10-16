const router = require("express").Router();
const TableMethods = require("../controllers/Table");


router.post('/', TableMethods.CreateTable);
router.get('/:id', TableMethods.GetTable);
router.get('/',TableMethods.GetTables);
router.delete('/:id', TableMethods.DeleteTable);
router.put('/:id', TableMethods.UpdateTable);

module.exports = router;