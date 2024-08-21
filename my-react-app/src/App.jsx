import List from "./List";

function App() {
  const fruits = [  {id:0, name:"mango", calories: 100},
    {id:1, name:"banana", calories: 65},
    {id:2, name:"coconut", calories: 32}, 
    {id:3, name:"pineapple", calories: 102}, 
    {id:4, name:"orange", calories: 99} 
  ]

  const vegetables = [
    {id:5, name:"tomatoes", calories: 50},
    {id:6, name:"carotes", calories: 25}, 
    {id:7, name:"corn", calories: 65}, 
    {id:8, name:"broccoli", calories: 50},
    {id:9, name:"patatoes", calories: 120}
  ]

  return(
    <>
      {fruits.length > 0 && <List items={fruits} category="fruits" /> } 
      {vegetables.length > 0 ? <List items={vegetables} category="vegetables" /> : null}
    </>
  );
}

export default App
