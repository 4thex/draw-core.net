import Surface from './Surface.js';
import Drawing from './Drawing.js';
import SurfaceStyle from './SurfaceStyle.js';
const e = React.createElement;
const App = props => {
    let setShapes = () => {};
    let shapes = [];
    const setShapesCallback = (theShapes, theSetShapes) => {
        shapes = theShapes;
        setShapes = theSetShapes;
    };
    const addShape = shape => setShapes([...shapes, shape]);
    const renderCanvasLine = props => {
        let context = props.context;
        let bounds = props.bounds;
        context.beginPath();
        context.moveTo(bounds.x1, bounds.y1);
        context.lineTo(bounds.x2, bounds.y2);
        context.stroke();
    };
    const renderCanvasCircle = props => {
        let context = props.context;
        let bounds = props.bounds;
        context.beginPath();
        let r = Math.sqrt(Math.pow(bounds.x2-bounds.x1, 2)+Math.pow(bounds.y2-bounds.y1, 2));
        context.arc(bounds.x1, bounds.y1, r, 0, 2 * Math.PI);
        context.stroke();
    };
    const createSvgLineAttributes = props => {
        return {
            attributes: {
                ...props
            },
            elementName: 'line'
        };
    };
    const createSvgCircleAttributes = props => {
        const r = Math.sqrt(Math.pow(props.x2-props.x1, 2)+Math.pow(props.y2-props.y1, 2));
        return {
            attributes: {
                r,
                cx: props.x1,
                cy: props.y1,
                fillOpacity: 0    
            },
            elementName: 'circle'
        };
    };
    // TODO: The below strategy will be chosen based on current shape set via another component
    const strategy = {
        canvas: { render: renderCanvasLine },
        svg: createSvgLineAttributes
    }
    // const strategy = {
    //     canvas: { render: renderCanvasCircle },
    //     svg: createSvgCircleAttributes
    // }
    const canvasStrategy = { render: renderCanvasLine };
    return e('div', null, e(Surface, {strategy: strategy.canvas, addShape, e, attributes: {style: SurfaceStyle}}), e(Drawing, {shapes, setShapesCallback, strategy: strategy.svg}));
};
const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(e(App));