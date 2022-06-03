import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { getMarinas } from '../../store/marinaReducer';
import './BrowseMarinas.css';



const BrowseMarinas = () => {

    const dispatch = useDispatch();
    const marina = useSelector(state => {
        return state.marina;
    });


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
                    <li key={marina.id} >
                        <h2>{marina.name}  -  ${marina.cost} / foot</h2>

                        <NavLink to={'/marinas/${marina.id}'}>
                        <img src={marina.imgUrl} alt='marina' />
                        </NavLink>

                        <div className='description'>{marina.description}</div>
                    </li>
                )
            })}
            </ul>

            {/* <div className="add-business-btn-container">
                        <Link to='/addmarinas/new'>
                            <button className='add-business-btn'>Add A Marina</button>
                        </Link>
            </div> */}
            {/* Hello from Marinas */}
        </div>
    );

}
 export default BrowseMarinas;
