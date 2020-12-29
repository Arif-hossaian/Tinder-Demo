import React, {useState} from 'react'
import "../TinderCards-part/tinderCard.css"
import TinderCard from "react-tinder-card"



function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Tony Stark",
            url: "https://www.cheatsheet.com/wp-content/uploads/2019/07/Robert-Downey-Jr.-2.jpg"
        },

        {
            name: "Jeff Bezoz",
            url: "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        },
    ])


    const swiped = (direction, nameToDelete) =>{
        console.log("removing: " + nameToDelete)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) =>{
        console.log(name + "left to the screen")
    }
    return (
        <div className="tinderCards">

          <div className="CardContainer">

          {people.map((person) => (
               
               <TinderCard 
               className="swipe"
               key={person.name}
               preventSwipe ={["up", "down"]}
               onSwipe = {(dir) => swiped(dir, person.name)}
               onCardLeftScreen = {() => outOfFrame(person.name)}>

               <div 
               style= {{backgroundImage: `url(${person.url})`}}
               className="card">

               <h3>{person.name}</h3>

               </div>

               </TinderCard>
            ))}
          </div>
            
        </div>
    )
}

export default TinderCards
