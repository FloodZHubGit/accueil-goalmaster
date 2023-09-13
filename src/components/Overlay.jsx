import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const sectionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100vh",
  paddingTop: 0,
  paddingBottom: 0,
};

const textContainerStyle = {
  maxWidth: "100%",
  background: "transparent",
  padding: "16px",
  borderRadius: "8px",
  color: "green",
  fontSize: "50px",
};

const Section = (props) => {
  const sectionStyles = {
    ...sectionStyle,
    flexDirection: props.middle ? "column" : "row",
    justifyContent: props.top
      ? "flex-start"
      : props.bottom
      ? "flex-end"
      : props.right
      ? "flex-end"
      : "flex-start",
    paddingTop: props.top ? "10vh" : 0,
    paddingBottom: props.bottom ? "10vh" : 0,
  };

  return (
    <section style={sectionStyles}>
      <div className="w-1/2 flex items-center justify-center">
        <div style={textContainerStyle}>{props.children}</div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();

  return (
    <Scroll html>
      <div className="w-screen">
        <Section top middle>
          <h1 className="text-center">Bienvenue sur GoalMaster</h1>
        </Section>
        <Section>
          <h1 className="text-center">
            Le site qui transforme votre babyfoot en une expérience interactive
            et ludique
          </h1>
        </Section>
        <Section right>
          <h1 className="text-center">
            Révolutionnez le babyfoot grâce à la technologie Arduino
          </h1>
        </Section>
        <Section bottom middle>
          {/* center */}
          <h1 className="text-center">
            Rejoignez la communauté Goalmaster et défiez vos amis !
          </h1>
        </Section>
      </div>
    </Scroll>
  );
};
