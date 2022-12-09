import { useThree } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import "./style.css";

// Sections
import Hero from "./Hero.js";
import { SecondSection } from "./SecondSection";
// import { ThirdSection } from './ThirdSection'
import Experience from "./Experience.js";

const App = () => {
  const { viewport } = useThree();
  let x = 0;

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

        <SecondSection
          position={[x, -viewport.height * 1 + 1, 0]}
          headingText="We're thankul for our team"
          bodyText="We finally did an in-person summit with our team for the first time since 2019. It was a blast! We hiked. We giddyapped. We murder mysteried. And best of all, we saw each other."
        />
        <SecondSection
          position={[x, -viewport.height * 2 + 2, 0]}
          headingText="We're thankful for looking good'"
          bodyText="We launched a new website design and new visual branding that is sexy AF. Just like the work we do. (#humblebrag)"
        />
        <SecondSection
          position={[x, -viewport.height * 3 + 3, 0]}
          headingText="We're thankful for Stripe"
          bodyText="We partnered with Stripe, and doggonit it's been great. Helping our clients accept money in complex ways is surprisingly fun (and great for our clients)."
        />

        <SecondSection
          position={[x, -viewport.height * 4 + 4, 0]}
          headingText="We're thankful for shipping great work'"
          bodyText="Don't let the Stripe partnership fool you—money handling isn't all we do. We shipped mobile apps this year. We shipped web apps. We created beautiful designs. And overall, we made dozens of clients like you really happy."
        />

        <SecondSection
          position={[x, -viewport.height * 5 + 5, 0]}
          headingText="We're thankful for health and happiness"
          bodyText="Throughout the course of all of this fulfilling work, we had laughs, took care of family and stayed healthy and happy. "
        />

        <SecondSection
          position={[x, -viewport.height * 6 + 6, 0]}
          headingText="Last but not least...we're thankful for you"
          bodyText="We couldn't do any of this without you. Thank you for being a part of our journey. We're excited to see what 2022 brings."
        />

        <directionalLight
          intensity={0.5}
          position={[0, -viewport.height * 7 + 7, 3]}
        />
        {/* <ThirdSection position={[x, -viewport.height * 2, 0]} /> */}
        <Experience position={[x, -viewport.height * 7 + 7, 0]} />
      </Scroll>
    </ScrollControls>
  );
};

export default App;
