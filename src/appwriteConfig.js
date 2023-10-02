import { Client, Account, Databases } from 'appwrite';

//export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = '65046e085350720dd14a'
export const DATABASE_ID = '65053f8817a6232d67c2'
export const COLLECTION_ID_MESSAGES = '65053f90ccab1f7e1d18'
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject(PROJECT_ID);    

export const account = new Account(client);
export const databases = new Databases(client);

export default client;