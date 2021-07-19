import UserController from './user.controller';
import * as UserRepository from "../repositories/user.repository";

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
            const usersList = [
                {
                    id: 1,
                    firstName: "firstName",
                    lastName: "lastName",
                    email: "email@example.com",
                    posts: [],
                    comments: [],
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ]
            const spy = jest
                .spyOn(UserRepository, "getUsers")
                .mockResolvedValueOnce(usersList)
            const controller = new UserController();
            const users = await controller.getUsers();
            expect(users).toEqual(usersList);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore()
        })
        
    });    
})
