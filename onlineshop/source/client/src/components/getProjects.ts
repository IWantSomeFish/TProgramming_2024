import axios from "axios";
import { User } from "./getUsers";

export type project = {
    id: number,
    projectName: string,
    description: string,
    feeAmount: number,
    alreadyCollected: number,
    user: User,
    likesCount: number,
    dislikesCount: number,
};

type GetProjectsResponse = {
    data: project[]
};

export default async function getProjects() {
    try{
        const {data, status} = await axios.get<GetProjectsResponse>('http://localhost:3000/api/projects',
            {
                headers:{
                    Accept:'application/json',
                },
            },
        );
        console.log(JSON.stringify(data, null, 4));
        console.log('response status is: ', status);
        return data;
    }
    catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}