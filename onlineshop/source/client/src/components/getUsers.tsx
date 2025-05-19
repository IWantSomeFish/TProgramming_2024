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
        let data
        const element =(document.getElementById('user_id') as HTMLInputElement).value;
        if (element === '-1'){
        data = await axios.get<GetUsersResponse>('http://localhost:4000/api/users',
            {
                headers:{
                    Accept:'application/json',
                },
            },
        );
    }
    else {
        if (Number(element) < 0){
                throw new Error('Index cant be lower than zero');
            }
            else {
                data = await axios.get<GetUsersResponse>(`http://localhost:4000/api/users/${Number(element)}`,
            {
                headers:{
                    Accept:'application/json',
                },
            },
        );
            }
    }
        console.log(JSON.stringify(data.data, null, 4));
        console.log('response status is: ', data.status);
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
