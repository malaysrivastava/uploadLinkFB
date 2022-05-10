# What is this?

A package to upload image in firebase and returning the link used for sending it to other types of database with limited storage. Good use for MERN and MEAN stack developers

# installation

npm i uploadlinkfirebase

# example
import { uploadLink } from 'uploadlinkfirebase';

add your firebase project credentials for granting storage

    const F = new uploadLink({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });

# then.. 
< input type="file" onChange={F.setImageUpload}/ >

# getting image link
 console.log(F.Link)
 
 
<img width="1438" alt="Screenshot 2022-05-10 at 9 24 06 PM" src="https://user-images.githubusercontent.com/57169971/167671054-f0a986b7-e163-42e9-bd69-2d13d3f5c1d3.png">

<img width="1440" alt="Screenshot 2022-05-10 at 9 24 26 PM" src="https://user-images.githubusercontent.com/57169971/167671086-aaff30cd-993c-4162-81ee-b80e6234c56a.png">


