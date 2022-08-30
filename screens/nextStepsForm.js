import React from 'react';
import { 
    StyleSheet,
    Button,
    TextInput,
    View,
    Text,
    FlatList
} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as MailComposer from "expo-mail-composer"


import FlatButton from '../shared/button';
import { ScrollView } from 'react-native-gesture-handler';

const reviewSchema = yup.object({
  name: yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a first name"),
  phoneNumber: yup.string()
    .min(10)
    .max(16),
  address: yup.string()
    .max(255),
  comments: yup.string()  
    .max(255)
  
})



export default function NextStepsForm({ item }) {
    const key = item.key;
    const title = item.title;
    console.log('nextstepsform', key,title)

    const handleSubmit = (values) => {
        console.log('handleSubmit', values);
        const subject = `Tell me more about ${title}`
        const body = `My name is ${values.name}, I would like to learn more about ${title}
          
        Here is my contact information.
          address: ${values.address},
          phone number: ${values.phoneNumber}. 
          Comments: ${values.comments}.`
         
        // Opens prefilled email
        MailComposer.composeAsync({
          recipients: ['terriadsit@yahoo.com'], // array of email addresses
          subject: subject,
          body: body
        })
    }

      return(
        <ScrollView style={globalStyles.container}>
          <Text style={globalStyles.titleText}>{title}</Text>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{ name: '', phoneNumber: '', address: ''}}
            onSubmit={(values, actions) => {
              handleSubmit(values);
              actions.resetForm();
            }}
          >
            {/* yup attaches an error to props */}
            {/* props provided by Formik, returning JSX rendered by Formik*/}
            {(props) => (
                <View>
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Name'
                      onChangeText={props.handleChange('name')}  //handles state for us, values.title
                      value={props.values.name} // two way data binding
                      onBlur={props.handleBlur('name')} // triggered when leaving field, then runs validation
                   />
                    <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>
                    
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='telephone number'
                      keyboardType='numeric'
                      onChangeText={props.handleChange('phoneNumber')}  //handles state for us, values.title
                      value={props.values.phoneNumber} // two way data binding
                      onBlur={props.handleBlur('phoneNumber')} // triggered when leaving field, then runs validation
                    />
                    <Text style={globalStyles.errorText}>{props.touched.phoneNumber && props.errors.phoneNumber}</Text>
                    
                    <TextInput 
                      multiline minHeight={60}
                      style={globalStyles.input}
                      placeholder='Address'
                      onChangeText={props.handleChange('address')}  //handles state for us, values.title
                      value={props.values.address} // two way data binding
                      onBlur={props.handleBlur('address')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.address && props.errors.address}</Text>
                    
                    <TextInput 
                      multiline minHeight={60}
                      style={globalStyles.input}
                      placeholder='comments'
                      onChangeText={props.handleChange('comments')}  //handles state for us, values.title
                      value={props.values.comments} // two way data binding
                      onBlur={props.handleBlur('comments')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.comments && props.errors.comments}</Text>
                    
                    <View style={styles.buttonContainer}>
                      <FlatButton 
                        text='email'
                        onPress={props.handleSubmit}
                      />
                    </View>
                </View>
            )}
          </Formik>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingBottom: 60
    }
})