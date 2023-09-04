import React, { useState, useEffect, useContext, useRef } from "react";
import { Await, Link, Navigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";
import { useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
export const Login = props => {

    const { store, actions } = useContext(Context);
    const [login, setLogin] = useState("show active")
    const [loginST, setLoginST] = useState("active")
    const [register, setRegister] = useState("")
    const [registerST, setRegisterST] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const navigate = useNavigate();





    function logines() {
        if (login == "") {
            setLogin("show active")
            setLoginST("active")
            setRegister("")
            setRegisterST("")
        }
    }

    function registeres() {
        if (register == "") {
            setRegister("show active")
            setRegisterST("active")
            setLogin("")
            setLoginST("")
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(Email, Password);
        let logeed = await actions.CrearUsuario(Email, Password);
        if (logeed === true) {
            navigate("/demo")

        }


    }

    return (
        <div className="container bg-dark bg-opacity-75 text-white">

            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className={"nav-link " + loginST} id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true" onClick={() => logines()}>Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className={"nav-link " + registerST} id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false" onClick={() => registeres()}>Register</a>
                </li>
            </ul>



            <div className="tab-content">
                <div className={"tab-pane fade " + login} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={handleSubmit}>

                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                            <label className="form-label" htmlFor="loginName">Email or username</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>


                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">

                                {/* <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                </div> */}
                            </div>

                            {/* <div className="col-md-6 d-flex justify-content-center">

                                <a href="#!">Forgot password?</a>
                            </div> */}
                        </div>

                        <div className="text-center mb-3">
                            <p>Sign in with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <button type="submit" className="btn btn-outline-warning ml-auto">Sign in</button>
                        {/* 
                        <div className="text-center">
                            <p>Not a member? <a href="#!">Register</a></p>
                        </div> */}
                    </form>
                </div>
                <div className={"tab-pane fade " + register} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>

                        <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control" />
                            <label className="form-label" htmlFor="registerName">Name</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" htmlFor="registerUsername">Username</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" htmlFor="registerEmail">Email</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerPassword">Password</label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            {/* <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" defaultChecked
                                aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" htmlFor="registerCheck">
                                I have read and agree to the terms
                            </label> */}
                        </div>

                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <button type="submit" className="btn btn-outline-warning ml-auto">Sign in</button>
                    </form>
                </div>
            </div>


        </div>
    );
};


export default Login;



















