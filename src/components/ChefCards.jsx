import React from 'react'
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ChefCards = ({chef}) => {
  return (
    <div className='chef__card'>
        <img src={chef.img} alt="" />
        <div className="chef__card--info">
            <h3 className="chef__card--name">{chef.name}</h3>
            <p className="chef__recipe--count">Recipes: <b>{chef.recipesCount}</b></p>
            <p className="chef__cuisine">Recipes: <b>{chef.cuisine}</b></p>
            <p className="chef__icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
            </p>
        </div>
    </div>
  )
}

export default ChefCards