import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ImageBackground,} from 'react-native';
import Fonts from '../contants/Fonts';
import { scale } from '../Scale';
const TheLeChuongTrinh = ({navigation}: {navigation: any}) => {
    return(
        <View style = {styles.container}>
        
            <ImageBackground style = {styles.imgBackgroud}
             source={require('../image/backgroudThele.png')}>
        <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Image style = {styles.imgBack}
             source={require('../image/Vector.png')}></Image>
         </TouchableOpacity>
             <Text style = {styles.textTheLe}>Thể lệ chương trình</Text>
        </View>
        <ScrollView>
        <View style = {styles.viewText}>
        
            <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
            <Text style = {styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.</Text>        
            <Text  style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
            <Text style = {styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.</Text>
            <Text style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
            <Text style = {styles.text1}>Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.</Text>
            <Text style = {styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.</Text>
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
    imgBackgroud: {
        height: 945,
        width: 435
    },
    imgBack: {
        height: 28,
        width: 20,
        marginTop: 20,
        marginLeft: 15
    },
    textTheLe: {
        ...Fonts.h7,
        marginLeft: 65,
        marginTop: 18
    },
    viewText: {
        height: 1340,
        width: 380,
        alignSelf: 'center',
        marginTop: 25,
        padding: 10
    },
    text: {
        ...Fonts.h8,
        textAlign: 'justify'
    },
    text1: {
        ...Fonts.h8,
        marginTop: 15,
        textAlign: 'justify'
    }
   
});

export default TheLeChuongTrinh;