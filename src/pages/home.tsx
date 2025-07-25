import { useTheme } from "../components/theme"
import "./home.css"


export const Home = () => {
  const { theme } = useTheme();

  return (
    <section className="hero-section" id={theme}>
      {/* Video Background */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h2 className="hero-welcome" id = {theme}>Welcome to</h2>
        <h1 className="hero-title">Resin Artology</h1>
        <p className="hero-subtitle">Your One Stop Shop</p>
        <p className="hero-for">for</p>
        <p className="hero-artworks">Art Works</p>
      </div>
    </section>
  )
}
