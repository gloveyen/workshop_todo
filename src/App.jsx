import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import "./assets/scss/index.scss";
import Nav from "./components/Nav";
import RouterView from "./router/";
import rootReducer from "./store/";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // const [todoList, setTodo] = useState(["洗衣服", "烘衣服", "拖地", "澆花"]);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <RouterView />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
