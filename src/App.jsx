import * as React from 'react';

const title = 'React';
const number = 2;


// Child or leaf of List() component
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,

  },
];


// Parent Component
const App = () => {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />

      // StrictMode is a tool for highlighting potential problems in an application.
      <React.StrictMode>
        <List />
        <List />
      </React.StrictMode>
    </div>
  );
}

// Descendant Component
const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
);

// Descendant Component/Child || Parent of Item
const List = () => {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}


export default App;