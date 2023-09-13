import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

export function Table(props) {
  const { nodes, materials } = useGLTF("./models/foosball_table.glb");

  const foosball = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // FOOSBALL MOUVEMENT
    tl.current.to(
      foosball.current.rotation,
      {
        duration: 1,
        x: Math.PI / 12,
        y: Math.PI / 6,
        z: Math.PI / 12,
      },
      0
    );

    tl.current.to(
      foosball.current.position,
      {
        duration: 1,
        x: 4,
        y: -2,
        z: 2,
      },
      0
    );

    tl.current.to(
      foosball.current.rotation,
      {
        duration: 1,
        x: 0,
        y: -Math.PI / 2.5,
        z: -Math.PI / 10,
      },
      1
    );

    tl.current.to(
      foosball.current.position,
      {
        duration: 1,
        x: -4,
        y: -2,
        z: 2,
      },
      1
    );

    tl.current.to(
      foosball.current.rotation,
      {
        duration: 1,
        x: Math.PI / 2,
        y: 0,
        z: 0,
      },
      2
    );

    tl.current.to(
      foosball.current.position,
      {
        duration: 1,
        x: 0,
        y: 1,
        z: 0,
      },
      2
    );
  }, []);

  return (
    <group {...props} dispose={null} ref={foosball}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Dekor}
            position={[-138.123, 137.785, 129.442]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.score_button}
            position={[-222.673, 227.051, 16.29]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_2.geometry}
            material={materials.score_button}
            position={[222.835, 227.051, 44.273]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_3.geometry}
            material={materials.score_button}
            position={[222.729, 228.187, 51.498]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_4.geometry}
            material={materials.Dekor}
            position={[0, 212.136, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_5.geometry}
            material={materials.material_6}
            position={[24.991, 208.094, -85.761]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_6.geometry}
            material={materials.material_6}
            position={[24.991, 208.094, 93.078]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_7.geometry}
            material={materials.material_6}
            position={[64.779, 208.094, -58.919]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_8.geometry}
            material={materials.material_6}
            position={[64.779, 208.094, 65.833]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_9.geometry}
            material={materials.material_6}
            position={[109.47, 208.094, -41.181]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_10.geometry}
            material={materials.material_6}
            position={[109.47, 208.094, 47.878]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_11.geometry}
            material={materials.material_6}
            position={[160.349, 208.094, -36.848]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_12.geometry}
            material={materials.material_6}
            position={[160.349, 208.094, 43.636]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_13.geometry}
            material={materials.Stick}
            position={[160.516, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_14.geometry}
            material={materials.Stick}
            position={[109.716, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_15.geometry}
            material={materials.Stick}
            position={[65.109, 205.049, 0]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.defaultMaterial_16.geometry}
            material={materials.Stick}
            position={[25.242, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_17.geometry}
            material={materials.material_6}
            position={[-22.48, 208.094, -85.761]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_18.geometry}
            material={materials.material_6}
            position={[-22.48, 208.094, 93.078]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_19.geometry}
            material={materials.material_6}
            position={[-73.298, 208.094, -58.919]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_20.geometry}
            material={materials.material_6}
            position={[-73.298, 208.094, 65.833]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_21.geometry}
            material={materials.material_6}
            position={[-118.131, 208.094, -41.181]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_22.geometry}
            material={materials.material_6}
            position={[-118.131, 208.094, 47.878]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_23.geometry}
            material={materials.material_6}
            position={[-159.447, 208.094, -36.848]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_24.geometry}
            material={materials.material_6}
            position={[-159.447, 208.094, 43.636]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_25.geometry}
            material={materials.Mans}
            position={[160.481, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_26.geometry}
            material={materials.Mans}
            position={[109.739, 200.071, -36.214]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_27.geometry}
            material={materials.Mans}
            position={[109.739, 200.071, 35.676]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_28.geometry}
            material={materials.Mans}
            position={[65.181, 200.071, -53.599]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_29.geometry}
            material={materials.Mans}
            position={[65.181, 200.071, 53.812]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_30.geometry}
            material={materials.Mans}
            position={[65.181, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_31.geometry}
            material={materials.Mans}
            position={[25.182, 200.071, -38.071]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_32.geometry}
            material={materials.Mans}
            position={[25.182, 200.071, -80.64]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_33.geometry}
            material={materials.Mans}
            position={[25.182, 200.071, 80.877]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_34.geometry}
            material={materials.Mans}
            position={[25.182, 200.071, 38.307]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_35.geometry}
            material={materials.Mans}
            position={[25.182, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_36.geometry}
            material={materials.Mans}
            position={[-22.376, 200.071, -38.071]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_37.geometry}
            material={materials.Mans}
            position={[-22.376, 200.071, -80.64]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_38.geometry}
            material={materials.Mans}
            position={[-22.376, 200.071, 80.877]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_39.geometry}
            material={materials.Mans}
            position={[-22.376, 200.071, 38.307]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_40.geometry}
            material={materials.Mans}
            position={[-22.376, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_41.geometry}
            material={materials.Mans}
            position={[-73.121, 200.071, -53.599]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_42.geometry}
            material={materials.Mans}
            position={[-73.121, 200.071, 53.812]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_43.geometry}
            material={materials.Mans}
            position={[-73.121, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_44.geometry}
            material={materials.Mans}
            position={[-117.946, 200.071, -36.214]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_45.geometry}
            material={materials.Mans}
            position={[-117.946, 200.071, 35.676]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_46.geometry}
            material={materials.Mans}
            position={[-159.294, 200.071, -0.034]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_47.geometry}
            material={materials.Dekor}
            position={[0, 212.136, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_48.geometry}
            material={materials.material}
            position={[-180.286, 29.229, 108.155]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_49.geometry}
            material={materials.Dekor}
            position={[0, 212.136, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_50.geometry}
            material={materials.Vida}
            position={[-159.186, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_51.geometry}
            material={materials.Vida}
            position={[-159.186, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_52.geometry}
            material={materials.Stick}
            position={[-159.186, 205.049, 0]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.defaultMaterial_53.geometry}
            material={materials.Vida}
            position={[-117.887, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_54.geometry}
            material={materials.Vida}
            position={[-117.887, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_55.geometry}
            material={materials.Stick}
            position={[-117.887, 205.049, 0]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.defaultMaterial_56.geometry}
            material={materials.Vida}
            position={[-22.256, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_57.geometry}
            material={materials.Vida}
            position={[-22.256, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_58.geometry}
            material={materials.Stick}
            position={[-22.256, 205.049, 0]}
            rotation={[Math.PI, 0, -Math.PI]}
            scale={[-100, 100, 100]}
          />
          <mesh
            geometry={nodes.defaultMaterial_59.geometry}
            material={materials.Vida}
            position={[65.154, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_60.geometry}
            material={materials.Vida}
            position={[65.154, 205.049, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_61.geometry}
            material={materials.Vida}
            position={[160.358, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_62.geometry}
            material={materials.Vida}
            position={[160.358, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_63.geometry}
            material={materials.Vida}
            position={[109.821, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_64.geometry}
            material={materials.Vida}
            position={[109.821, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_65.geometry}
            material={materials.Vida}
            position={[25.232, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_66.geometry}
            material={materials.Vida}
            position={[25.232, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_67.geometry}
            material={materials.Vida}
            position={[-73.032, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_68.geometry}
            material={materials.Vida}
            position={[-73.032, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_69.geometry}
            material={materials.Stick}
            position={[-73.032, 205.049, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.defaultMaterial_70.geometry}
            material={materials.Masa}
            position={[0, 212.136, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/foosball_table.glb");
