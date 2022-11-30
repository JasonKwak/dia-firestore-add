import {getFirestore} from "firebase/firestore";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Register from './screens/Register'
import Edit from './screens/Edit'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// useFocusEffect
const Stack = createNativeStackNavigator();


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi3mrZjfE2C6B8xYJrHlwPKfO88Rp-pqg",
  authDomain: "dai-repo-1.firebaseapp.com",
  projectId: "dai-repo-1",
  storageBucket: "dai-repo-1.appspot.com",
  messagingSenderId: "1050701153134",
  appId: "1:1050701153134:web:4fbb3155da7a2c33b8377f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="starting">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
