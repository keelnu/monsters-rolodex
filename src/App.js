import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    // super() calls the constructor method on the component class and allows us to access the state object
    super();

    this.state = {
      monsters: [],
    };
  }

  // make fetch request just after our App component has mounted
  // if this were a functional component, we'd make it inside a useEffect() hook
  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then(response => response.json())
    // .then(data => console.log('This is your data: ', data))
    .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
          <div className="App">
            {/* the props object has a property called 'children',
            so anything we put between the opening and closing tags of our component, will get added to the props object as its CHILDREN, and to access it within the component that will receive these props, we will write {props.children} */}
            <CardList>
              {
                this.state.monsters.map(monster => (
                  <h1 key={monster.id}> { monster.name } </h1>
                  )
                )
              }
            </CardList>
          </div>
        );
  }
}

// function App() {
//   const [greeting, setGreeting] = useState('Kristiina'); 

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, {greeting}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
