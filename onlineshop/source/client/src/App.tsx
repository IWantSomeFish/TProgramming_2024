import React from 'react';

import './App.css';
import { Button, Grid2, TextField } from '@mui/material';
import deleteUser from './components/deleteUser';
import deleteProject from './components/deleteProject';
import CreateProjectForm from './components/createProject';
import CreateUserForm from './components/createUser';
import UpdateProjectForm from './components/updateProject';
import UpdateUserForm from './components/updateUser';
import UserList from './components/showUsers';
import ProjectList from './components/showProjects';

const App: React.FC = () => (
<div className="App" style={{paddingTop: 30}}>
    <div className='Grid' style={{paddingLeft: 30}}>
        <Grid2 container spacing={2}>
        <Grid2>
            <div style={{paddingBottom: 10}}>
                <TextField defaultValue="-1" id="user_id" label="Outlined" variant="outlined"/>
            </div>
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={deleteUser}>Delete User</Button>
            </div>
            <div style={{paddingBottom: 10}}>
                <CreateUserForm/>
            </div>
            <div style={{paddingBottom: 10}}>
                <UpdateUserForm/> 
            </div>
            <div style={{paddingBottom: 10}}>
                <UserList/>
            </div>
        </Grid2>
        <Grid2>
            <div style={{paddingBottom: 10}}>
                <TextField defaultValue='-1' id="project_id" label="Outlined" variant="outlined"/>
            </div>
            <div style={{paddingBottom: 10}}>
                <Button variant="contained" onClick={deleteProject}>Delete Project</Button>
            </div>
            <div style={{paddingBottom: 10}}>
                <CreateProjectForm/>
            </div>
            <div style={{paddingBottom: 10}}>
                <UpdateProjectForm/>
            </div>  
            <div style={{paddingBottom: 10}}>
                <ProjectList/>
            </div>
        </Grid2>
        </Grid2>
    </div>
</div>
);

export default App;
