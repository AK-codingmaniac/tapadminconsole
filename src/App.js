import './App.css';

function App() {
  return (
  <>
    <div className="App">
      <h1>Admin Login</h1>
    <form>
    <div className="container">
         <label htmlFor="username" className="labeltext">
           Username
         </label>
         <input name="username" id="username" type="text" >
         </input>
         <label htmlFor="password" className="labeltext">
           Password
         </label>
         <input name="password" id="password" type="password"></input>
         <button type="submit">Login</button>
    </div>
    </form>
    </div>
    </>
  );
}

export default App;
