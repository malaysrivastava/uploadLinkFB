# What is this?

A package to upload image in firebase and returning the link used for sending it to other types of database with limited storage. Good use for MERN and MEAN stack developers

# installation

npm i imagefirebase

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

<img width="1431" alt="Screenshot 2022-05-12 at 12 30 01 AM" src="https://user-images.githubusercontent.com/57169971/167925842-bcdcc365-975d-416a-9d61-8734683917ef.png">
<img width="1436" alt="Screenshot 2022-05-12 at 12 30 17 AM" src="https://user-images.githubusercontent.com/57169971/167925844-b87abee9-e181-4fe4-a4bc-33a9e8047fda.png">
