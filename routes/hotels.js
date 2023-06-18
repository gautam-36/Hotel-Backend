import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controller/hotel.js";
import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
// create
router.post("/", verifyAdmin, createHotel)


// update

router.put("/:id", verifyAdmin, updateHotel)




// delete

router.delete("/:id", verifyAdmin, deleteHotel)





// get
router.get("/find/:id", getHotel)



// get All

// ye baad me use krn hai 
// const failed = true;
// if (failed) return next(createError(404, "You are not authenticated"))
router.get("/", getAllHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms)

export default router;