import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
            <h1>MARINA LIST</h1>
            <ul>
            {Object.values(marina).map((marina)=>{
                return(
                    <li key={marina.id}>
                        <h2>{marina.name}</h2>
                        <p>{marina.cost} per foot</p>
                        <img src={marina.imgUrl} alt='marina'/>
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
