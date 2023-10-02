import { motion } from "framer-motion-3d"
import { Box } from "@react-three/drei";
import { BuildingProps } from "./Building.model";


export default function Land(props: BuildingProps) {
  return(
    <motion.mesh {...props}> 
      <Box args={[0.5, 0.5, 0.1]}>
        <meshStandardMaterial color={'green'} />
      </Box>
    </motion.mesh>
  )
}