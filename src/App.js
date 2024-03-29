import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App(){
  return(
    <Router>
     <div className="App">
       <Navbar />
       <div className="content">
         <Switch>
           <Route exact path="/">
             <Home />
           </Route>
           <Route path="/create">
             <Create />
           </Route>
           <Route path="/blogs/:id">
             <BlogDetails />
           </Route>
           <Route path="*">
             <NotFound />
           </Route>
         </Switch>
       </div>
     </div>
     </Router>
  );
}

export default App;

// function App() {
//   const title = 'Welcome to the new blog';
//   const likes = '50';
//   //const person = {name: 'Jamees', age: '21'};
//   const link = "https://www.google.com";

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{ title }</h1>
//         <p>Liked { likes }</p>

//         {/* <p>{person}</p> */}

//         <p>{ 10 }</p>
//         <p>{ "Hello, world" }</p>
//         <p>{ [1,2,3,4,5] }</p>
//         <p>{ Math.random() * 10 }</p>

//         <a href={link}>Google Site</a>
//       </div>
//     </div>
//   );
// }


// export default App;
