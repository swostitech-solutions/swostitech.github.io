import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: "#f4f6f9",
        },
        particles: {
          color: {
            value: ["#ff0000", "#0000ff", "#ffa500", "#6a5acd", "#d3f418"],
          },
          links: {
            color: "#007bff",
            distance: 120,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
          },
          number: {
            value: 95,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 3,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
    />
  );
};

export default ParticlesBackground;
