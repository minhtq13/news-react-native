const middlewareControlller = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

// GET ALL USERS

router.get("/", middlewareControlller.verifyToken, userController.getAllUsers);

// DELETE USER

router.delete(
  "/:id",
  middlewareControlller.verifyTokenAndAdminAuth,
  userController.deleteUser
);
module.exports = router;
