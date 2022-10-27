import SurfaceStyle from './SurfaceStyle.js';
const Surface = props => {
    let x, y;
    let down = false;
    let line = {};
    return React.createElement('canvas', { 
        style: SurfaceStyle,
        width: 1000,
        height: 1000,
        onMouseDown: event => {
            const context = event.target.getContext('2d');
            x = event.clientX;
            y = event.clientY;
            down = true;
        },
        onMouseUp: event => {
            const target = event.target;
            const context = target.getContext('2d');
            context.reset();
            down = false;
            props.addLine({...line});
        },
        onMouseMove: event => {
            if(!down) return;
            const target = event.target;
            const context = target.getContext('2d');
            context.reset();
            const rect = target.getBoundingClientRect();
            let xr = target.width/(rect.right-rect.left); // screenX ratio
            let yr = target.height/(rect.bottom-rect.top); // screenY ratio
            line = {x1: (x-rect.left)*xr, y1: (y-rect.top)*yr, x2: (event.clientX-rect.left)*xr, y2: (event.clientY-rect.top)*yr};
            context.beginPath();
            context.moveTo(line.x1, line.y1);
            context.lineTo(line.x2, line.y2);
            context.stroke();
        }
     });     
};
export { Surface as default };