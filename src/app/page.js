// import logo from './logo.svg';
// import 'global.css';
import {NavBar}  from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import {Projects} from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="A page on the Coding Beauty website"
        />
      </head>
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
