'use client';

import React, { useEffect, useState } from 'react';
import { Pokemon } from 'types/types';

import { PokemonPagination } from '@/app/Pagination';
import PokemonCard from '@/app/PokemonCard';
import { usePokemonContext } from '@/context/PokemonContext';

export default function FavoritesPage() {
  const { favorites, addFavorite, removeFavorite, isFavorite, error } =
    usePokemonContext();
  const [itemsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemons = favorites.slice(startIndex, endIndex);
  useEffect(() => {
    setCurrentPage(1);
  }, [favorites]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleFavoriteToggle = (pokemon: Pokemon, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite(pokemon.id)) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  return (
    <div className='layout px-4 py-8  '>
      <h1 className='h1 text-white text-center mb-8 drop-shadow-lg '>
        Pokémon Team
      </h1>
      <p className='text-white text-center mb-6 max-w-2xl mx-auto'>
        Welcome to your Pokémon Team! Here you can view and manage your favorite
        Pokémon. Add your top picks to your team and easily remove them whenever
        you want. Start building your ultimate collection!
      </p>

      {currentPokemons.length === 0 ? (
        <div className='text-center py-16'>
          <p className='text-white p'>No favorites yet!</p>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {currentPokemons.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isFavorite={isFavorite}
              handleFavoriteToggle={handleFavoriteToggle}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <PokemonPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
