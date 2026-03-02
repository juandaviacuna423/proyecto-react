export default function Hero({ title, subtitle }) {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      color: 'white',
      width: '100%',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h1>
      <p style={{ fontSize: '1.1rem', color: '#aaa' }}>{subtitle}</p>
    </section>
  )
}