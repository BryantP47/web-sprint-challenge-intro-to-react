import React  from 'react'
import handlers from '../mocks/handlers'









 const Character = (props) => {
const {data} = props
console.log(data)
    return(
        <div className="character">
          <div>
        {/* {handlers.map(index => {
       return <li kry ={index}>{data.name} </li>
        })}   */}
           </div>
        </div>
    )
}

export default Character;