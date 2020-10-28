import React from 'react';
import './App.css';
const useHover = () => {
  const [isHovered, setIsHovered] = React.useState(false)
  const hoverRef = React.useRef(null);
  const mouseOver = () => { setIsHovered(true) }
  const mouseout = () => { setIsHovered(false) }

  React.useEffect(() => {
    hoverRef.current.addEventListener('mouseover', mouseOver)
    hoverRef.current.addEventListener('mouseout', mouseout)
    return () => {
      hoverRef.current.removeEventListener('mouseover', mouseOver);
      hoverRef.current.removeEventListener('mouseout', mouseout);
    };
  })
  return [hoverRef, isHovered]
}
function App(props) {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>
}

export default App;
