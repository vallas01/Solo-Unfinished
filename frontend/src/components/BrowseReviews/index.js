import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line
import { NavLink, useHistory } from 'react-router-dom';
import { getReviews, deleteReview } from '../../store/reviewReducer';
import './BrowseReviews.css';



const BrowseReviews = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const review = useSelector(state => {
        return state.review;
    });

    const deleteThisReview = (id) => {
        dispatch(deleteReview(id));
        history.push(`/reviews`);
    }


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
                            <h2>This marina has {review.rating} Stars. </h2>

                            <NavLink to={`/reviews/${review.id}`}>
                                <button value={review.id} className="other-btn red-hover-effect" >Edit</button>
                            </NavLink>

                            <button value={review.id} className="delete-btn red-hover-effect" onClick={()=>deleteThisReview(review.id)}>Delete</button>

                        </li>
                        </div>
                    )
                })}
                </ul>
        </div>


    );
}

export default BrowseReviews;
