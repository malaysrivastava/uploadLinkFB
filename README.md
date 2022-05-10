# What is this?

A package to upload image in firebase and returning the link used for sending it to other types of database with limited storage. Good use for MERN and MEAN stack developers

# installation

npm i uploadlinkfirebase

# example

import { uploadLink } from 'uploadlinkfirebase';

//add your firebase project credentials for granting storage

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
<input type="file" onChange={F.setImageUpload}/>

# getting image link
 console.log(F.Link)
