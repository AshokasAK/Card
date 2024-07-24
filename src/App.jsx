
import './App.css'
import User from './User'

const users = [
  {
    name :"Homelander",
    city : "New York",
    description : "Front End Developer",
    skills : ["HTML","CSS","Javascript","React","Mangodb","Node JS","Express JS","Mangodb","Node JS","Express JS"],
    online:true,
    profile : "img1.png",
  },
  {
    name :"Butcher",
    city : "New York",
    description : "Front End Developer",
    skills : ["HTML","CSS","Javascript","React","Mangodb","Node JS","Express JS","Mangodb","Node JS","Express JS"],
    online:true,
    profile : "img2.png",
  }
  ,
  {
    name :"Hughie",
    city : "New York",
    description : "Front End Developer",
    skills : ["HTML","CSS","Javascript","React","Mangodb","Node JS","Express JS","Mangodb","Node JS","Express JS"],
    online:false,
    profile : "img3.png",
  }
  ,
  {
    name :"Frenchie",
    city : "New York",
    description : "Front End Developer",
    skills : ["HTML","CSS","Javascript","React","Mangodb","Node JS","Express JS","Mangodb","Node JS","Express JS"],
    online:false,
    profile : "img4.png",
  }
]



const App = () => {
  return (
    <>
    
    {users.map((user,index)=>(
      <User
      key = {index}
      name = {user.name}
      city = {user.city}
      description = {user.description}
      skills = {user.skills}
      online = {user.online}
      profile = {user.profile}
      />
    ))}
    
    </>
  )
}

export default App

// name = "Ram"
//     city = "New Yrok"
//     description = "Front End Developer"
//     skills = {["HTML","CSS","Javascript","React","Mangodb","Node JS","Express JS","Mangodb","Node JS","Express JS"]}
//     online = {true}
//     profile = "img1.png"

