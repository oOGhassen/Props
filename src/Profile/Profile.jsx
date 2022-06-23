import React from 'react'
import propTypes from 'prop-types'
import { string } from 'prop-types'

const Profile = ({Ghassen,children,handleName}) => { 
    //console.log(Ghassen)
  return (
    <div>
        <h1>{Ghassen.fullName}</h1>
        <p>{Ghassen.bio}</p>
        <p>{Ghassen.profession}</p>
        <img src={children} alt="kids"/>
        <button onClick={() => handleName(Ghassen.fullName)}>Click ME!</button>
      </div>
  )
}
Profile.defaultProps ={
    Ghassen:{
        fullName:"default",profession:"props",bio:"default bio"
    }
}
Profile.propTypes={
    Ghassen:{
        fullName:propTypes.string,
        profession:propTypes.string,
        bio:propTypes.string
    }
}

export default Profile