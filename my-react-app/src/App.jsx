import Student from './Student.jsx';
function App() {
  return(
    <>
      <Student name="st Sama" age={27} isStudent={true}/>
      <Student name="Ezoulson" age={29} isStudent={true}/>
      <Student name="Micheal" age={30} isStudent={false}/>
      <Student name="John" age={25} isStudent={false}/>
      <Student name="Doe" age={26} isStudent={true}/>
      <Student />
      <Student age={50} />
      <Student isStudent={true} />
    </>
  );
}

export default App
