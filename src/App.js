import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ScrollContainer from "./ScrollContainer";
import { Loader } from "./Loader";
import "./style.css";
import { PictureModal } from "./PictureModal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <Canvas camera={{ near: 0.1, far: 200, fov: 56, antialias: true }}>
        <Suspense fallback={<Loader />}>
          <ScrollContainer modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
        </Suspense>
      </Canvas>
      <PictureModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    </>
  );
};

export default App;
