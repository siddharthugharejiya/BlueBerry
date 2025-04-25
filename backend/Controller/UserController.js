import { UserModel } from "../modules/UserModel.js"


export const Signup = async (req, res) => {
 
   const data = await UserModel.create(req.body)
   console.log(data);
   
   res.send(data)
}