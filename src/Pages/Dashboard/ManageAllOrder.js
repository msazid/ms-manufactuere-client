import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageAllOrder = () => {
    const { isLoading, error, data: orders, refetch } = useQuery('allOrder', () =>
        fetch('https://ms-management124.herokuapp.com/orders', {
            method: 'GET',
        }).then(res => res.json()
        ))
    if (isLoading) return <Loading></Loading>

    if (error) return 'An error has occurred: ' + error.message


    return (
        <div className="container my-5 ">
            {
                orders.map((order, index) => <ManageOrder key={order._id} order={order} index={index} refetch={refetch}></ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrder;