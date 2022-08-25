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
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0; //return true or false for tests
    })
})

export default function ReviewForm({ addReview }) {
    return(
        <View style={globalStyles.container}>
          <Formik
            validationSchema={reviewSchema}
            initialValues={{ title: '', body: '', rating: ''}}
            onSubmit={(values, actions) => {
              addReview(values);
              actions.resetForm();
            }}
          >
            {/* yup attaches an error to props */}
            {/* props provided by Formik, returning JSX rendered by Formik*/}
            {(props) => (
                <View>
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Review Title'
                      onChangeText={props.handleChange('title')}  //handles state for us, values.title
                      value={props.values.title} // two way data binding
                      onBlur={props.handleBlur('title')} // triggered when leaving field, then runs validation
                   />
                    <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                    
                    <TextInput 
                      multiline minHeight={60}
                      style={globalStyles.input}
                      placeholder='Review Body'
                      onChangeText={props.handleChange('body')}  //handles state for us, values.title
                      value={props.values.body} // two way data binding
                      onBlur={props.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                    
                    <TextInput 
                      style={globalStyles.input}
                      placeholder='Rating (1 - 5)'
                      onChangeText={props.handleChange('rating')}  //handles state for us, values.title
                      value={props.values.rating} // two way data binding
                      keyboardType='numeric'
                      onBlur={props.handleBlur('rating')}
                   />
                    <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                    
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