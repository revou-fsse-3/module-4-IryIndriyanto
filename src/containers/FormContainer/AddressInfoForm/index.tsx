import { useFormik } from "formik";
import { Card, Button } from '../../../components';
import * as yup from 'yup';

interface Props {
    onClickNext : () => void,
    onClickPrevious : () => void,
}

const AddressInfoForm = ({ onClickNext, onClickPrevious}: Props) => {
    const formik = useFormik({
        initialValues: {
          StreetAddress: '',
          City: '',          
          State: '',          
          ZipCode: '',          
        },
    
        validationSchema: yup.object({
            StreetAddress: yup.string().required(),
            City: yup.string().required(),
            
        }),
    
        onSubmit: values => {
          console.log(values)
        },
      });

    return(        
    <Card className=' flex flex-col gap-3'>
        <div className=' text-4xl font-bold justify-center items-center'>Address Information</div>
        <label htmlFor="StreetAddress">Street Address</label>
        <input
            id="StreetAddress"
            name="StreetAddress"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.StreetAddress}
        />

        <label htmlFor="City">City</label>
        <input
            id="City"
            name="City"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.City}
        />

        <label htmlFor="State">State</label>
        <input
            id="State"
            name="State"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.State}
        />

        <label htmlFor="ZipCode">Zip Code</label>
        <input
            id="ZipCode"
            name="ZipCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.ZipCode}
        />

        <div className=' flex gap-4 justify-center items-center'>
            <Button label='Previous' onClick={onClickPrevious}/>
            <Button label='Next' onClick={onClickNext}/>
        </div>
    </Card>

    )
}

export default AddressInfoForm



