import { useFormik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Card, Button } from '../../../components';

const PersonalInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      date: null,
    },

    validationSchema: yup.object({
        fullName: yup.string().required(),
        email: yup.string().required(),
        date: yup.date().required('Date is required').nullable(),
    }),

    onSubmit: values => {
      console.log(values)
    },
  });

  return (
    <Card className=' flex flex-col gap-3'>
        <div className=' text-4xl font-bold justify-center items-center'>Personal Information</div>
        <label htmlFor="fullName">First Name</label>
        <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
        />

        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
        />

        <label htmlFor="date">Date:</label>
        <DatePicker
          id="date of birth"
          selected={formik.values.date}
          onChange={(date) => formik.setFieldValue('date', date)}
          dateFormat="MM/dd/yyyy" // Date format
          onBlur={formik.handleBlur('date')} // Important for Formik to track field touch
        />

        <div className=' flex gap-4 justify-center items-center'>
            {/* <Button label='Previous'/> */}
            <Button label='Next'/>
        </div>
    </Card>
  );
};

export default PersonalInfoForm