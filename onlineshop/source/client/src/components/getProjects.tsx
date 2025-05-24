import axios from "axios";
import { GetProjectsResponse } from "../types/project";


export default async function getProjects() {
    try{
        let data
        const element =(document.getElementById('project_id') as HTMLInputElement).value;
        if (element === '-1'){
            data = await axios.get<GetProjectsResponse>('http://localhost:4000/api/projects',
            {
                headers:{
                    Accept:'application/json',
                },
            },
        );
        }
        else{
            if (Number(element) < 0){
                throw new Error('Index cant be lower than zero');
            }
            else {
                data = await axios.get<GetProjectsResponse>(`http://localhost:4000/api/projects/${Number(element)}`,
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