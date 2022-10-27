const Surface = props => {
    let x, y;
    let down = false;
    let line = {};
    const cx = event => event.target.getContext('2d');
    const mouseDownHandler = event => {
        const context = cx(event);
        x = event.clientX;
        y = event.clientY;
        down = true;
    };
    const mouseUpHandler = event => {
        const context = cx(event);
        context.reset();
        down = false;
        props.addLine({...line});
    };
    const mouseMoveHandler = event => {
        if(!down) return;
        const context = cx(event);
        context.reset();
        const target = event.target;
        const rect = target.getBoundingClientRect();
        let xr = target.width/(rect.right-rect.left); // screenX ratio
        let yr = target.height/(rect.bottom-rect.top); // screenY ratio
        line = {x1: (x-rect.left)*xr, y1: (y-rect.top)*yr, x2: (event.clientX-rect.left)*xr, y2: (event.clientY-rect.top)*yr};
        context.beginPath();
        context.moveTo(line.x1, line.y1);
        context.lineTo(line.x2, line.y2);
        context.stroke();
    };
    return React.createElement('canvas', { 
        ...props,
        width: 1000,
        height: 1000,
        onMouseDown: mouseDownHandler,
        onMouseUp: mouseUpHandler,
        onMouseMove: mouseMoveHandler
     });     
};
export { Surface as default };