import { Request, Response } from 'express';
import db from '../database/connection';

class ConnectionsController {
  public async index(request: Request, response: Response): Promise<Response>{
    const totalConnections = await db('connections').count('* as total');
    
    const { total } = totalConnections[0];

    return response.json({ total });
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const { user_id } = request.body;

    await db('connections').insert({ user_id });
    
    return response.status(201).send();
  }
}

export default ConnectionsController;