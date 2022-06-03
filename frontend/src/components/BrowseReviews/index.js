import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { NavLink, useHistory } from 'react-router-dom';
import { getReviews } from '../../store/reviewReducer';
import './BrowseReviews.css';



const BrowseReviews = () => {

    const dispatch = useDispatch();
    // const history = useHistory();
    const review = useSelector(state => {
        return state.review;
    });


    useEffect(() => {
        dispatch(getReviews())
    }, [dispatch]);

    return (


        <div>
            <div className='listContainer'>
                <span className='span1'>REVIEW LIST</span>

            </div>
                <ul>
                {Object.values(review).map((review)=>{
                    return(
                        <div className='review_container'>
                        <li key={review.id} >
                            <h2>{review.content}</h2>
                            <h2>Rating: ${review.rating} Stars! </h2>

                            <button value={review.id} className="other-btn red-hover-effect" >Edit</button>
                            <button value={review.id} className="delete-btn red-hover-effect" >Delete</button>

                        </li>
                        </div>
                    )
                })}
                </ul>
        </div>


    );
}

export default BrowseReviews;
