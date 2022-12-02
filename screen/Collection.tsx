import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal} from 'react-native';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CONG = 'CONG';
const TRU = 'TRU';

const Collection = ({navigation}: {navigation: any}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [cong, setCong] = useState(CONG);
    const [tru, setTru] = useState(TRU);
    const [modalVisibleCollectione, setModalVisibleCollectione] = useState(false);

    return(
        <View style = {styles.container}>
           <ImageBackground style = {styles.imgCollection}
           source={require('../image/BgCollection.png')}>
                <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                    <Image style = {styles.imgBack}
                     source={require('../image/imgBack.png')}></Image>
                </TouchableOpacity>
                    <Text style = {styles.textBosuutap}>Bộ sưu tập</Text>

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

                <Image style = {styles.imgCoin}
                 source={require('../image/Coin.png')}></Image>
                 <Text style = {styles.textSoCoinHienTai}>Số coins hiện tại của bạn</Text>

                <View style = {{flexDirection: 'row'}}>
                 <View style = {{flexDirection: 'column'}}>
                    <Image style = {styles.imgPepsi}
                     source={require('../image/Pepsi.png')}></Image>
                    <Text style = {styles.textSo1}>4</Text>
                 </View>
                 <View style = {{flexDirection: 'column'}}>
                    <Image style = {styles.img7Up}
                     source={require('../image/7up.png')}></Image>
                    <Text style = {styles.textSo2}>5</Text>
                 </View>
                 <View style = {{flexDirection: 'column'}}>
                    <Image style = {styles.img7Up}
                     source={require('../image/mirinda.png')}></Image>
                    <Text style = {styles.textSo2}>2</Text>
                 </View>
            </View>

            
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                    <Text style = {styles.text1}>Đổi ngay bộ sưu tập</Text>
                    <Text style = {styles.text2}>AN - LỘC - PHÚC</Text>
            </View>
            <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style = {styles.text1}>Để có cơ hội nhận ngay </Text>
                    <Text style = {styles.text2}>300 coins</Text>
                    <Text style = {styles.textHoac}>hoặc</Text>
            </View>
            <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text style = {styles.text1}>một </Text>
                    <Text style = {styles.text2}>phần quà may mắn</Text>
            </View>

            <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity  
                onPress={() => setCount(count-1)}
                 style = {styles.tobTru}>
                     {tru === TRU ? 
                    <View style = {{backgroundColor: '#D02027', position: 'absolute', width: '100%', height: '100%', borderRadius: 50 }}>
                    </View> : null
                    }
                    <View>
                        <Text style = {styles.textTru}> - </Text>
                    </View>
                </TouchableOpacity>

                    <Text style = {styles.textSo0}> {count} </Text>
                <TouchableOpacity onPress={() => setCount(count+1)}
                 style = {styles.tobCong}>
                     {cong === CONG ? 
                    <View style = {{backgroundColor: '#D02027', position: 'absolute', width: '100%', height: '100%', borderRadius: 50 }}>
                    </View> : null
                    }
                    <View>
                        <Text style = {styles.textTru}> + </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setModalVisibleCollectione(true)}>
                <View style = {styles.btnDangNhap}> 
                    <View style = {{flexDirection: 'row'}}>
              
                 <Image style = {styles.imgOTP1} 
                  source={require('../image/imgDangnhap1.png')}></Image>  
                  <Text style = {styles.textDangnhap}>Đổi ngay</Text>
                  <Image style = {styles.imgDangnhap2} 
                  source={require('../image/imgDangnhap2.png')}></Image>  
              </View>
              </View>
          </TouchableOpacity>


          <View style = {styles.ViewModalGift}>  
                <Modal
                  animationType='slide'
                  transparent = {true}
                   visible = {modalVisibleCollectione}
                >
                    <View style = {styles.ModalGift}>
                        <Image style = {styles.imgQua} 
                        source={require('../image/QuaColection.png')}></Image>
                        <Text style = {styles.textModal1}>Bạn có chắc muốn đổi</Text>
                        <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
                            <Text style = {styles.textModal3}>1 combo</Text>
                            <Text style = {styles.textModal2}>hay không?</Text>
                        </View>
                        <TouchableOpacity>
                                <View style = {styles.btnXacNhan}>
                                    <Text style = {styles.textXacNhan}>Đổi quà</Text>
                                </View>    
                            </TouchableOpacity>         
                        <TouchableOpacity onPress={() => setModalVisibleCollectione(!modalVisibleCollectione)}>
                             <Image style = {styles.imgCloseModal}
                                source={require('../image/CloseCollection.png')}></Image>
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
    imgCollection: {
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
        marginLeft: 95,
        marginTop: 20
    },
    imgLogOut: {
        height: 30,
        width: 30,
        marginTop: 25,
        marginLeft: 90
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
    imgCoin: {
        alignSelf: 'center',
        marginTop: 30,
        height: 120,
        width: 120
    },
    textSoCoinHienTai: {
        textAlign: 'center',
        ...Fonts.h5,
        marginTop: 10
    },
    imgPepsi: {
        marginLeft: 45,
        marginTop: 30
    },
    textSo1: {
        ...Fonts.h5,
        marginTop: 10,
        marginLeft: 73
    },
    img7Up: {
        marginLeft: 70,
        marginTop: 30
    },
    textSo2: {
        ...Fonts.h5,
        marginTop: 10,
        marginLeft: 98
    },
    text1: {
        ...Fonts.h4
    },
    text2: {
        marginLeft: 5,
        ...Fonts.h13,
        fontWeight: 'bold'
    },
    textHoac: {
        ...Fonts.h4, 
        marginLeft: 5,
        marginTop: 3
    },
    btnDangNhap: {
        height: 50,
        width: 250,
        backgroundColor: '#FC3B3B',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 50
      },
      textDangnhap: {
        ...Fonts.h3,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 30
      },
      imgDangnhap2: {
        height: 48,
        width: 50,
        borderRadius: 10,
        marginLeft: 24
      },
      imgOTP1: {
        height: 48,
        width: 50,
        borderRadius: 10
      },
      tobTru: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 50
      },
      tobCong: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        marginTop: 20,
        borderRadius: 50
      },
      textTru: {
        ...Fonts.h2,
        textAlign: 'center',
        marginTop: 5,    
    },
    textSo0: {
        ...Fonts.h3,
        alignSelf: 'center',
        marginLeft: 15,
        marginTop: 20,
        marginRight: 15
    },
    ViewModalGift: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      ModalGift: {
        backgroundColor: "transparent",
        // backgroundColor: 'yellow',
        borderRadius: 10,
        shadowColor: "#000",
        height: 400,
        width: 340,
        alignSelf: 'center',
        display: 'flex',
        marginTop: 210
      },
      imgQua: {
        alignSelf: 'center'
      },
      textModal1: {
        textAlign: 'center',
        marginTop: 20,
        ...Fonts.h9
      },
      textModal2: {
        ...Fonts.h9,
        marginLeft: 5,
        marginTop: 2
      },
      textModal3: {
        ...Fonts.h19
      },
      imgCloseModal: {
        alignSelf: 'center',
        marginTop: 50
      },
      btnXacNhan: {
        height: 45,
        width: 140,
        alignSelf:'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 20,
        backgroundColor: '#FC3B3B'
      },
      textXacNhan: {
        alignSelf: 'center',
        marginTop: 10,
        ...Fonts.h5
      }

});

export default Collection;