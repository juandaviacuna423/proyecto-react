export default function WhatsAppButton() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '30px',
      backgroundColor: '#1a1a2e',
      width: '100%'
    }}>
      <button style={{
        backgroundColor: '#25d366',
        border: 'none',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 28px',
        borderRadius: '50px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)'
      }}>
        📞 WhatsApp
      </button>
    </div>
  )
}