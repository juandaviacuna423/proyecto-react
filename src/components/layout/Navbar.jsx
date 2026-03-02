import { Link } from 'react-router-dom';

export default function Navbar({ brand }) {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 3rem',
      backgroundColor: '#1e1b3a',
      color: 'white',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <h3 style={{ margin: 0, color: 'white', fontSize: '1.3rem' }}>{brand}</h3>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>Inicio</Link></li>
        <li><Link to="/products" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>Productos</Link></li>
        <li><Link to="/contact" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>Contacto</Link></li>
        <li><Link to="/profile" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '500' }}>Perfiles</Link></li>
      </ul>
    </nav>
  );
}