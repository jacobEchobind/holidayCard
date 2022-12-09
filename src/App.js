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
      pages={5} // Each page takes 100% of the height of the canvas
      distance={0.5} // A factor that increases scroll bar travel (default: 1)
      damping={4} // Friction, higher is faster (default: 4)
    >
      <Scroll>
        <directionalLight intensity={0.2} position={[0, 5, 3]} />
        <directionalLight intensity={0.1} position={[0, 0, 5]} />
        <Hero />
        <SecondSection
          position={[x, -viewport.height * 1 + 1, 0]}
          headingText="Ad enim atque sed tempore ullam."
          bodyText="Hic voluptas recusandae molestiae blanditiis expedita magni. Illo reiciendis similique. Ea est et laudantium neque ut consequuntur similique occaecati ratione. Ipsam et quia quo nihil velit facilis consequatur quisquam velit. Aperiam molestias iusto voluptatem illum cupiditate autem dolore ullam."
        />
        <SecondSection
          position={[x, -viewport.height * 2 + 2, 0]}
          headingText="Et facere dolores a occaecati."
          bodyText="Cupiditate esse iusto dolorem laudantium unde ut quo distinctio consectetur. Quos alias similique hic nostrum officiis voluptatum. Qui voluptas et reiciendis."
        />
        <SecondSection
          position={[x, -viewport.height * 3 + 3, 0]}
          headingText="Deleniti minima et."
          bodyText="Voluptate et aspernatur similique id. Praesentium eligendi est iste eum quia. Id incidunt quia animi adipisci ratione."
        />
        <directionalLight
          intensity={0.5}
          position={[0, -viewport.height * 2 + 5, 3]}
        />
        {/* <ThirdSection position={[x, -viewport.height * 2, 0]} /> */}
        <Experience position={[x, -viewport.height * 5 + 5, 0]} />
      </Scroll>
    </ScrollControls>
  );
};

export default App;
