import './App.css';
import Hero from './components/Hero';
import Program from './components/Program';
import Reason from './components/Reasons/Reason';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Plan from './components/plans/Plan';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
