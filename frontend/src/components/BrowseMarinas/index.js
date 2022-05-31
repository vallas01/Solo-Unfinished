import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { getMarinas } from '../../store/marinaReducer';
import './BrowseMarinas.css';



const BrowseMarinas = () => {

    const dispatch = useDispatch();
    // const { marinaId } = useParams();
    const marina = useSelector(state => {
        return state.marina;
    });

    console.log(`marina: ${marina}`)

    useEffect(() => {
        dispatch(getMarinas())
    }, [dispatch]);

    return (
        <div>
            <h1>MARINA LIST</h1>
            {Object.values(marina).map((marina)=>{
                return(
                    <h2>{marina.title}</h2>
                )
            })}


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
