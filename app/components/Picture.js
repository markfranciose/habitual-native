import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Picture extends Component {
render(){
  return(
    <Image
        style={{width: 100, height: 100}}
        source={{uri: "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}}
      />
    )

}
}
