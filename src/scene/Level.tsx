import { motion } from "framer-motion-3d"
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls  } from "@react-three/drei";
import Land from "../components/Land/Land";
import { useEffect, useState } from "react";
import LevelController from "./Level.controller";

export default function Level(){
  const [levelController, setLevelController] = useState<LevelController | null>(null)

  useEffect(() =>{
    setLevelController(new LevelController())
  }, [])

  return levelController && levelController?.loaded ? 
    <Canvas shadows={true} >
      <motion.ambientLight intensity={0.5} />
      <motion.spotLight  position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1000} />
      <motion.pointLight position={[-10, -10, -10]}/>
      {levelController.landGrid.map(_ =>{
        return _.map(({ id, ...landProps}) =>{
          return <Land key={id} {...landProps}/>
        })
      })}
      <PerspectiveCamera position={[2, 2, 2]} makeDefault />
      <OrbitControls />
    </Canvas> : null
}