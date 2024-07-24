import React from 'react'
// import Proptypes from 'prop-types'

 const User = (props) => {
  return (
    <div className='card-container'>
    <span className={props.online ? "social active" : "social unactive"} >Online</span>
    <img src={props.profile} alt="image1" />
    <h4>{props.name}</h4>
    <h5>{props.city}</h5>
    <h6>{props.description}</h6>
    
    <div className="buttons">
      <button className='msgbtn'>Mesaage</button>
      <button className='flwbtn outline'>Follow</button>
    </div>
    <section>
      Skills :
      <ul>
       {props.skills.map((skill,index)=>(
        <li  key={index}>{skill}</li>
       ))}
        </ul>
    </section>
    </div>
  )
}

   export default User 
   
//  ---------------------------
//  ---------------------------
//    Optional -----
//    User.propTypes = {
//    name : Proptypes.string,
//    city : Proptypes.string,
//    description: Proptypes.string,
//    online:Proptypes.bool,
//    profile:Proptypes.string,
//   skills:Proptypes.arrayOf(Proptypes.string)
    
// }