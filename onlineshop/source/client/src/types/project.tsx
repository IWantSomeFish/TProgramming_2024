import { User } from "./user";

export type project = {
    id: number,
    projectName: string,
    desription: string,
    feeAmount: number,
    alreadyCollected: number,
    user: User,
    likesCount: number,
    dislikesCount: number,
};

export type GetProjectsResponse = {
    data: project[]
};
