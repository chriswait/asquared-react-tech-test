export const ErrorMessage = ({
  message,
  detailedMessage,
}: {
  message: string
  detailedMessage?: string
}) => {
  return (
    <div
      style={{
        marginTop: '10rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: 56 }}>😞</div>
      <h2>{message}</h2>
      {detailedMessage ? (
        <pre
          style={{
            fontFamily: 'monospace',
            border: '1px solid grey',
            padding: '1rem',
          }}
        >
          {detailedMessage}
        </pre>
      ) : null}
      <button
        style={{
          color: 'black',
          fontFamily: 'Inter',
          fontSize: 28,
          marginTop: '4rem',
        }}
        onClick={() => window.location.reload()}
      >
        Retry
      </button>
    </div>
  )
}
