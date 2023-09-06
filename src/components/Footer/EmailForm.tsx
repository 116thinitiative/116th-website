import './EmailForm.css'
import { ChangeEvent, useState, CSSProperties } from 'react';
import { Form } from "react-router-dom";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

function EmailForm(){
    //css values for loader button on submit email
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
      };

    const [inputText, setInputText] = useState("");
    const[loading, setLoading] = useState(false);
    const[buttonText, setButtonText] = useState("Subscribe");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
    };

    //this on submit function uses a post request to add the user email to the google sheets
    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(inputText);
        
        setLoading(true);
        setButtonText("");
        console.log(import.meta.env.VITE_SUBSCRIBE_EMAIL_URL);
        axios.post(import.meta.env.VITE_SUBSCRIBE_EMAIL_URL, {email: inputText})
        .catch((error) =>{
            throw new Error(error.message);
        }).finally(() =>{
            setLoading(false);
            setInputText("");
            setButtonText("Success!");
            setTimeout(() => {
                setButtonText("Subscribe");
              }, 3000);
        });
    }

    return (
        <div className='email-form'>
            <Form
            onSubmit={onSubmit}>
                <label>Join Our Email List!</label>
                <div className='input-box'>
                    <input 
                    type="email" 
                    placeholder='Enter Email'
                    onChange={handleChange}
                    value={inputText}
                    required/>  
                    <button type="submit">{buttonText}
                    <ClipLoader
                        color={"#000000"}
                        loading={loading}
                        cssOverride={override}
                        size={20}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        speedMultiplier={1}/>
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default EmailForm;