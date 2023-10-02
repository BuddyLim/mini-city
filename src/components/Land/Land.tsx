import { motion } from "framer-motion-3d"
import { Box } from "@react-three/drei";
import { LandProps } from "./Land.model";


export default function Land(props: LandProps) {
  return(
    <motion.mesh {...props}> 
      <Box args={[0.5, 0.5, 0.1]}>
        <meshStandardMaterial color={'green'} />
      </Box>
    </motion.mesh>
  )
}