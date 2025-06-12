import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

// React functional component representing the "about" section
const About = () => {
  // Initialize GSAP animations on component mount
  useGSAP(() => {
    // Split the text in the <h2> element into words for individual animation
    const titleSplit = SplitText.create('#about h2', {
      type: 'words'
    })

    // Define a GSAP Timeline triggered by scroll
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',      // Element that triggers the animation
        start: 'top center'     // Animation starts when the element hits center of the view port
      }
    })

    // Animate split words of the title into view
    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,          // Animate words from below
        ease: 'expo.out',
        stagger: 0.02           // Stagger animation for natural effect
      })

      // Animate grid images into view with fade-in and stagger
      .from('.top-grid div, .bottom-grid div', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.04,         // Delay between each image's appearance
      }, '-=0.5')      // Start slightly before the title animation ends
  })

  return (
    <div id="about">
      {/* Content section including title and description */}
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            {/* Animated heading with part highlighted in white */}
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          {/* Description and rating section */}
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
            </p>

            <div>
              {/* Rating display */}
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top grid image layout */}
      <div className="top-grid">
        <div className="md:col-span-3">
          <div  className="noisy" />
          <img src="/images/abt1.png" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div  className="noisy" />
          <img src="/images/abt2.png" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div  className="noisy" />
          <img src="/images/abt5.png" alt="grid-img-5" />
        </div>
      </div>
      {/* Bottom grid image layout */}
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div  className="noisy" />
          <img src="/images/abt3.png" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div  className="noisy" />
          <img src="/images/abt4.png" alt="grid-img-4" />
        </div>
      </div>

    </div>
  )
}
export default About