const router = require('express').Router();
const userController = require("../controllers/userControllers");


router.post("", userController.createUser);

router.get("", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.put("/:id", userController.updateUserById);

module.exports = router;