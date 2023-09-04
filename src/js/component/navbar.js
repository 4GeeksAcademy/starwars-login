import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	/* 
		let motora = [store.favorito]
		console.log("motoloco: " + motora);
	 */

	return (
		<div className=" bg-dark bg-opacity-75">
			<nav className="navbar navbar-light mb-3" style={{ padding: "0px 180px 0px 180px" }}>
				<a href="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
						alt="logoStarWars"
						style={{ width: '100px', height: 'auto' }}
					/>

				</a>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle" 
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
						<span className="badge bg-secondary mx-2">{store.favorito.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorito.map((item, index) => {

							return (
								<li key={index}>
									<div key={index}>
										<div className="d-flex justify-content-between" style={{ width: '90%' }} index={index}>{item}
											< a className="text-danger" onClick={() => { actions.BorrarFavoritos(item), actions.CambiarColor(item) }}>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" momia bi bi-x-square" viewBox="0 0 16 16">
													<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
													<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
												</svg>
											</a>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		</div>
	);
};
