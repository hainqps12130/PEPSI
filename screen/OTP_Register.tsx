import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground,} from 'react-native';
import Fonts from '../contants/Fonts';


const OTP_Register = ({navigation}: {navigation: any}) => {
    const [input, setInput] = useState('');
    const [val, SetVal] = useState('');
   
   
    return(
        <View style = {styles.container}>
            <ImageBackground style = {styles.imgBackGroud}
            source={require('../image/backgroudALL.png')}>
                <Text style = {styles.textHey}>Hey, mừng bạn đến với</Text>
                <Text style = {styles.textPepsi}>Pepsi Tết</Text>
                <Text style = {styles.textXacminh}>Xác minh OTP</Text>
                <Text style = {styles.text127}>Nhập mã OTP vừa 127 x 27 điện thoại của bạn</Text>
                    <View style = {styles.ViewIPutOTP}>
                        <TextInput style = {styles.InputOTP}
                        keyboardType = 'number-pad'
                        maxLength={1}
                      

                        >
                        </TextInput>
                        <TextInput style = {styles.InputOTP}
                        keyboardType = 'number-pad'
                        maxLength={1}
                        // value = {val}
                        // onChangeText={SetVal}
                        >
                        </TextInput>
                        <TextInput style = {styles.InputOTP}
                        keyboardType = 'number-pad'
                        maxLength={1}
                        // value = {val}
                        // onChangeText={SetVal}
                       
                        >
                        </TextInput>
                        <TextInput style = {styles.InputOTP}
                        keyboardType = 'number-pad'
                        maxLength={1}
                        onChangeText = {setInput} 
                        
                        >
                        </TextInput>
                    </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
            <View style = {[styles.btnOTP, {backgroundColor: input ? '#FC3B3B' : '#8E8E8E'}]}> 
              <View style = {{flexDirection: 'row'}}> 
              <Image style = {styles.imgOTP1} 
                  source={require('../image/imgOTP1.png')}></Image>  
                  <Text style = {styles.textMaOTP}>Xác nhận</Text>
                  <Image style = {styles.imgOTP2} 
                  source={require('../image/imgOTP2.png')}></Image>  
              </View>
            </View>
          </TouchableOpacity>
          <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style = {styles.textNhanMa}>Bạn chưa nhận được mã?</Text>

        <TouchableOpacity>
            <Text style = {styles.textGuilaiMa}>Gửi lại mã</Text>
        </TouchableOpacity>
          </View>
          <Image style = {styles.imgBackgroud3}
               source={require('../image/backgroud3.png')}></Image> 
            
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02A7F0'
    },
    imgBackGroud: {
        height: 940,
        width: 434
    },
    textHey: {
        ...Fonts.h1,
        textAlign: 'center',
        marginTop: 100,
    },
    textPepsi: {
        ...Fonts.h2,
        textAlign: 'center',
        marginTop: 8
    },
    textXacminh:{
        ...Fonts.h10,
        textAlign: 'center',
        marginTop: 80
    },
    text127: {
        ...Fonts.h4,
        textAlign: 'center',
        marginTop: 10
    },
    InputOTP: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 5,
        textAlign: 'center',
        marginLeft: 10
    
    },
    ViewIPutOTP: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30
        
    },
    btnOTP: {
        height: 50,
        width: 250,
        backgroundColor: '#8E8E8E',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 40
    },
    textMaOTP: {
      alignSelf: 'center',
      ...Fonts.h5,
      marginTop: 6,
      marginLeft: 30
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
      marginLeft: 29
    },
    textNhanMa: {
        ...Fonts.h4,
        marginTop: 20
    }, 
    textGuilaiMa: {
        color: 'yellow',
        marginTop: 20,
        marginLeft: 5
    },
    imgBackgroud3: {
        height: 115,
        width: 165,
        marginLeft: 268,
        marginTop: 163
       
      }
});

export default OTP_Register;