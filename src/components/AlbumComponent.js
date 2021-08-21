import { useContext } from 'react'
import AlbumContainer from '../container/AlbumContainer';
import { AlbumContext } from '../context/AlbumContext';
import AlbumLists from './AlbumLists';

function AlbumComponent() {
    const { albumdata } = useContext(AlbumContext);
    return (
        <AlbumContainer>
            <AlbumLists {...albumdata} />
        </AlbumContainer>
    )
}

export default AlbumComponent
