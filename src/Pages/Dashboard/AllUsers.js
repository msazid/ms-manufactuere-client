import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AllUsers = () => {
    const {data:users,isLoading} = useQuery('users',()=>fetch('http://localhost:5000/users').then(res=>res.json()))
    
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>{users.length}</h1>
        </div>
    );
};

export default AllUsers;