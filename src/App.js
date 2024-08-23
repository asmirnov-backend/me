import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./components/Greeting/Home";
import { PersonalQualities } from "./components/PersonalQualities/PersonalQualities";
import { Skills } from "./components/Skills/Skills";
import { CareerPlan } from "./components/CareerPlan/CareerPlan";

function App() {
  return (
    <div className="App">
      <canvas className="background"></canvas>
      <main>
        <Home />
        <Skills />
        <PersonalQualities />
        {/* <Projects />
        <CareerPlan /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
