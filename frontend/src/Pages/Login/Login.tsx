import {useState} from 'react'
import "./login.css"
import SignupModal from "../../Modal/SignupModal"
import signupImg from "../../assets/Images/signupImg.jpg"

const style ={
    card: {
        background:  "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
    },
}

const Login = () => {
  const [showSignupModal,setshowSignupModal] = useState(false)
  return (
    <> 
        <section className="text-center text-lg-start my-5">
            <div className='container py-3'>
                <div className="row g-0 align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="card cascading-right" style={style.card}>
                            <div className="card-body p-5 shadow-5 text-center">
                                <h3 className="fw-bold mb-3">Login</h3>
                                <p className="text-dark-50 mb-5">Please enter your username and password!</p>
              {/*<div className="message alert alert-success" role="alert">
                <h4 className="alert-heading">You are Successfully registered!</h4>
                <p>Please login with using your username and password.</p>
            </div>*/}
            {/*<div className="message alert alert-danger" role="alert">
              <h4 className="alert-heading">Your Registration is Unsuccessful!</h4>
              <p></p>
            </div>*/}
                                <form >
                                    < div className="form-outline form-white mb-4">
                                        <input type="text" className="form-control" placeholder="Username"/>
                                        {/*</input><p className="form-text text-danger" *ngIf="notRegistered">Invalid username or passsword</p>*/}
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-dark btn-block my-4 px-5" >Login</button>
                                    </div>
                                </form>
                            <div>
                            <p className="mb-0 mt-5">Don't have an account? <a className="text-dark-50 fw-bold" onClick={() => {setshowSignupModal(true)}}>Sign Up</a></p>
                            <SignupModal show={showSignupModal} onHide={() => setshowSignupModal(false)}/>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-5 mb-5 mb-lg-0">
                <img src={signupImg} className="w-100 h-500 rounded-4 shadow-4" alt="" />
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login
