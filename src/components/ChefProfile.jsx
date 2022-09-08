import React from 'react'
import ChefCards from './ChefCards'

const ChefProfile = () => {
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/img/chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/img/chefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/chefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Pine",
            img: "/img/chefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Mahmood Wahid",
            img: "/img/chefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "Lebanese"
        },
        {
            name: "Ben Tennyson",
            img: "/img/chefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ];


  return (
    <div className='section chefs'>
        <h1 className="title">
            This Weeks Top Chefs
        </h1>
        <div className="chef__profile--container">
            {/* <ChefCards />
            <ChefCards />
            <ChefCards />
            <ChefCards />
            <ChefCards />
            <ChefCards /> */}
            {chefs.map(chef => <ChefCards key={chef.name} chef={chef} />)}
        </div>
    </div>
  )
}

export default ChefProfile