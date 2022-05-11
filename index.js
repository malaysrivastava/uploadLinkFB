import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'



class uploadLink {
    constructor(config) {
      this.apiKey = config.apiKey;
      this.authDomain = config.authDomain;
      this.projectId = config.projectId;
      this.storageBucket = config.storageBucket;
      this.messagingSenderId = config.messagingSenderId;
      this.appId = config.appId;
      this.measurementId = config.measurementId;
      this.link = "hehe";
    }

    // Getter
    get Link() {
      return this.link;
    }
    // Method
    setUrl= async(path)=>{
        const firebaseConfig = {
            apiKey: this.apiKey,
            authDomain: this.authDomain,
            projectId: this.projectId,
            storageBucket: this.storageBucket,
            messagingSenderId: this.messagingSenderId,
            appId: this.appId,
            measurementId: this.measurementId
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const storage = getStorage(app)

        const Imageref = ref(storage,path)
        await getDownloadURL(Imageref).then((x)=>{
            this.link = x;
        })
    }
    
    setImageUpload =(e)=>{

        const firebaseConfig = {
            apiKey: this.apiKey,
            authDomain: this.authDomain,
            projectId: this.projectId,
            storageBucket: this.storageBucket,
            messagingSenderId: this.messagingSenderId,
            appId: this.appId,
            measurementId: this.measurementId
          };
          
          // Initialize Firebase
          const app = initializeApp(firebaseConfig);
          const storage = getStorage(app)

        // const reader = new FileReader();           // babel javascript class
        // reader.onloadend = () => {
        //     console.log(storage);
        // }
        // reader.readAsDataURL(e.target.files[0]);
        
        const imageRef = ref(storage, `image/${e.target.files[0].name + v4()}`)
                  uploadBytes(imageRef,e.target.files[0]).then(async(res)=>{
                    await this.setUrl(res.ref._location.path)
                  })
   }

};
  
  

export {uploadLink};