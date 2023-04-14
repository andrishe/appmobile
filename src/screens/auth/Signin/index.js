import React from "react";
import { SafeAreaView} from "react-native";
import Button from '../../../components/Button';
import Title from "../../../components/Button/Title";
import styles from "./styles";

const Signin = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Title>Welcom back!</Title>
            <Button>Login</Button>
        </SafeAreaView>
       
    );

};

export default React.memo(Signin);