import "./navbar.styles.css";

function NavBar({handleChange, handleSubmit}) {
    return (
      <div className="search-box">
        <form />
        <input placeholder="Busqueda" type="search" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </div>
    );
}
export default NavBar;
