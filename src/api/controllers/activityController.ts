import express, { Request, Response } from 'express';
import { Activity} from '../types/Activity';
import { createActivity, deleteAtv, getActivity, getActivities, updateActivity, getActivitiesCategory } from '../services/activityService';
class ActivityController{
    
async handleCreateActivity(req : Request, res : Response){
    try{

        const activity : Activity= {
            title : req.params.title,
            description : req.params.description,
            userId : Number.parseInt(req.params.idUser),
            categoryId : Number.parseInt(req.params.idCategory),
             
        }
        const newCategory = await createActivity(activity)
        res.status(201).send(newCategory)
    }catch(error){
        console.log(error)
        res.status(400).send("Error to create Activity")
    }
   
}
async handleUpdateActivity(req : Request, res : Response){
    try{
        const newcat = {
            id : Number.parseInt(req.params.id),
            title : req.params.title,
            description : req.params.description,
        }
        const newActivity = await updateActivity(newcat)
        res.status(200).send(newActivity)
    }catch(error){
        console.log(error)
        res.status(500).send("Error to update Activity")
    }
}
async handleDeleteActivity(req : Request, res : Response){
    try{
        const id = Number.parseInt(req.params.id)
        const deleted = await deleteAtv(id)
        res.status(200).send("Activity sucess deleted")
    }catch(error){
        console.log(error)
        res.status(500).send("Error to delete Activity")
    }
}

async handleGetActivity(req : Request, res : Response){
    try{
        const id = Number.parseInt(req.params.id)
        const activity = await getActivity(id)
        res.status(200).send(activity)
    }catch(error){
        console.log(error)
        res.status(400).send("Activity not found")
    }
}
async handleGetActivities(req : Request, res : Response){
    try{
        const activities = await getActivities()
        res.status(200).send(activities)
    }catch(error){
        console.log(error)
        res.status(400).send("Activities not found")
    }

}

async handleGetActivitiesCategory(req : Request, res : Response){
    try{
        console.log("ola")
        const id = Number.parseInt(req.params.idCategory)
        const activities = await getActivitiesCategory(id)
        res.status(200).send(activities)
    }catch(error){
        console.log(error)
        res.status(400).send("Activities not found")
    }
}
}
export{
    ActivityController
}
