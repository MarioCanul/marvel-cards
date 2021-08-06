import React from 'react'
import { HeroeList } from '../herores/HeroeList'

export const HeroeMarvel = () => {
    return (
        <div className='text-center'>
            <h1>Heroes Marvel</h1>
            <hr/>
            <HeroeList publisher='Marvel Comics'/>
        </div>
    )
}