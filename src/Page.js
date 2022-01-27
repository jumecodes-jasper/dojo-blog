import { useState } from "react";

const Page = () => {
    
    const [name, setName] = useState("James");
    const [age, setAge] = useState(22);

    const handleClick = () => {
       setName("Mount");
       setAge(23);
    }
 
    return ( 
       <div className="Page">
           <h2>Section</h2>
           <p>{ name } is { age } years old</p>
           <button onClick={ handleClick }>Click Me</button>
       </div>
     );
}
 
export default Page;