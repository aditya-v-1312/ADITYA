"use client";

import { useEffect, useMemo, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

import { locations } from "@/data/countries";
import type { Location } from "@/data/countries";

interface GlobeSceneProps {
  selected: Location | null;
  onSelect: (location: Location) => void;
}

export default function GlobeScene({ selected, onSelect }: GlobeSceneProps) {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.35;

    globeRef.current.pointOfView(
      {
        lat: 18,
        lng: 25,
        altitude: 1.9,
      },
      0,
    );

    const scene = globeRef.current.scene();

    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 2);
    sun.position.set(100, 50, 150);
    scene.add(sun);

    const blue = new THREE.PointLight("#2f80ff", 25);
    blue.position.set(-250, 150, 150);
    scene.add(blue);

    const starsGeometry = new THREE.BufferGeometry();

    const starVertices: number[] = [];

    for (let i = 0; i < 8000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2500,
        (Math.random() - 0.5) * 2500,
        (Math.random() - 0.5) * 2500,
      );
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3),
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);

    scene.add(stars);

    return () => {
      scene.remove(stars);
      scene.remove(sun);
      scene.remove(blue);
      scene.remove(ambient);
    };
  }, []);

  const arcs = useMemo(
    () => [
      {
        startLat: 22.3072,
        startLng: 73.1812,
        endLat: 25.2048,
        endLng: 55.2708,
      },
      {
        startLat: 25.2048,
        startLng: 55.2708,
        endLat: 41.0082,
        endLng: 28.9784,
      },
      {
        startLat: 41.0082,
        startLng: 28.9784,
        endLat: 48.8566,
        endLng: 2.3522,
      },
      {
        startLat: 48.8566,
        startLng: 2.3522,
        endLat: -4.7889,
        endLng: 11.865,
      },
      {
        startLat: -4.7889,
        startLng: 11.865,
        endLat: 22.3072,
        endLng: 73.1812,
      },
    ],
    [],
  );

  const globeSize =
    typeof window !== "undefined"
      ? Math.min(window.innerWidth * 0.9, 700)
      : 700;

  return (
    <Globe
      ref={globeRef}
      width={globeSize}
      height={globeSize}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      showAtmosphere
      atmosphereAltitude={0.22}
      atmosphereColor="#5EA6FF"
      pointsData={locations}
      pointLat="lat"
      pointLng="lng"
      pointColor="color"
      pointAltitude={0.02}
      pointRadius={0.9}
      onPointClick={(point) => onSelect(point as Location)}
      ringsData={locations}
      ringLat="lat"
      ringLng="lng"
      ringColor={() => "#FFD166"}
      ringMaxRadius={4}
      ringPropagationSpeed={2}
      ringRepeatPeriod={1000}
      arcsData={arcs}
      arcStartLat="startLat"
      arcStartLng="startLng"
      arcEndLat="endLat"
      arcEndLng="endLng"
      arcColor={() => "#FFD166"}
      arcDashLength={0.45}
      arcDashGap={0.2}
      arcDashAnimateTime={2500}
      arcStroke={1.2}
    />
  );
}
