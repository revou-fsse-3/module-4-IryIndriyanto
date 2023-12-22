import { useFormik } from "formik"
import AccountInfoForm from "./AccountInfoForm"
import AddressInfoForm from "./AddressInfoForm"
import PersonalInfoForm from "./PersonalInfoForm"

const FormContainer = () => {
    const formik = useFormik({initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: values => {
        console.log(values);
      },
    });
    
    return(
        <form onSubmit={formik.handleSubmit}>
            <PersonalInfoForm/>
            <AddressInfoForm/>
            <AccountInfoForm/>
        </form>
    )
}

export default FormContainer