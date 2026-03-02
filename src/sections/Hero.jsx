import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import PythonLogo from "../components/PythonLogo";
import ReactLogo from "../components/ReactLogo";
import DockerLogo from "../components/DockerLogo";
import { Rings } from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SceneContent = ({ isMobile, isTablet, isSmall }) => {
  const { viewport } = useThree();
  const vw = viewport.width;
  const vh = viewport.height;
  const roomRef = useRef();
  // ── Hacker Room ───────────────────────────────────────────────────────
  // ── Hacker Room ─────────────────────────────────────────────

  // Scale based on screen size
  const roomScale = isSmall
    ? 0.032
    : isMobile
      ? 0.038
      : isTablet
        ? 0.045
        : 0.055;

  useFrame((state) => {
    if (!roomRef.current) return;

    const { mouse } = state;

    // mouse.x and mouse.y are between -1 and 1
    // Invert Y because Three.js coordinates are flipped
    const targetX = -mouse.y * 0.4; // up/down tilt
    const targetY = -Math.PI + mouse.x * 0.4; // side rotation

    // Smooth interpolation (important for premium feel)
    roomRef.current.rotation.x += (targetX - roomRef.current.rotation.x) * 0.08;

    roomRef.current.rotation.y += (targetY - roomRef.current.rotation.y) * 0.08;
  });

  // Push room toward bottom using viewport height
  const roomY = -(vh * 0.28);

  // Position (centered horizontally, bottom vertically)
  const roomPosition = [0, roomY, 5];

  // Keep same rotation
  const roomRotation = [0, -Math.PI, 0];

  // ── Corner Scales ─────────────────────────────────────────────────────
  const reactLogoScale = isSmall
    ? 0.1
    : isMobile
      ? 0.13
      : isTablet
        ? 0.15
        : 0.18;
  const pythonScale = isSmall ? 0.06 : isMobile ? 0.08 : isTablet ? 0.09 : 0.11;
  const dockerScale = isSmall ? 0.12 : isMobile ? 0.15 : isTablet ? 0.18 : 0.22;
  const ringsScale = isSmall ? 0.18 : isMobile ? 0.22 : isTablet ? 0.27 : 0.32;

  // ── Corner Positions ──────────────────────────────────────────────────
  // viewport units are three.js world units the camera can see
  // Legion 15" (1920px): vw ≈ 28, vh ≈ 16
  // iPhone 14+ (430px):  vw ≈  7, vh ≈ 14
  // Clean symmetric layout
  const marginX = vw * 0.35;
  const marginY = vh * 0.35;

  const leftX = -marginX;
  const rightX = marginX;
  const centerY = 0;
  const bottomY = -marginY;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />

      {/* Hacker Room — centre, subtle mouse parallax on desktop */}
      <HeroCamera isMobile={isMobile || isSmall}>
        <group ref={roomRef} position={roomPosition}>
          <HackerRoom scale={roomScale} />
        </group>
      </HeroCamera>

      {/* Corner models */}
      <group>
        {/* Left - React */}
        <ReactLogo
          position={[leftX - 1, centerY + 4, 0]}
          scale={reactLogoScale}
        />

        {/* Right - Python */}
        <PythonLogo position={[rightX, centerY + 4, 0]} scale={pythonScale} />

        {/* Bottom Left - Rings */}
        {/* <Rings position={[leftX - 20, bottomY - 20, 0]} scale={ringsScale} /> */}

        {/* Bottom Right - Docker */}
        <DockerLogo position={[rightX, bottomY, 0]} scale={dockerScale} />
      </group>

      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
    </>
  );
};

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 441, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Hero Text */}
      <div
        className="w-full mx-auto flex flex-col items-center text-center z-10
                        mt-24 sm:mt-32 lg:mt-36 px-4 gap-3 pointer-events-none"
      >
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-white font-generalsans">
          Hi, I am Shon Kalangutkar
          <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-grey_gradient text-white">
          Python Backend Engineer
        </p>
      </div>

      {/* 3D Canvas — sits behind everything */}
      <div className="absolute inset-0 w-full h-full">
        <Leva hidden />
        <Canvas className="w-full h-full" gl={{ antialias: true }} dpr={[1, 2]}>
          <Suspense fallback={<CanvasLoader />}>
            <SceneContent
              isMobile={isMobile}
              isTablet={isTablet}
              isSmall={isSmall}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center px-4">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="w-full sm:w-auto sm:min-w-[24rem]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
