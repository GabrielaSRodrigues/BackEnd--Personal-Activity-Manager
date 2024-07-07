import { UnderlyingSourceCancelCallback } from "node:stream/web";
import { AppError } from "../errors/AppError";
import { create, searchUser, get, update, getUsersData, delUser} from "../models/UserModel";
import { User } from "../types/UserType";



 async function createUser({id, email, name, password} : User){
  
    if(!email || !name || !password) {
        throw new AppError("Dados inválidos", 400)
    }
    const findedUser = await searchUser(email)
    if(findedUser){
        throw new AppError("Email já cadastrado!", 400)
    }
    const createdUser = await create({id, name, email, password})
    
    if(!createdUser){
        throw new AppError("Internal Server Error", 500)
    }
    
    return createdUser
}

 async function updateUser(idUser : number, dataUser : User){
  
    const finded = await get(idUser)
    if(!finded){
        throw new AppError("User not Found", 404)
    }
    if(!dataUser.name || !dataUser.email || !dataUser.password){
        throw new AppError("Dados inválidos", 400)
    }
    const updated = await update(idUser, dataUser.name, dataUser.email,dataUser.password)
    return updated
}

 async function getUser(id: number){
    const user = await get(id)
    if(!user){
        throw new AppError("User not Found", 404)
    }
    return user
}

 async function getUsers(){
    const users = await getUsersData()
    if(!users){
        throw new AppError("Internal Server Error", 500)
    }
    return users
}

 async function deleteUser(id : number){
    const findUser = await get(id)
    if(!findUser){
        throw new AppError("User not Found", 404)
    }
    const removeUser = await delUser(id)
    if(!removeUser){
        throw new AppError("Internal Server Error", 500)
    }
    return removeUser
}

export{
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    searchUser
}