export const Stat = ({ label, value }) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      borderBottomWidth: 1,
      borderBottomStyle: 'dashed',
      marginBottom: 6,
    }}
  >
    <div style={{ fontWeight: 300 }}>{label}:</div>
    <div style={{ fontSize: 24 }}>{value}</div>
  </div>
)
