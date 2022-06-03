import { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { getReviews } from '../../store/reviewReducer';
import './BrowseMarinas.css';



const BrowseMarinas = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const marina = useSelector(state => {
        return state.marina;
    });
