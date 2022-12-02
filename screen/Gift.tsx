import React, { useState } from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground, Dimensions, Modal, SectionList,} from 'react-native';
import Fonts from '../contants/Fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DOIQUA = 'DOIQUA';
const QUATANG = 'QUATANG';


const Gift = ({navigation}: {navigation: any}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const [page, setPage] = useState(DOIQUA);
    const [page2, setPage2] = useState(QUATANG);

    return(
        <View style = {styles.container}>
           <ImageBackground style = {styles.BgAll}
            source={require('../image/BgGiude.png')}>
            
            <View style = {{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home_Page')}>
                    <Image style = {styles.imgBack}
                     source={require('../image/imgBack.png')}></Image>
                </TouchableOpacity>
                    <Text style = {styles.textBosuutap}>Chi tiết quà tặng</Text>

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
       
            <View style = {{flexDirection: 'row', alignSelf: 'center', marginTop: 15}}>
                <TouchableOpacity onPress={() => {setPage(DOIQUA)}}
                    style = {styles.TobDoiqua}
                    disabled = {page === DOIQUA ? true:false}
                    >
                    
                    {page === DOIQUA ? 
                    <View style = {{backgroundColor: '#D02027', position: 'absolute', width: '100%', height: '100%', borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10 }}>
                    </View> : null
                    }
                    <Text style = {styles.textGIF1}>Đổi quà</Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {setPage(QUATANG)}}
                 style = {styles.TobQuacuatoi}
                 disabled = {page === QUATANG ? true:false}
                 >
                    {page === QUATANG ? 
                    <View style = {{backgroundColor: '#D02027', position: 'absolute', width: '100%', height: '100%',  borderBottomRightRadius: 10,
                    borderTopRightRadius: 10 }}>
                    </View> : null
                    }   
                    <Text style = {styles.textGIF2}>Quà của tôi</Text>
                
                </TouchableOpacity>
            </View>
            
       
       <ScrollView>
        <View>
            <RedComponent page= {page} setPage = {setPage} />

        </View>
      
        </ScrollView>
           </ImageBackground>
        </View>
    )
    
}

const RedComponent = ({navigation}: {navigation: any}) =>  {
    const [modalVisibleGift, setModalVisibleGift] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return(
       
        <View>
             
           <Image style = {styles.Coin700}
            source={require('../image/Coin.png')}></Image>
            <Text style = {styles.textSoCoin}>
                Số coin hiện tại của bạn
            </Text>
  
   <View style = {{flexDirection: 'row'}}>
        <View style = {{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 10}}>
            <View style = {styles.ShapeView1}>
                <Image style = {styles.imgMuPepsi}
                source={require('../image/MuPepsi.png')}></Image>
                <Image style = {styles.imgSale}
                 source={require('../image/Sale1.png')}></Image>
            </View>
            <View style = {styles.ShapeView2}>
                <Text style = {styles.BucketHat}>Pepsi Bucket Hat</Text>
                <Text style = {styles.textConlai}>Còn lại: 600</Text>
                <TouchableOpacity onPress={() => setModalVisibleGift(true)}>
                    <View style = {styles.btnQuetMa}> 
                         <View style = {{flexDirection: 'row'}}>
                             <Image style = {styles.imgOTP1} 
                                 source={require('../image/imgDangnhap1.png')}></Image>  
                                <Text style = {styles.textDoiqua}>Đổi quà</Text>
                            <Image style = {styles.imgDangnhap2} 
                                source={require('../image/imgDangnhap2.png')}></Image>  
                         </View>
                    </View>
            </TouchableOpacity>
                </View>
            </View>

            <View style = {{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 10}}>
            <View style = {styles.ShapeView1}>
                <Image style = {styles.imgMuPepsi}
                source={require('../image/AokhoacPepsi.png')}></Image>
                <Image style = {styles.imgSale}
                 source={require('../image/Sale2.png')}></Image>
            </View>
            <View style = {styles.ShapeView2}>
                <Text style = {styles.BucketHat}>Pepsi Bucket Hat</Text>
                <Text style = {styles.textConlai}>Còn lại: 600</Text>
                <TouchableOpacity>
                    <View style = {styles.btnQuetMa}> 
                         <View style = {{flexDirection: 'row'}}>
                             <Image style = {styles.imgOTP1} 
                                 source={require('../image/imgDangnhap1.png')}></Image>  
                                <Text style = {styles.textDoiqua}>Đổi quà</Text>
                            <Image style = {styles.imgDangnhap2} 
                                source={require('../image/imgDangnhap2.png')}></Image>  
                         </View>
                    </View>
            </TouchableOpacity>
                </View>
            </View>

        </View>



        <View style = {{flexDirection: 'row'}}>
        <View style = {{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 10}}>
            <View style = {styles.ShapeView1}>
                <Image style = {styles.imgMuPepsi}
                source={require('../image/TuiXachPepsi.png')}></Image>
                <Image style = {styles.imgSale}
                 source={require('../image/Sale1.png')}></Image>
            </View>
            <View style = {styles.ShapeView2}>
                <Text style = {styles.BucketHat}>Pepsi Bucket Hat</Text>
                <Text style = {styles.textConlai}>Còn lại: 600</Text>
                <TouchableOpacity>
                    <View style = {styles.btnQuetMa}> 
                         <View style = {{flexDirection: 'row'}}>
                             <Image style = {styles.imgOTP1} 
                                 source={require('../image/imgDangnhap1.png')}></Image>  
                                <Text style = {styles.textDoiqua}>Đổi quà</Text>
                            <Image style = {styles.imgDangnhap2} 
                                source={require('../image/imgDangnhap2.png')}></Image>  
                         </View>
                    </View>
            </TouchableOpacity>
                </View>
            </View>

            <View style = {{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 10}}>
            <View style = {styles.ShapeView1}>
                <Image style = {styles.imgMuPepsi}
                source={require('../image/BinhnuocPepsi.png')}></Image>
                <Image style = {styles.imgSale}
                 source={require('../image/Sale2.png')}></Image>
                
            </View>
            <View style = {styles.ShapeView2}>
                <Text style = {styles.BucketHat}>Pepsi Bucket Hat</Text>
                <Text style = {styles.textConlai}>Còn lại: 600</Text>
                <TouchableOpacity>
                    <View style = {styles.btnQuetMa}> 
                         <View style = {{flexDirection: 'row'}}>
                             <Image style = {styles.imgOTP1} 
                                 source={require('../image/imgDangnhap1.png')}></Image>  
                                <Text style = {styles.textDoiqua}>Đổi quà</Text>
                            <Image style = {styles.imgDangnhap2} 
                                source={require('../image/imgDangnhap2.png')}></Image>  
                         </View>
                    </View>
            </TouchableOpacity>
                </View>
            </View>

        </View>
        <View style = {{flex: 1, flexDirection: 'column', paddingTop: 20, paddingLeft: 10}}>
            <View style = {styles.ShapeView1}>
                <Image style = {styles.imgMuPepsi}
                source={require('../image/MuPepsi.png')}></Image>
                <Image style = {styles.imgSale}
                 source={require('../image/Sale2.png')}></Image>
                
            </View>
            <View style = {styles.ShapeView2}>
                <Text style = {styles.BucketHat}>Pepsi Bucket Hat</Text>
                <Text style = {styles.textConlai}>Còn lại: 600</Text>
                <TouchableOpacity>
                    <View style = {styles.btnQuetMa}> 
                         <View style = {{flexDirection: 'row'}}>
                             <Image style = {styles.imgOTP1} 
                                 source={require('../image/imgDangnhap1.png')}></Image>  
                                <Text style = {styles.textDoiqua}>Đổi quà</Text>
                            <Image style = {styles.imgDangnhap2} 
                                source={require('../image/imgDangnhap2.png')}></Image>  
                         </View>
                    </View>
            </TouchableOpacity>
                </View>
            </View>



            <View style = {styles.ViewModalGift}>
                
                    <Modal
                      animationType='slide'
                      transparent = {true}
                       visible = {modalVisibleGift}
                    >
                        <View style = {styles.ModalGift}>
                            <Text style = {styles.txtTTnhanQua}>THÔNG TIN NHẬN QUÀ</Text>
                            <TouchableOpacity onPress={() => setModalVisibleGift(!modalVisibleGift)}>
                                <Image style = {styles.btnClose}
                                source={require('../image/Button_close.png')}></Image>
                             </TouchableOpacity>
                             <View style = {{flexDirection: 'row'}}>
                                <Text style = {styles.txtQuacuaban}>Quà của bạn:</Text>
                                <Text style = {styles.txtPepsiBag}>Pepsi Tote Bag</Text>
                            </View>
                            <Text style = {styles.textHovaTen}>Họ và tên</Text>
                            <TextInput style = {styles.textInput}
                              placeholder = 'Nguyễn Văn A'
                              placeholderTextColor={'black'}
                                >
                            </TextInput>  
                            <Text style = {styles.textSoDT}>Số điện thoại</Text>                    
                            <TextInput style = {styles.textInput}
                              placeholder = '0235467985'
                              placeholderTextColor={'black'}
                                >
                            </TextInput>  
                            <Text style = {styles.textSoDT}>Địa chỉ</Text>  
                            <TextInput style = {styles.textInputDiaChi}
                              placeholder = 'Nhập địa chỉ của bạn'
                                >
                            </TextInput> 
                            <Text style = {styles.textSoDT}>Ghi chú</Text>
                            <TextInput style = {styles.textInputDiaChi}
                              placeholder = 'Nhập ghi chú ( nếu có )'
                                >
                            </TextInput> 
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <View style = {styles.btnXacNhan}>
                                    <Text style = {styles.textXacNhan}>Xác nhận</Text>
                                </View>    
                            </TouchableOpacity>                   
                        </View>

                    </Modal>

                
            </View>
            
            <View style = {styles.ViewModal}>
                <Modal
                  animationType='slide'
                  transparent = {true}
                   visible = {modalVisible}
                   onRequestClose = {() => setModalVisibleGift(!modalVisibleGift)}
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
        marginLeft: 50,
        marginTop: 20
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
    TobDoiqua: {
        height: 50,
        width: 150, 
        backgroundColor: 'white',
        borderWidth: 0.1,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    TobQuacuatoi: {
        height: 50,
        width: 150,
        borderWidth: 0.1,
        backgroundColor: 'white',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    textGIF1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,  
    },
    textGIF2: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8 
    },
    Coin700: {
        alignSelf: 'center',
        marginTop: 25
    },
    textSoCoin: {
        ...Fonts.h5,
        textAlign: 'center',
        marginTop: 10
    },
    ShapeView: {
        // height: 400,
        // width: 195,
        // marginTop: 3,
        // backgroundColor: 'white',
        // borderRadius: 12,
        // borderWidth: 1,
        // shadowRadius: 1,
        // shadowOpacity: 0.3,
        // borderColor: '#DDDBDB',
        // marginLeft: 8
    },
    ShapeView1: {
        height: 170,
        width: 185,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    ShapeView2: {
        height: 120,
        width: 185,
        backgroundColor: 'red',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    imgMuPepsi: {
        alignSelf: 'center',
        marginTop: 10
    },
    BucketHat: {
        ...Fonts.h19,
        alignSelf: 'center',
        marginTop: 8
    },
    textConlai: {
        textAlign: 'center',
        ...Fonts.h4,
        marginTop: 5
    },
    imgOTP1: {
        height: 38,
        width: 30,
        borderRadius: 10,
        marginTop: 5
      },
    btnQuetMa: {
        height: 45,
        width: 150,
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 12
      },
      textDoiqua: {
        ...Fonts.h6,
        alignSelf: 'center',
        marginTop: 6,
        marginLeft: 10
        
      },
      imgDangnhap2: {
        height: 38,
        width: 30,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 7
      },
      imgSale: {
        bottom: 120,
        marginLeft: 125
      },
      ViewModalGift: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      ModalGift: {
        backgroundColor: "#FBD239",
        borderRadius: 10,
        shadowColor: "#000",
        height: 600,
        width: 340,
        alignSelf: 'center',
        display: 'flex',
        marginTop: 85
      },
      txtTTnhanQua: {
        textAlign: 'center',
        ...Fonts.h18,
        marginTop: 20
      },
      btnClose: {
        height: 30,
        width: 30,
        bottom: 35,
        marginLeft: 305,
      },
      txtQuacuaban: {
        ...Fonts.h18,
        bottom: 10,
        marginLeft: 15
      },
      txtPepsiBag: {
        ...Fonts.h20,
        bottom: 10,
        marginLeft: 5
      },
      textHovaTen: {
        ...Fonts.h21,
        marginLeft: 15
      },
      textInput: {
        height: 40,
        width: 310,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 5,
        fontWeight: 'bold',
      },
      textSoDT: {
        ...Fonts.h21,
        marginTop: 10,
        marginLeft: 15
      },
      textInputDiaChi: {
        height: 80,
        width: 310,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: 'white',
        marginTop: 5,
      },
      btnXacNhan: {
        height: 55,
        width: 180,
        alignSelf:'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'yellow',
        marginTop: 40,
        backgroundColor: '#FC3B3B'
      },
      textXacNhan: {
        alignSelf: 'center',
        marginTop: 16,
        ...Fonts.h5
      }
})

export default Gift;