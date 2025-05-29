import { useState } from 'react';
import { Typography, List, ListItem, Button } from '@mui/material';
import React from 'react';
import { project } from '../types/project';
import getProjects from './getProjects';

export default function ProjectList(){
    const [projects, setProjects] = useState<project[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleLoadProjects = async () => {
    const result = await getProjects();

    if (Array.isArray(result)) {
      setProjects(result);
      setError(null);
    } else if (typeof result === 'object' && result !== null && 'id' in result) {
      setProjects([result as unknown as project]);
      setError(null);
    } else {
      setError(String(result));
      setProjects([]);
    }
  };
    return (
    <div>
    <Button variant="contained" onClick={handleLoadProjects} style={{marginBottom: 10}}>
        Get Users
    </Button>
    <Typography variant="h5" gutterBottom>List of Projects</Typography>

      {error && <Typography color="error">{error}</Typography>}

      {projects.length === 0 && !error && (
        <Typography color="text.secondary">Empty list</Typography>
      )}

      <List>
        {projects.map((project) => (
          <ListItem key={project.id} alignItems="flex-start">
      <div>
        <Typography variant="subtitle1"><strong>ID:</strong> {project.id}</Typography>
        <Typography variant="body2"><strong>NAME:</strong> {project.projectName}</Typography>
        <Typography variant="body2"><strong>DESC:</strong> {project.desription}</Typography>
        <Typography variant="body2"><strong>CREATOR:</strong> {project.user?.login ?? "Unknown user"}</Typography>
      </div>
    </ListItem>
        ))}
      </List>
    </div>
  );
}