
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"


export const SingleAuto = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();


    console.log(store.detallesAuto);
    console.log("hola-q");

    useEffect(() => {
        actions.obtenerAutoSingle(params.theid)
    }, [])

    function volverlogin() {

        if (store.auth === false) {
            navigate("/login#pills-login")
        }
    }


    useEffect(() => {
        console.log("este  :" + store.auth)
        if (store.auth === false) {
            navigate("/login")
            volverlogin()
        }

    }, [])

    return (
        <div className="jumbotron container">
            <div className="jumbotron d-flex align-items-center">
                <div className="jumbotron-content">
                    <div className="container">
                        <div className="row bg-black p-5 bg-gradient bg-opacity-75">
                            <div className="col-6 row" >
                                <img className="" src="https://i1.wp.com/www.astropt.org/blog/wp-content/uploads/2015/05/xw1.jpg" />
                            </div>
                            <div className="col-6 text-white" style={{ marginBottom: "250px" }}>
                                <h1>{store.detallesAuto.name} </h1>
                                <p>It is a lonnog established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-flex py-4">
                        <div className="row">
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Name</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Model</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.model}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Speed</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.max_atmosphering_speed}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Passengers</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.passengers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Cargo Capacity</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.passengers}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="card bg-warning">
                                    <div className="card-body">
                                        <h5 className="card-title">Vehicle Class</h5>
                                        <p className="card-text">
                                            {store.detallesAuto.vehicle_class}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/">
                <span className="btn btn-outline-warning ml-auto" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>

    );
};





