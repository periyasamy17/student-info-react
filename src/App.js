import logo from './logo.svg';
import './App.css';
import StudentSchool from './controller/student-school';

function App() {
  const schoolName = 'Government Hr.Sec School';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <StudentSchool name = {schoolName}/>
      </header>
     
    </div>
  );
}

export default App;
