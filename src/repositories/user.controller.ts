import { Get, Route, Tags, Post, Body, Patch } from 'tsoa';
import { User } from '../models';
import {
    getUsers,
    createUser,
    IUserPayload,
    getUser
} from '../repositories/user';



