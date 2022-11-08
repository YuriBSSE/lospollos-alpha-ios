// @ts-nocheck
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import colors from '../../../assets/colors/colors';
import BackBtnHeader from '../../../components/BackBtnHeader';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import HomeIcon from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}) {
  const data = [
    {id: 1, name: 'Entrées'},
    {id: 2, name: 'Plats'},
    {id: 3, name: 'Pains'},
  ];

  const data1 = [
    {
      id: 1,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
    {
      id: 2,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
    {
      id: 3,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
    {
      id: 4,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
    {
      id: 5,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
    {
      id: 6,
      title: 'Poulet braisé entier',
      des: 'Nombre au choix',
      amount: '100',
    },
  ];

  const [onTouch, onChangeOnTouch] = useState('menu');
  const [like, onChangeLike] = useState(false);
  const [fields, setFields] = useState({
    search: '',
  });

  function getValue(k, v) {
    setFields(pS => {
      return {
        ...pS,
        [k]: v,
      };
    });
  }



  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={colors.themeblue}
        //   barStyle='light-content'
      />
      <View
        style={{
          height: responsiveScreenFontSize(10),
          width: '100%',
          backgroundColor: colors.themeblue,
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="bell-outline"
            size={responsiveScreenFontSize(3)}
            color={'white'}
            style={{
              right: responsiveScreenFontSize(2),
              bottom: responsiveScreenFontSize(2),
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: responsiveScreenFontSize(8),
          width: '90%',
          borderRadius: responsiveScreenFontSize(2),
          backgroundColor: '#f7f7f7',
          alignSelf: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          position: 'absolute',
          top: responsiveScreenFontSize(6),
        }}>
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            alignItems: 'center',
            
            top: responsiveScreenFontSize(1),
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}>
          <Ionicons
            name="search"
            size={responsiveScreenFontSize(4)}
            color={'black'}
          />
          <TextInput
            maxLength={35}
            value={fields.search}
            keyboardType={'default'}
            placeholderTextColor={'grey'}
            onChangeText={v => getValue('search', v)}
            multiline={false}
            style={{color: 'grey', width: '80%', fontWeight:'bold'}}
            placeholder={'Plat, ingrédient, boisson ...'}
          />
        </View>
      </View>
      <View style={{marginTop: responsiveScreenFontSize(5)}} />
      <ScrollView>
        <View style={{height: responsiveScreenFontSize(7)}}>
          <FlatList
            horizontal={true}
            data={data}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: responsiveScreenFontSize(3),
            }}
            style={{flex: 1}}
            ListFooterComponent={<View style={{width: 100}} />}
            ListHeaderComponentStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
            }}
            ListHeaderComponent={
              <TouchableOpacity onPress={() => onChangeOnTouch('menu')}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Ionicons
                    name="grid"
                    size={responsiveScreenFontSize(4)}
                    color={onTouch == 'menu' ? colors.themeblue : '#BDBDBD'}
                  />
                </View>
              </TouchableOpacity>
            }
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity onPress={() => onChangeOnTouch(item.name)}>
                  <View
                    style={{
                      backgroundColor:
                        onTouch == item.name ? colors.themeblue : '#BDBDBD',
                      //   padding: responsiveScreenFontSize(2),
                      borderRadius: responsiveScreenFontSize(3),
                      marginHorizontal: responsiveScreenFontSize(0.8),
                      width: 100,
                      height: responsiveScreenFontSize(5),
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={index}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: responsiveScreenFontSize(1.5),
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{marginTop: responsiveScreenFontSize(1.5)}} />
        <View style={{height: responsiveScreenFontSize(30)}}>
          <FlatList
            horizontal={true}
            data={data1}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: responsiveScreenFontSize(1),
            }}
            ListFooterComponent={<View style={{width: 100}} />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('details')}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: 'white',
                    elevation: 5,
                    height: responsiveScreenFontSize(25),
                    borderRadius: responsiveScreenFontSize(3),
                    width: 170,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={{width: 170, height: responsiveScreenFontSize(25)}}
                    source={require('../../../assets/menu.png')}>
                    <View
                      style={{
                        position: 'absolute',

                        width: 170,
                        height: responsiveScreenFontSize(25),

                        opacity: 0.35,
                        backgroundColor: 'black',
                        borderRadius: responsiveScreenFontSize(3),
                      }}></View>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 170,
                        height: responsiveScreenFontSize(9),

                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.8),
                            fontWeight: '800',
                            color: 'white',
                          }}
                          numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.5),
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          {item.des}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '800',
                              color: 'yellow',
                            }}
                            numberOfLines={2}>
                            100
                          </Text>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '500',
                              color: 'yellow',
                            }}>
                            {' '}
                            €{' '}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              onChangeLike(!like);
                            }}>
                            {like ? (
                              <HomeIcon
                                name="heart-outline"
                                size={22}
                                color={'yellow'}
                              />
                            ) : (
                              <HomeIcon
                                name="heart"
                                size={22}
                                color={'yellow'}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: responsiveScreenFontSize(30)}}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveScreenFontSize(2.5),
              fontWeight: '600',
              marginLeft: responsiveScreenFontSize(2),
              bottom: 4,
            }}>
            Pains
          </Text>
          <FlatList
            horizontal={true}
            data={data1}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: responsiveScreenFontSize(1),
            }}
            ListFooterComponent={<View style={{width: 100}} />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('details')}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: 'white',
                    elevation: 5,
                    height: responsiveScreenFontSize(25),
                    borderRadius: responsiveScreenFontSize(3),
                    width: 170,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={{width: 170, height: responsiveScreenFontSize(25)}}
                    source={require('../../../assets/Photo.png')}>
                    <View
                      style={{
                        position: 'absolute',

                        width: 170,
                        height: responsiveScreenFontSize(25),

                        opacity: 0.35,
                        backgroundColor: 'black',
                        borderRadius: responsiveScreenFontSize(2),
                      }}></View>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 170,
                        height: responsiveScreenFontSize(9),

                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.8),
                            fontWeight: '800',
                            color: 'white',
                          }}
                          numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.5),
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          {item.des}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '800',
                              color: 'yellow',
                            }}
                            numberOfLines={2}>
                            100
                          </Text>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '500',
                              color: 'yellow',
                            }}>
                            {' '}
                            €{' '}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              onChangeLike(!like);
                            }}>
                            {like ? (
                              <HomeIcon
                                name="heart-outline"
                                size={22}
                                color={'yellow'}
                              />
                            ) : (
                              <HomeIcon
                                name="heart"
                                size={22}
                                color={'yellow'}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: responsiveScreenFontSize(30)}}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveScreenFontSize(2.5),
              fontWeight: '600',
              marginLeft: responsiveScreenFontSize(2),
              bottom: 4,
            }}>
            Boissons
          </Text>
          <FlatList
            horizontal={true}
            data={data1}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: responsiveScreenFontSize(1),
            }}
            ListFooterComponent={<View style={{width: 100}} />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: 'white',
                    elevation: 5,
                    height: responsiveScreenFontSize(25),
                    borderRadius: responsiveScreenFontSize(3),
                    width: 170,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={{width: 170, height: responsiveScreenFontSize(25)}}
                    source={require('../../../assets/Photo1.png')}>
                    <View
                      style={{
                        position: 'absolute',

                        width: 170,
                        height: responsiveScreenFontSize(25),

                        opacity: 0.35,
                        backgroundColor: 'black',
                        borderRadius: responsiveScreenFontSize(2),
                      }}></View>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 170,
                        height: responsiveScreenFontSize(9),

                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.8),
                            fontWeight: '800',
                            color: 'white',
                          }}
                          numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.5),
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          {item.des}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '800',
                              color: 'yellow',
                            }}
                            numberOfLines={2}>
                            100
                          </Text>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '500',
                              color: 'yellow',
                            }}>
                            {' '}
                            €{' '}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              onChangeLike(!like);
                            }}>
                            {like ? (
                              <HomeIcon
                                name="heart-outline"
                                size={22}
                                color={'yellow'}
                              />
                            ) : (
                              <HomeIcon
                                name="heart"
                                size={22}
                                color={'yellow'}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: responsiveScreenFontSize(30)}}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveScreenFontSize(2.5),
              fontWeight: '600',
              marginLeft: responsiveScreenFontSize(2),
              bottom: 4,
            }}>
            Entrées
          </Text>
          <FlatList
            horizontal={true}
            data={data1}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: responsiveScreenFontSize(1),
            }}
            ListFooterComponent={<View style={{width: 100}} />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: 'white',
                    elevation: 5,
                    height: responsiveScreenFontSize(25),
                    borderRadius: responsiveScreenFontSize(3),
                    width: 170,
                    marginHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    resizeMode="stretch"
                    style={{width: 170, height: responsiveScreenFontSize(25)}}
                    source={require('../../../assets/Entrées.png')}>
                    <View
                      style={{
                        position: 'absolute',

                        width: 170,
                        height: responsiveScreenFontSize(25),

                        opacity: 0.35,
                        backgroundColor: 'black',
                        borderRadius: responsiveScreenFontSize(2),
                      }}></View>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: 170,
                        height: responsiveScreenFontSize(9),

                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                      }}>
                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.8),
                            fontWeight: '800',
                            color: 'white',
                          }}
                          numberOfLines={2}>
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            textAlign: 'left',
                            fontSize: responsiveScreenFontSize(1.5),
                            fontWeight: '500',
                            color: 'white',
                          }}>
                          {item.des}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          paddingHorizontal: responsiveScreenFontSize(1),
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                          }}>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '800',
                              color: 'yellow',
                            }}
                            numberOfLines={2}>
                            100
                          </Text>
                          <Text
                            style={{
                              textAlign: 'left',
                              fontSize: responsiveScreenFontSize(2),
                              fontWeight: '500',
                              color: 'yellow',
                            }}>
                            {' '}
                            €{' '}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              onChangeLike(!like);
                            }}>
                            {like ? (
                              <HomeIcon
                                name="heart-outline"
                                size={22}
                                color={'yellow'}
                              />
                            ) : (
                              <HomeIcon
                                name="heart"
                                size={22}
                                color={'yellow'}
                              />
                            )}
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{height: responsiveScreenFontSize(10)}} />
      </ScrollView>
    </View>
  );
}
