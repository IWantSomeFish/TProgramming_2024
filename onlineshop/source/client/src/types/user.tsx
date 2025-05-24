import { project } from "./project";

export type User = {
    id: number,
    login: string,
    password: string,
    email: string,
    nickname: string,
    projects:project[];
};

export type GetUsersResponse = {
    data: User[];
};