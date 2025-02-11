import React from 'react';
import { View, TextInput, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { SignupStyles } from './SignupStyles'; // Reuse the same SignupStyles

const SignupPage: React.FC = () => {
  return (
    <SafeAreaView style={SignupStyles.container}>
      <View style={SignupStyles.form}>
        <Text style={SignupStyles.title}>Create Account</Text>
        <Text style={SignupStyles.subtitle}>Join us to get started</Text>

        <TextInput
          style={SignupStyles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
          autoCapitalize="words"
        />

        <TextInput
          style={SignupStyles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          autoCapitalize="words"
        />

        <TextInput
          style={SignupStyles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={SignupStyles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          autoCapitalize="none"
        />

        <TextInput
          style={SignupStyles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
        />

        <TextInput
          style={SignupStyles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={SignupStyles.loginButton}>
          <Text style={SignupStyles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={SignupStyles.createAccountButton}>
          <Text style={SignupStyles.createAccountButtonText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;