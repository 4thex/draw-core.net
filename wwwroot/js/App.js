import Surface from './Surface.js';
import Drawing from './Drawing.js';
const e = React.createElement;
const App = props => {
    let setLines = () => {};
    let lines = [];
    const setLinesCallback = (theLines, theSetLines) => {
        lines = theLines;
        setLines = theSetLines;
    };
    const addLine = line => setLines([...lines, line]);
    return e('div', null, e(Surface, {addLine}), e(Drawing, {lines, setLinesCallback}));
};
const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(e(App));