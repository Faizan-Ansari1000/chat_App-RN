import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

export default function ChatList() {
    const navigation = useNavigation();
    const [chats, setChats] = useState([
        { name: 'Athar', time: '03:45', image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/461327300_1547258932565553_5312556386297250161_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHxq7rX_MvJQoB__TZGbkwsdQZqviP1-Sx1Bmq-I_X5LPFdsP3qK8PFPdzpADip_vUCUJuCeaJoHYP24UloiJ2z&_nc_ohc=wrontiyupDgQ7kNvgG51-Qo&_nc_oc=AdgInD0e9YWno9CfsG0ODvtecgdqK5TLexTYQetIY_t2zxBeAds7T6jwrZMXUIO0Ycg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AynR4zkcHzmwBF0nWLAZCbl&oh=00_AYBv6CSVP3k7sPny1Sp3FO5Ne736_nLZJ3NB186bh2GbbA&oe=6795BBB4' },
        { name: 'Kareem', time: '10:15', image: 'https://scontent.fkhi2-3.fna.fbcdn.net/v/t1.6435-9/120365517_1197469537272345_1628084603531140976_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEkwG9yVM_Wt3Aclptnet7rLFKffr4J6JwsUp9-vgnonPtvFGQ6yOrgOak47PL-ijZg6JAgh5BqwO617dFptEVG&_nc_ohc=xDg4uJBIlLEQ7kNvgEbsyTX&_nc_oc=AdiY-Z7kh5prS9owkiGdQ4Hu9MXcsB5uBcnjci3vazj1G3sDV2BQLoACpGdrEMIiaN0&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=AaUDcAtfITkJKBO0gCyHWyY&oh=00_AYB9rQtqp54KgG5QYjKmO-Xx3ifDFPcmcry3EWNf-Tmodw&oe=67B758B9' },
        { name: 'Ali', time: '12:05', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBt66qo5PdIfoFVrvB35Y1SeOJtWPmBKC2NA&s' },
        { name: 'Sara', time: '15:25', image: 'https://photosnow.org/wp-content/uploads/2024/04/indian-girl-photo_9.jpg' },
        { name: 'Zara', time: '18:45', image: 'https://photosnow.org/wp-content/uploads/2024/04/girl-photo_16.jpg' }
    ]);

    return (
        <View style={styles.container}>
            <FlatList
                data={chats}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('MessageList')}>
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                        <View style={styles.chatInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 13
    },
    chatItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 13,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5, // Ensures the image is circular
        marginRight: 15
    },
    chatInfo: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    time: {
        fontSize: 14,
        color: '#666'
    }
});
