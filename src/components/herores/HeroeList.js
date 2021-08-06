import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({publisher}) => {

    const heroes=useMemo(() => getHeroesByPublisher(publisher), [publisher])
   
    return (
  
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map(hero=>(
                    <HeroeCard key={hero.id}
                        {...hero}
                        />
                ))
            }
        </div>
      


    )
}
