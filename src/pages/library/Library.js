import React, { useState, useEffect }from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import uuid from 'react-native-uuid';

import { selectCurrentUser} from "../../redux/user/user.selectors"
import { addMushaf ,setMushafs, setCurrentMushaf} from "../../redux/page/page.actions"
import { selectMushafs} from "../../redux/page/page.selectors"
import { signOutPending} from "../../redux/user/user.actions"

import {
  StyleSheet,
  Text,
  View,
  Platform,
  Alert,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
  
} from "react-native";

function Library({mushafs, addMushaf,setCurrentMushaf, setMushafs, navigation, currentUser,signOutPending}) {

  const [toggleOnAdd, setToggleOnAdd] = useState(false);

  const [mtitle, setTitle] = useState(undefined);

let currentMushafs
  
  var image = require("./cover.jpg");
  
  const addMushafData = async  () =>{

    if(!mtitle){
      return;
    }
    
    addMushaf({id: uuid.v4(), title: mtitle , page: 1})
   }

   const deleteM = (deletion) =>{
     currentMushafs = mushafs.filter(mushaf => mushaf !== deletion)

     setMushafs(currentMushafs)

   }
   
  return (

<>
<ScrollView style={styles.mainContainer}>

  <View style={styles.signonText}>
  {currentUser
  ?<View> 
  <Text onPress={signOutPending}> sign out</Text>
    </View>
           
: <Text onPress={() => navigation.navigate("signon")}>signin/register</Text>}
</View>
    <View style = {styles.container}>
      
   <Text>
  { mushafs.map((mushaf,i) => 
   <View style={styles.mushafs} accessibilityRole="button"    key={i}>
     <TouchableOpacity onPress={() =>{ setCurrentMushaf(mushaf.id);  navigation.navigate("Quran")}}>
   
<Text style={{ marginLeft:30}} onPress={()=>deleteM(mushaf)}>delete</Text>
  <Text style={{marginLeft: 50 ,position:'relative', top: 15}}>{mushaf.title}</Text>
    <Image
      source={image}
      style={styles.image}
    
      /> 
      <Text style={{ marginLeft: 30, height: 1, backgroundColor: 'black' , width: 70}} ></Text>
      
      </TouchableOpacity>
 </View> 

   )}</Text></View>
      <>
       
     

   
    </>
  


   

  
</ScrollView>
<Text style={styles.addButton}
  onPress={()=> setToggleOnAdd(!toggleOnAdd)}
>Add Mushaf</Text> 

{
  toggleOnAdd?
  <View style={styles.addMushaf}
  minimumValue={0}
  maximumValue={100}>
    
<Text>Add title</Text>
<Text onPress={()=> setToggleOnAdd(false)} 
style={styles.closeBox}>close</Text>
<TextInput 
style={{marginBottom: 10}}
placeholder="Mushaf title"
onChangeText = {setTitle}
/>
<Text onPress={addMushafData}>Add</Text>
</View>
:null}
</>
  )
}

const mapDispatchToProps = (dispatch) => ({
    addMushaf : (mushafData) => dispatch(addMushaf(mushafData)),
    setMushafs : (mushafData) => dispatch(setMushafs(mushafData)),
    signOutPending: () => dispatch(signOutPending()),
    setCurrentMushaf : (mushafId) => dispatch(setCurrentMushaf(mushafId)),
  
});

const mapStateToProps = createStructuredSelector({
 mushafs : selectMushafs,
 currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    flexDirection: 'column',
    

  },
    container: { 
       flexDirection: "row",
           display: 'flex',
           flexWrap: 'wrap'
  
    },
    text: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      bottom: 200,
      
    
    },
    
    addButton: {
      color: "black",
      fontSize: 15,
      flex: 0.05,
      justifyContent: 'flex-end',
      marginBottom: 36,
      backgroundColor: "gold",
      borderRadius: 26,
      padding: 4,
      alignItems: "center",
      marginLeft: 20,
      width: 100,

    },
    image: {
      width: 80,
      height: 120,
      marginTop: 20,
      marginLeft: 30      
    
      
    },
    addMushaf: {
      color: "black",
      fontSize: 35,
      position: "absolute",
      top: 200,
      borderRadius: 26,
      padding: 67,
      alignItems: "center",
      backgroundColor: 'white',
      shadowColor: 'black',
      flex: 1,
      marginLeft: 90
      
    },
    align: {
      alignItems: "center",
      justifyContent: "center",
    },
    closeBox: {
      color: 'red',
      position: "absolute",
      right: 20,
      fontSize: 17
    },
    signonText: {
      color: "black",
      fontSize: 12,
      flexDirection: 'row',
      flex: 1,
      justifyContent: "flex-end",      
      marginRight: 34
    },
  });