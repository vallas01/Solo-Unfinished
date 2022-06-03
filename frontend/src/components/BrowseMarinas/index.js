import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { getMarinas, deleteMarina } from '../../store/marinaReducer';
import './BrowseMarinas.css';


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
                <span className='span2'>Click Photo to Update</span>
            </div>
                <ul>
                {Object.values(marina).map((marina)=>{
                    return(
                        <div className='marina_container'>
                        <li key={marina.id} >
                            <h2>{marina.name}  -  ${marina.cost} / foot</h2>

                            <NavLink  to={`/marinas/${marina.id}`}>
                                <img src={marina.imgUrl} alt='marina' />
                            </NavLink>

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
