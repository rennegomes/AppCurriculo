
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import foto from '../assets/minhafoto.png';

function Feed() {
  return (
    <View style={{ flex: 1, backgroundColor: '#00484C'}}>
      <Text style={{ textAlign: 'center', paddingTop: 20, fontSize: 40, color: '#fff'}}>LACÊ RENÊ</Text>
      <Image source={foto} style={{alignSelf:'center', marginTop: 100, height: 350, width: 350, borderRadius: 200 }} />
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <Text style={{ padding: 15, paddingBottom: -20, textAlign: 'justify'}}>Atualmente, estou cursando tecnólogo em Análise e Desenvolvimento de Sistemas, com foco em linguagens como Java, Javascript e HTML. Desenvolvi
       projetos pessoais e em grupo para aplicar conhecimentos e estou em busca constante de atualização e crescimento profissional. Busco contribuir em projetos desafiadores e inovadores.</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, color: '#00484C'}}>________________</Text>
      <Text style={{ padding: 15, paddingBottom: -20, fontSize: 20, color: '#00484C'}}>Experiência de Trabalho</Text>
      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Auxiliar de Marketing</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>Liferay, Recife | Out. de 2019 - Mar. de 2021</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 15, color: '#444440', textAlign: 'justify'}}>* Apoio à equipe na realização de tarefas diversas conforme a demanda, garantindo a agilidade e eficiência.{'\n'}
        * Criação de documentos e planilhas utilizando Microsoft Word e Excel, auxiliando na produção de comunicações e relatórios diversos.{'\n'}
        * Lançamento de documentos atualizados e novos no sistema, levantando as informações necessárias para manter atualizado.{'\n'}
        * Monitoramento de redes sociais.</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, color: '#00484C'}}>________________</Text>
      <Text style={{ padding: 15, paddingBottom: -20, fontSize: 20, color: '#00484C'}}>Formação Acadêmica</Text>
      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>Faculdade Senac, Recife | Ago. de 2022 - Atualmente</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, color: '#00484C'}}>________________</Text>
      <Text style={{ padding: 15, paddingBottom: -20, fontSize: 20, color: '#00484C'}}>Cursos</Text>
      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Javascript e HTML</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>Alura | Out. de 2022</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Auxiliar Administrativo</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>CIEE | Mar. de 2021</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Curso de Formação de Profissionais Honda</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>CTHonda | Nov. de 2018</Text>

      <Text style={{ padding: 15, paddingTop: -20, paddingBottom: -20, fontSize: 15, color: '#444440'}}>Curso Profissionalizante Designer</Text>
      <Text style={{ padding: 15, paddingTop: -20, fontSize: 10, color: '#444440'}}>Saga | Set. de 2015</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function Pagina1() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#00484C',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Feed}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Curriculo"
        component={Profile}
        options={{
          tabBarLabel: 'Curriculo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
