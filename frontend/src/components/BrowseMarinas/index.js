import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// eslint-disable-next-line
import { listAllMarinas } from '../../store/marinaReducer';
import './BrowseMarinas.css';



const BrowseMarinas = () => {

    const dispatch = useDispatch();
    const listAllMarinas = useSelector(state => {
        return state.marinas.list
    });

    useEffect(() => {
        dispatch(listAllMarinas())
    });                         //  , [dispatch] <=add this back


console.log("test")
    return (
        <div>
            <h1>MARINA LIST</h1>
        </div>
    );

}

export default BrowseMarinas;
