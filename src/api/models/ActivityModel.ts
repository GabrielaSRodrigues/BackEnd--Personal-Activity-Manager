
import prisma from "../prismaClient";
import { Activity } from "../types/Activity";

export const create = async (dataActivity: Activity) => {
  const newActivity = await prisma.activity.create({
    data:{
        title: dataActivity.title,
        description : dataActivity.description,
        userId: dataActivity.userId,
        categoryId : dataActivity.categoryId,

    }
  })
  console.log(newActivity)
  return newActivity;
};

export const update = async (dataActivity: any) => {
  const activity = await prisma.activity.update({
    where: {
      id: dataActivity.id
    },
    data: {
        title: dataActivity.title,
        description : dataActivity.description,
    }
  })
  return activity;
};

export const deleteActivity = async (id: number) => {
  const deleted = await prisma.activity.delete({
    where: {
      id: id
    }
  })
  return deleted;
};

export const getWithIdCategory = async (categoryId: number) =>{
  const activities = await prisma.activity.findMany({
    where: {
      categoryId: categoryId
    }
  })
}

export const get = async (id: number) => {
  const activity = await prisma.activity.findUnique({
    where: {
      id: id
    }
  })
  return activity;
};

export const getActivitiesData = async () => {
  const activities = await prisma.activity.findMany()
  return activities;
};

export const getActivitiesDataCategory = async (idCategory: number) => {
  const activities = await prisma.activity.findMany({
    where: {
      categoryId: idCategory
    }
  })
  return activities;
}
export const searchActivity = async (name: string) => {
  const activity = await prisma.activity.findFirst({
    where: {
      title: name
    }
  })
  return activity;
}