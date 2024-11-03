import { Link, useLocation } from 'react-router-dom'; 
import estilos from '../estilos/Menu.module.css';


function Menu() {

  const location = useLocation();
  const user = location.state?.user; 
  if (!user) {
    return <p>Error: No se encontró información del usuario.</p>; 
  }
  
  return (
    <div className={estilos.menu}>
      <h2 className={estilos.logo}>Estebanquito</h2>
      <nav className={estilos.nav}>
        <Link to="/plataforma" state ={user} className={estilos.menuItem}>
          <i className="material-icons">home</i> 
        </Link>
        <Link to="/saldos" state ={user} className={estilos.menuItem}>
          <i className="material-icons">date_range</i> 
        </Link>
        <Link to="/transferencias" state ={user} className={estilos.menuItem}>
          <i className="material-icons">near_me	
          </i> 
        </Link>
        <Link to="/prestamos" state ={user} className={estilos.menuItem}>
          <i className="material-icons">business_center</i> 
        </Link>
        <Link to="/pago" state ={user} className={estilos.menuItem}>
          <i className="material-icons">attach_money</i> 
        </Link>
        <Link to="/yo" state ={user} className={estilos.menuItem}>
          <i className="material-icons">account_circle</i> 
        </Link>
      </nav>
    </div>
  );
}

export default Menu;
