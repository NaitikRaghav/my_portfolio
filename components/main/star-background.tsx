
"use client";

import {
  Points,
  PointMaterial,
  type PointsInstancesProps,
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";

import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
} from "react";

import type {
  Group,
  Points as PointsType,
} from "three";

// ==========================================
// STARFIELD CONFIGURATION
// ==========================================

const STAR_COUNT = 4000;

// ==========================================
// 3D STAR BACKGROUND
// ==========================================

export const StarBackground = (
  props: PointsInstancesProps
) => {
  const pointsRef = useRef<PointsType | null>(null);
  const interactionRef = useRef<Group | null>(null);

  // Mouse tracking
  const mouseTarget = useRef({
    x: 0,
    y: 0,
  });

  const mouseCurrent = useRef({
    x: 0,
    y: 0,
  });

  // Generate stars only once
  const stars = useMemo<Float32Array>(() => {
    const positions = new Float32Array(
      STAR_COUNT * 3
    );

    const generated = random.inSphere(positions, {
      radius: 1.2,
    });

    return new Float32Array(generated);
  }, []);

  // ==========================================
  // MOUSE MOVEMENT TRACKING
  // ==========================================

  useEffect(() => {
    const handlePointerMove = (
      event: PointerEvent
    ) => {
      if (event.pointerType !== "mouse") return;

      mouseTarget.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseTarget.current.y =
        1 -
        (event.clientY / window.innerHeight) * 2;
    };

    const resetPointer = () => {
      mouseTarget.current.x = 0;
      mouseTarget.current.y = 0;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener("blur", resetPointer);

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "blur",
        resetPointer
      );
    };
  }, []);

  // ==========================================
  // STAR ANIMATION
  // ==========================================

  useFrame((_state, delta) => {
    // Smooth interpolation
    const easing = 1 - Math.exp(-2.2 * delta);

    mouseCurrent.current.x +=
      (mouseTarget.current.x -
        mouseCurrent.current.x) *
      easing;

    mouseCurrent.current.y +=
      (mouseTarget.current.y -
        mouseCurrent.current.y) *
      easing;

    // Continuous slow star rotation
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 35;
      pointsRef.current.rotation.y -= delta / 45;
    }

    // Subtle cursor interaction
    if (interactionRef.current) {
      interactionRef.current.rotation.x =
        mouseCurrent.current.y * 0.035;

      interactionRef.current.rotation.y =
        mouseCurrent.current.x * 0.045;

      interactionRef.current.position.x =
        mouseCurrent.current.x * 0.006;

      interactionRef.current.position.y =
        mouseCurrent.current.y * 0.006;
    }
  });

  // ==========================================
  // RENDER STARS
  // ==========================================

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <group ref={interactionRef}>
        <Points
          ref={pointsRef}
          stride={3}
          positions={stars}
          frustumCulled
          {...props}
        >
          <PointMaterial
            transparent
            color="#ffffff"
            size={0.0019}
            sizeAttenuation
            depthWrite={false}
            opacity={0.55}
          />
        </Points>
      </group>
    </group>
  );
};

// ==========================================
// FULL SCREEN CANVAS
// ==========================================

export const StarsCanvas = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 1],
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        style={{
          background: "transparent",
        }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
