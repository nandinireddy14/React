
import React from "react"
//1.creating context
const UserContext=React.createContext('Center for good governance')

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext

// Consuming Multiple Contexts
// <ThemeContext.Consumer>
//     {
//         theme=>{
//             <UserContext.Consumer>
//                 {
//                     user=>{
//                         <ProfilePage> user={user} theme={theme}</ProfilePage>
//                     }
//                 }

//             </UserContext.Consumer>
//         }
//     }
// </ThemeContext.Consumer>


