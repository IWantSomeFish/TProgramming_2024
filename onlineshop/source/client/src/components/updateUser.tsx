import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';
import axios from 'axios';
import { GetProjectsResponse } from '../types/project';

async function updateUser(request: object) {
    try{
        const element =(document.getElementById('id_field') as HTMLInputElement).value;
        const data = await axios.post<GetProjectsResponse>(`http://localhost:4000/api/users/${element}`,request,
            {
            headers:{
                Accept:'application/json',
            },
        })
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

export default function UpdateUserForm() {

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    nickname: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Данные формы:', formData);
    updateUser(formData);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>Update user</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>User update form</DialogTitle>
        <DialogContent>
          <form id="contact-form" onSubmit={handleSubmit}>
             <TextField
                id='id_field'
                margin="dense"
                name="id"
                label="ID"
                type="number"
                fullWidth
                required
            />
            <TextField
              margin="dense"
              name="login"
              label="Login"
              type="text"
              fullWidth
              value={formData.login}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="password"
              label="Password"
              type="text"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="nickname"
              label="Nickname"
              type="text"
              fullWidth
              value={formData.nickname}
              onChange={handleChange}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="contact-form" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}