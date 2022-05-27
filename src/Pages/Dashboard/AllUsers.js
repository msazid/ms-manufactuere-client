import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://ms-management124.herokuapp.com/users').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            {
                users.map((user, index) =>
                    <div class="card text-center my-5">
                        <div class="card-header">
                            {user.role === 'admin' && <p>Id user already an admin</p>}
                            {user.role !== 'admin' && <p>Make this user an admin ?</p>}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title my-3">{user.email}</h5>
                            {user.role !== 'admin' && <button className='btn btn-sm btn-success'
                                onClick={() => {
                                    fetch(`https://ms-management124.herokuapp.com/users/admin/${user.email}`, {
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
                            {user.role === 'admin' && <button className='btn btn-secondary btn-sm disabled' disabled>Already Admin</button>}
                        </div>
                    </div>

                )
            }
        </div>
    );
};



export default AllUsers;