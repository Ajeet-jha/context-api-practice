import React, {
    useContext,
    useEffect
} from 'react';
import { map } from 'lodash';

import { AlbumContext } from '../context/AlbumContext';
import AlbumList from './AlbumList';
import SearchBox from './SearchBox';

function AlbumLists() {
    const { albumdata, setSearch } = useContext(AlbumContext);

    return (
        <>
            <SearchBox
                onChange={
                    (e) => setSearch(e.target.value)
                }
            />

            <ul>
                {map(albumdata, (data) => (

                    <AlbumList
                        key={data.id}
                        {...data}
                    />

                ))}
            </ul>
        </>
    )
}

export default AlbumLists