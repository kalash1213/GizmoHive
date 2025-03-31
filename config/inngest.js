// import { Inngest } from "inngest";
// import connectDB from "./db";

// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "gizmohive-next" });

// //Inngest function to save user data to a database
// export const syncUserCreation=inngest.createFunction(
//   {
//     id:'sync-user-from-clerk'
//   },
//   {
//     event:'clerk/user.created'
//   },
//   async({event})=>{
// const{id,first_name,last_name,email_address,image_url}=event.data
// const userData={
//   _id:id,
//   email:email_addresses[0].email_address,
//   name:first_name+' '+last_name,
//   imageUrl:image_url
// }
// await connectDB()
// await User.create(userData)
//   }
// )
// //inngest function to update user data in database
// export const syncUserUpdation=inngest.createFunction(
//   {
//     id:'update-user-from-clerk'
//   },
//   {event :'clerk/user.updated'},
//   async({e})=>{
//     const{id,first_name,last_name,email_address,image_url}=event.data
// const userData={
//   _id:id,
//   email:email_addresses[0].email_address,
//   name:first_name+' '+last_name,
//   imageUrl:image_url
// }
// await connectDB();
// await User.findByIdAndUpdate(id,userData)

//   }
// )
// //inngest function to delete user data from database
// export const syncUserDeletion=inngest.createFunction(
//   {
//     id:'delete-user-with-clerk'
//   },
//   {
//     event:'clerk/user.deleted'
//   },
//   async({event})=>{
// const{id}=event.data
// await connectDB()
// await User.findByIdAndDelete(id)
//   }
// )
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "./models/User"; // Ensure User model is imported

// Create a client to send and receive events
export const inngest = new Inngest({ id: "gizmohive-next" });

// Inngest function to save user data to a database
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data; // Fixed email_address

    const userData = {
      _id: id,
      email: email_addresses[0].email_address, // Fixed reference
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };

    await connectDB();
    await User.create(userData);
  }
);

// Inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => { // Fixed parameter
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: `${first_name} ${last_name}`,
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

// Inngest function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDB();
    await User.findByIdAndDelete(id);
  }
); // Fixed closing parenthesis
