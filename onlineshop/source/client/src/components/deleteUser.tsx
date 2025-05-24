import axios from "axios";
import { GetUsersResponse } from "../types/user";


export default async function deleteUser() {
    try{
        let data
        const element =(document.getElementById('user_id') as HTMLInputElement).value;
        if (Number(element) < 0){
            throw new Error('Index cant be lower than zero');
        }
        else {
            data = await axios.delete<GetUsersResponse>(`http://localhost:4000/api/users/${Number(element)}`,
            {
            headers:{
                Accept:'application/json',
            },
        },
    );
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