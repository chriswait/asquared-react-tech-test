import { useEffect, useState } from 'react'

export const Loading = () => {
  const [numDots, setNumDots] = useState(0)
  useEffect(() => {
    const interval = setInterval(
      () => setNumDots((numDots) => (numDots + 1) % 3),
      600
    )
    return () => clearInterval(interval)
  }, [])
  return (
    <div
      style={{
        marginTop: '10rem',
        textAlign: 'center',
      }}
    >
      <h2>Loading{'.'.repeat(numDots + 1)}</h2>
    </div>
  )
}
