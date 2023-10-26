/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Header } from "./components/Header";
import { Begin } from "./pages/begin";

function App() {
  const handleScroll = (event: any) => {
    console.log("aaaaaaaaaaaa");
    console.log(event.currentTarget.scrollTop);
  };

  return (
    <div onScroll={(e) => handleScroll(e)}>
      <Header />
      <Begin />
    </div>
  );
}

export default App;
