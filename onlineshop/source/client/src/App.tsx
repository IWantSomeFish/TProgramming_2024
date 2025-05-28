import React from 'react';

import './App.css';
import { Button, Grid2, TextField } from '@mui/material';
import getProjects from './components/getProjects';
import getUsers from './components/getUsers';
import deleteUser from './components/deleteUser';
import deleteProject from './components/deleteProject';
import CreateProjectForm from './components/createProject';
import CreateUserForm from './components/createUser';

const App: React.FC = () => (
<div className="App" style={{paddingTop: 30}}>
    <div className='Grid' style={{paddingLeft: 30}}>
        <Grid2 container spacing={2}>
        <Grid2>
            <div style={{paddingBottom: 10}}>
                <TextField defaultValue="-1" id="user_id" label="Outlined" variant="outlined"/>
            </div>
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={getUsers}>Get all users</Button>
            </div> 
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={deleteUser}>Delete User</Button>
            </div>
            <CreateUserForm/>  
        </Grid2>
        <Grid2>
            <div style={{paddingBottom: 10}}>
                <TextField defaultValue='-1' id="project_id" label="Outlined" variant="outlined"/>
            </div>
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={getProjects}>Get all projects</Button>
            </div>
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={deleteProject}>Delete Project</Button>
            </div>
                <CreateProjectForm/>
        </Grid2>
        </Grid2>
    </div>
</div>
);

export default App;
