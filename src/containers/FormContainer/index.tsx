import { useState } from 'react';
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

    const [step, setStep] = useState<number>(1);

    const handleNext = () => {
        if(step === 3) {
            return
        }
        setStep((prevState) => prevState + 1);
    }

    const handlePrevious = () => {
        if(step === 1) {
            return
        }
        setStep((prevState) => prevState - 1);
    }


    return(
        <form onSubmit={formik.handleSubmit}>
            {step === 1 && (
                <PersonalInfoForm onClickNext={handleNext}/>
            )}

            {step === 2 && (
                <AddressInfoForm onClickNext={handleNext} onClickPrevious={handlePrevious}/>
            )}

            {step === 3 && (
                <AccountInfoForm onClickPrevious={handlePrevious}/>
            )}
        </form>
    )
}

export default FormContainer