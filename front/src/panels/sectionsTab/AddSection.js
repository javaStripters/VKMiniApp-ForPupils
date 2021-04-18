import React, { useState } from "react";
import {
  Group,
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
  NativeSelect,
  Avatar,
  Textarea,
  File
} from "@vkontakte/vkui";
import { Icon24Add, Icon24CameraOutline, Icon28AddOutline, Icon28CameraOutline } from "@vkontakte/icons";
import { checkPropTypes } from "prop-types";
import _ from "lodash";

class AddSection extends React.Component {
  constructor() {
    super();
    this.state = {
      formElements: {
        fullName: {
          content: "",
          isTouched: false,
          isCorrect: true,
        },
        sectionName: {
          content: "",
          isTouched: false,
          isCorrect: true,
        },
        sectionDescription: {
          content: "",
          isTouched: false,
          isCorrect: true,
        },
        sectionLocation: {
          content: "",
          isTouched: false,
          isCorrect: true,
        },
        sectionLinks: {
          content: "",
          isTouched: false,
          isCorrect: true,
        },
      },
      application: null,
      image: null,
      server: "http://localhost:8080/",
      isFormCorrect: true,
      showingPatronym: true,
      isReadyToSend: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.formChecking = this.formChecking.bind(this);
    this.fileInput = React.createRef();
  }
  changeHandler(name, value) {
    this.setState((prevState) => {
      const state = _.cloneDeep(prevState);
      state.formElements[name] = {
        ...state.formElements[name],
        content: value,
      };
      return state;
    });
  }
  blurHandler(name) {
    this.setState((prevState) => {
      const state = _.cloneDeep(prevState);
      state.formElements[name] = {
        ...state.formElements[name],
        isTouched: true,
      };
      return state;
    });
  }
  setImage(file) {
    this.setState({
      image: file
    })
    console.log(this.state)
  }
  formChecking() {
    this.setState((prevState) => {
      const state = _.cloneDeep(prevState);
      state.isFormCorrect = true;
      for (let formElement in this.state.formElements) {
        if (formElement === "sectionLinks") {
          state.formElements[formElement] = {
            ...state.formElements[formElement],
            isCorrect: true,
          };
        } else {
          if (state.formElements[formElement]["content"] === "") {
            state.formElements[formElement] = {
              ...state.formElements[formElement],
              isCorrect: false,
            };
            state.isFormCorrect = false;
          } else {
            state.formElements[formElement] = {
              ...state.formElements[formElement],
              isCorrect: true,
            };
          }
        }
        console.log(formElement + ": " + state.isFormCorrect);
      }
      if (state.isFormCorrect) {
        state.isReadyToSend = true;
      } else {
        state.isFormCorrect = false;
      }
      return state;
    });
  }
  
  componentWillMount() {
    this.setState(( prevState ) => {
      prevState.formElements.fullName.content = this.props.userInfoFromDB ? this.props.userInfoFromDB.user.firstName + ' ' + this.props.userInfoFromDB.user.lastName + ' ' + this.props.userInfoFromDB.user.patronymic : ''
    })
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isReadyToSend) {
      console.log(this.fileInput)
      const form = new FormData();
      form.append("organizationName", this.state.formElements.sectionName.content);
      form.append("tutorName", this.state.formElements.fullName.content);
      form.append("description", this.state.formElements.sectionDescription.content);
      form.append("address", this.state.formElements.sectionLocation.content);
      form.append("categoriesRaw", JSON.stringify(["Бокс", "ручки", "чистота"]));
      form.append("linksRaw", JSON.stringify(["google.com", "ya.ru"]));
      form.append("cover", this.fileInput.current.files[0]);
      form.append("payment", null);
      form.append("daysRaw",  JSON.stringify([{"weekday":"Понедельник","from":["13", "45"],"to":["15", "00"]},{"weekday":"Пятница","from":["16", "15"],"to":["20", "15"]}]))

      fetch(this.state.server + "register/section", {
        method: "POST",
        body: form,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });

      /*
      let formData = new FormData()
      formData.append('fullName', this.state.formElements.fullName.content)
      formData.append('name', this.state.formElements.sectionName.content)
      formData.append('description', this.state.formElements.sectionDescription.content)
      formData.append('address', this.state.formElements.sectionLocation.content)
      formData.append('links', this.state.formElements.sectionLinks.content)

      /*
      const data = {
        id: Math.round(Math.random() * 1000), //Так не надо! 
        firstName: this.state.formElements.firstName.content,
        lastName: this.state.formElements.lastName.content,
        city: this.state.formElements.city.content,
        phoneNumber: this.state.formElements.phoneNumber.content !== '' ? this.state.formElements.phoneNumber.content : null,
        patronymic: this.state.formElements.patronym.content !== '' ? this.state.formElements.patronym.content : null,
        email: this.state.formElements.emailAddress.content !== '' ? this.state.formElements.emailAddress.content : null,
        preferences: null,//[]
      }
      */
      //console.log(JSON.stringify(data))

      /*
      fetch(this.state.server + "register/section", {
        method: "POST",
        
        headers: {
          "Content-Type": "multipart/form-data; boundary=---011000010111000001101001",
        },
        
        body: formData
      })
      .then(( response ) => { return response.json() })
      .then(( data ) => { console.log(data) })
      */
    } else {
      console.log("We cant to send this data(((", this.state.isReadyToSend);
    }
  }

