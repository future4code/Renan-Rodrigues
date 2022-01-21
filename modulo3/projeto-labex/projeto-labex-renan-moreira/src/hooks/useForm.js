import {useState} from "react"


const useForm = (initialState) => {
    const [forms, setForm] = useState(initialState);
  
    const onChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...forms, [name]: value });
    };
  
    const cleanFields = () => {
      setForm(initialState);
    };
  
    return { forms, onChange, cleanFields };
  };
  
  export default useForm;