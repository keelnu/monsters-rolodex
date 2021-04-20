import { useEffect, useState } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

function App() {
  // manages the local state for the data we are fetching for the App component
  // initial state is an empty list/array of monsters
  const [data, setData] = useState({ monsters: [] });

  // make fetch request just after our App component has mounted
  // if this were a functional component, we'd make it inside a useEffect() hook
  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then(res => res.json())
    .then((users) => {
      setData({ monsters: users });
    });
  }, [setData]);

    return (
          <div className="App">
            {/* the props object has a property called 'children',
            so anything we put between the opening and closing tags of our component, will get added to the props object as its CHILDREN, and to access it within the component that will receive these props, we will write {props.children} */}
            <CardList>
              {
                data.monsters.map(monster => (
                  <h1 key={monster.id}> { monster.name } </h1>
                  )
                )
              }
            </CardList>
          </div>
        );
}

export default App;