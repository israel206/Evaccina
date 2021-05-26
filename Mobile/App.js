import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from 'react-native';

import AppDataService from './services/AppDataService';

export default function App() {

  //utilizando Hooks
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [grupo, setGrupo] = useState(null);

  //função add os dados
  const handleAdd = event => {
    const pessoa = {
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      email: email,
      idade: idade,
      dataNascimento: dataNascimento,
      grupo: {
        codigo: grupo
      }
    };
    //Chamando o servico
    AppDataService.cadastrarPessoa(pessoa);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro de Vacina</Text>

      <TextInput style={styles.input}
        onChangeText={setNome} value={nome}
        placeholder="Nome" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setCpf} value={cpf}
        placeholder="CPF" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setTelefone} value={telefone}
        placeholder="Telefone" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setEmail} value={email}
        placeholder="e-mail" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setIdade} value={idade}
        placeholder="Idade" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setDataNascimento} value={dataNascimento}
        placeholder="Data de Nascimento" placeholderTextColor="#fff">
      </TextInput>

      <TextInput style={styles.input}
        onChangeText={setGrupo} value={grupo}
        placeholder="Grupo" placeholderTextColor="#fff">
      </TextInput>

      {/* chamando a função de dados */}
      <Button style={styles.button} title="CADASTRAR" onPress={handleAdd}></Button>

      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0D458D',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#0D458D',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 8,
  },
});
