import { useEffect, useRef } from "react";
import Particles from "../../static/Particles";

export default function CanvaBackground(props: any) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const Particle = new Particles({ canvas: canvas });
    Particle.goMovie();

    window.addEventListener("resize", function (_e) {
      Particle.initCanvas();
    });

    window.addEventListener("mousemove", function (e) {
      var e = e || window.event;
      Particle.mouse_ball.x = e.pageX;
      Particle.mouse_ball.y = e.pageY;
    });
  }, []);

  return (
    <canvas
      style={{
        width: "100vw",
        height: "100vh",
        color: "#fff",
      }}
      ref={canvasRef}
      {...props}
    ></canvas>
  );
}
