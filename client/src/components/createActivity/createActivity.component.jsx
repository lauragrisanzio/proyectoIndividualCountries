import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router"

import { createActivities, getCountries, getActivities } from "../../redux/actions";
import { validator } from "./validator";

import styles from "./createActivity.module.css";

const CreateActivity = () => {
  const { allCountries } = useSelector((state) => state);

  const history = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    duration: 0,
    difficulty:0,
    season: "",
    CountryId: []
  })
  
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getCountries(),
    getActivities());
},[dispatch])

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setErrors(validator({ ...values, [property]: value }));
    //seteamos los errores en nuestro estado
    setValues({ ...values, [property]: value });
    //actualizamos el estado values
  };
  
  //handlers:manejador de eventos--cuando ocurra una accion sucede lo que indica el handler
  const handleSelectCountries = (event) => {
    setValues({
      ...values,
      CountryId:[...values.CountryId, event.target.value.toUpperCase()]
})
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name === '' || values.duration === 0 || values.difficulty === 0 || values.season === ''
      || values.CountryId.length === 0)
     
    return alert('You must complete all fields');
    dispatch(createActivities(values))
    // .then(() => dispatch(getActivities()))
    //         .then(() => dispatch(getCountries()))
            .then(() => history('/home'))  
    console.log(values);
    alert('Activity Created');
    setValues({
      name: '',
      duration: 0,
      difficulty: 0,
      season: '',
      CountryId: []
    })
  };

  return (
    <div>
      <button>HOME</button>
      <h1>NEW TOURIST ACTIVITY</h1>
      <h2>FUN CREATING A TOURIST ACTIVITY</h2>
      <p>
        Estas en el Create. - form para crear actividad turistica - en esta
        vista se encontrará el formulario para crear una actividad turística.
        Posibilidad de seleccionar/agregar varios países en simultáneo. Botón
        para crear la actividad turística.
      </p>
      <div className={styles.form}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              placeholder="Write a name activity"
              type="text"
              value={values.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {errors.name1 && <p>{errors.name1}</p>}
          </div>
          <br />
          <div>
            <label htmlFor="duration"> Duration hs:</label>
            <input
              type="number"
              // min={1}
              // max={24}
              value={values.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
            />
            {errors.duration3 ? (
              <p>{errors.duration3}</p>
            ) : errors.duration2 ? (
              <p>{errors.duration2}</p>
            ) : (
              <p>{errors.duration1}</p>
            )}
            <br />
            <div>
              <label> Dificculty level:</label>
              <br />
              <label>
                <input
                  type="radio"
                  value="1"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                />
                1
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="2"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                />
                2
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="3"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                />
                3
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="4"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                />
                4
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  value="5"
                  name="difficulty"
                  onChange={(e) => handleChange(e)}
                />
                5
              </label>
              {errors.diff1 && <p className="errors-form">{errors.diff1}</p>}
            </div>
            <br />
          </div>
          <div>
            <label htmlFor="season"> Season:</label>
            <select
              placeholder="Season to do it"
              type="text"
              value={values.season}
              name="season"
              onChange={(e) => handleChange(e)}
            >
              <option value="" selected>
                Season:
              </option>
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
            </select>
            {errors.s1 && <p className="errors-form">{errors.s1}</p>}
            <div>{values.season}</div>
          </div>
          <br />
          <div className="country-form">
            <label htmlFor="">
              Select countries:
              <select
                name="countries"
                multiple={true}
                onChange={(e) => handleSelectCountries(e)}
              >
                {/* <option > Countries </option> */}
                {allCountries.map((c) => (
                  <option value={c.id}>{c.name}</option>
                ))}
              </select>
            </label>
            <div>{values.CountryId}</div>
          </div>
          {/* <div>
            {values.countryId.map((country) => (
              <div>
                <input
                  className="Form__Button"
                  type="button"
                  value="X"
                  onClick={() => handleDelete(country)}

                />
                <p>{country}</p>
              </div>
            ))}
          </div> */}
          <br />
          <br />

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