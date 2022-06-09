import Experience from "./Experience";
import Camera from "./Camera";
import Renderer from "./Renderer";

import { useEffect } from "react";

function ExperienceComponent() {
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");
    const experience = new Experience(canvas);
    const camera = new Camera();
    const renderer = new Renderer();
  }, []);

  return <canvas className="webgl" />;
}

export default ExperienceComponent;
