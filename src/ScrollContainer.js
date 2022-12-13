import { useThree } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import "./style.css";

import Hero from "./Hero.js";
import { CopySection } from "./CopySection";
import Experience from "./Experience.js";

const ScrollContainer = ({modalIsOpen, setModalIsOpen}) => {
  const { viewport } = useThree();

  return (
    <ScrollControls
      pages={8} // Each page takes 100% of the height of the canvas
      distance={0.5} // A factor that increases scroll bar travel (default: 1)
      damping={4} // Friction, higher is faster (default: 4)
    >
      <Scroll>
        <directionalLight intensity={0.2} position={[0, 5, 3]} />
        <directionalLight intensity={0.1} position={[0, 0, 5]} />
        <Hero />
        <CopySection
          position={[0, -viewport.height * 1, 0]}
          headingText="We're thankul for"
          threeDText="Our Team"
          bodyText="We finally did an in-person summit with our team for the first time since 2019. It was a blast! We hiked. We giddyapped. We murder mysteried. And best of all, we saw each other."
        />
        <CopySection
          position={[0, -viewport.height * 2, 0]}
          headingText="We're thankful for"
          threeDText="Lookin' Good"
          bodyText="We launched a new website design and new visual branding that is sexy AF. Just like the work we do. (#humblebrag)"
        />
        <CopySection
          position={[0, -viewport.height * 3, 0]}
          headingText="We're thankful for"
          threeDText="Stripe"
          bodyText="We partnered with Stripe, and doggonit it's been great. Helping our clients accept money in complex ways is surprisingly fun (and great for our clients)."
        />
        <CopySection
          position={[0, -viewport.height * 4, 0]}
          headingText="We're thankful for"
          threeDText="Shipping"
          threeDTextLine2="Great Work"
          bodyText="Don't let the Stripe partnership fool you—money handling isn't all we do. We shipped mobile apps this year. We shipped web apps. We created beautiful designs. And overall, we made dozens of clients like you really happy."
        />
        <CopySection
          position={[0, -viewport.height * 5, 0]}
          headingText="We're thankful for"
          threeDText="Health &"
          threeDTextLine2="Happiness"
          bodyText="Throughout the course of all of this fulfilling work, we had laughs, took care of family and stayed healthy and happy. "
        />
        <CopySection
          position={[0, -viewport.height * 6, 0]}
          preHeadingText="and last but not least... "
          headingText="we're thankful for"
          threeDText="You!"
          bodyText="We couldn't do any of this without you. Thank you for being a part of our journey. We're excited to see what 2023 brings."
        />
        <Experience position={[0, -viewport.height * 7, 0]} setModalIsOpen={setModalIsOpen} modalIsOpen={modalIsOpen} />
        <directionalLight
          intensity={0.5}
          position={[0, -viewport.height * 8, 3]}
        />
      </Scroll>
    </ScrollControls>
  );
};

export default ScrollContainer;
