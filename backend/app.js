import express from "express";
import { MainServer } from "./config/Server.js";
import { UserRouter } from "./Routers/UserRouter.js";
import helmet from "helmet"
import cors from "cors"
import { ProductRouter } from "./Routers/ProductRouter.js";


const app = express();
app.use(helmet())
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",

}))
app.use("/", UserRouter)
app.use("/", ProductRouter)


app.listen(9595, () => {
    console.log("backend is running");
    MainServer()
});
