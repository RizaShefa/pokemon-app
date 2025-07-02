import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PokemonCardProps, PokemonType } from 'types/types';

import { getTypeColor } from '@/app/components/PokemonListingPage';

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isFavorite,
  handleFavoriteToggle,
}) => {
  return (
    <Link href={`/${pokemon.id}`} key={pokemon.id}>
      <div className='bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300  ease-in-out  cursor-pointer'>
        <div className='flex items-center justify-between p-4  '>
          <button
            onClick={(e) => handleFavoriteToggle(pokemon, e)}
            className={`
    px-4 py-2 rounded-lg font-medium text-sm
    transition-all duration-200 ease-out
    border hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-ring
    z-10
    ${
      isFavorite(pokemon.id)
        ? 'bg-destructive border-destructive text-destructive-foreground hover:bg-destructive/90'
        : 'bg-primary border-primary text-primary-foreground hover:bg-primary/90'
    }
  `}
          >
            {isFavorite(pokemon.id) ? 'Remove from Team' : 'Add to Team'}
          </button>

          <div className=' bg-yellow-400 text-yellow-900 rounded-sm p-1  '>
            #{pokemon.id}
          </div>
        </div>
        <div className='p-4'>
          <div className='flex justify-center items-center min-h-[150px] group'>
            <Image
              loading='lazy'
              src={pokemon.sprites?.front_default || '/pokemon-placeholder.png'}
              alt={`${pokemon.name} sprite`}
              width={150}
              height={150}
              className='mx-auto'
            />
          </div>
        </div>

        <div className='p-6 pt-2'>
          <h2 className='h2 text-gray-800 mb-3 capitalize text-center'>
            {pokemon.name}
          </h2>

          {pokemon.types && pokemon.types.length > 0 && (
            <div>
              <h3 className='text-gray-600 h3 mb-2 text-center'>Types:</h3>
              <div className='flex flex-wrap gap-2 justify-center'>
                {pokemon.types.map((typeOfPokemon: PokemonType) => (
                  <p
                    key={typeOfPokemon.slot}
                    className={`px-3 py-1 p rounded-full text-sm font-semibold text-white ${getTypeColor(
                      typeOfPokemon.type.name
                    )}`}
                  >
                    {typeOfPokemon.type.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
