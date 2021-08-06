import React from 'react'
import { Link } from 'react-router-dom'
const heroImages= require.context('../../assets/heroes',true);
export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
const img={
  width:'100%'
}

    return (
        // <div className="col">
      <div className="row animate__animated animate__fadeIn mt-4" >
        <div className='col-6'>

      <img src={heroImages(`./${id}.jpg`).default} alt="heroe" style={img} />
        </div>
        <div className='col-6'>
      <div className="card-body ">

        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{first_appearance}</p>
        <p className="card-text">{characters}</p>
        {
          (alter_ego!== characters)&&
          <p className="card-text">{alter_ego}</p>
        }
        <Link to={`/heroe/${id}`}>Mas...</Link>
      </div>
        </div>
      <div className="card-footer  text-center">
        <small className="text-muted">{publisher}</small>
      </div>
    </div>
    //  </div>

    )
}
