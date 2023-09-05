import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import personajes from "../../styles/personajes.css"
import { useNavigate } from "react-router-dom"


export const Personajes = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();

  console.log(store.detallepeople.height);


  useEffect(() => {
    actions.obtenerInfoPerSingle(params.theid)
  }, [])

  function volverlogin() {

    if (store.auth === false) {
      navigate("/login#pills-login")
    }
  }


  useEffect(() => {
    console.log("este  :" + store.auth)
    if (store.auth === false) {
      navigate("/login#pills-login")
      volverlogin()
    }

  }, [])

  return (
    <div className="jumbotron container">
      <div className="jumbotron d-flex align-items-center">
        <div className="jumbotron-content">
          <div className="container">
            <div className="row bg-black p-5 bg-gradient bg-opacity-75">
              <div className="col-md-6">
                <img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.theid + 1) + ".jpg"} style={{ width: "100%" }} />
              </div>
              <div className="col-md-6 p-5 text-white" style={{ marginBottom: "300px" }} >
                <h1>{store.detallepeople.name} </h1>
                <p>It is a lonnog established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
            </div>
          </div>

          <div className="container-flex py-3">
            <div className="row">
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">
                      {store.detallepeople.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Birth Year</h5>
                    <p className="card-text">
                      {store.detallepeople.birth_year}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Gender</h5>
                    <p className="card-text">
                      {store.detallepeople.gender}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Height</h5>
                    <p className="card-text">
                      {store.detallepeople.height}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Skin Color</h5>
                    <p className="card-text">
                      {store.detallepeople.skin_color}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-warning">
                  <div className="card-body">
                    <h5 className="card-title">Eye Color</h5>
                    <p className="card-text">
                      {store.detallepeople.eye_color}
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

Personajes.propTypes = {
  match: PropTypes.object
};



export default Personajes;