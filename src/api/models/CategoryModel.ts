
import { json } from "express"
import { AppError } from "../errors/AppError"
import prisma from "../prismaClient"
import { Category } from "../types/Category"

const getCategoriesDataUserId = async(currentUser : number)=>{
    const category = prisma.category.findMany({
        where:{
            user : {
                id : currentUser
            }
        }
    })
    return category
}
const create = async(currentUser : number, category : Category)=>{

   const newCategory = await prisma.category.create({
         data:{
                name : category.name,
                user : {
                    connect : {
                        id : currentUser
                    }
                },
            }
        })
   return newCategory
}

const searchCategory = async (categoryName : string)=>{
    const category = await prisma.category.findFirst({
        where:{
            name : categoryName
        }
    })
    return category
}

const get = async (idCategory : number)=>{
    const category = await prisma.category.findFirst({
        where:{
            id : idCategory
        }
    })
    return category
}


const update = async (idCategory : number, {name} : Category)=>{
    const finded = await get(idCategory)
    if(!finded){
        throw new AppError("Categoria não encontrada", 404)
    }else{
        const category = await prisma.category.update(
            {where:{
                id : idCategory,

            },
            data:{
                name : name,
            }
        }
        )
        return category
    }
}
const deleteCategory = async(idCategory : number)=>{
    const finded = await get(idCategory)
    if(!finded){
        throw new AppError("Categoria não existe", 404)
    }else{
        const category = await prisma.category.delete(
            {
                where:{
                    id : idCategory
                }
            }
        )
        return category
    }
}

const getCategoriesData = async()=>{
    const categories = prisma.category.findMany()
    return categories

}
export{
    create,
    searchCategory,
    get,
    getCategoriesDataUserId,
    
    update,
    deleteCategory,
    getCategoriesData
}