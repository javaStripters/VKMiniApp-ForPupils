import React, { useState }from 'react'
import {Group,
        Panel,
        Div,
        Button,
        CellButton,
        PanelHeader,
        PanelHeaderBack, 
        FormLayoutGroup,
        FormLayout,
        FormItem,
        Input,
        FormStatus,
        Select,
        NativeSelect
        } from '@vkontakte/vkui'
import { checkPropTypes } from 'prop-types'
import _ from 'lodash'

class RegTeacher extends React.Component {
  constructor() {
    
    super()
    this.state = {
      formElements: {
        firstName: {
          content: '',
          isTouched: false,
          isCorrect: true,
        },
        lastName: {
          content: '',
          isTouched: false,
          isCorrect: true,
        },
        patronym: {
          content: '',
          isCorrect: true,
          isTouched: false,
        },
        city: {
          content: 'Москва',
          isCorrect: true,
          isTouched: false,
        },
        organizationName: {
          content: '',
          isTouched: false,
          isCorrect: true,
        },
        emailAddress: {
          content: '',
          isTouched: false,
          isCorrect: true,
          errorName: '',
        },
        address: {
          content: '',
          isTouched: false,
          isCorrect: true,
        },
        phoneNumber: {
          content: '',
          isTouched: false,
          isCorrect: true,
          errorName: '',
        }
      },
      userID: null, 
      isReadyToSend: false,
      isFormCorrect: true,
      server: 'http://localhost:8080/', 
      showingPatronym: true,
      listOfCities: [],
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.formChecking = this.formChecking.bind(this);
    this.createCityOptions = this.createCityOptions.bind(this)

    
  }

  changeHandler(name, value) {
    this.setState((prevState) => { 
      const state =  _.cloneDeep(prevState);
      state.formElements[name] = {...(state.formElements[name]), content: value}
      return state;
    })
  }
  blurHandler(name) {
    this.setState((prevState) => { 
      const state =  _.cloneDeep(prevState);
      state.formElements[name] = {...(state.formElements[name]), isTouched: true}
      return state;
    })
  }
  formChecking() {
    this.setState((prevState) => {
      const state = _.cloneDeep(prevState)
      state.isFormCorrect = true
      for (let formElement in this.state.formElements) {
        if (formElement === 'emailAddress') {
          if (state.formElements.emailAddress.content === '') {
            state.formElements.emailAddress.isCorrect = false
            state.isFormCorrect = false

            state.formElements[formElement] = {...(state.formElements[formElement]), errorName: 'Обязательное для заполнения поле'}
          }
          else {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.formElements.emailAddress.content)) {
              state.formElements.emailAddress.isCorrect = true
              state.formElements[formElement] = {...(state.formElements[formElement]), errorName: ''}
            }
            else {
              state.formElements.emailAddress.isCorrect = false
              state.isFormCorrect = false
              state.formElements[formElement] = {...(state.formElements[formElement]), errorName: 'Введент невалидный адрес электронной почты'}
            }
          }
        }
        else if (formElement === 'phoneNumber') {
          if (state.formElements.phoneNumber.content === '') {
            state.formElements.phoneNumber.isCorrect = false
            state.isFormCorrect = false
            state.formElements[formElement] = {...(state.formElements[formElement]), errorName: 'Обязательное для заполнения поле'}
          }
          else {
            if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(state.formElements.phoneNumber.content)) {
              state.formElements.phoneNumber.isCorrect = true
              state.formElements[formElement] = {...(state.formElements[formElement]), errorName: ''}
            }
            else {
              state.formElements.phoneNumber.isCorrect = false
              state.isFormCorrect = false
              state.formElements[formElement] = {...(state.formElements[formElement]), errorName: 'Введент невалидный номер телефона'}
            }
          }
        }
        else {
          if (state.formElements[formElement]['content'] === '') {
            state.formElements[formElement] = {...(state.formElements[formElement]), isCorrect: false}
            state.isFormCorrect = false
          } else {
            state.formElements[formElement] = {...(state.formElements[formElement]), isCorrect: true}
          }
        }
      }
      if (state.isFormCorrect) {
        state.isReadyToSend = true
      } else {
        state.isReadyToSend = false
      }
      return state;
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isReadyToSend) {
      const data = {
        id: Math.round(Math.random() * 1000), //this.state.userID
        firstName: this.state.formElements.firstName.content,
        lastName: this.state.formElements.lastName.content,
        patronymic: this.state.formElements.patronym.content !== '' ? this.state.formElements.patronym.content : null,
        city: this.state.formElements.city.content,
        phoneNumber: this.state.formElements.phoneNumber.content !== '' ? this.state.formElements.phoneNumber.content : null,
        email: this.state.formElements.emailAddress.content !== '' ? this.state.formElements.emailAddress.content : null,
        organizationName: this.state.formElements.organizationName.content,
        address: this.state.formElements.address.content !=='' ? this.state.formElements.address.content : null,
        sectionsTypes: [''], //[]
      }
      console.log(JSON.stringify(data))
      
      
      fetch(this.state.server + "register/tutor", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(( response ) => { return response.json() })
      .then(( data ) => { console.log(data) })
    } else {
      console.log('We cant to send this data(((', this.state.isReadyToSend)
    }
  }


  createCityOptions() {
    const citiesOption = 
    this.state.listOfCities !== [] &&
    this.state.listOfCities.map((element) => {
      return (
        <option>{element.city}</option>
      )
    })
    return citiesOption
  }