  render() {
    return (
      <Panel id="panel1">
        <PanelHeader
          left={
            <PanelHeaderBack
              label="Назад"
              onClick={this.props.openNewTabPanel}
              data-to='sections' /*(Насколько я понимаю, здесь должен быть переход на профиль преподавателя)*/
            />
          }
          align="center"
        >
          Добавить секцию
        </PanelHeader>
        <Div>
          <Group>
            <FormLayout>
              <FormLayoutGroup mode="vertical">
                {!this.state.isFormCorrect && (
                  <FormItem>
                    <FormStatus header="В форме обнаружены ошибки" mode="error">
                      Проверьте правильность заполнения полей
                    </FormStatus>
                  </FormItem>
                )}

                {/* <FormItem top="Ф.И.О.">
                <Input placeholder="Должно заполняться автоматически" />
              </FormItem> */}

                <FormItem
                  top="Ф.И.О."
                  status={
                    !this.state.formElements.fullName.isCorrect &&
                    this.state.formElements.fullName.content === ""
                      ? "error"
                      : null
                  }
                  bottom={
                    !this.state.formElements.fullName.isCorrect &&
                    this.state.formElements.fullName.content === "" &&
                    "Обязательное для заполнения поле"
                  }
                >
                  <Input
                    name="fullName"
                    type="text"
                    placeholder="Введите ваши Ф.И.О."
                    value={this.state.formElements.fullName.content}
                    onChange={(event) => {
                      this.changeHandler(event.target.name, event.target.value);
                    }}
                    onBlur={(event) => {
                      this.blurHandler(event.target.name);
                    }}
                  />
                </FormItem>

                {/* <FormItem top="Наименование секции">
                <Input placeholder="Введите наименование секции" />
              </FormItem> */}

                <FormItem
                  top="Наименование секции"
                  status={
                    !this.state.formElements.sectionName.isCorrect &&
                    this.state.formElements.sectionName.content === ""
                      ? "error"
                      : null
                  }
                  bottom={
                    !this.state.formElements.sectionName.isCorrect &&
                    this.state.formElements.sectionName.content === "" &&
                    "Обязательное для заполнения поле"
                  }
                >
                  <Input
                    type="text"
                    name="sectionName"
                    placeholder="Введите наименование секции"
                    value={this.state.formElements.sectionName.content}
                    onChange={(event) => {
                      this.changeHandler(event.target.name, event.target.value);
                    }}
                    onBlur={(event) => {
                      this.blurHandler(event.target.name);
                    }}
                  />
                </FormItem>

                {/* <FormItem top="Описание секции">
                <Input placeholder="Введите краткое описание секции" />
              </FormItem> */}

                <FormItem
                  top="Описание секции"
                  status={
                    !this.state.formElements.sectionDescription.isCorrect &&
                    this.state.formElements.sectionDescription.content === ""
                      ? "error"
                      : null
                  }
                  bottom={
                    !this.state.formElements.sectionDescription.isCorrect &&
                    this.state.formElements.sectionDescription.content === "" &&
                    "Обязательное для заполнения поле"
                  }
                >
                  <Textarea
                    type="text"
                    name="sectionDescription"
                    placeholder="Введите краткое описание секции"
                    value={this.state.formElements.sectionDescription.content}
                    onChange={(event) => {
                      this.changeHandler(event.target.name, event.target.value);
                    }}
                    onBlur={(event) => {
                      this.blurHandler(event.target.name);
                    }}
                  />
                </FormItem>

                {/* <FormItem top="Место проведения секции">
                <Input placeholder="Введите место проведения секции" />
              </FormItem> */}

                <FormItem
                  top="Место проведения секции"
                  status={
                    !this.state.formElements.sectionLocation.isCorrect &&
                    this.state.formElements.sectionLocation.content === ""
                      ? "error"
                      : null
                  }
                  bottom={
                    !this.state.formElements.sectionLocation.isCorrect &&
                    this.state.formElements.sectionLocation.content === "" &&
                    "Обязательное для заполнения поле"
                  }
                >
                  <Input
                    type="text"
                    name="sectionLocation"
                    placeholder="Введите место проведения секции"
                    value={this.state.formElements.sectionLocation.content}
                    onChange={(event) => {
                      this.changeHandler(event.target.name, event.target.value);
                    }}
                    onBlur={(event) => {
                      this.blurHandler(event.target.name);
                    }}
                  />
                </FormItem>

                <FormItem
                  top="Дни недели проведений секции"
                  bottom="*Если секции проводятся в разных локациях, пожалуйста, укажите адрес вместе со временем проведения секции"
                >
                  {/* Компонент ChipsSelect */}
                </FormItem>

                {/* Добавляющиеся поля для добавленного дня недели в компоненте ChipsSelect  */}

                {/* Не нашел нужную форму в стайлгайде */}
                <FormItem top="Ссылка на сайт Вашего кружка">
                  <Input
                    type="text"
                    name="sectionLinks"
                    placeholder="Введите ссылку"
                    value={this.state.formElements.sectionLinks.content}
                    onChange={(event) => {
                      this.changeHandler(event.target.name, event.target.value);
                    }}
                  />
                </FormItem>

                <FormItem>
                  <CellButton before={<Icon28AddOutline />}>
                    Добавить ссылку
                  </CellButton>
                    <CellButton
                      before={
                        <Avatar shadow={false} size={48}>
                          <Icon24Add />
                        </Avatar>
                      }
                    >
                      {" "}
                      Прикрепите фотографию для обложки Вашей секции{" "}
                    </CellButton>

                  <CellButton
                      getRef={this.fileInput}
                      before={
                        <Avatar shadow={false} size={48}>
                          <Icon24Add />
                        </Avatar>
                      }
                    >
                      {" "}
                      Прикрепите заявление для вступления в Вашу секцию{" "}
                    </CellButton>
                  
                  <File
                    before={<Icon24CameraOutline />}
                    mode='primary'
                    getRef={this.fileInput}
                  >
                  </File>
                </FormItem>

                {/*<input type='file' ref={this.fileInput} />*/}

                <Div align="center" style={{marginBottom: '40px'}}>
                  <Button mode="primary" size="l" onClick={this.formChecking}>
                    Добавить
                  </Button>
                </Div>
              </FormLayoutGroup>
            </FormLayout>
          </Group>
        </Div>
      </Panel>
    );
  }
}
export default AddSection;
