import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle(welcome.title)}
      </h1>
      <label htmlFor="">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
