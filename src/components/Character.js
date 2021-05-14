import React  from 'react'









 const Character = (props) => {
const {data} = props
    return(
        <div className="character">
          <div>
        <h3>{props.name}</h3>
           
           </div>
        </div>
    )
}

export default Character;