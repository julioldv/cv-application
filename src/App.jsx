import { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import './App.css';

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <div>
      <h1>CV Application</h1>
      <CVForm
        generalInformation={generalInformation}
        setGeneralInformation={setGeneralInformation}
      />
      <CVPreview generalInformation={generalInformation} />
    </div>
  );
}

export default App;
