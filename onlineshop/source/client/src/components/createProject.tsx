import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button
} from '@mui/material';

export default function CreateProjectForm() {
  const today = new Date();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectMame: '',
    description: '',
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
              name="projectMame"
              label="Project name"
              type="text"
              fullWidth
              value={formData.projectMame}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              value={formData.description}
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
