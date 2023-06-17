import React from 'react'

const JugetesContent = () => {
  return (
    <>
       <div className="contenido">El jueguete apropiado para tu gato te puede ayudar a sacar su estres y pasar un momento de
      diviersión, conservando sus intintos felinos. Hemos preparado una tabla con diferentes tipos de juguetes,
      características y sus beneficios.
    </div>
 
      <div id="carouseljuguetes" className="juguetes" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item text-center active">
            <img src="./img/laser.jpeg" />
          </div>
          <div className="carousel-item text-center">
            <img src="./img/cana.jpeg"/>
          </div>
          <div className="carousel-item text-center">
            <img src="./img/ratones.jpg"/>
          </div>
          <div className="carousel-item text-center">
            <img src="./img/tunel.jpeg"/>
          </div>
          <div className="carousel-item text-center">
            <img src="./img/interactivo.jpeg"/>
          </div>
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th> Características</th>
            <th> Beneficios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Puntero láser</strong></td>
            <td> Objeto del que sale una luz láser roja, haciendo que el gato la perciba como
              un
              punto en una superficie.</td>
            <td>Gran entretenimiento.<p></p>
              <p>Ejercicio.</p>
            </td>
          </tr>
          <tr>
            <td> <strong>Palo con hilo y plumas</strong></td>
            <td> Caña de madera o plástico mide medio metro aproximadamente. El hilo suele ser
              elástico y el objeto colgante puede consistir en una pluma o una pelota hueca.</td>
            <td> Reflejos.<p></p>
              <p>Ejercicio.</p>
              <p>Aumenta su equilibrio.</p>
            </td>
          </tr>
          <tr>
            <td> <strong>Ratones</strong></td>
            <td> Pequeños muñecos con forma de ratón, con plumas de colores o cola larga.
              Suelen
              ser de plástico.</td>
            <td> Activación de instinto de caza.<p></p>
              <p>Mantiene a tu gato en alerta por un tiempo, aumentando su atención y concentración.</p>
            </td>
          </tr>
          <tr>
            <td> <strong>Pelotas con sonidos</strong></td>
            <td> Bolas pequeñas de plástico con cascabeles en su interior.</td>
            <td> Ejercicio.<p></p>
              <p>Activación de los sentidos.</p>
            </td>
          </tr>
          <tr>
            <td> <strong>Tabla con muelle</strong></td>
            <td> Consiste en un cuadrado del que sobresale un muelle con un complemento
              llamativo, como una pluma, una pelota o un muñeco.</td>
            <td> Desarrollo de la capacidad de atención.<p></p>
              <p>Muchos de estos accesorios están fabricados para que tu gato pueda afilarse las uñas. </p>
            </td>
          </tr>
          <tr>
            <td> <strong>Túnel</strong></td>
            <td> Cilindro de plástico con varios caminos.</td>
            <td> Agilidad.<p></p>
              <p>Escondite (a los gatos les gusta los sitios pequeños y oscuros porque se sienten más seguros).</p>
            </td>
          </tr>
          <tr>
            <td> <strong>Interactivo</strong></td>
            <td> Puede consistir en un artefacto circular, donde se coloca un objeto llamativo
              en su interior.</td>
            <td>Uso de energía.
              <p>Aumento de la capacidad cerebral.&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table> 
    </>
  )
};

export default JugetesContent;
