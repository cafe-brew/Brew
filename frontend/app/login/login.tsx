import React from 'react';
import { View, TextInput, Button, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { LoginStyles } from './LoginStyles';

const LoginPage: React.FC = () => {
  return (
    <SafeAreaView style={LoginStyles.container}>
      <View style={LoginStyles.form}>
        <Text style={LoginStyles.title}>Welcome Back!</Text>
        <Text style={LoginStyles.subtitle}>Please log in to continue</Text>

        <TextInput
          style={LoginStyles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={LoginStyles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={LoginStyles.loginButton}>
          <Text style={LoginStyles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={LoginStyles.createAccountButton}>
          <Text style={LoginStyles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default LoginPage;