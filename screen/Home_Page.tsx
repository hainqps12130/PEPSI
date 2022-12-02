import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions} from 'react-native';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home_Page = ({navigation}: {navigation: any}) => {
    return(
        <View style = {styles.container}>
            <ImageBackground style = {styles.imgBackGroudHome}
            source={require('../image/BgHomePage.png')}>
              <TouchableOpacity>
               <Image style = {styles.logOut}
                source={require('../image/log_out.png')}></Image>
              </TouchableOpacity>
                <Image style = {styles.imgLan}
                 source={require('../image/lan.png')}></Image>
              <TouchableOpacity onPress={() => navigation.navigate('Giude')}>
                <Text style = {styles.textHuongDan}>Hướng dẫn</Text>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Play')}>
                <View style = {styles.btnOTP}> 
              <View style = {{flexDirection: 'row'}}> 
              <Image style = {styles.imgOTP1} 
                  source={require('../image/hoamai.png')}></Image>  
                  <Text style = {styles.textMaOTP}>Chơi ngay</Text>
                  <Image style = {styles.imgOTP2} 
                  source={require('../image/hoamaiRight.png')}></Image>  
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  navigation.navigate('Code_Scan')}>
                <View style = {styles.btnQuetMa}> 
                    <View style = {{flexDirection: 'row'}}>
              
                 <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textQuetMa}>Quét mã</Text>
                  <Image style = {styles.imgDangnhap2} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Collection')}>
                <View style = {styles.btnBosuutap}> 
                    <View style = {{flexDirection: 'row'}}>
              
                 <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textBosuutap}>Bộ sưu tập</Text>
                  <Image style = {styles.imgBosuutap} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Gift')}>
                <View style = {styles.btnQuatang}> 
                    <View style = {{flexDirection: 'row'}}>
              
                 <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textQuatang}>Chi tiết quà tặng</Text>
                  <Image style = {styles.imgQuatang} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
              </View>
          </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02A7F0'
    },
    imgBackGroudHome: {
        // height: 790,
        // width: 455,
        width: windowWidth,
        height: windowHeight,
    },
    logOut: {
      height: 30,
      width: 30,
      marginLeft: 370,
      marginTop: 30
    },
    imgLan: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 100
    },
    textHuongDan: {
        ...Fonts.h11,
        textAlign: 'center'
    },
    btnOTP: {
        height: 70,
        width: 270,
        backgroundColor: '#C41920',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 40
    },
    textMaOTP: {
      alignSelf: 'center',
      ...Fonts.h5,
      marginLeft: 37
    },
    imgOTP1: {
      height: 48,
      width: 50,
      borderRadius: 10
    },
    imgOTP2: {
      height: 48,
      width: 50,
      borderRadius: 10,
      marginLeft: 35,
      marginTop: 20
    },
    btnQuetMa: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
      },
      textQuetMa: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 40
      },
      imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 48
      },
      btnBosuutap: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
      },
      textBosuutap: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 32
      },
      imgBosuutap: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 35
      },
      btnQuatang: {
        height: 50,
        width: 270,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 30
      },
      textQuatang: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 5
      },
      imgQuatang: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 8
      }
});

export default Home_Page;