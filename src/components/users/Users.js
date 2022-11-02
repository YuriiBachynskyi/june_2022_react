// -1-
// Синхронна операція. Інформацію беремо синхронно з App

import {users} from "../../data";
import User from "../user/User";


export default function Users() {



    return(
        <div>
            {users.map((user,index)=> (<User user={user} key={user.id}/>))
            }
        </div>
    )
}

// -2-useState-ХУК. Після відпрацювання ф-ї вона повертає пустий масив

// Асинхронна операція. Тобто інформацію ми беремо не з компоненти (в даному випадку App, a p API:https://jsonplaceholder.typicode.com/users)

// import User from "../user/User";
// import {useState} from "react";
//
//
// export default function Users() {
//     let [users, setUsers] = useState([]);
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//         .then(value => {
//             setUsers(value)
//         });
//
//
//     return (
//         <div>
//             {users.map((user, index) => (<User user={user} key={user.id}/>))
//             }
//         </div>
//     )
// }