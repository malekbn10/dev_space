// import { jwtDecode } from 'jwt-decode';
// import { useState, useEffect } from 'react';

// export  function useAuth() {
//     const [userC,setUserC] = useState({
//         name:"",
//         token:""
//     })
//     const myToken = localStorage.getItem('token')
//     const a=0;
//     useEffect( ()=>{
//         if (!myToken) {
//             return {userC};
//         }else{
            
//             let uname = jwtDecode(myToken)["name"];
//             setUserC({name:uname,token:myToken})
//         }
//     })

//     return {userC}
// }
