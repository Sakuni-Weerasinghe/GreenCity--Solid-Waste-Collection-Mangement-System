import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { useNavigate} from 'react-router-dom'
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';

const style ={
  button:{
    backgroundColor: "#778c17",
    border: "none",
    width: "100%"
  },
}

const SignupModal = (props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) => {
  const navigate = useNavigate();

  const userSignUp = () => {
    navigate('/signup/userSignup')
    props.setshowSignupModal(true)
  }
  const centerSignUp = () => {
    navigate('/signup/centerSignup')
    props.setshowSignupModal(true)
  }

  if(!{props}) return null
  return (
    <>
      <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered> 
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h5>Register As,</h5>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-dark btn-block px-5 mb-3' onClick={userSignUp} style={style.button}>USER</button>
          <button className='btn btn-dark btn-block px-5' onClick={centerSignUp} style={style.button}>COLLECTION CENTER</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignupModal;
