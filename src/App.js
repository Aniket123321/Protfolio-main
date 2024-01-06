import Header from "./components/Header";
import ScorllNav from "./components/ScorllNav";


function App() {
  const personalDetails = {
    name: "Aniket Mehatre",
    location: "pune, India",
    email: "aniketmehatre@gmail.com",

  };

  return (
    <>

      <ScorllNav personalDetails={personalDetails} />

    </>
  );
}

export default App;
