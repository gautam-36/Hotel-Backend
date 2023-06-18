import express from "express";
import { deleteUser, getAllUser, getUser, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in and you can delete your account")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello Admin, you are logged in and you can delete All  accounts")
})

// update
router.put("/:id", verifyUser, updateUser)

// delete
router.delete("/:id", verifyUser, deleteUser)
// get
router.get("/:id", verifyAdmin, getUser)
// get All
// ye baad me use krn hai 
// const failed = true;
// if (failed) return next(createError(404, "You are not authenticated"))
router.get("/", getAllUser)







export default router;