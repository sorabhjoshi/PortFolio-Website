import React from 'react'
import AnimatedCursor from "react-animated-cursor"
const Animcursor = () => {
  return (
<AnimatedCursor 
          innerSize={15}
          outerSize={20}
          color="102,0,0"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
  )
}

export default Animcursor