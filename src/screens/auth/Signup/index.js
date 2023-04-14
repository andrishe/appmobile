import React from "react";
import { View} from "react-native";
import Button from '../../../components/Button';
import styles from "./styles";

const Signup = () => {
    return(
        <View style={styles.container}>
            <Button>Get started</Button>
        </View>
       
    );

};

export default React.memo(Signup);