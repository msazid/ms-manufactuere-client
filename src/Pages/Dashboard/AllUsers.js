import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>{users.length}</h1>
            <table class="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td className=' w-50'>{user.email}</td>
                                <td>
                                    {user.role !== 'admin' && <button className='btn btn-sm btn-success'
                                        onClick={() => {
                                            fetch(`http://localhost:5000/users/admin/${user.email}`, {
                                                method: 'PUT',
                                                headers: {
                                                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                                }
                                            })
                                                .then(res => {
                                                    if (res.status === 403) {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            text: 'Failed to Make an admin !'
                                                        })
                                                    }
                                                    return res.json()
                                                })
                                                .then(data => {
                                                    refetch()
                                                    if (data.modifiedCount > 0) {
                                                        Swal.fire({
                                                            icon: 'success',
                                                            text: 'Successfully made an admin'
                                                        })
                                                        
                                                    }
                                                })
                                        }}
                                    >Make Admin</button>}
                                    {user.role === 'admin' && <button className='btn btn-secondary btn-sm disabled' disabled>Make Admin</button>}
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;