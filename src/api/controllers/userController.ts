import { Request, Response, query } from 'express';

// Supondo que exista uma função `createUser` importada de algum serviço ou repositório
import { createUser, updateUser, getUser, getUsers, deleteUser} from '../services/userService';
import { User } from '../types/UserType';


class UserController {
  async handleCreateUser(req: Request, res: Response) {
    try {
     // console.log(req.params)
      const dataUser = {
        id: 0,
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
      };
     // console.log(dataUser)

      const userCreated = await createUser(dataUser);
      console.log(userCreated)
      res.status(201).send(userCreated);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async handleUpdadeUser(req : Request, res : Response){
      try{
        let idUser =  Number.parseInt(req.params.id)
        const dataUser : User = {
          id : 0,
          name: req.params.name,
          email: req.params.email,
          password: req.params.password
        }
        const updatedUser = await updateUser(idUser, dataUser)
        res.status(200).send(updatedUser)
      }catch(error){
        res.status(500).send("Falha na atualização")
      }
  }

  async handleGetUser(req : Request, res : Response){
    try{
      const findedUser = await getUser(Number.parseInt(req.params.id))
      res.status(200).send(findedUser)
    }catch(error){
      res.status(404).send("User Not Found")
    }
    
  }

  async handleGetUsers(req : Request, res : Response){
    try{
      const users = await getUsers()
      res.status(200).send(users)
    }catch(error){
      res.status(404).send("Users not found")
    }
  }

  async handleDeleteUser(req : Request, res : Response){
    try{
        const id = req.query.id
       const deletedUser = await deleteUser(Number.parseInt(id))
        res.status(200).send(deletedUser)
    }catch(error){
        res.status(500).send("Internal Server Error")
    }
  }
}


export { UserController };
