import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    const { isLoading, error, data: ordered, refetch } = useQuery([], () =>
        fetch(`http://localhost:5000/ordered?email=${email}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Sl</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Ordered Quantity</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordered?.map((order, index) => <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{order?.productName}</td>
                            <td>{order.quantity}</td>
                            <td><button>Pay</button></td>
                            <td>
                                <button onClick={(id) => {
                                    console.log(order.productName);
                                    Swal.fire({
                                        title: 'Are you sure?',
                                        text: "You won't be able to revert this!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Yes, delete it!'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                            )
                                            fetch(`http://localhost:5000/ordered/${order._id}`, {
                                                method: 'DELETE',
                                                headers: {
                                                    "content-type": 'application/json'
                                                },
                                            }).then(res => res.json())
                                                .then(data => {
                                                    ordered.filter(data => data._id !== id)
                                                    refetch()
                                                })
                                        }
                                    })
                                }} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                    Cancel
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;