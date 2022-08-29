import React from 'react';
import { 
    StyleSheet,
    Button,
    TextInput,
    View,
    Text
} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';

import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  firstName: yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a first name"),
  lastName: yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255")
    .required("Must enter a last name."),
  email: yup.string()
    .required("Must enter an email.")
    .email(),
  phoneNumber: yup.string()
    .min(10)
    .max(16),
  address: yup.string()
    .max(255),
  comments: yup.string()  
    .max(255)
   // .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
   //   return parseInt(val) < 6 && parseInt(val) > 0; //return true or false for tests
   // })
})

const handleSubmit = (values) => {
    console.log('handleSubmit', values)
}

export default function NextStepsForm({ item }) {
    const key = item.key;
    const title = item.title;
      console.log('nextstepsform', key,title)
      return(
        <View style={globalStyles.container}>
          <Text>{title}</Text>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '', address: ''}}
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
                      placeholder='First Name'
                      onChangeText={props.handleChange('firstName')}  //handles state for us, values.title
                      value={props.values.firstName} // two way data binding
                      onBlur={props.handleBlur('firstName')} // triggered when leaving field, then runs validation
                   />
                    <Text style={globalStyles.errorText}>{props.touched.firstName && props.errors.firstName}</Text>
                    
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Last Name'
                      onChangeText={props.handleChange('lastName')}  //handles state for us, values.title
                      value={props.values.lastName} // two way data binding
                      onBlur={props.handleBlur('lastName')} // triggered when leaving field, then runs validation
                    />
                    <Text style={globalStyles.errorText}>{props.touched.lastName && props.errors.lastName}</Text>
                    
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='email address'
                      onChangeText={props.handleChange('email')}  //handles state for us, values.title
                      value={props.values.email} // two way data binding
                      onBlur={props.handleBlur('email')} // triggered when leaving field, then runs validation
                    />
                    <Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
                    
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='telephone number'
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
                   
                    <FlatButton 
                      text='submit'
                      onPress={props.handleSubmit}
                    />
                    
                </View>
            )}
          </Formik>
        </View>
    )
}