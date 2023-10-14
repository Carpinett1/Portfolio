import './App.css';
import About from './components/About/about';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Projects from './components/Projects/projects';
import Stacks from './components/Stacks/stacks';

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Stacks />
      <Footer />
    </>
  );
}

export default App;
