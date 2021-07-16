import { useEffect, useState } from 'react';

import { Button } from './Button';

import { api } from '../services/api';

import { sidebarProps, GenreResponseProps } from '../interfaces'

export function SideBar(props: sidebarProps) {

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, [props.selectedGenre.id]);

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenre.id === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}