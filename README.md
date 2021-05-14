# OCR Flickr Project

### Overview 
* Communicates with Flickr Api and Microsoft Cognitive Services Api to allow the user to search images on Flickr then click on one image in order to extract any potential words in it then display it to the user.
* Built using the MEAN stack
* Public version of the app on: https://fathomless-refuge-88305.herokuapp.com
* Built registration and login funtionality using Passport, expressjwt and implemented hashing and salting of passwords. This app does not store actual passwords in the MongoDB database for security reasons.

### Purpose:
Purpose of the application is to gain experience building a full-stack application using the MEAN stack, which stands for MongoDB(for database), Angular(for frontend), Express(for web hosting), and Node.js(for runtime environment). 

### Platform:
This application can run on all major applications(Window, MacOSX, Ubuntu, Debian, etc.)

### Local Development Usage:
* Add your Flickr api key and Flickr api secret to ```keys.js``` file in the ```./api/config``` folder, get a key and secret [here](https://www.flickr.com/services/api/keys/apply/)
* Add your Microsoft Azure Cognitive Services Computer Vision api key to ```keys.js``` file in the ```api/config``` folder, get an api key [here](https://azure.microsoft.com/en-ca/try/cognitive-services/) (Make sure to get a computer vision api key)
* Run ```mongod``` on a seperate terminal instance
* Run ```npm install```(on different tab)<br>
* Run ```npm start```<br>
* Go to ```http://localhost:4200/``` 
### Screenshots:











