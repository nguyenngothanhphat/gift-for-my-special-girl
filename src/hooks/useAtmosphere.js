import { useMemo } from 'react'

const icons = ['favorite', 'star', 'auto_awesome', 'favorite_border']
const colors = ['#ffd1dc', '#fed9b8', '#e7bbc6', '#ffffff']

export function useAtmosphere(count = 30) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, id) => {
        const size = Math.random() * 20 + 10
        const duration = Math.random() * 15 + 10
        const delay = Math.random() * -20

        return {
          id,
          icon: icons[Math.floor(Math.random() * icons.length)],
          style: {
            fontSize: `${size}px`,
            color: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
          },
        }
      }),
    [count],
  )
}
