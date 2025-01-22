import React, { useState } from 'react';
import { FlatList, Text, View, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

export default function MessageList() {
    const messages = [
        { name: 'Faizan', message: 'Assalam o walaikum', time: '10:00 AM' },
        { name: 'Ahmed', message: 'Walaikum Assalam! Kya haal hain?', time: '10:02 AM' },
        { name: 'Faizan', message: 'Alhamdulillah, sab theek. Tum sunao?', time: '10:05 AM' },
        { name: 'Ahmed', message: 'Alhamdulillah, bas kaam chal raha hai.', time: '10:07 AM' },
        { name: 'Faizan', message: 'Mashallah, kahan kaam kar rahe ho?', time: '10:10 AM' },
        { name: 'Ahmed', message: 'Ek software company me. Tumhara kya plan hai?', time: '10:12 AM' },
        { name: 'Faizan', message: 'React Native internship ke liye try kar raha hoon.', time: '10:15 AM' },
        { name: 'Ahmed', message: 'Best of luck! Mujhe umeed hai tumhe zaroor mil jayegi.', time: '10:18 AM' },
        { name: 'Faizan', message: 'JazakAllah! Duaon ka shukriya.', time: '10:20 AM' },
        { name: 'Ahmed', message: 'Hamesha khush raho!', time: '10:22 AM' }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const send = () => {
        Toast.show({ type: 'info', position: 'top', text1: 'Development Mode', text2: 'These Feautue is under Development' })
    }

    const openCamera = () => {
        const result = launchCamera({
            mediaType: 'photo',
            includeBase64: true
        });
        console.log(result);
    };

    const openGallery = () => {
        const result = launchImageLibrary({
            mediaType: 'mixed',
            includeBase64: true
        })
        console.log(result.data)
    }

    return (
        <View style={styles.chatScreen}>
            <Modal
                transparent={true}
                visible={isOpen}
                onRequestClose={() => setIsOpen(false)}
                animationType="slide"
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text>Choose an Option</Text>
                        <TouchableOpacity onPress={openCamera} style={styles.optionButton}>
                            <Text style={styles.optionText}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openGallery} style={styles.optionButton}>
                            <Text style={styles.optionText}>Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsOpen(false)} style={styles.closeModalButton}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View
                            style={[
                                styles.messageContainer,
                                item.name === 'Faizan' ? styles.faizanMessage : styles.userMessage
                            ]}
                        >
                            <View style={styles.messageBubble}>
                                <Text style={styles.message}>{item.message}</Text>
                                <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input} placeholder="Type a message..." multiline={true} numberOfLines={4} keyboardType='name-phone-pad' />
                    <TouchableOpacity style={styles.sendButton} onPress={send}>
                        <Text style={styles.sendText}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.plusButton} onPress={() => setIsOpen(true)}>
                        <Text style={styles.sendText}>Select</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    chatScreen: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    messageContainer: {
        marginVertical: 5,
        flexDirection: 'row',
    },
    faizanMessage: {
        justifyContent: 'flex-end',
        marginStart: '40%',
        alignItems: 'flex-end',
        backgroundColor: '#e0e0e0',
        borderRadius: 10
    },
    userMessage: {
        justifyContent: 'flex-start',
        marginEnd: '40%',
        alignItems: 'flex-start',
        backgroundColor: '#e3f2fd',
        borderRadius: 10
    },
    messageBubble: {
        padding: 10,
        borderRadius: 15,
        maxWidth: '80%',
    },
    message: {
        fontSize: 16,
    },
    timeText: {
        fontSize: 10,
        color: '#555',
        marginTop: 5,
    },
    inputContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 40,
        paddingLeft: 15,
        flex: 1,
        height: 40,
    },
    sendButton: {
        padding: 10,
        marginStart: 3,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendText: {
        color: 'cyan',
        fontSize: 16,
    },
    plusButton: {
        padding: 10,
        marginStart: 15,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    optionButton: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'black',
        borderRadius: 5,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        color: 'cyan',
        fontSize: 16,
    },
    closeModalButton: {
        marginTop: 15,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    closeModalText: {
        color: 'lightblue',
        fontSize: 16,
    },
});
