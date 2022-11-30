import {View, Text, Button, Image, TextInput} from "react-native";
import { collection, getDocs, addDoc, setDoc, doc, getDoc, getFirestore} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Register({navigation}){


const [fn, setFN] = useState("");
const [age, setAge] = useState("");
const [ava, setAva] = useState("");
const [em, setEmail] = useState("");
const [ps, setPS] = useState("");


    //age,fullname,avatar url
    const AddUser = async () =>{    
        const db = getFireStore();


        const auth = getAuth();
        const result = await createUserWithEmailAndPassword(auth,em,ps);

        // Add a new document with a generated id.
        // const docRef = await addDoc(collection(db, "cities"), {
        //     name: fn,
        //     age: age,
        //     avatar:ava
        // });
        // console.log("Document written with ID: ", docRef.id);

        const usersRef = doc(db, 'users', result.user.uid);
        setDoc(usersRef, { fullname: fn }, { age: age }, { avatar: ava }, {merge:true});

    }

    return (
        <View>
            <TextInput value={fn} placeholder = 'fullname' onChangeText= {(txt)=>setFN(text)}/>
            <TextInput value={age} placeholder = 'age' onChangeText= {(txt)=>setAge(text)}/>
            <TextInput value={ava} placeholder = 'avatar' onChangeText= {(txt)=>setFAva(text)}/>
            <Button title="Add" onPress={()=>AddUser()}/>
        </View>
    )
}