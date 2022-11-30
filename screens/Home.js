import {View, Text, Button, Image, TextInput, ScrollView} from "react-native";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import { deepCopy } from "@firebase/util";
import { useState } from "react";
import { NavigationContainer,useNavigation} from "@react-navigation/native";

//READ ALL, CREATE NEW USER, DELETE USER, UPDATE USER, READ A SINGLE USER PROFILE
export default function Home({navigation}){

    const [users, setUsers] = useState([]);

    //Retrieve everything
    const GetData = async ()=>{
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "users"));
        const dbusers = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        dbusers.push({
            ...doc.data(),
            id:doc.id
        })
        });

        setUsers([
            ...dbusers
        ]);
    }
        return ( 
            <View>
                <Button title='GetData' onPress={()=>GetData()}/>
                <Button title='Add User' onPress={()=>navigation.navigate("Register")}/>
                <ScrollView>
                {users.map(o=><View key={o.id}>
                    <Image source={{uri:o.avatar}} style={{width:100, height:100}}/>
                    <Text>{o.id} - {o.fullname} </Text>
                    <Button title='Edit User' onPress={()=>navigation.navigate({
                        name:"Edit",
                        params:{id:o.id}
                    })}/>
                    </View>
                )}
                </ScrollView>           
            </View>
        )
    }
