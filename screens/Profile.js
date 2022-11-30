import {View, Text, Button, Image,TextInput } from "react-native";
import { collection, getDocs, addDoc, setDoc, doc, getDoc, getFirestore} from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Profile(){

    const [fn, setFN] = useState("");
    const [age, setAge] = useState("");
    const [ava, setAva] = useState("");

    const GetUser = async()=>{
    const db = getFirestore()
    const docRef = doc(db, "users", route.params.id );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const user=docSnap.data();
    setFN(user.fullname);
    setAge(user.age);
    setAva(user.avatar);
    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
};

useEffect(()=>{
    GetUser();
},[]);

return (
    <View>
        <Text> {fn} - {age} </Text>
        <Image source={{uri:o.avatar}} style={{width:100, height:100}}/>
    </View>
)
}