export default function Products() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Productos</h1>
      <p style={{ color: '#aaa', fontSize: '1.1rem' }}>Aquí se mostrarán los productos.</p>
    </div>
  );
}