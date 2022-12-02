import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal} from 'react-native';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Code_Scan =  ({navigation}: {navigation: any}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleScan, setModalVisibleScan] = useState(false);
    return(
        <View style = {styles.container}>
            <ImageBackground style = {styles.imgBackGoundScan}
             source={require('../image/BgGiude.png')}>
                <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                    <Image style = {styles.imgBack}
                     source={require('../image/imgBack.png')}></Image>
                </TouchableOpacity>
                     <Text style = {styles.textTitle}>Quét mã</Text>

                     <View style = {styles.viewModal}>
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
              
                    <Image style = {styles.imgModal1} 
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
           

                <Image style = {styles.imgBill}
                 source={require('../image/bill.png')}></Image>

            <TouchableOpacity onPress={() => setModalVisibleScan(true)}>
                <View style = {styles.btnOTP}> 
              <View style = {{flexDirection: 'row'}}> 
              <Image style = {styles.imgOTP1} 
                  source={require('../image/imgOTP1.png')}></Image>  
                  <Text style = {styles.textMaOTP}>Quét mã</Text>
                  <Image style = {styles.imgOTP2} 
                  source={require('../image/imgOTP2.png')}></Image>  
              </View>
            </View>
          </TouchableOpacity>

                <View style = {styles.viewModalScan}>
                    <Modal
                     animationType='slide'
                     transparent = {true}
                      visible = {modalVisibleScan}
                    >      
                     
                         {/* <View style ={styles.ViewModalScan}>
                         
                         </View> */}
                            <View style = {styles.ModalScan}>
                                 <Image style = {styles.imgQua}
                                  source={require('../image/qua.png')}></Image>
                              <TouchableOpacity onPress={() => setModalVisibleScan(!modalVisibleScan)}>
                                  <Image style = {styles.btnClose}
                                    source={require('../image/Button_close.png')}></Image>
                            </TouchableOpacity>
                                  <Text style = {styles.textModal1}>Bạn đã nhận được</Text>
                                  <Text style = {styles.text5}>5</Text>
                                  <Text style = {styles.textModal2}>Lượt chơi</Text>
                                <View style = {{flexDirection: 'row', alignSelf: 'center', bottom: 20}}>
                                    <Text style = {styles.textModal3}>Bạn đang có</Text>
                                    <Text style = {styles.text08}>08</Text>
                                    <Text style = {styles.textModal3}>lượt chơi</Text>
                                </View>

                                <TouchableOpacity onPress={() => setModalVisibleScan(!modalVisibleScan)}>
                                 <View style = {styles.btnScanTiep}>
                                    <Text style = {styles.textDangXuat}>Scan tiếp</Text>
                                 </View>
                               </TouchableOpacity>
                               <TouchableOpacity onPress={() => navigation.navigate('Play')}>
                                 <View style = {styles.btnChoiNgay}>
                                    <Text style = {styles.textDangXuat}>Chơi ngay</Text>
                                 </View>
                               </TouchableOpacity>
                            </View>  
                           
                    </Modal>
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
    imgBackGoundScan: {
        width: windowWidth,
        height: windowHeight,
    },
    imgBack: {
        height: 40,
        width: 40,
        marginTop: 20,
        marginLeft: 10
    },
    textTitle: {
        ...Fonts.h2,
        marginLeft: 110,
        marginTop: 20
    },
    imgLogOut: {
        height: 30,
        width: 30,
        marginTop: 25,
        marginLeft: 100
    },
    imgBill: {
        alignSelf: 'center',
        marginTop: 30,
    },
    btnOTP: {
        height: 50,
        width: 250,
        backgroundColor: '#FC3B3B',
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
      borderRadius: 10,
      
    },
    imgOTP2: {
      height: 48,
      width: 50,
      borderRadius: 10,
      marginLeft: 37
    },
    viewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
      imgModal1: {
        height: 35,
        width: 40,
        borderRadius: 10,
        marginTop: 5
      },
      viewModalScan: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      ViewModalScan: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      ModalScan: {
        backgroundColor: "#FBD239",
        borderRadius: 20,
        shadowColor: "#000",
        height: 400,
        width: 280,
        alignSelf: 'center',
        marginTop: 200,
        display: 'flex'
      },
      imgQua: { 
        bottom: 50,
        alignSelf: 'center'
      },
      btnClose: {
        height: 30,
        width: 30,
        bottom: 90,
        marginLeft: 240,
        marginTop: 5
      },
      textModal1: {
        ...Fonts.h15,
        textAlign: 'center',
        bottom: 60
      },
      text5: {
        ...Fonts.h16,
        textAlign: 'center',
        bottom: 50
      },
      textModal2: {
        ...Fonts.h15,
        textAlign: 'center',
        bottom: 55
      },
      textModal3: {
        ...Fonts.h17
      },
      text08: {
        ...Fonts.h18,
        marginLeft: 5,
        marginRight: 5
      },
      btnScanTiep: {
        height: 42,
        width: 155,
        backgroundColor: '#FC3B3B',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 5
    },
    btnChoiNgay: {
      height: 42,
      width: 155,
      backgroundColor: '#FC3B3B',
      alignSelf:'center',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      marginTop: 10
    }
});

export default Code_Scan;