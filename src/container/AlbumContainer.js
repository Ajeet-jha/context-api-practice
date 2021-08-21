import React, { useState, useEffect } from 'react'
import { AlbumProvider } from '../context/AlbumContext';
import axios from 'axios';

function AlbumContainer({ children }) {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/albums`)
            .then(({ data }) => setAlbums(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <AlbumProvider value={{
            albumdata: albums
        }}>
            {children}
        </AlbumProvider>
    )
}

export default AlbumContainer
