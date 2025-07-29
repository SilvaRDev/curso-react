/* CSS */
import './App.css'

/* COMPONENTS */
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <>
      <h1>Fundamentos react</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
