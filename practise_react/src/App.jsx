import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myapp from './buttn'
import './profile.css'
import Products from './products'
function App() {

  const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,

};


  return (
<div>

    <><h1>Welcome to my Page</h1>
<Myapp></Myapp>
<h1>{user.name}</h1>
<img className='avatar' src={user.imageUrl} alt="" style={{width:user.imageSize}}/>
    </>
 <Products></Products> 


</div>

  )
}




export default App
