import { PeopleOutline } from '@mui/icons-material';
import { Grid, MenuItem, Select } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { unbridledSpiritAPI } from '../../api';
import { AdminLayout } from '../../components/layouts';
import { IUser } from '../../interfaces';

const UsersPage = () => {
  const { data, error } = useSWR<IUser[]>('/api/admin/users');
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  if (!data && !error) return <></>;

  const onRoleUpdated = async (userID: string, newRole: string) => {
    const previousUsers = users.map((user) => ({ ...user }));
    const updatedUsers = users.map((user) => ({
      ...user,
      role: userID === user._id ? newRole : user.role,
    }));

    setUsers(updatedUsers);

    try {
      await unbridledSpiritAPI.put('/admin/users', { userID, role: newRole });
    } catch (error) {
      setUsers(previousUsers);
      console.log(error);
      alert('User role update failed');
    }
  };

  const columns: GridColDef[] = [
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'name', headerName: 'Full name', width: 300 },
    {
      field: 'role',
      headerName: 'Role',
      width: 300,
      renderCell: ({ row }: GridValueGetterParams) => {
        return (
          <Select
            value={row.role}
            label="Role"
            onChange={({ target }) => onRoleUpdated(row.id, target.value)}
            sx={{ width: '300px' }}
          >
            <MenuItem value="admin">admin</MenuItem>
            <MenuItem value="SEO">SEO</MenuItem>
            <MenuItem value="super-user">Super User</MenuItem>
            <MenuItem value="client">client</MenuItem>
          </Select>
        );
      },
    },
  ];

  const rows = users.map((user) => ({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  }));

  return (
    <AdminLayout
      title={'Users'}
      subTitle={'Users maintainance'}
      icon={<PeopleOutline />}
    >
      <Grid container className="fadeIn">
        <Grid item xs={12} sx={{ height: '33.125rem', width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
          />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default UsersPage;
