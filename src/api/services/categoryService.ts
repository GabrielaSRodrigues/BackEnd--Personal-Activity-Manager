import { AppError } from "../errors/AppError";
import { create, searchCategory, deleteCategory, get, update,getCategoriesData,getCategoriesDataUserId } from "../models/CategoryModel";
import { Category } from "../types/Category";

async function createCategory(categoryData : Category, currenteUser : number){
    if(!categoryData.name){
        throw new AppError("Dados inválidos", 400)
    }
    console.log(categoryData)
    const findCategory = await searchCategory(categoryData.name)
    console.log(findCategory)
    if(!findCategory){
       
        const newCategory = await create(currenteUser, categoryData)
        if(!newCategory){
            throw new AppError("Internal Server Error", 500)

        }
        return newCategory
    }
    else{
        throw new AppError("Essa categoria já existe", 400)
    }
    
}
async function updateCategory(idCategory : number, categoryData : Category){
    const finded = await get(idCategory)
    if(!finded){
        throw new AppError("Categoria não encontrada", 404)
    }else{
        const category = await update(idCategory, categoryData)
        return category;
    }
}
async function deleteCat(idCategory : number){
    const finded = await get(idCategory)
    if(!finded){
        throw new AppError("Categoria não existe", 404)
    }else{
        const deleted = await deleteCategory(idCategory)
        return deleted
    }

}
async function getCategory(idCategory : number){
    const category = await get(idCategory)
    if(!category){
        throw new AppError("Categoria não encontrada", 404)
    }
    return category
}
async function getCategoriesWithIdUser(idUser : number){
    const categories = await getCategoriesDataUserId(idUser)
    if(!categories){
        throw new AppError("Categories not found", 404)
    }
    return categories
}

async function getAllCategories(){
    const categories = await getCategoriesData()
    if(!categories){
        throw new AppError("Categories not found", 404)
    }
    return categories

}

export{
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategoriesWithIdUser,
    getAllCategories,
}