


import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

console.log ("teste")
//1) 

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

//2)

// type User = {
//     id: number,
//     name: string,
//     phone: string,
//     email: string,
//     website: string
// }

//6) 
// type Post = {
//     id:number,
//     title:string,
//     body:string,
//     userId:number
// }

// const users: User[] = []