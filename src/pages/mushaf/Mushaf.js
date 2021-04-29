import React ,{ useState, useEffect} from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    ImageBackground,
    TextInput
  } from "react-native";

  import uuid from 'react-native-uuid';

  import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"


import { addMushaf ,setMushafs, setCurrentMushafPage,setCurrentPage, addBookmark} from "../../redux/page/page.actions"
import { selectCurrentMushaf} from "../../redux/page/page.selectors"


function Mushaf({currentMushaf, setCurrentMushafPage, setCurrentPage, addBookmark}) {

  const [bookmarkTitle,setBookmarkTitle] = useState(undefined)
 const incrementPage = (mushaf) =>{
   if(mushaf.page >= 1){
   setCurrentMushafPage([{id: mushaf.id, title: mushaf.title ,page: mushaf.page +1 }])
   setCurrentPage({id: mushaf.id, title: mushaf.title ,page: mushaf.page +1 })
 }}

 const decrementPage = (mushaf) =>{
  if(mushaf.page > 1){
  setCurrentMushafPage([{id: mushaf.id, title: mushaf.title ,page: mushaf.page -1 }])
  setCurrentPage({id: mushaf.id, title: mushaf.title ,page: mushaf.page -1 })
}}

const addBookmarkData = (mushaf) => {
  if(!bookmarkTitle){
    return
  }
  addBookmark({id: mushaf.id, page: mushaf.page, bookmarkId: uuid.v4(),  title: bookmarkTitle})
}

 console.log(currentMushaf)
    return (
      <>
        <View style={styles.container}>
          { currentMushaf !==[] ?
          currentMushaf.map(mushaf =>
            <View style={styles.container} key={mushaf.id}>
              <ImageBackground
            source={{uri:`https://firebasestorage.googleapis.com/v0/b/quran-5b0fa.appspot.com/o/${mushaf.page}.jpg?alt=media&token=95272ee8-a961-409d-94c2-1b2343f92ed9` }}
            style={styles.image}
          >
            <View style={styles.buttonContainer}>

          <Text style={styles.addButton} onPress={() =>incrementPage(mushaf)}>next page</Text>
                 <Text style={styles.addButton} onPress={() =>decrementPage(mushaf)}>previous page</Text>
   

</View>
          </ImageBackground>
        
          </View>
          )
:null}
        </View>
        </>
    );
}


const mapDispatchToProps = (dispatch) => ({
  setMushafs : (mushafData) => dispatch(setMushafs(mushafData)),
  setCurrentMushafPage : (mushafData) => dispatch(setCurrentMushafPage(mushafData)),
  setCurrentPage : (mushafData) => dispatch(setCurrentPage(mushafData)),
  addBookmark : (bookmarkData) => dispatch(addBookmark(bookmarkData))

});

const mapStateToProps = createStructuredSelector({

currentMushaf: selectCurrentMushaf
});

export default connect(mapStateToProps, mapDispatchToProps)(Mushaf);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center"
    },
    textHover: {
      color: "white",
      fontSize: 40,
      bottom: 200,
    
    },
    addButton: {
      color: "black",
      fontSize: 12,
      flex: 0.1,
      justifyContent: 'flex-start',
      backgroundColor: "gold",
      borderRadius: 26,
      width: 100,
      marginLeft:20,
      marginBottom: 10,
      flexDirection: "row",
      padding: 7

    },
    image: {
      flex: 1,
    
      justifyContent: "flex-end",
      flexDirection: "column",
      
     
    },
    align: {
      alignItems: "center",
      justifyContent: "center",
    },
  });