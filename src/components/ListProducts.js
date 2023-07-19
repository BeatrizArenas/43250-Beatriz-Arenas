import React, {useState, useEffect} from "react";
//FIREBASE
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


const ListProducts = () => {
  const[Productos, setProductos] = useState ([]);
  const[Carrito, setCarrito] = useState([]);

  useEffect(() => {
       const getProductos = async () => {
        const q = query(collection(db, "Productos"));
        const docs = [];
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
            setProductos(docs);
        });
       };
       getProductos(); 
    }, []);
      
    const handleComprarClick = (id) => {
      console.log("comprar" + id);
    };

    return (
    <> 
     <div className="row" id="divProductos">
      
     {Productos.map((producto, i) => {          
           return (<>
           <div className="card cardProducto" data-id={producto.id}>
        <div className="card-body">
        <img src={producto.img} className="producto-imagen"/> 
          <h5 className="card-title">{producto.producto}</h5>
          <p className="card-text">${producto.precio}</p>
          <button  onClick={ () => {handleComprarClick(producto.id)}} className="btn btn-primary">AGREGAR</button>
          <button className="btn btn-secondary">ELIMINAR</button>
        </div>
        </div>
           </>) 
        })}
     </div>     
    </>
    )
};

export default ListProducts;