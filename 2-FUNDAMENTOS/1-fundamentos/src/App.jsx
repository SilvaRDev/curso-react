/* CSS */
import './App.css'

/* COMPONENTS */
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

function App() {
  return (
    <>
      <h1>Fundamentos react</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent />
      <Events />
    </>
  )
}

export default App