  componentDidMount() {
    this.setState(( prevState ) => {
      prevState.formElements.firstName.content = this.props.fetchedUser ? this.props.fetchedUser.first_name : ''
    })
    this.setState(( prevState ) => {
      prevState.formElements.lastName.content = this.props.fetchedUser ? this.props.fetchedUser.last_name : ''
    })
    this.setState(( prevState ) => {
      prevState.userID = this.props.fetchedUser ? this.props.fetchedUser.id : ''
    })

    //fetch('https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json')
    fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
      .then(response => response.json())      
      .then(data => {   
        this.setState({  
          listOfCities: data
        })
      })

  }

  render() {
    return (
      <Panel id="panel1">
        <PanelHeader 
          left={
            <PanelHeaderBack 
              label="Назад" 
              onClick={this.props.go}
              data-to='welcomePage'
            />
          } 
          align="center"
        >
          Регистрация
        </PanelHeader>
        <Div>
          <Group>
            <FormLayout>
              <FormLayoutGroup mode="vertical">
                {!this.state.isFormCorrect && 
                <FormItem>
                  <FormStatus header="В форме обнаружены ошибки" mode="error">
                    Проверьте правильность заполнения полей
                  </FormStatus>
                </FormItem>
                }
        
                <FormItem 
                  top="Имя"
                  status={(!this.state.formElements.firstName.isCorrect && this.state.formElements.firstName.content === '') ? 'error' : null}
                  bottom={(!this.state.formElements.firstName.isCorrect && this.state.formElements.firstName.content === '') && 'Обязательное для заполнения поле'}
                >
                  <Input
                    name='firstName'
                    type="text"
                    placeholder="Введите имя"
                    value={this.state.formElements.firstName.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                </FormItem>
        
                <FormItem 
                  top="Фамилия"
                  status={(!this.state.formElements.lastName.isCorrect && this.state.formElements.lastName.content === '' ) ? 'error' : null}
                  bottom={(!this.state.formElements.lastName.isCorrect && this.state.formElements.lastName.content === '') && 'Обязательное для заполнения поле'}
                >
                  <Input 
                    type="text"
                    name='lastName'
                    placeholder="Введите фамилию" 
                    value={this.state.formElements.lastName.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                </FormItem>
        
                {
                  !this.state.showingPatronym
                  ? <Div><CellButton onClick={ () => this.setState({ showingPatronym: true })}>Указать отчество</CellButton></Div>
                  : <FormItem removable onRemove={ () => this.setState({ showingPatronym: false })} top="Отчество" bottom="Если у Вас нет отчества — удалите этот пункт.">
                      <Input 
                        type="text"
                        placeholder="Введите отчество"
                        name="patronym" 
                        value={this.state.formElements.patronym.content}
                        onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                      />
                    </FormItem>
                }
        
                <FormItem 
                  top="Наименование организации"
                  status={
                    (!this.state.formElements.organizationName.isCorrect && this.state.formElements.organizationName.content === '') 
                    ? 'error' 
                    : null
                  }
                  bottom={(!this.state.formElements.organizationName.isCorrect && this.state.formElements.organizationName.content === '') && 'Обязательное для заполнения поле'}
                >
                  <Input 
                    type="text"
                    name="organizationName"
                    placeholder="Введите полное название организации" 
                    value={this.state.formElements.organizationName.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                </FormItem>
              
                <FormItem top="Город">
                  
                  <NativeSelect
                    name="city"
                    onChange={(( event ) => { this.changeHandler(event.target.name, event.target.value) })}
                  >
                    {
                      this.createCityOptions()
                    }
                  </NativeSelect>
                </FormItem>
              
                <FormItem 
                  top="Адрес"
                  status={(!this.state.formElements.address.isCorrect && this.state.formElements.address.content === '') ? 'error' : null}
                  bottom={(!this.state.formElements.address.isCorrect && this.state.formElements.address.content === '') && 'Обязательное для заполнения поле'}
                >
                  <Input 
                    type='text'
                    name='address'
                    placeholder="Введите улицу"
                    value={this.state.formElements.address.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                </FormItem>
              
                {/* Не нашел нужную форму в стайлгайде */}
                <FormItem 
                  top="Мобильный телефон"
                  status={!this.state.formElements.phoneNumber.isCorrect  ? 'error' : null}
                  bottom={!this.state.formElements.phoneNumber.isCorrect && this.state.formElements.phoneNumber.errorName}
                >
                  <Input 
                    type="text"
                    name="phoneNumber"
                    placeholder="Введите номер телефона"
                    value={this.state.formElements.phoneNumber.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                </FormItem>
              
                <FormItem 
                  top="E-mail"
                  status={!this.state.formElements.emailAddress.isCorrect  ? 'error' : null}
                  bottom={!this.state.formElements.emailAddress.isCorrect && this.state.formElements.emailAddress.errorName}
                >
                  <Input 
                    type="text"
                    name="emailAddress"
                    placeholder="Введите e-mail"
                    value={this.state.formElements.emailAddress.content}
                    onChange={(event) => { this.changeHandler(event.target.name, event.target.value) }}
                    onBlur={(event) => { this.blurHandler(event.target.name) }}
                  />
                    
                </FormItem>
              
                {/* Компонент ChipsSelect идеально подходит, но какие атрибуты указывать я не понял, наверное там идет взаимодействие с БД
                // Актуально и для Секций и для Кружков
                src: https://vkcom.github.io/VKUI/#chipsselect */}
                <FormItem top="Секции, которые Вы преподаете">
                  {/* <ChipsSelect value={ ] /> */}
                </FormItem>
              
                <FormItem top="Наименование кружка(-ов)">
                  {/* <ChipsSelect value={ ] /> */}
                </FormItem>
              
                <Div align="center">
                  <Button 
                    mode='primary'
                    size="l"
                    onClick={this.formChecking}
                  >
                    Зарегистрироваться
                  </Button>
                </Div>
              
              </FormLayoutGroup>
            </FormLayout>
          </Group>
        </Div>
      </Panel>
    )
  }
}

export default RegTeacher;