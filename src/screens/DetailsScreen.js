import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function DetailsScreen() {

// Simulación de datos de proyectos de reciclaje
  const [projects, setProjects] = useState([
    { id: '1', name: 'Proyecto 1', manager: 'Juan Pérez', contact: 'juan@example.com', socialMedia: ['facebook', 'x'] },
    { id: '2', name: 'Proyecto 2', manager: 'María González', contact: 'maria@example.com', socialMedia: ['instagram', 'linkedin'] },
    { id: '3', name: 'Proyecto 3', manager: 'Carlos Martínez', contact: 'carlos@example.com', socialMedia: ['x', 'linkedin'] },
    // Añadir más proyectos según sea necesario
  ]);

  // Función para renderizar un elemento de la lista de proyectos
  const renderProjectItem = ({ item }) => (
    <View style={styles.projectItem}>
      <View style={styles.projectInfo}>
        <Text style={styles.projectName}>{item.name}</Text>
        <Text>Encargado: {item.manager}</Text>
        <Text>Contacto: {item.contact}</Text>
      </View>
      <View style={styles.socialMediaIcons}>
        {item.socialMedia.map((social, index) => (
          <Image key={index} source={getSocialMediaIcon(social)} style={styles.socialMediaIcon} />
        ))}
      </View>
    </View>
  );

  // Función para obtener el icono de la red social
  const getSocialMediaIcon = (social) => {
    switch (social) {
      case 'facebook':
        return require('../img/facebook.png');
      case 'x':
        return require('../img/x.png');
      case 'instagram':
        return require('../img/instagram.png');
      case 'linkedin':
        return require('../img/linkedin.png');
      default:
        return null;
    }
  };


  return (
<View style={styles.container}>
      <Text style={styles.title}>Lista de Proyectos de Reciclaje</Text>
      <FlatList
        data={projects}
        renderItem={renderProjectItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  socialMediaIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialMediaIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});