import React from 'react'

const HomeContent = () => {
  return (
    <>
     <div className="contenido">En esta página explicaremos los temas básicos para criar y convivir con tu gato de manera
            sencilla y sin tener que sufrir en el proceso de adaptación
            y acercamiento hacia tu nuevo miembro de la familia.</div>


        <div className="row align-items-center">

            <div className="col text-center ">
                <img className="cajaalimentacion" src="./img/Alimentacion.jpeg" />

            </div>

            <div className="col text-center ">
                <img className="cajajuguetes" src="./img/juguetes.jpg" />
            </div>


            <div className="col text-center ">
                <img className="cajahigiene" src="./img/gato3.jpg" />
            </div>
        </div>
    </>
  )
}

export default HomeContent