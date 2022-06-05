import { Box } from "@mui/material"
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame, useLoader, useThree, extend } from "@react-three/fiber"
import { FC, useEffect, useRef, useState } from "react"
import { BackSide, DoubleSide, FrontSide, Mesh, TextureLoader } from "three"
import { appStyles } from "./App.styles"
import sanbek from "./assets/sanbek.jpg"

const Obj: FC<any> = ({props}) => {
  const ref = useRef<Mesh>(null); 

  const texture = useLoader(TextureLoader, sanbek);
  
  return(
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry attach={"geometry"} args={[2, 100, 40]}/>
      <meshLambertMaterial 
        attach={"material"} 
        map={texture}
        side={BackSide}
      />
    </mesh>
  )
}

export const App = () => {

  return (
    <Box
      component={"div"}
      sx={appStyles.root}
    >
      <Canvas
        style={appStyles.canvas}
      >
        <ambientLight />
        <directionalLight position={[0, 1, 2]} color="white" />
        <OrbitControls />
        <ambientLight />
        <Obj />
      </Canvas>
    </Box>
  )
}
