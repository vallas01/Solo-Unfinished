import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { getMarinas, deleteMarina } from '../../store/marinaReducer';
import './BrowseMarinas.css';
import '../button.css';


const BrowseMarinas = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const marina = useSelector(state => {
        return state.marina;
    });

    const deleteThisMarina = (id) => {
        // e.preventDefault();
        dispatch(deleteMarina(id));
        history.push(`/marinas`);
    }

    useEffect(() => {
        dispatch(getMarinas())
    }, [dispatch]);


    return (
        <div>
            <div className='listContainer'>
                <span className='span1'>MARINA LIST</span>
                <span className='span2'>Click Photo to Update Most Recent Fuel Price</span>
            </div>
                <ul>
                {Object.values(marina).map((marina)=>{
                    return(
                        <div className='marina_container'>
                        <li key={marina.id} >
                            <div className='info_container'>
                                <div className='marina_name'>{marina.name}</div>
                                <div className='marina_cost'>${marina.cost}/gallon</div>
                                <div className='marina_coord'>latitude: {marina.lat}</div>
                                <div className='marina_coord'>longitude: {marina.lng}</div>
                                <Link  to={`/marinas/${marina.id}`}>
                                    <img className='imgMarina' src={marina.imgUrl} alt='marina' />
                                </Link>

                            </div>

                            <div className='description'>{marina.description}</div>

                            <NavLink to='/reviews'>
                                <button value={marina.id} className="other-btn" >Reviews</button>
                            </NavLink>

                            <button  value={marina.id} className="delete-btn red-hover-effect" onClick={()=>deleteThisMarina(marina.id)}>Delete</button>
                            <button  value={marina.id} className="other-btn" >Reservations</button>
                        </li>
                        </div>
                    )
                })}
                </ul>
        </div>
    );

}
 export default BrowseMarinas;
