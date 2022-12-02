import { loadOptions } from '@babel/core';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useRef} from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal,Animated, PanResponder, InteractionManager, } from 'react-native';
import { CALLBACK_TYPE } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import { CurvedTransition } from 'react-native-reanimated';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Play = ({navigation}: {navigation: any}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const pan = useRef(new Animated.ValueXY()).current;


    const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderGrant: () => {
            pan.setOffset({
              x: pan.x._value,
              y: pan.y._value,
              
            });
          },
          onPanResponderMove: Animated.event([null, {dx: pan.y, dy: pan.y}], {
            useNativeDriver: false,
            
          }),
          onPanResponderRelease: () => {
            pan.flattenOffset();
            
          },
        }),
      ).current;

    //   const useFadeIn = (duration = 5000) => {
    //     const [opacity] = useState(new Animated.Value(0));
      

    //   const Ball = ({ onShown }) => {
    //     const opacity = useFadeIn();

    //     useMount (() => {
    //         Animated.timing(opacity, {
    //             toValue: 1,
    //             duration,
    //           }).start();
    //     });
    //     return opacity;
    // };
    

        // const interactionPromise = InteractionManager.runAfterInteractions()


    return(
    
        <View style = {styles.container}>
           <ImageBackground style = {styles.BgAll}
            source={require('../image/BgPlay.png')}>
            
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                    <Image style = {styles.imgBack}
                     source={require('../image/imgBack.png')}></Image>
                </TouchableOpacity>
                    <Text style = {styles.textBosuutap}>VUỐT LÊN ĐỂ CHƠI</Text>

            <View style = {styles.ViewModal}>
                <Modal
                  animationType='slide'
                  transparent = {true}
                   visible = {modalVisible}
                >
                     <View style ={styles.ViewModal}></View>
                    <View style = {styles.Modal}>
                    <Text style={styles.modalText}>Bạn có chắc muốn</Text>
                    <Text style = {styles.modalText}>đăng xuất không?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <View style = {styles.btnDangXuat}>
                                <Text style = {styles.textDangXuat}>Đăng xuất</Text>
                            </View>
                        </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View style = {styles.btnHuy}> 
                            <View style = {{flexDirection: 'row'}}>
              
                                <Image style = {styles.imgModal1} 
                                    source={require('../image/imgDangnhap1.png')}></Image>  
                                 <Text style = {styles.textHuy}>Hủy</Text>
                                 <Image style = {styles.imgModal2} 
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

            <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 5}}>
                <Text style = {styles.textTitle1}>Bạn còn</Text>
                <Text style = {styles.text5}>5</Text>
                <Text style = {styles.textTitle1}>lượt chơi quy đổi</Text>
            </View>

                <Image style = {styles.imgMack}
                 source={require('../image/imgMack.png')}>
                </Image>

                <Image style = {styles.imgKeolen}
                 source={require('../image/keolen.png')}></Image>


            <View style = {{flex: 1}}>
                <Animated.Image 
                source={require('../image/Dragon.png')}
                    style={[
                        {
                            alignSelf: 'center',
                        },
                        pan.getLayout(),
                      
                       
                    ]}
                    {...panResponder.panHandlers}
                >

                </Animated.Image>
            </View>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02A7F0'
    },
    BgAll: {
        width: windowWidth,
        height: windowHeight,
    },
    imgBack: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginLeft: 10
    },
    textBosuutap: {
        ...Fonts.h2,
        marginLeft: 45,
        marginTop: 23
    },
    imgLogOut: {
        height: 30,
        width: 30,
        marginTop: 25,
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
    btnDangXuat: {
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
    btnHuy: {
        height: 42,
        width: 155,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 10
    },
    imgModal1: {
        height: 35,
        width: 40,
        borderRadius: 10,
        marginTop: 5
    },
    textHuy: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginLeft: 18,
        marginTop: 5
    },
    imgModal2: {
        height: 35,
        width: 40,
        borderRadius: 10,
        marginLeft: 18,
        marginTop: 5
    },
    imgMack: {
        height: 520,
        width: 435,
        alignSelf: 'center'
    },
    textTitle1: {
        ...Fonts.h4,
        marginTop: 5
    },
    text5: {
        ...Fonts.h14,
        marginLeft: 5,
        marginRight: 5
    },
    imgKeolen: {
        alignSelf: 'center',
        height: 50,
        width: 50, 
    },
    imgDragon: {
        alignSelf: 'center',
        height: 200,
        width: 200
    }
})

export default Play;

