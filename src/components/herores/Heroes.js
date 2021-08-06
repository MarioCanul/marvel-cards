import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';
const heroImages= require.context('../../assets/heroes',true);
export const Heroes = ({history}) => {
    const {heroeId}=useParams();
    const hero=useMemo(() => getHeroesById(heroeId), [heroeId])
     
    if (!hero) {
        return <Redirect to='/'/>
    }
    const handleReturn=()=>{
        if (history.length<=2) {
            history.push('/')
        }
        else{
            
            <Redirect to={history.goBack()}/>
        } 
    }
 
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }=hero;
    console.log(heroImages(`./dc-superman.jpg`))
    return (
        
<div className='row mt-5'>
<div className='col-4  animate__animated animate__fadeInLeft'>

        <img src={heroImages(`./${id}.jpg`).default} className="img-thumbnail" alt="..." />
</div>
<div className='col-8 animate__animatedanimate__fadeInRight'>
<h3> {superhero}</h3>
     <ul className='list-group list-group-flush'>
         <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
         <li className='list-group-item'><b>Publisher : </b>{publisher}</li>
         <li className='list-group-item'><b>first appearance: </b>{first_appearance}</li>
     </ul>
     <h5> characters </h5>
     <p>{characters}</p>
     <button
     className='btn btn-outline-info'
     onClick={handleReturn}
     >Return</button>
</div>
</div>
       
    )
}
