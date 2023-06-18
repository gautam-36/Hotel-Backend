import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailablity } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
// import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";

const router = express.Router();
router.post("/:hotelid", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom)
router.put("availablity/:id", updateRoomAvailablity)

// delete
router.delete("/:id", verifyAdmin, deleteRoom)

// get
router.get("/:id", getRoom)
// get All

// ye baad me use krn hai 
// const failed = true;
// if (failed) return next(createError(404, "You are not authenticated"))
router.get("/", getAllRoom)
export default router;