// import {useState, useEffect} from 'react'

function NotFound() {

//     const [coords, setCoords] = useState({x: 0, y: 0});

//   useEffect(() => {
//     const handleWindowMouseMove = event => {
//       setCoords({
//         x: event.clientX,
//         y: event.clientY,
//       });
//     };
//     window.addEventListener('mousemove', handleWindowMouseMove);

//     return () => {
//       window.removeEventListener(
//         'mousemove',
//         handleWindowMouseMove,
//       );
//     };
//   }, []);

  return (
    <div style={{height:"432px", width:"270px", backgroundColor:"var(--card-color)", borderRadius:"10px", margin:"50vh auto auto auto",transform: "translateY(-60%)", boxShadow: `0px 2px 10px 0px rgba(0, 0, 0, 0.15)`}}>
        <h1 className="ja-regular" style={{lineHeight:"320px", fontSize:"240px"}}>？</h1>
        <h1 className="zh-bold" style={{lineHeight:"25px", fontSize:"25px"}}>網址不存在</h1>
    </div>
  );
}
  
export default NotFound;