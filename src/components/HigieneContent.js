import React from 'react'

const HigieneContent = () => {
  return (
    <>
       <div className="descripcion">
      <p>Consejos para la higiene y aseo de tus gatos</p>
    </div> 

    <div className='higiene'>
    <div className="row">
        <div className="col-12">
          <h3 className="cepillado"> Cepillado</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6"><img className="cepillo" src="./img/cepillo.jpg" data-aos="fade-right"/></div>
        <div className="col-6">
          <p className="text-j">El cepillado regular de tu gatito te brinda la oportunidad de detectar parásitos, como
            pulgas y garrapatas
            y ayuda a prevenir las bolas de pelos que pueden acumularse en el estómago.
            Recordemos, también, que un pelaje sano y brillante va a depender del tipo de comida para gatos que estemos
            comprando.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="arenero"> Arenero</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-j">Actualmente encontrarás gran variedad de formas, tamaños y materiales de cajas de arena. Sin
            embargo,
            la característica más importante será siempre el tamaño, que debe ser lo suficientemente grande para que tu
            gato pueda
            entrar y salir cómodamente, así como lo suficientemente alto para que pueda moverse dentro y enterrar sus
            desechos
          </p>
        </div>
        <div className="col-6">
          <img className="img-arena" src="./img/arenero.jpg" data-aos="fade-left"/>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="unas"> Corte de uñas</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6"><img className="img-unas" src="./img/uñas.jpg" data-aos="fade-right"/></div>
        <div className="col-6">
          <p className="text-j">Se debe realizar un recorte periódico de las uñas de nuestros gatos, más o menos toma
            alrededor de una semana a 10 días para que la uña vuelva a crecer. Es importante hacerlo justo donde la uña
            comienza a curvarse, ya que si lo hacemos más abajo de este punto, podríamos cortar una pequeña vena, lo que
            lastimaría al gato y haría que sangre.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="bano"> Baño</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-j">Para llevar a cabo el baño a un gato, deberás tener tacto y paciencia. Cualquier movimiento
            brusco puede generarle estrés y complicar la actividad. Puedes usar la bañera, o un recipiente que se ajuste
            a su tamaño.. Utiliza agua tibia (30 grados) y un champú específico para felinos.. Antes de empezar, deja
            correr el agua unos segundos para que tu gato se acostumbre al sonido.

          </p>
        </div>
        <div className="col-6">
          <img className="img-bano" src="./img/baño.jpg" data-aos="fade-left"/>
        </div>
      </div>
     
    </div>
    </>
  )
};

export default HigieneContent;