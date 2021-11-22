import { v4 as uuidv4 } from 'uuid';
import Users from '../models/user';
import { IUser } from '../interfaces/user';

const getUsers = async (loginSubstring: string, limit: string | undefined) => {
    try {
        const users = Users.getAutoSuggestUsers(loginSubstring, limit);
        return users;
    } catch (error) {
        throw new Error('Users not found.');
    }
};

const getUser = async (userId: string) => {
    try {
        const user = await Users.getById(userId);

        if (!user) {
            const errorMessage = `User with id '${userId}' not found.`;
            throw new Error(errorMessage);
        }

        return user;
    } catch (error) {
        throw error;
    }
};

const createUser = async (userData: Omit<IUser, 'id' | 'isDeleted'>) => {
    const newUser = {
        ...userData,
        id: uuidv4(),
        isDeleted: false
    };

    try {
        const updatedUser = await Users.saveUser(newUser);
        return updatedUser;
    } catch (error) {
        throw new Error('Unable to save user');
    }
};

const updateUser = async (userId: string, updatedData: Omit<IUser, 'id' | 'isDeleted'>) => {
    try {
        const userIndex = await Users.getUserIndex(userId);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        return await Users.updateUser(userIndex, updatedData);
    } catch (error) {
        throw error;
    }
};

const deleteUser = async (userId: string) => {
    try {
        const userIndex = await Users.getUserIndex(userId);

        if (userIndex === -1) {
            throw new Error('User not found');
        }

        return await Users.deleteUser(userIndex);
    } catch (error) {
        throw error;
    }
};

export default {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
