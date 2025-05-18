import axios from "axios";
import { project as user } from "./getProjects";

export type User = {
    id: number,
    login: string,
    password: string,
    email: string,
    nickname: string,
    projects:user[];
};

type GetUsersResponse = {
    data: User[];
};

export default async function getUsers() {
    try{
        const {data, status} = await axios.get<GetUsersResponse>('http://localhost:3000/api/users',
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
