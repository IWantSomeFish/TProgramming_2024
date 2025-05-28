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

async function createProject(request: object) {
    try{
        const data = await axios.post<GetProjectsResponse>(`http://localhost:4000/api/projects`,request,
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

export default function CreateProjectForm() {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    desription: '',
    feeAmount: 0,
    alreadyCollected: 0,
    likesCount: 0,
    dislikesCount: 0,
    user: -1,
    endTime: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
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
    createProject(formData);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>Create project</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Project create form</DialogTitle>
        <DialogContent>
          <form id="contact-form" onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              name="projectName"
              label="Project name"
              type="text"
              fullWidth
              value={formData.projectName}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="desription"
              label="Description"
              type="text"
              fullWidth
              value={formData.desription}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="feeAmount"
              label="Fee Amount"
              type="number"
              fullWidth
              value={formData.feeAmount}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="alreadyCollected"
              label="Already Collected"
              type="number"
              fullWidth
              value={formData.alreadyCollected}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="likesCount"
              label="Likes Count"
              type="number"
              fullWidth
              value={formData.likesCount}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="dislikesCount"
              label="Dislikes Count"
              type="number"
              fullWidth
              value={formData.dislikesCount}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="user"
              label="User ID"
              type="number"
              fullWidth
              value={formData.user}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="endTime"
              label="End Time"
              type="date"
              fullWidth
              value={formData.endTime}
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
