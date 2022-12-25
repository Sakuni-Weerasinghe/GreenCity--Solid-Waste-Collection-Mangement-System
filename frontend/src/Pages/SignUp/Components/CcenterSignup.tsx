import { CenterSignupForm } from '../type'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from  'yup'
import "../signup.css"
import signupImg from "../../../assets/Images/signupImg.jpg"

const CcenterSignup = () => {
  const validationSchema = Yup.object().shape({
    centername: Yup.string().required("Center Name is required"),
    contactnumber: Yup.string().required("Contact Number is required"),
    addressline1: Yup.string().required("Address is Required"),
    addressline2: Yup.string().required("Address is Required"),
    username: Yup.string().required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters'),
    confirmpassword: Yup.string().required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  })

  const{ 
    register, 
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm<CenterSignupForm>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: CenterSignupForm) => {
    console.log(JSON.stringify(data,null,2))
  }

    const style ={
    card: {
        background:  "hsla(0, 0%, 100%, 0.55)",
        backdropFilter: "blur(30px)",
    },
  }

  return (
    <>
      <section className="text-center text-lg-start my-5">
        <div className='container py-3'>
          <div className="row g-0 align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="card cascading-right" style={style.card}>
                <div className="card-body p-5 shadow-5 text-center">
                  <h3 className="fw-bold mb-5">SignUp - Collection Center</h3>

          {/*<div className="message alert alert-success" role="alert">
            <h4 className="alert-heading">You are Successfully registered!</h4>
            <p>Please login with using your username and password.</p>
        </div>*/}
        {/*<div className="message alert alert-danger" role="alert">
          <h4 className="alert-heading">Your Registration is Unsuccessful!</h4>
          <p></p>
        </div>*/}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-outline mb-4">
                      <input type="text"{...register("centername")} className={`form-control ${errors.centername ? 'is-invalid': ''}`} placeholder="Center name"/>
                      <div className="invalid-feedback">{errors.centername?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text"{...register("contactnumber")} className={`form-control ${errors.contactnumber? 'is-invalid': ''}`} placeholder="Contact Number"/>
                      <div className="invalid-feedback">{errors.contactnumber?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text"{...register("email")} className={`form-control ${errors.email? 'is-invalid': ''}`} placeholder="Email"/>
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text"{...register("addressline1")} className={`form-control ${errors.addressline1? 'is-invalid': ''}`} placeholder="Address line 1"/>
                      <input type="text"{...register("addressline2")} className={`form-control  mt-1 ${errors.addressline2? 'is-invalid': ''}`} placeholder="Address line 2"/>
                      <input type="text" className="form-control mt-1" placeholder="Address line 3"/>                        <div className="invalid-feedback">{errors.addressline1?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text"{...register("username")} className={`form-control ${errors.username? 'is-invalid': ''}`} placeholder="Username"/>
                      <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password"{...register("password")} className={`form-control ${errors.password? 'is-invalid': ''}`} placeholder="Password"/>
                      <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password"{...register("confirmpassword")} className={`form-control ${errors.confirmpassword? 'is-invalid': ''}`} placeholder="Confirm Password"/>
                      <div className="invalid-feedback">{errors.confirmpassword?.message}</div>
                    </div>
                    <div className="modal-footer mb-2">
                      <button id="clear-btn" type="button" className="btn btn-dark btn-block mx-4 px-5" onClick={() => reset()}>Clear</button>
                      <button id="signup-btn" type="submit" className="btn btn-dark btn-block px-5">SignUp</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0">
              <img src={signupImg} className="w-100 rounded-4 shadow-4" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CcenterSignup
