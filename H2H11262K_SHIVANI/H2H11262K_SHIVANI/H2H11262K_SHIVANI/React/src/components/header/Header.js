import React from 'react'
// import Abc from "../../assets/abc_logo.png"
import Abc from "../../assets/abc.jpg"
import hrc from "../../assets/hrclogo.svg"
function Header() {
  return (
    <div className="header">
       

            <img src={Abc} alt="logo" style={{ width: "18%", height: "95%" }}/>
            <img src={hrc} alt="hrc" style={{ margin: "0 22%", width: "17%", height: "90%",justifyItems:"center"}}/>
        

        <div style={{  padding: "1% 1% 1% 1%",fontSize: "21px" , textAlign:"left",color:"red"}}>
        Invoice List
        <br/>
        
      </div>
    </div>
  )
}

export default Header