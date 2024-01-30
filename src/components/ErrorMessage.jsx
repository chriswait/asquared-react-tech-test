export const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        marginTop: '10rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 56 }}>😞</div>
      <h2 style={{ marginBottom: '4rem' }}>{message}</h2>
      <button
        style={{ color: 'black', fontFamily: 'Inter', fontSize: 28 }}
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  )
}
