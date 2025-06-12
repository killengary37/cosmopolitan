import gsap from 'gsap';
import {featureLists, goodLists} from "../../constants/index.js";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";

const Art = () => {
  // Detect if the user is on a mobile device
  const isMobile = useMediaQuery({maxWidth: 767});

  // Initialize GSAP animation with ScrollTrigger
  useGSAP(() => {
    // Define scroll start position based on screen size
    const start = isMobile ? 'top 20%' : 'top top'

    // Create a GSAP timeline with ScrollTrigger
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',        // The section that triggers the animation
        start,                  // Start point based on device type
        end: 'bottom center',   // Animation ends when bottom of trigger hits center of viewport
        scrub: 1.5,             // Smooth scrubbing through scroll
        pin: true               // Pin the section during the animation
    }
    })

    // Sequence of animations
    maskTimeline
      .to('.will-fade', {
        opacity: 0,     // Fade out elements
        stagger: 0.2,
        ease: 'power1.inOut'
      })
      .to('.masked-img', {
        scale: 1.3,               // Zoom image slightly
        maskPosition: 'center',   // Center the mask
        maskSize: '400%',         // Expand mask size
        duration: 1,
        ease: 'power1.inOut'
      })
      .to('#masked-content', {
        opacity: 1,     // Fade in masked content
        duration: 1,
        ease: 'power1.inOut'
      })
  })

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        {/* Section heading */}
        <h2 className="will-fade">The Art</h2>


        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check"/>
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          {/* Central image with masking and animation */}
          <div className="cocktail-img">
          <img
            src="/images/under-img.jpg"
            alt="cocktail"
            className="abs-center masked-img size-full object-contain"
          />
          </div>
          {/* List on the right side (or bottom on mobile) */}
          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check"/>
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Masked content that reveals after animation */}
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Art
