import "./App.css";
import fax from "./assets/fax.gif";
import place from "./assets/place.gif";
import rgb2 from "./assets/rgb2.gif";
import shine from "./assets/shine.gif";

import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus NFT's</h1>
        <CenteredCard>
          <img src={fax} alt="fax img" />
        </CenteredCard>

        <CenteredCard>
          <img src={place} alt="motion img" />
        </CenteredCard>
        <CenteredCard>
          <img src={rgb2} alt="motion img" />
        </CenteredCard>
        <CenteredCard>
          <img src={shine} alt="motion img" />
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
