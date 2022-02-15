import React, { useState } from 'react';
import {Image, Touchable, View} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Foco = () => {

  const [estatus, setEstatus] = useState(false);

  return (
    <View>

        <TouchableOpacity onPress={ ()=> { setEstatus(!estatus) } }>



        <Image source={ estatus ? require('../../img/focoOn.png') : require('../../img/focoOff.png')} 
            style={{ width: 300, height: 300}}
        />

        </TouchableOpacity>



    </View>
    
  )
};

export default Foco;
