import { Activity } from "../types/Activity";
import { AppError } from "../errors/AppError";
import { create, searchActivity, deleteActivity, get, update,getActivitiesData, getActivitiesDataCategory } from "../models/ActivityModel";

async function createActivity(activityData : Activity) {
    console.log(activityData)
    const finded = await searchActivity(activityData.title)
    if(!finded){
        
        const newActivity = await create(activityData)  
        if(!newActivity){
            throw new AppError("Internal Server Error", 500)
        }else{
            return newActivity
        }
    }else{
        throw new AppError("Essa atividade já existe", 400)
    }
}
async function updateActivity(activityData : any){
    const finded = await getActivity(activityData.id)
    if(!finded){
        throw new AppError("Activity not found", 404)
    }else{
        
        const activity = await update(activityData)
        return activity;
    }
}
async function deleteAtv(idActivity : number){
    const finded = await get(idActivity)
    if(!finded){
        throw new AppError("Activity not found", 404)
    }else{
        const deleted = await deleteActivity(idActivity)
        return deleted
    }
}
async function getActivity(idActivity : number){
    const activity = await get(idActivity)
    if(!activity){
        throw new AppError("Activity not found", 404)
    }
    return activity
}
async function getActivities(){
    const activities = await getActivitiesData()
    if(!activities){
        throw new AppError("Activities not found", 404)
    }
    return activities
}
async function getActivitiesCategory(idCategory : number){
    const activities = await getActivitiesDataCategory(idCategory)
    if(!activities){
        throw new AppError("Activities not found", 404)
    }
    return activities

}
export{
    createActivity,
    updateActivity,
    deleteAtv,
    getActivity,
    getActivities,
    getActivitiesCategory
}