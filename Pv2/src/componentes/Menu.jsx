import { Link } from 'react-router-dom';
import estilos from '../estilos/Menu.module.css'; 

function Menu() {
  return (
    <div className={estilos.menu}>
      <h2 className={estilos.logo}>Estebanquito</h2>
      <nav className={estilos.nav}>
        <Link to="/plataforma" className={estilos.menuItem}>
          <i className="material-icons">home</i> 
        </Link>
        <Link to="/saldos" className={estilos.menuItem}>
          <i className="material-icons">date_range</i> 
        </Link>
        <Link to="/transferencias" className={estilos.menuItem}>
          <i className="material-icons">near_me	
          </i> 
        </Link>
        <Link to="/prestamos" className={estilos.menuItem}>
          <i className="material-icons">business_center</i> 
        </Link>
        <Link to="/pago" className={estilos.menuItem}>
          <i className="material-icons">attach_money</i> 
        </Link>
        <Link to="/yo" className={estilos.menuItem}>
          <i className="material-icons">account_circle</i> 
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
