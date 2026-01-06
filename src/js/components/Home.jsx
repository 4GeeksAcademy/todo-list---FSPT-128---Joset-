import React, { useState } from "react";

const Home = () => {
	const [producto, setProducto] = useState("");
	const [listaCompra, setListaCompra] = useState([])

	const actualizarInput = (e) => {
		setProducto(e.target.value);
	};

	const agregarItem = () => {
		setListaCompra([...listaCompra, producto])
		setProducto ("")
	}

	const eliminarItem = (index) =>{
		const updateListaCompra = listaCompra.filter((item, i) => i !== index )
		setListaCompra(updateListaCompra)
	}

	return (
		<div className="container">
			<h2>Lista de la compra</h2>
			<div className="container_input">
				<input
					type="text"
					value={producto}
					onChange={actualizarInput}
					 onKeyDown={(e) => e.key === "Enter" && agregarItem()} 
					placeholder="¿Qué te falta?..."
				/>
				<button className='btn-add' onClick={agregarItem}>Agregar</button>
			</div>
			<ul>
				{
					listaCompra.length > 0 ? listaCompra.map((item, index) => {
						return (
							<li key={index} > {item} 
							<button 
							className='btn-delete'
							onClick={()=> {eliminarItem(index)}}>X</button></li>
							
						)
					})
					: 
					<p>No hay items</p>
				}

			</ul>
		</div>
	)
}

export default Home;
