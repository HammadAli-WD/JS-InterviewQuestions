import { getRepository } from 'typeorm';
import { User } from '../models';

export interface IUserPayload {
    firstName: string;
    lastName: string;
    email: string;
}

export const getUsers = async (): Promise<Array<User>> => {
    const userRepository = getRepository(User);
    return userRepository.find()
}