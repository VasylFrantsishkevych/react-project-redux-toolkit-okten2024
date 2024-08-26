import {FC} from 'react';

import { pokemonSlice, useAppDispatch } from '../../redux';

import styles from './Pagination.module.css';

interface IProps {
    next: null | string;
    prev: null | string;
    limit: number;
    offset: number;
}

const PaginationComponent: FC<IProps> = ({next, prev, limit, offset}) => {

    const dispatch = useAppDispatch();
    
    return (
        <div className={styles.pagination_buttons}>
            <button
                disabled={!prev}
                onClick={() => {dispatch(pokemonSlice.actions.changeOffset(offset - limit))}}
            >
                prev
            </button>

            <button
                disabled={!next}
                onClick={() => {dispatch(pokemonSlice.actions.changeOffset(offset + limit))}}
            >next
            </button>
        </div>
    );
};

export default PaginationComponent;