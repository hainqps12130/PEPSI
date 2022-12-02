import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import Fonts from '../contants/Fonts';
const Register = ({navigation}: {navigation: any}) => {
  const [sdt, setSDT] = useState('')
  const [ten, setTen] = useState('')
  const valueCheckOk = () => sdt.length>0
  return(
    <View style = {styles.container}>
      <View style = {{flexDirection: 'row'}}>
        <Image style = {styles.backgroud1}
         source={require('../image/backgroud1.png')}></Image>
        
      <View style = {{flexDirection: 'column'}}>
         <Text style = {styles.textHey}>Hey, mừng bạn đến với</Text>
         <Text style = {styles.textPepsi}>Pepsi Tết</Text>
         <Image style = {styles.imgHoa} 
          source={require('../image/hoa.png')}></Image>
     </View>
         <Image style = {styles.backgroud2}
          source={require('../image/backgroud2.png')}></Image>
     </View>
          <Text style = {styles.textDangKy}>ĐĂNG KÝ</Text>

        <View>
          <TextInput
           style = {styles.textInput}
           maxLength={10}
           onChangeText={setSDT}
          placeholder = 'Số điện thoại'
          >
          </TextInput>
          <TextInput style = {styles.textInput}
           maxLength={10}
           onChangeText={setTen}
          placeholder = 'Tên người dùng'
          >
          </TextInput>
          </View>
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
              <Text style = {styles.textChekBox}>Tôi đã đọc và đồng ý với</Text>
              <TouchableOpacity onPress={() => navigation.navigate('TheLeChuongTrinh')}>
              <Text style = {styles.textTheLe}>Thể lệ chương trình</Text>
              </TouchableOpacity>
              <Text style = {styles.textChekBox}>Pepsi Tết</Text>
            </View> 
            <Image style = {styles.imgHoa2}
             source={require('../image/hoa.png')}></Image>
            <Image style = {styles.imgHoa3}
             source={require('../image/hoa.png')}></Image>

          <TouchableOpacity disabled= {valueCheckOk() === false}
           onPress={() => navigation.navigate('OTP_Register')}>
            <View style = {[styles.btnOTP, {backgroundColor: ten ? '#FC3B3B' : '#8E8E8E'}]}> 
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

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style = {styles.btnDangNhap}> 
              <View style = {{flexDirection: 'row'}}>
              
              <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textDangnhap}>Đăng nhập</Text>
                  <Image style = {styles.imgDangnhap2} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
            
            </View>
          </TouchableOpacity>
            <View style = {{flexDirection: 'row'}}>
              <Image style = {styles.imgS}
               source={require('../image/imgS.png')}></Image> 
              <Image style = {styles.imgBackgroud3}
               source={require('../image/backgroud3.png')}></Image> 
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02A7F0'
  },
  backgroud1: {
    height: 230,
    width: 130
  },
  backgroud2: {
    height: 230,
    width: 90,
    marginLeft: 24
  },
  textHey: {
    marginTop: 120,
    marginLeft: 6,
    ...Fonts.h1,
  },
  textPepsi: {
    ...Fonts.h2,
    textAlign: 'center',
    marginTop: 8
  },
  imgHoa: {
    height: 50,
    width: 50,
    right: 145,
    marginTop: 10
  },
  textDangKy: {
    ...Fonts.h3,
    textAlign: 'center'
  },
  textInput: {
    height: 50,
    width: 380,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 20
  },
  textChekBox: {
    ...Fonts.h4
  },
  textTheLe: {
    marginLeft: 5,
    marginRight: 5,
    color: 'yellow',
    fontWeight: 'bold'
  },
  imgHoa2: {
    width: 50,
    height: 50,
    marginLeft: 395
  },
  imgHoa3: {
    width: 50,
    height: 50,
  },
  btnOTP: {
    height: 50,
      width: 250,
      backgroundColor: '#8E8E8E',
      alignSelf:'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
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
    marginLeft: 25
  },
  imgDangnhap2: {
    height: 48,
    width: 50,
    borderRadius: 10,
    marginLeft: 22
  },
  imgS: {
    height: 180,
    width: 150,
  },
  imgBackgroud3: {
    height: 115,
    width: 165,
    marginLeft: 118
   
  }

});

export default Register;