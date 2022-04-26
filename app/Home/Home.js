import react, {Component} from "react"
import {View, Text, Image, TouchableOpacity, FlatList,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    state = {

    }

    goScreen = (item) => {
        this.props.goScreen('DetailScreen', item)
    }

    componentDidMount() {
        this.props.title('Home')
    }

    _renderItem = ({item}) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => this.goScreen(item)}>
            <Image style={styles.image} source={{uri: item?.image}}/>
            <View style={styles.opacityInfoView}/>
            <View style={styles.infoView}>
                <Text style={styles.txtName}>{item?.name}</Text>
            </View>
        </TouchableOpacity>
    )
    _renderSearch=()=>{

        const {param} =this.props;
         
        return (

            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
                height:44,
                backgroundColor:"#fff",
                borderRadius:6
            }}>
                <TextInput style={{
                    borderColor:"#f00",
                    borderWidth:0.5,
                    paddingHorizontal:5,
                    height:"100%",
                    width:"100%"
                }}
                placeholder={"Nhập tên thành phố..."}
                placeholderTextColor={'dark-grey'}
                numberOfLines={3}
                onChangeText={(value)=>{

                    param.map((v,i)=>{

                        if(v==value){

                            

                        }

                    })

                }}
                maxLength={8}
                // keyboardType={'email-address'}//use for choose keyboard
                // secureTextEntry={true}=>use for password
                />
                <Icon name="search" size={16} color="dark-grey" />
            </View>

        );
        
    }
    render() {
        const {param} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={param}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
}

export default Home