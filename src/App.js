import { Playground } from "@wundergraph/playground";
// directly import style from node_modules
import "@wundergraph/playground/styles";

function App() {
  return (
    <div className="App">
      <Playground
        routingUrl={"http://localhost:4000/query"} // the endpoint of the router
        hideLogo={false} // boolean to hide the wundergraph logo
        // theme={"dark"} // 'light' or 'dark';
      />
    </div>
  );
}

export default App;
