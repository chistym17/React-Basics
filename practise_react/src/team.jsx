import { useState } from "react"

export  default function Team()
{ const team_style={
border:'2px solid tomato',
margin :'15px',
padding:'15px'



}

const [team,update]=useState(11)

const addplayer=()=>
{
update(team+1)

}
const reduceplayer=()=>
{
update(team-1)

}



return (

<div style={team_style}>

<h3>players:{team}</h3>
<button onClick={addplayer}>add</button>
<button onClick={reduceplayer}>reduce</button>

</div>


)




}