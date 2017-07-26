import { View, Text, }  from 'react-native';
import React, {Component} from 'react';

const Header = () => {
    return(
      <View style={{justifyContent:'center', height:48, padding:5, borderBottomColor:'white', borderBottomWidth:1,
                   shadowOffset:{width:0, height:2}, backgroundColor:'#007AFF', shadowOpacity:0.5,
          opacity:0.75, shadowColor:'black' }}>
          <Text style={{fontSize:16, fontWeight:'bold', color:'white', alignSelf:'center'}}>Authentication</Text>
      </View>
    );
};

export default Header;