const e = React.createElement;
const Drawing = props => {
    const [lines, setLines] = React.useState(props.lines);
    props.setLinesCallback(lines, setLines);
    const children = lines.map((line, index) => e('line', {...line, key: index, stroke: "black"}));
    return e('svg', {style: { zIndex: 0, position: "absolute" }, viewBox: "0 0 999 999"}
    , children);     
};
export { Drawing as default };