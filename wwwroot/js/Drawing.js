const e = React.createElement;
const Drawing = props => {
    const [shapes, setShapes] = React.useState(props.shapes);
    props.setShapesCallback(shapes, setShapes);
    const children = shapes.map((shape, index) => {
        const parameters = props.strategy(shape);
        const attributes = parameters.attributes;
        return e(parameters.elementName, {...attributes, key: index, stroke: "black"});
    });
    return e('svg', {style: { zIndex: 0, position: "absolute" }, viewBox: "0 0 999 999"}
    , children);     
};
export { Drawing as default };