import { useState } from "react"
import "./header.css"
import SignupModal from "../../Modal/SignupModal"

const style ={
    container: {
        color: "#778c17",
        fontSize : "24px",
    },
}

const Header = () => {
    const [showSignupModal,setshowSignupModal] = useState(false)
  return (
    <>
        <nav id="navbar" className="navbar navbar-expand-md fixed-top sticky-top shadow-lg py-0">
            <div className="container-fluid">
            <a className="navbar-brand px-2" href='/'><span style={style.container}>GREEN</span>CITY</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" 
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                <ul className="navbar-nav text-uppercase text-center">
                    <li className="nav-item mt-2">
                        <a className="nav-link" href='/'>HOME</a>
                    </li>
                    <li className="nav-item mt-2">
                    <a className="nav-link" href='/login'>LOGIN</a>
                    </li>
                    <li className="nav-item mt-2">
                        <a className="nav-link" onClick={() => {setshowSignupModal(true)}}>SIGNUP</a>
                        <SignupModal show={showSignupModal} onHide={() => setshowSignupModal(false)}/>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </>
  )
}

export default Header
