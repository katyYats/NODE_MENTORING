import { Request, Response } from 'express';
import UsersServices from '../services/user';

const getUsers = async (req: Request, res: Response) => {
    const { loginSubstring = '', limit = '' } = req.query;

    try {
        const users = await UsersServices.getUsers(loginSubstring as string, limit as string);
        return res.status(200).json({ status: 200, data: users });
    } catch (error: any) {
        return res.status(400).json({ status: 400, message: error.message });
    }
};

const getUser = async (req: Request, res: Response) => {
    const { id: userId } = req.params;

    try {
        const user = await UsersServices.getUser(userId);
        return res.status(200).json({ status: 200, data: user, message: `User with id: ${userId} succesfully  retrieved` });
    } catch (error: any) {
        return res.status(400).json({ status: 400, message: error.message });
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const user = await UsersServices.createUser(req.body);
        return res.status(200).json({ status: 200, data: user, message: 'User was succesfully  created' });
    } catch (error: any) {
        return res.status(400).json({ status: 400, message: error.message });
    }
};

const updateUser = async (req: Request, res: Response) => {
    const { id: userId } = req.params;

    try {
        const user = await UsersServices.updateUser(userId, req.body);
        return res.status(200).json({ status: 200, data: user, message: 'User was succesfully  updated' });
    } catch (error: any) {
        return res.status(400).json({ status: 400, message: error.message });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { id: userId } = req.params;

    try {
        await UsersServices.deleteUser(userId);
        return res.status(200).json({ status: 200, message: 'User was succesfully  deleted' });
    } catch (error: any) {
        return res.status(400).json({ status: 400, message: error.message });
    }
};

export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
