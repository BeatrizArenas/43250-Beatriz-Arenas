import React from 'react'

const AlimentacionContent = () => {
  return (
    <>
    <div className="contenido">
        Para la alimentación de nuestro gato debemos tomar en cuanta varios criterios,
        edad, estilo de vida, raza.
      </div>

      <div className="accordion" id="dietaequilibrada">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne">
              <strong>Dieta equilibrada para tu gato</strong>

            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <p>Los gatos son animales carnívoros, por lo que tienen que incluir la carne en su dieta. A diferencia de
                los perros, los gatos nunca podrían ser vegetarianos o veganos.
                Los felinos toman como fuente de energía principal las proteínas y necesitan mayores cantidades de éstas
                que las que necesitan los perros. La carne no es sólo fuente de proteínas,
                sino que también aporta tres nutrientes esenciales para los gatos: la taurina (para el corazón y la
                vista), el ácido araquidónico (para la salud de la piel y el pelaje)
                y la vitamina A (para el pelaje y la vista).

                Para mantener a tu gato en forma, su dieta deberá contener una cantidad equilibrada de nutrientes
                esenciales. Una alimentación de alta calidad y completa tiene que estar
                especialmente formulada para aportarles la cantidad equilibrada de nutrientes que necesitan y, al mismo
                tiempo, tiene que ser deliciosa.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="agua">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo">
              <strong> La importancia del agua</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <p>El agua es esencial para todos los seres vivos, también para los gatos. Aunque los gatos fueron
                originariamente animales del desierto y, debido a eso, puedan aguantar bastante la orina,
                pueden tener problemas en la vejiga o cistitis si no beben la suficiente agua. Asegúrate de que tu gato
                dispone día y noche de agua fresca y limpia para beber, en un recipiente o una fuente de agua.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="comida-humeda">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree">
              <strong>Cómo servir la comida húmeda de gato</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <p>Los alimentos húmedos vienen presentados en latas, bandejas de aluminio o en bolsitas. Este tipo de
                alimento debe servirse a temperatura ambiente para que tu gato disfrute de su textura y su olor.
                Una vez abierto, cubre los restos sobrantes y guárdalos en el frigorífico, como máximo durante 24 horas.
                Recuerda que el producto deberá estar a temperatura ambiente la próxima vez que lo sirvas,
                así que sácalo del frigorífico con la suficiente antelación. Los alimentos húmedos no deben permanecer
                en el recipiente durante más de una hora, ya que dejan de ser apetecibles y favorecen la creación de
                bacterias,
                que podrían causar problemas digestivos.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="comida-seca">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour">
              <strong>Cómo servir la comida seca de gato</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              <p>Los alimentos secos son una alternativa muy popular a los alimentos húmedos. Sus granos contienen la
                cantidad equilibrada de nutrientes y tienen una textura crujiente que ayuda a mantener la salud bucal de
                tu gato.
                Tienen una mayor concentración de nutrientes que los alimentos húmedos, por lo que tendrás que servirlos
                en menor cantidad.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AlimentacionContent;




