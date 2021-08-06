import React from 'react'
import { HeroeList } from '../herores/HeroeList'

export const HeroesDc = () => {
    return (
        <div className='text-center'>
            <h1 >Heroes DC</h1>
            <hr/>
            <HeroeList publisher='DC Comics'/>
        </div>
    )
}
