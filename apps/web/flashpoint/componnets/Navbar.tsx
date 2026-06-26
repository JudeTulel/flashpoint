import React from 'react'

const Navbar = () => {
  return (
    <>
      <ul style={{justifyContent:'space-between',display:'flex',flexDirection:'row', backgroundColor:'white',color:'black',opacity:30}}>
        <li>Home</li>
        <li>Chrono Markets</li>
        <li>Side Markets</li>
        <li>Profile</li>
      </ul>
    </>
  )
}

export default Navbar
