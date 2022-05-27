import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import auth from '../../Firebase/Firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const HandleAddItem = (e) => {
        e.preventDefault()

        const ratings = e.target.rating.value;
        if (ratings > 0 && ratings <= 5) {

            const userName = e.target.userName.value;
            const itemName = e.target.itemName.value;
            const description = e.target.description.value;

            const data = { ratings, userName, description, itemName }
            console.log(data);
            const url = 'https://ms-management124.herokuapp.com/review';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                });
            Swal.fire({
                icon: 'success',
                title: 'Congrats',
                text: 'Your review have been saved'
            })
            e.target.reset()
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Somethings wents wrong !',
                text: 'Enter rating between 1 to  5'
            })
        }



    };
    return (
        <div>
            <div className="w-50 mb-5 mx-auto ">

                <div className='p-5'>
                    <h2>Add your review</h2>
                    <hr />
                    <p>Add your fav items review here</p>
                </div>
                <form onSubmit={HandleAddItem}>

                    <div class="mb-3">
                        <input type="text"
                            readOnly
                            value={user?.displayName || 'unknown user'} name='userName' class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input name='itemName'
                            required placeholder='Item name' type="text" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input name='rating'
                            required placeholder='Ratings' type="number" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <textarea name='description' placeholder='Type your review here' class="form-control"
                            required rows="3"></textarea>
                    </div>
                    <button className='btn btn-success' type='submit'>ADD REVIEW</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;