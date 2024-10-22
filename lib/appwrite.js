import { Client } from 'react-native-appwrite';
import { Account } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.react_ratings',
    projectId: '671582ec00328297f858',
    databaseId: '6716e800003cf1b40ab3',
    userCollectionId: '6716e86d0004894ab3b1',
    storageId: '6716ea990008206c7c03',

}
// Init your React Native SDK
   const client = new Client();

   client
     .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
     .setProject(appwriteConfig.projectID) // Your project ID
     .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

     const account = new Account(client);

export const createUser = () =>{
     account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
     .then(function (response) {
        console.log(response);
     }, function (error) {
        console.log(error);
    });

 }


;
