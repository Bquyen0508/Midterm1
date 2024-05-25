import User from "./components/User";
import { Data } from "./data";

function App() {
  return <>
    {/* Your code  here */
      <div className="cards-view">
        <div className="cards-grid">
          {Data.map((user) => (
            <User user={user} />
          ))}
        </div>
    </div>}
  </>;
}

export default App;
