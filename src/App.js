import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
