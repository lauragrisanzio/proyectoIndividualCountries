import React from "react";
import "./form.module.css";

const Form = () => {
  return (
    <div className="Form">
      <p>
        Estas en el Create. - form para crear actividad turistica - en esta
        vista se encontrará el formulario para crear una actividad turística.
        Este formulario debe ser controlado completamente con JavaScritp. No se
        pueden utilizar validaciones HTML, ni utilizar librerías especiales para
        esto. Debe contar con los siguientes campos: Nombre. Dificultad.
        Duración. Temporada. Posibilidad de seleccionar/agregar varios países en
        simultáneo. Botón para crear la actividad turística. [IMPORANTE]: es
        requisito que el formulario de creación esté validado sólo con
        JavaScript. Puedes agregar las validaciones que consideres. Por ejemplo:
        que el nombre de la actividad no pueda contener números, o que la
        duración no pueda exceder determinado valor, etc.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            // value={userData.email}
            name="name"
            // onChange={handleChange}
          />
          {/* {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )} */}
        </div>
        <div>
          <label htmlFor="difficulty"> Dificculty:</label>
          <input
            type=""
            // value={userData.password}
            name="difficulty"
            // onChange={handleChange}
          />
          {/* {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>} */}
        </div>
        <div>
          <label htmlFor="season"> Season:</label>
          <input
            type=""
            // value={userData.password}
            name="season"
            // onChange={handleChange}
          />
          {/* {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>} */}
        </div>
        <div>
          <label htmlFor="duration"> Duration:</label>
          <input
            type=""
            // value={userData.password}
            name="duration"
            // onChange={handleChange}
          />
          {/* {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>} */}
        </div>
        <div>
          <button type="submit">CREATE</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
