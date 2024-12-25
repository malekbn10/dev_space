

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    post: '',
    profilePicture: null,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    post: Yup.string().required('Post is required'),
  });

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
        setFieldValue('profilePicture', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form values:', values);
    setSubmitting(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Edit Profile</h1>
      <div style={styles.wrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form style={styles.form}>
              <div style={styles.fieldContainer}>
                <label htmlFor="firstName" style={styles.label}>
                  First Name:
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  style={styles.input}
                />
                <ErrorMessage name="firstName" component="div" style={styles.error} />
              </div>
              <div style={styles.fieldContainer}>
                <label htmlFor="lastName" style={styles.label}>
                  Last Name:
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  style={styles.input}
                />
                <ErrorMessage name="lastName" component="div" style={styles.error} />
              </div>
              <div style={styles.fieldContainer}>
                <label htmlFor="email" style={styles.label}>
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  style={styles.input}
                />
                <ErrorMessage name="email" component="div" style={styles.error} />
              </div>
              <div style={styles.fieldContainer}>
                <label htmlFor="post" style={styles.label}>
                  Post:
                </label>
                <Field
                  type="text"
                  id="post"
                  name="post"
                  style={styles.input}
                />
                <ErrorMessage name="post" component="div" style={styles.error} />
              </div>
              <div style={styles.fieldContainer}>
                <label htmlFor="profilePicture" style={styles.label}>
                  Profile Picture:
                </label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                  style={styles.input}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={isSubmitting ? styles.buttonDisabled : styles.button}
              >
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </Form>
          )}
        </Formik>
        <div style={styles.imageContainer}>
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" style={styles.profileImage} />
          ) : (
            <div style={styles.placeholder}>Profile Picture</div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
  buttonDisabled: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ccc',
    color: '#666',
    cursor: 'not-allowed',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
  placeholder: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    color: '#aaa',
    border: '2px dashed #ccc',
  },
};

export default ProfilePage;


// const ProfilePage =()=> {
//     return <MainScreen title="EDIT PROFILE">
//         <div>

//         </div>
        
//         </MainScreen>
// };

// export default ProfilePage;

// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const ProfilePage = () => {
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     post:'',
    
//   });

//   const initialValues = {
//     firstName: userData.firstName,
//     lastName: userData.lastName,
//     email: userData.email,
//   };

//   const validationSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .required('First Name is required'),
//     lastName: Yup.string()
//       .required('Last Name is required'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),

//   });

//   const handleSubmit = (values, { setSubmitting }) => {
  
//     console.log('Form values:', values); 
  
//     setSubmitting(false); 
//   };

//   return (
//     <div>
//       <h1>Profile</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="firstName">First Name:</label>
//               <Field type="text" id="firstName" name="firstName" />
//               <ErrorMessage name="firstName" component="div" />
//             </div>
//             <div>
//               <label htmlFor="lastName">Last Name:</label>
//               <Field type="text" id="lastName" name="lastName" />
//               <ErrorMessage name="lastName" component="div" />
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//             </div>
//             <div>
//               <label htmlFor="post">Post:</label>
//               <Field type="text" id="post" name="post" />
//               <ErrorMessage name="post" component="div" />
//             </div>
            
//             <button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Updating...' : 'Update Profile'}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default ProfilePage;
