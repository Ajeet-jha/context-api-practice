import React, {
    useState,
    useContext,
    useEffect
} from 'react'
import { AlbumContext } from '../context/AlbumContext';
import AlbumList from './AlbumList';
import SearchBox from './SearchBox';

import { filter, includes, map, } from 'lodash';

function AlbumLists() {
    const [search, setSearch] = useState('');
    const [renderData, setRenderData] = useState();
    const { albumdata } = useContext(AlbumContext);

    useEffect(() => {
        setRenderData(albumdata)
    }, [albumdata])

    useEffect(() => {
        const updatedRender = filter(albumdata, (data) => {
            return includes(data.title, search)
        })
        setRenderData(updatedRender);
    }, [search])

    return (
        <>
            <SearchBox
                onChange={
                    (e) => setSearch(e.target.value)
                }
            />

            <ul>
                {map(renderData, (data) => (

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