import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './src/components/Button';
import { styles } from './app.styles';
import { currencies } from './src/constants/currencies';
import { Input } from './src/components/input';
import { ResultCard } from './src/components/ResultCard';
import { exchangeRateApi, convertCurrency } from './src/services/api';
import { useState } from 'react';

export default function App() {
const[amount, setAmount]= useState('1000')
const[fromCurrency, setFromCurrency]= useState('USD')
const[toCurrency, setToCurrency]= useState('BRL')
const[result, setResult]= useState('')
const[loading, setLoading]= useState(false)
const[exchangeRate, SetExchangeRate]= useState(null)


async function fetchExchangeRate(){
  try {
    setLoading(true);
    
    if(!amount || isNaN(parseFloat(amount))) {
      alert("Por favor, insira um valor válido");
      return;
    }

    console.log("🔄 Buscando taxa de câmbio...");
    const data = await exchangeRateApi(fromCurrency);
    
    console.log("📊 Estrutura completa da API:", data);
    
    
    if (!data || !data.rates) {
      console.log("❌ Estrutura inesperada:", data);
      throw new Error("Dados da API incompletos");
    }

    const rate = data.rates[toCurrency];
    console.log("💰 Taxa encontrada para", toCurrency + ":", rate);

    if (!rate) {
      console.log("📋 Moedas disponíveis:", Object.keys(data.rates));
      throw new Error(`Taxa para ${toCurrency} não encontrada`);
    }

    SetExchangeRate(rate);

    const convertedAmount = convertCurrency(amount, rate);
    console.log("💵 Valor convertido:", convertedAmount);
    
    setResult(convertedAmount);

  } catch(err) {
    console.error("❌ Erro na conversão:", err);
    alert("Erro ao converter: " + (err.message || "Tente novamente"));
  } finally {
    setLoading(false);
  }
}
 
function swapCurrency(){
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
  setResult('')
}

  return (
    <KeyboardAvoidingView style ={styles.container}
                behavior={Platform.OS === 'ios'? 'padding': 'height'}
    > 
     <ScrollView style ={styles.scrollView}>
    <View style={styles.content}>
    
      <StatusBar style="auto" />
          <View style={styles.header}>
          <Text style={styles.title}> Conversor de Moeda</Text>
          <Text style={styles.subTitle}>Converter valores entre diferentes moedas</Text>
          
          
           </View>
          <View style={styles.card}>
            <Text style = {styles.label}>De:</Text>
            <View style = {styles.currencyGrid}>

              {currencies.map( currency =>(
                <Button variant='primary' 
                key={currency.code}
                  currency={currency}
                  onPress={() => setFromCurrency(currency.code)}
                  isSelected={fromCurrency === currency.code}
                 
                 >
                 
                  
                </Button>
              ))}
          </View>
                <Input label = "Valor:  " value={amount} onChangeText={setAmount}/> 
                  <TouchableOpacity style={styles.swapButton} onPress = {swapCurrency}>
                    <Text style= {styles.swapButtonText}>
                    ↑↓
                    </Text>
                  </TouchableOpacity>

                <Text style= {styles.label}>Para: </Text>
                <View style ={styles.currencyGrid} >
                  
              {currencies.map( currency =>(
                <Button variant='primary' 
                key={currency.code}
                  currency={currency}
                  onPress={()=>setToCurrency(currency.code)}
                 isSelected={toCurrency === currency.code}
                 
                  >
                 
                  
                </Button>
              ))}
                </View>
            
          </View>
          <TouchableOpacity style={[styles.convertButton, (!amount || loading) && styles.convertButtonDisnable]}
          onPress={fetchExchangeRate}
          disabled={!amount || loading}
          
          >
            {loading ?(
              <ActivityIndicator color="white"/>
            ) : (
            
           
            <Text style={styles.swapButtonText}>
              Converter
            </Text> 
            )}
          </TouchableOpacity>
                <View style = {styles.currencyGrid}>
                    <ResultCard
                    
                    exchangeRate={exchangeRate}
                    result= {result}
                    fromCurrency ={fromCurrency}
                    toCurrency = {toCurrency}
                    currencies = {currencies} 
                                       
                    /> 
                    </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}