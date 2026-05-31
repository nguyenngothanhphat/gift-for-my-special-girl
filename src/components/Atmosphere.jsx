import { useAtmosphere } from '../hooks/useAtmosphere'
import { Icon } from './Icon'

export function Atmosphere() {
  const particles = useAtmosphere()

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" id="atmosphere">
      {particles.map((particle) => (
        <div key={particle.id} className="particle" style={particle.style}>
          <Icon name={particle.icon} className="particle-icon" />
        </div>
      ))}
    </div>
  )
}
