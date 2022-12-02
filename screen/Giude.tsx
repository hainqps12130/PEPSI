import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal,Alert} from 'react-native';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Giude = ({navigation}: {navigation: any}) => {

    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View style = {styles.container}>
            <ImageBackground style = {styles.imgGiude}
             source={require('../image/BgGiude.png')}>
        <View style = {{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
            <Image style = {styles.imgback}
             source={require('../image/imgBack.png')}></Image>
            </TouchableOpacity>
             <Text style = {styles.textHuongDan}>Hướng dẫn</Text>

            <View style = {styles.ViewModal}>
                <Modal
                animationType='slide'
                transparent = {true}
                visible = {modalVisible}
                >
                <View style ={styles.ViewModal}>
                 
                </View>
                    <View style = {styles.Modal}>
                    <Text style={styles.modalText}>Bạn có chắc muốn</Text>
                    <Text style = {styles.modalText}>đăng xuất không?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style = {styles.btnDangxuat}>
                                <Text style = {styles.textDangXuat}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                    <View style = {styles.btnQuetMa}> 
                    <View style = {{flexDirection: 'row'}}>
              
                    <Image style = {styles.imgOTP1} 
                    source={require('../image/imgDangnhap1.png')}></Image>  
                    <Text style = {styles.textQuetMa}>Hủy</Text>
                    <Image style = {styles.imgDangnhap2} 
                    source={require('../image/imgDangnhap2.png')}></Image>  
                    </View>
                     </View>
                  </TouchableOpacity>
                    </View>
             
                </Modal>       
            </View>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
             <Image style = {styles.imgLogOut}
              source={require('../image/log_out.png')}></Image>
            </TouchableOpacity>

        </View>
       <ScrollView>
            <Image style = {styles.imgBuoc1}
             source={require('../image/imgBuoc1.png')}></Image>
            <View style = {styles.viewTextBuoc1}>
                <Text style = {styles.textBuoc1}>Bước 1</Text>
                <Text style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat.</Text>
            </View>

            <Image style = {styles.imgBuoc1}
             source={require('../image/imgBuoc2.png')}></Image>
             <View style = {styles.viewTextBuoc1}>
                <Text style = {styles.textBuoc1}>Bước 2</Text>
                <Text style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat.</Text>
            </View>

            <Image style = {styles.imgBuoc1}
             source={require('../image/imgBuoc1.png')}></Image>
            <View style = {styles.viewTextBuoc1}>
                <Text style = {styles.textBuoc1}>Bước 3</Text>
                <Text style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat.</Text>
            </View>

    </ScrollView>
        </ImageBackground>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02A7F0'
    },
    imgGiude: {
        width: windowWidth,
        height: windowHeight,
    },
    imgback: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginLeft: 10
    },
    textHuongDan: {
        ...Fonts.h2,
        marginLeft: 95,
        marginTop: 20
    },
    imgLogOut: {
        height: 30,
        width: 30,
        marginTop: 25,
        marginLeft: 90
    },
    imgBuoc1: {
        height: 300,
        width: 360,
        alignSelf: 'center',
        borderRadius: 15,
        marginTop: 30
    },
    viewTextBuoc1: {
        height: 120,
        width: 300,
        alignSelf: 'center',
        marginTop: 10,
        padding: 10,
     
    },
    textBuoc1: {
        ...Fonts.h5,
    },
    text1: {
        ...Fonts.h8,
        textAlign: 'justify'
    },
    ViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Modal: {
        backgroundColor: "#FBD239",
        borderRadius: 20,
        shadowColor: "#000",
        height: 200,
        width: 250,
        alignSelf: 'center',
        marginBottom: 300,
    },
    modalText: {
        textAlign: 'center',
        ...Fonts.h12,
        paddingTop: 8
    },
    btnDangxuat: {
        height: 42,
        width: 155,
        backgroundColor: '#FC3B3B',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 25
    },
    textDangXuat: {
        ...Fonts.h5,
        textAlign: 'center',
        marginTop: 10
    },
    btnQuetMa: {
        height: 42,
        width: 155,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10
      },
      textQuetMa: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginLeft: 18,
        marginTop: 5
      },
      imgDangnhap2: {
        height: 35,
        width: 40,
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 5
      },
      imgOTP1: {
        height: 35,
        width: 40,
        borderRadius: 10,
        marginTop: 5
      },

});

export default Giude;