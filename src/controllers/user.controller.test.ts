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
    });    
})
