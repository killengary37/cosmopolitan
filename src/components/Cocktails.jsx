import {cocktailLists, mockTailLists} from '../../constants/index.js'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
  // Initialize scroll-based parallax animation using GSAP
  useGSAP(() => {
    // Create a timeline tied to scroll behavior
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails', // Element that triggers the animation
        start: 'top 30%',      // Start point in the view port
        end: 'bottom 80%',     // End point of the scroll animation
        scrub: true,           // Smooth scrubbing based on scroll position
      }
    })

    // Define parallax animation for decorative Leaves
    parallaxTimeline
      .from('#c-left-leaf', {
        x: -100,                        // Move from Left
        y:100                           // Move from bottom
      })
      .from('#c-right-leaf', {
        x: 100,                         // Move from right
        y: 100                          // Move from bottom
      })
  })

  return (
    <section id="cocktails" className="noisy">
      {/* Decorative leaf images used in parallax animation */}
      <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="left-leaf" id="c-right-leaf" />

      {/* Container for lists of drinks */}
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                {/* Cocktail information */}
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                {/* Price display */}
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Most loved mocktails section */}
        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                {/* Mocktail information */}
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                {/* Price display */}
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default Cocktails
