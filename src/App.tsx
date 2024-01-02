import MultiStepForm from "./form/MultiStepForm";
import "react-day-picker/dist/style.css";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-slate-200">
      <div className=" text-xl text-center font-medium m-4">
        <p>{"Revou Module 4 Checkpoint 1 "}</p>
        <p>{"Multistep Form "}</p>
      </div>
      <MultiStepForm />
    </div>
  );
}

export default App;
