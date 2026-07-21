"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export default function GlobeScene() {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.enableZoom = false;
    controls.enablePan = false;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.45;

    globeRef.current.pointOfView(
      {
        altitude: 2.2,
      },
      0,
    );

    const globeMaterial = globeRef.current.globeMaterial();

    globeMaterial.color = new THREE.Color("#1a1d29");
    globeMaterial.emissive = new THREE.Color("#050816");
    globeMaterial.emissiveIntensity = 0.35;
    globeMaterial.shininess = 0.8;

    globeRef.current.scene().add(new THREE.AmbientLight(0xffffff, 1.2));

    const directional = new THREE.DirectionalLight(0xffffff, 2.8);

    directional.position.set(120, 80, 100);

    globeRef.current.scene().add(directional);
  }, []);

  return (
    <Globe
      ref={globeRef}
      width={650}
      height={650}
      backgroundColor="rgba(0,0,0,0)"
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      showAtmosphere
      atmosphereColor="#6CAEFF"
      atmosphereAltitude={0.22}
    />
  );
}
