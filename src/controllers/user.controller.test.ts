import UserController from './user.controller';
import * as UserRepository from "../repositories/user.repository";
import {generateUsersData} from '../../test/utils/generate'

afterEach(() => {
    jest.resetAllMocks()
})
describe('UserController', () => {
    describe('getUsers', () => {
        test('should return empty array', async () => {
            const spy = jest
                .spyOn(UserRepository, "getUsers")
                .mockResolvedValueOnce([]);
            const controller = new UserController();
            const users = await controller.getUsers();
            expect(users).toEqual([]);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });
        test('should return user list', async () => {
            const usersData = generateUsersData(2);
            const spy = jest
                .spyOn(UserRepository, "getUsers")
                .mockResolvedValueOnce(usersData)
            const controller = new UserController();
            const users = await controller.getUsers();
            expect(users).toEqual(usersData);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            //spy.mockRestore()
        })
        
    });    
})
