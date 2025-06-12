import {useGSAP} from "@gsap/react";
import gsap from "gsap";

import {navLinks } from '../../constants/index.js'



const NavBar = () => {
  // Animate navbar when scrolling past it
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',           // Start animation when the <nav> element hits the top of the viewport
        start: 'bottom top'       // When the bottom of nav hits the top of the screen
      }
    });

    // Fade in a blurred background on scroll
    navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
      backgroundColor: '#00000050',         // Semi-transparent black
        backgroundFilter: 'blur(10px',      // Subtle blue effect
        duration: 1,
        ease: 'power1.inOut'
    });
  })

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        {/** navigation links generated from constants*/}
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
