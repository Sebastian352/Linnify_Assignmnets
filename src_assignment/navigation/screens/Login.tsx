import {SafeAreaView, View} from 'react-native';
import {LoginForm} from '../../components/loginComponent';
import {MyButton} from '../../components/button';
import {forwardRef, useImperativeHandle, useRef} from 'react';
import {LoginFormRef} from '../../types/LoginFormRef';

const Login = () => {
  const loginForm = useRef<LoginFormRef>(null);

  const onPress = () => {
    loginForm.current?.getData();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginForm ref={loginForm} />
      <MyButton onLogin={onPress} />
    </SafeAreaView>
  );
};

export default Login;
