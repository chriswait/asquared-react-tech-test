export const SearchInput = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => (
  <input
    placeholder="Search beers 🔎"
    value={value}
    onChange={(event) => onChange(event.target.value)}
    style={{
      width: '100%',
      height: 48,
      paddingLeft: '1rem',
      paddingRight: '1rem',
      fontSize: 22,
      fontFamily: 'Inter',
      color: 'black',
    }}
    type="search"
  />
)
