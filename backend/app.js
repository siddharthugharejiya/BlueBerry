import express from "express";
import { MainServer } from "./config/Server.js";
import { UserRouter } from "./Routers/UserRouter.js";


const app = express();
app.use(express.json())
app.use("/", UserRouter)

app.listen(9595, () => {
    console.log("backend is running");
    MainServer()
});
