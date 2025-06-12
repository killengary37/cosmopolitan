import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
  // useGSAP hook sets up the GSAP animation when components mounts
  useGSAP(() => {
    // Split the <h2> text into individual words for animation
    const titleSplit = SplitText.create('#contact h2', { type: 'words' });

    // Initialize GSAP timeline with scroll-triggered animation
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',    // Animation triggers when #contact is in view
        start: 'top center',    // Start point of the trigger
      },
      ease: "power1.inOut"      // Easing for smoother motion
    })

    // Animate title words: fade in and move up sequentially
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02     // Delay between each word animation
      })
      // Animate subheadings and paragraphs similarly
      .from('#contact h3, #contact p', {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
      })
      // Animate decorative leaves to move upward
      .to('#f-right-leaf', {
        y: '-50',
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#f-left-leaf', {
      y: '-50',
        duration: 1,
        ease: 'power1.inOut'
    }, '<')             // Sync left leaf animation with the right one
  })

  // Footer content rendering
  return (
    <footer id="contact">
      {/* Decorative leaf images */}
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />


      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        {/* Opening hours mapped from constants */}
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        {/* Social media links mapped from constants */}
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact