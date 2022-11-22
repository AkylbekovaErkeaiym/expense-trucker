
import './App.css';
import './components/ExpenseItem'
import ExpenseItem from './components/ExpenseItem';

const App =() => {
const expenses = [
  {
    id:'ell1',
    title:'Car Insurance',
    date:new Date(2022,1,25),
    price:200,
  },
  {
    id:'ell2',
    title:'Tualet paper',
    date:new Date(2022,1,25),
    price:5,
  },
  {
    id:'ell3',
    title:'Course',
    date:new Date(2022,1,25),
    price:180,
  },
  {
    id:'ell4',
    title:'Utilites',
    date:new Date(2022,1,25),
    price:100,
  },
]

  return (
    <div className="App">
  <ExpenseItem items={expenses[0]}/>
  <ExpenseItem items={expenses[1]}/>
  <ExpenseItem items={expenses[2]}/>
  <ExpenseItem items={expenses[3]}/>
    </div>
  );
}

export default App;
