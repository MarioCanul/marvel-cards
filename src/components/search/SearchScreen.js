import React, { useMemo } from 'react'

import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../herores/HeroeCard'
import queryString from'query-string';
import { getHeroeByName } from '../../selectors/getHeroeByName';

export const SearchScreen = ({history,location}) => {
    const {q=''} = queryString.parse(location.search);
    const[values, handleInputChange, reset]=useForm({
        heroe:q
    })
    const {heroe}=values;

    const heroeFiltered= useMemo(() => getHeroeByName(q), [q])
     
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (heroe.leght==="") {
            return null
        }
        history.push(`?q=${heroe}`)
        
        reset()
    }
    return (
        <>
           <h3>Encuentra tu Heroe</h3> 
           <hr/>
           <div className='row'>
               <div className='col-5'>
                <h4>Search Form</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                    required
                    type='text'
                    placeholder='Encuentra tu heroe'
                    className='form-control'
                    autoComplete='off'
                    name='heroe'
                    value={heroe}
                    onChange={handleInputChange}

                    />
                    <button
                    type='submit'
                    className='btn btn-primary btn-block mt-2'
                    >
Search..
                    </button>
                </form>
               </div>
               <div className='col-7 text-center'>
<h4>Resultados</h4>
<hr/>

{
    (q==='')&&<div className='alert alert-info'>
Search a hero
    </div>
}
{
    (q!=='' && heroeFiltered.length===0)&&
    <div className='alert alert-info'>
there is no hero with {q} 
    </div>
}
{
    heroeFiltered.map(hero=>(
        <HeroeCard
        key={hero.id}
        {...hero}
        />
    ))
}

               </div>


           </div>
        </>
    )
}
