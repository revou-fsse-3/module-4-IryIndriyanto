import { useFormik } from "formik";
import { Card, Button } from '../../../components';
import * as yup from 'yup';

const AccountInfoForm = () => {
    const formik = useFormik({
        initialValues: {
          userName: '',
          password: '',          
        },
    
        validationSchema: yup.object({
            userName: yup.string().required(),
            password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
            )
        }),
    
        onSubmit: values => {
          console.log(values)
        },
      });

    return(        
    <Card className=' flex flex-col gap-3'>
        <div className=' text-4xl font-bold justify-center items-center'>Account Information</div>
        <label htmlFor="userName">Username</label>
        <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.userName}
        />

        <label htmlFor="password">Password</label>
        <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
        />

        

        <div className=' flex gap-4 justify-center items-center'>
            <Button label='Previous'/>
            <Button type='submit' label='Submit' className=" bg-green-600"/>
        </div>
    </Card>

    )
}

export default AccountInfoForm



