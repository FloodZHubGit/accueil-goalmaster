import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Table } from "./components/Foosball_table";
import { Overlay } from "./components/Overlay";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <directionalLight position={[10, -10, 5]} intensity={1} />
      <directionalLight position={[-10, 10, -5]} intensity={1} />
      <directionalLight position={[10, 0, 5]} intensity={1} />

      <ScrollControls pages={4} damping={0.25}>
        <Table
          position={[0, -2, 0]}
          scale={[0.01, 0.01, 0.01]}
          rotation={[Math.PI / 12, 0, 0]}
        />
        <Overlay />
      </ScrollControls>
    </>
  );
}
