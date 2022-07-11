import './App.css';
import MyForm from './components/MyForm';
import FormContextProvider from './context/FormContextProvider';

function App() {
  return (
    <FormContextProvider>
      <MyForm />
    </FormContextProvider>
  );
}

export default App;
