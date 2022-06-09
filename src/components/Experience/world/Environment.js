import * as THREE from "three";
import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Environment");
    }

    this.setSunLight();
    this.setEnvironmentMap();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 4);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(3, 3, -2.25);

    this.scene.add(this.sunLight);

    if (this.debug.active) {
      this.debugFolder
        .add(this.sunLight, "intensity")
        .min(0)
        .max(10)
        .name("sunLightIntensity");
      this.debugFolder
        .add(this.sunLight.position, "x")
        .min(-5)
        .max(5)
        .name("sunLightX");
      this.debugFolder
        .add(this.sunLight.position, "y")
        .min(-5)
        .max(5)
        .name("sunLightY");
      this.debugFolder
        .add(this.sunLight.position, "z")
        .min(-5)
        .max(5)
        .name("sunLightZ");
    }
  }

  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.encoding = THREE.sRGBEncoding;

    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterial = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.updateMaterial();

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.environmentMap, "intensity")
        .min(0)
        .max(4)
        .name("mapIntensity")
        .onChange(this.environmentMap.updateMaterial);
    }
  }
}
