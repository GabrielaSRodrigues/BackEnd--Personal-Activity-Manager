
import prisma from "../prismaClient"
import { User } from "../types/UserType"


const create = async (dataUser : User)=>{

   // const password = bcrypt.hashSync(dataUser.password,12)
    // dataUser.password = password
    const userNew = prisma.user.create({
        data:{
            name : dataUser.name,
            email : dataUser.email,
            password : dataUser.password
        },
    })
    console.log(userNew)
    return userNew
}
const searchUser = async (email: string)=>{
    const finded = await prisma.user.findFirst({
        where: {
            email: email
            
        }
    });
    return finded;
    
}

const update = async (id : number, name: string, email : string , password : string)=>{
    const updatedUser = prisma.user.update({
        where:{
            id : id
        },
        data:{
            name: name,
            email : email,
            password : password
        }
    })
    return updatedUser
}

const get = (id : number)=>{
    const user = prisma.user.findFirst({
        where:{
            id: id
        }
    })
    return user
}

const getUsersData = ()=>{
    const users = prisma.user.findMany()
    return users
}

const delUser = (id : number)=>{
    const deleted = prisma.user.delete({
        where:{
            id : id
        }
    })
    return deleted
}
export{
    create,
    searchUser,
    get,
    update,
    getUsersData,
    delUser,
}
