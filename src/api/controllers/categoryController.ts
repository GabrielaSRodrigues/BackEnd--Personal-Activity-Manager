import { Request, Response } from "express"
import { Category } from "../types/Category"
import{createCategory,getCategoriesWithIdUser, getAllCategories,getCategory,updateCategory,deleteCategory} from '../services/categoryService'
class CategoryController{
    async handleCreateCategory(req : Request, res : Response){
        try{
            const cat : Category= {
                name : req.params.name,
                
            }
            const newCategory = await createCategory(cat, Number.parseInt(req.params.idUser))
            res.status(201).send(newCategory)
        }catch(error){
            console.log(error)
            res.status(400).send("Error to create Category")
        }
       
    }
    async handleUpdateCategory(req : Request, res : Response){
        try{
            const newcat : Category= {
                name : req.params.name,
                
            }
            const newCategory = await updateCategory(Number.parseInt(req.params.id), newcat)
            res.status(200).send(newcat)
        }catch(error){
            console.log(error)
            res.status(400).send("Error to update Category")
        }
    }
    async handleDeleteCategory(req : Request, res : Response){
        try{
            const id = Number.parseInt(req.params.id)
            const deleted = await deleteCategory(id)
            res.status(200).send("Category sucess deleted")
        }catch(error){
            console.log(error)
            res.status(400).send("Error to delete Category")
        }
    }
    async handleGetCategory(req : Request, res : Response){
        
        try{
            
            const id = Number.parseInt(req.params.id)
            const category = await getCategory(id)
            res.status(200).send(category)
        }catch(error){
            console.log(error)
            res.status(400).send("Category not found")
        }
    }
    async handleGetCategories(req : Request, res : Response){
        try{
            const categories = await getCategoriesWithIdUser(Number.parseInt(req.params.idUser))
            res.status(200).send(categories)
        }catch(error){
            console.log(error)
            res.status(400).send("Categories not found")
        }
    }

    async handleGetAllCategories(req : Request, res : Response){
        try{
            const categories = await getAllCategories()
            res.status(200).send(categories)
        }catch(error){
            console.log(error)
            res.status(400).send("Categories not found")
        }
    }
}
export{
    CategoryController
}