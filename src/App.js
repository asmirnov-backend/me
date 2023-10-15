import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects/Projects";
import { Home } from "./components/Greeting/Home";
import { PersonalQualities } from "./components/PersonalQualities/PersonalQualities";
import { Experience } from "./components/Experience/Experience";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <canvas className="background"></canvas>
      <main>
        <Home />
        <PersonalQualities />
        <Experience />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
