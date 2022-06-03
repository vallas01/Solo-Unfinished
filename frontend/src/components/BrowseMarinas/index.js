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

    const deleteThisMarina = (e) => {
        e.preventDefault();
        dispatch(deleteMarina(marina.id));
        history.push(`/`);
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

                            {/* <NavLink to={'/marinas/${marina.id}'}> */}
                            <NavLink to={'/marinas/1'}>
                            <img src={marina.imgUrl} alt='marina' />
                            </NavLink>

                            <div className='description'>{marina.description}</div>
                            <button value={marina.id} className="other-btn red-hover-effect" onClick={deleteThisMarina}>Reviews</button>
                            <button value={marina.id} className="delete-btn red-hover-effect" onClick={deleteThisMarina}>Delete</button>
                            <button value={marina.id} className="other-btn red-hover-effect" onClick={deleteThisMarina}>Reservations</button>
                        </li>
                        </div>
                    )
                })}
                </ul>
        </div>
    );

}
 export default BrowseMarinas;
