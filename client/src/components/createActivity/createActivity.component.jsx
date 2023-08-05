import { useState } from "react";
import { useDispatch } from "react-redux";

import { createActivities } from "../../redux/actions"
import { validator } from "./validator";

import styles from "./createActivity.module.css";

const CreateActivity = () => {

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    duration: "",
    difficulty:"",
    season: "",
    countries: []
  })

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value.toUpperCase();
    setErrors(validator({ ...values, [property]: value }));
    //seteamos los errores en nuestro estado
    setValues({ ...values, [property]: value });
    //actualizamos el estado values
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name === '' || values.duration === '' || values.difficulty === '' || values.season === ''
      || values.countries.length === 0)
    return alert('You must complete all fields');
    dispatch(createActivities(values));
    alert('Activity Created');
    setValues({
      name: '',
      duration: '',
      difficulty: '',
      season: '',
      countries: []
    })
  };

  return (
    <div>
      <h1>NEW TOURIST ACTIVITY</h1>
      <h2>FUN CREATING A TOURIST ACTIVITY</h2>
      <p>
        Estas en el Create. - form para crear actividad turistica - en esta
        vista se encontrará el formulario para crear una actividad turística.
        Este formulario debe ser controlado completamente con JavaScritp. No se
        pueden utilizar validaciones HTML, ni utilizar librerías especiales para
        esto. Posibilidad de seleccionar/agregar varios países en simultáneo.
        Botón para crear la actividad turística. [IMPORANTE]: es requisito que
        el formulario de creación esté validado sólo con JavaScript. Puedes
        agregar las validaciones que consideres. Por ejemplo: que el nombre de
        la actividad no pueda contener números, o que la duración no pueda
        exceder determinado valor, etc.
      </p>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Write a name activity"
              type="text"
              value={values.name}
              name="name"
              onChange={handleChange}
            />
            {errors.name1 ? (
            <p className="errors-name">{errors.name1}</p>) : "Name ok"}
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
            <button type="submit">CREATE ACTIVITY</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;

//el state del componente es la "única fuente de la verdad"
//que consideraremos para saber qué valores tiene nuestro formulario.;
//la única manera de actualizar el state es usando la función setState().
//Por lo tanto, un formulario controlado maneja los valores de los inputs en el state 
//y lo actualiza de acuerdo a los eventos del mismo usando setState.;