import { useState } from 'react';
import { User } from '../types/user';
import getUsers from './getUsers';
import { Typography, List, ListItem, Button } from '@mui/material';
import React from 'react';

export default function UserList(){
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const handleLoadUsers = async () => {
    const result = await getUsers();

    if (Array.isArray(result)) {
      setUsers(result);
      setError(null);
    } else if (typeof result === 'object' && result !== null && 'id' in result) {
      setUsers([result as unknown as User]);
      setError(null);
    } else {
      setError(String(result));
      setUsers([]);
    }
  };
    return (
    <div>
    <Button variant="contained" onClick={handleLoadUsers} style={{marginBottom: 10}}>
        Get Users
    </Button>
    <Typography variant="h5" gutterBottom>List of Users</Typography>

      {error && <Typography color="error">{error}</Typography>}

      {users.length === 0 && !error && (
        <Typography color="text.secondary">Empty list</Typography>
      )}

      <List>
        {users.map((user) => (
          <ListItem key={user.id} alignItems="flex-start">
      <div>
        <Typography variant="subtitle1"><strong>ID:</strong> {user.id}</Typography>
        <Typography variant="body2"><strong>NICKNAME:</strong> {user.nickname}</Typography>
        <Typography variant="body2"><strong>EMAIL:</strong> {user.email}</Typography>
      </div>
    </ListItem>
        ))}
      </List>
    </div>
  );
}
