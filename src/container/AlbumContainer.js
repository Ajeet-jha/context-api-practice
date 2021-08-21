import React, { useState, useEffect } from 'react'
import { AlbumProvider } from '../context/AlbumContext';
import axios from 'axios';
import { filter, includes } from 'lodash';

function AlbumContainer({ children }) {
    const [albums, setAlbums] = useState([]);
    const [search, setSearch] = useState('');
    const [renderData, setRenderData] = useState();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/albums`)
            .then(({ data }) => setAlbums(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const updatedRender = filter(albums, (data) => {
            return includes(data.title, search)
        })
        setRenderData(updatedRender);
    }, [search])

    useEffect(() => {
        setRenderData(albums)
    }, [albums])

    return (
        <AlbumProvider value={{
            albumdata: renderData,
            setSearch: setSearch
        }}>
            {children}
        </AlbumProvider>
    )
}

export default AlbumContainer
