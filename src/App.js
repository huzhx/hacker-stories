import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

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

function getTitle(title) {
  return title;
}

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle(welcome.title)}
      </h1>
      <label htmlFor="">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <hr />
      <List />
    </div>
  );
}

function List() {
  return list.map((item) => {
    return (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
    );
  });
}

export default App;
