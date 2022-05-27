import React from 'react';
import useTools from '../../Hooks/useTools';
import Loading from '../Shared/Loading';
import AllItemShow from './AllItemShow';

const AllItems = () => {
    const[items] = useTools(); 
    return (
        <div>
            <div className='my-5 row row-cols-1 row-cols-md-3 g-4 container mx-auto'>
                
                {
                    items.length===0?(<Loading></Loading>):''
                }
                {
                    items.map(item=><AllItemShow key={item._id} item={item}></AllItemShow>)
                }
            </div>
        </div>
    );
};

export default AllItems;