var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Hello from "./Hello.js";
function App() {
  return React.createElement(
    "div",
    { style: { backgroundColor: '#46B1DE' }, className: "wrapper" },
    React.createElement(Hello, null),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return console.log('Click on button');
        } },
      "Button"
    )
  );
}
var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));




