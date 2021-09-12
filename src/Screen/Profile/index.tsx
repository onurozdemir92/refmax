import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';
import { getUserInfo } from '../../Helpers/Api/User';



type TProfile = 'shop' | 'normal';
const Profile = ({ navigation, route }) => {

    const [profileState, setProfileState] = useState<TProfile>(null)
    const [myProfile, setMyProfile] = useState<boolean>(false);


    const userId = route?.params?.userId;

    const getProfiloInfo = async () => {
        const user = await getUserInfo(userId);
        console.log('profile geleln ', userId)
        if (user) {
            setProfileState(user.profileType === 'shop' ? 'shop' : 'normal')
        }
    }

    useEffect(() => {
        getProfiloInfo();
        if (auth()?.currentUser) {
            if (auth()?.currentUser.uid === userId) {
                setMyProfile(true)
            } else {
                setMyProfile(false)
            }
        } else {
            setMyProfile(false)

        }
    }, [])




    return (
        <SafeAreaView>
            {profileState === 'shop' ? <Text>shop</Text> : <Text>profile</Text>}
        </SafeAreaView>
    )
}

export default Profile
