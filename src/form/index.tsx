import MultiStepForm from "./MultiStepForm";


function Multistep() {
  return (
    <div className=" flex flex-col justify-center items-center p-8 bg-slate-200">
      <div className=" text-xl text-center font-medium m-4">
        <p>{"Revou Module 4 Checkpoint 1 "}</p>
        <p>{"Multistep Form "}</p>
      </div>
      <MultiStepForm />
    </div>
  );
}

export default Multistep;
