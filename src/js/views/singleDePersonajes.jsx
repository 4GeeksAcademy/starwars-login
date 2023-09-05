import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes.js"



export const SinglePersonajes = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();



	return (
		<div className="jumbotron">
			<br />
			<Personajes />
		</div>
	);
};