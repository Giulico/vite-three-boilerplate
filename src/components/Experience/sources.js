import envMapPX from "/static/textures/environmentMap/px.jpg";
import envMapNX from "/static/textures/environmentMap/nx.jpg";
import envMapPY from "/static/textures/environmentMap/py.jpg";
import envMapNY from "/static/textures/environmentMap/ny.jpg";
import envMapPZ from "/static/textures/environmentMap/pz.jpg";
import envMapNZ from "/static/textures/environmentMap/nz.jpg";

import grassColorTexture from "/static/textures/dirt/color.jpg";
import grassNormalTexture from "/static/textures/dirt/normal.jpg";
import foxModel from "/static/models/Fox/glTF/Fox.gltf";

export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [envMapPX, envMapNX, envMapPY, envMapNY, envMapPZ, envMapNZ],
  },
  {
    name: "grassColorTexture",
    type: "texture",
    path: grassColorTexture,
  },
  {
    name: "grassNormalTexture",
    type: "texture",
    path: grassNormalTexture,
  },
  {
    name: "foxModel",
    type: "gltfModel",
    path: foxModel,
  },
];
