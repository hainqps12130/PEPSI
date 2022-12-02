import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground,} from 'react-native';
import Fonts from '../contants/Fonts';
const Login = ({navigation}: {navigation: any}) => {
  const [input, setInput] = useState('');
  const [sdt, setSDT] = useState('')
  const valueCheckOk = () => sdt.length>0
    return(
        <View style = {styles.container}>
            <ImageBackground style = {styles.imgBackgroud}
             source={require('../image/backgroudALL.png')}>
                <Text style = {styles.textHey}>Hey, mừng bạn đến với</Text>
                <Text style = {styles.textPepsi}>Pepsi Tết</Text>
                <Text style = {styles.textDangNhap}>ĐĂNG NHẬP</Text>

                <Text style = {styles.textSDT}>Số điện thoại</Text>
                <View>
                <TextInput style = {styles.textInput}
                   placeholder = 'Nhập số điện thoại'
                   maxLength={10}
                   onChangeText={setSDT}
                     >
                    </TextInput>
                </View>
                <View style = {styles.img3lon}>
                    <Image source={require('../image/3lon.png')}></Image>
                </View>

            <TouchableOpacity disabled= {valueCheckOk() === false}
             onPress={() => navigation.navigate('OTP_Register')}>
              <View style = {[styles.btnOTP, {backgroundColor: sdt ? '#FC3B3B' : '#8E8E8E'}]}> 
              <View style = {{flexDirection: 'row'}}> 
              <Image style = {styles.imgOTP1} 
                  source={require('../image/imgOTP1.png')}></Image>  
                  <Text style = {styles.textMaOTP}>Lấy mã OTP</Text>
                  <Image style = {styles.imgOTP2} 
                  source={require('../image/imgOTP2.png')}></Image>  
              </View>
            </View>
          </TouchableOpacity>

              <Text style = {styles.textHoac}>Hoặc</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View style = {styles.btnDangNhap}> 
                    <View style = {{flexDirection: 'row'}}>
              
                 <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textDangnhap}>Đăng Ký</Text>
                  <Image style = {styles.imgDangnhap2} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
              </View>
          </TouchableOpacity>
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
    imgBackgroud: {
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
    textDangNhap: {
        ...Fonts.h3,
        textAlign: 'center',
        marginTop: 50
    },
    textSDT: {
        ...Fonts.h9,
        marginTop: 5,
        marginLeft: 30
    },
    textInput: {
        height: 50,
        width: 380,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 5
    },
    img3lon: {
        alignSelf: 'center',
        marginTop: 25
    },
    btnOTP: {
          height: 50,
          width: 250,
          backgroundColor: '#8E8E8E',
          alignSelf:'center',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'white',
          marginTop: 30
      },
      textMaOTP: {
        alignSelf: 'center',
        ...Fonts.h5,
        marginTop: 6,
        marginLeft: 16
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
        marginLeft: 18
      },
      textHoac: {
        textAlign: 'center',
        marginTop: 5,
        ...Fonts.h4
      },
      btnDangNhap: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 5
      },
      textDangnhap: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 35
      },
      imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 35
      },
      imgBackgroud3: {
        height: 115,
        width: 165,
        marginLeft: 275,
        marginTop: 8
       
      }
});

export default Login;