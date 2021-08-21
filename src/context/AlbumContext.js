import { createContext } from 'react';

const AlbumContext = createContext({});

export const AlbumProvider = AlbumContext.Provider;

export { AlbumContext }