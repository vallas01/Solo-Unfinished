import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listAllMarinas } from '../../store/marinaReducer';
import './BrowseBusiness.css'



export const BrowseMarinas = () => {

    const dispatch = useDispatch();
    const listAllMarinas = useSelector(state => {
        return state.marinas.list
    });

    useEffect(() => {
        dispatch(listAllMairas())
    }, [dispatch]);

    return (
        <div>
            <h1>MARINA LIST</h1>
        </div>
    );

}
