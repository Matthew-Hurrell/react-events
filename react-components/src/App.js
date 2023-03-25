import './App.css';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';

function App() {
  return (
    <div className="App">
      {/* <EventsClass /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} /> */}
      {/* <NestingComponents connected={true} /> */}
      <MethodsAsPropsParent />

    </div>
  );
}

export default App;
