import { IUser } from '../interfaces/user';

const Users: IUser[] = [
    {
        'login': 'aaaab',
        'password': '111',
        'age': 18,
        'id': '1',
        'isDeleted': false
    }
];

const getById = (id: string): IUser | undefined => Users.find((user) => user.id === id);

const getActiveUsers = (): IUser[] => Users.filter((user) => !user.isDeleted);

const getAutoSuggestUsers = (loginSubstring = '', limit?: string): IUser[] => {
    const activeUsers = getActiveUsers();
    const filteredUsers = activeUsers
        .filter((user) => user.login.toLowerCase().includes(loginSubstring.toLowerCase()))
        .sort((a, b) => a.login.localeCompare(b.login));

    return limit ? filteredUsers.slice(0, +limit) : filteredUsers;
};

const getUserIndex = (id: string): number => Users.findIndex((user) => user.id === id);

const saveUser = (user: IUser): IUser | undefined => {
    Users.push(user);

    return getById(user.id);
};

const updateUser = (userIndex: number, newData: Omit<IUser, 'id' | 'isDeleted'>): IUser | undefined => {
    Users[userIndex] = {
        ...Users[userIndex],
        ...newData
    };

    return getById(Users[userIndex].id);
};

const deleteUser = (userIndex: number): boolean => {
    Users[userIndex].isDeleted = true;

    return true;
};

export default {
    getById,
    getAutoSuggestUsers,
    getUserIndex,
    saveUser,
    updateUser,
    deleteUser
};
