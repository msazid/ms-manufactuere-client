import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://ms-management124.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data.reverse())
            }

            )
    }, [reviews])
    return [reviews, setReviews];
};

export default useReviews;