import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express();
app.use(cors());
dotenv.config()

mongoose.connect('mongodb+srv://gautamkumarg660:5zwEybYo5LpYc7oC@cluster0.v4nuhr0.mongodb.net/HOTELDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
}).then(() => {
    console.log("dataBase is Connected")
}).catch((err) => { console.log(err) })

// middleware 
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Oops! Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("server is listning at 3001")
})