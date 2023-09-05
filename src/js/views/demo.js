import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomeCardPers } from "../component/cardHomePers.jsx";
import { HomeCardPlanet } from "../component/cardHomePlanet.jsx";
import { HomeCardCar } from "../component/cardHomeCar.jsx";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Demo = () => {
	
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();


	function volverlogin() {

		if (store.auth === false) {
			navigate("/login")
		}
	}

	useEffect(() => {
		actions.obtenerInfohome(),
			actions.obtenerInfoPlaneta(),
			actions.obtenerAutos()
		actions.get_Demo()
		volverlogin()
	}, [])


	/* 	useEffect(() => {
			volverlogin()
			localStorage.removeItem("token")
		}, [store.auth])
	
	 */

	useEffect(function () {
		/* 	actions.actualizar() */
	}, [store.favorito])


	return (
		<div className="container">
			<h2 className="text-warning" style={{ textShadow: "1px 1px 10px yellow" }}>PERSONAJES</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.people.map((item, index) => {
					return (
						<div key={index}>
							<HomeCardPers index={index} name={item.name} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}></HomeCardPers>
						</div>
					)
				})}
			</div>
			<br />
			<h2 className="text-warning" style={{ textShadow: "1px 1px 10px yellow" }}>PLANETAS</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.planetas.map((item, index) => {
					return (
						<div key={index}>
							<HomeCardPlanet index={index} id={item.id} name={item.name} population={item.population} terrain={item.terrain}></HomeCardPlanet>
						</div>
					)
				})}
			</div>
			<br />
			<h2 className="text-warning" style={{ textShadow: "1px 1px 10px yellow" }}>VEHICULOS</h2>
			<div className="d-flex mb-5" style={{ overflowX: 'scroll', scrollSnapType: 'x mandatory' }}>
				{store.autos.map((item, index) => {

					return (
						<div key={index}>

							<HomeCardCar index={index} name={item.name} manufacturer={item.manufacturer} model={item.model}></HomeCardCar>

						</div>
					)
				})}
			</div>
		</div>
	);
};

