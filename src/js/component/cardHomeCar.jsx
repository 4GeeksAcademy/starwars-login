import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import imagen from "../../img/how-to.png";
import { useNavigate } from "react-router-dom"

export const HomeCardCar = props => {
    const [fav3, setFav3] = useState("far fa-heart");
    const refs3 = useRef([]);
    const navigate = useNavigate();

    const { store, actions } = useContext(Context);

    useEffect(() => {
        refs3.current = refs3.current.slice(0, props.length); // Maintain the same number of refs as items
    }, [props.length]);

    const toggleFavorite3 = index => {
        const newFav = [...refs3.current];
        newFav[index].className = newFav[index].className !== "far fa-heart" ? "far fa-heart" : "fas fa-heart";
        refs3.current = newFav;

        actions.cargarFavorito(props.name, props.index);
    };

    function volverlogin() {

        if (store.auth === false) {
            navigate("/login")
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
        <div>
            <div className="card mx-3" style={{ width: "18rem", flex: '0 0 250px' }}>
                <img src={imagen} className="card-img-top" alt='imagen' />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div className="mb-3">
                        <label>Name: </label><span> {props.name}</span><br />
                        <label>Model:</label><span> {props.model}</span><br />
                        <label>Manufacturer:</label><span> {props.manufacturer}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link to={"/singleauto/" + (props.index + 1)}>
                            <button type="button" className="btn btn-outline-primary">Learn more!</button>
                        </Link>
                        <input
                            type="checkbox"
                            className="btn-check"
                            id={"btn-check-outlined" + props.index}
                            autoComplete="off"
                        />
                        <label
                            className="btn btn-outline-warning"
                            htmlFor={"btn-check-outlined" + props.index + 1}
                            onClick={() => toggleFavorite3(props.index)}>
                            <i className={fav3} ref={el3 => (refs3.current[props.index] = el3)} id={props.name}></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeCardCar.propTypes = {

    index: PropTypes.number,
    name: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
};

HomeCardCar.defaultProps = {
    changeColor: null,
};




















