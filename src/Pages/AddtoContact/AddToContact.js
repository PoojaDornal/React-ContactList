//style
import style from "./addtoContact.module.css";

//context
import { useValue } from "../../context";

import { useNavigate } from "react-router-dom";

//notification
import {toast} from "react-toastify";

// add to contact page
function AddToContact(){

    const {contactList, setContactList, nameRef, emailRef, numberRef, handleClear} = useValue();

    const navigate = useNavigate();

    //submit function
    const handleSubmit = (e) =>{
        e.preventDefault();
        //assigning values
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numberRef.current.value;

        //checking the number
        const checkNumer = contactList.find(contact => contact.number === parseInt(number) && number);

        if(checkNumer)
        {
            return toast.warning("Data not Changed!");
        }

        const newContactList = [...contactList];
        newContactList.push({
            id: contactList[contactList.length - 1].id + 1,
            name ,
            email ,
            phone : number
        });
        toast.success("New Contact Added!");
        setContactList(newContactList);
        navigate('/');
        handleClear();

    }

    return(
        <>
            {/* add to contact form */}
            <div className={style.container}>
                {/* heading */}
                <h1>Add To Conatact</h1>
                {/* form */}
                <form onSubmit={handleSubmit}>
                    {/* inputs */}
                    <input type="text" placeholder="Name" ref={nameRef} required /> <br />
                    <input type="email" placeholder="Email" ref={emailRef} required /> <br/>
                    <input type="tel" placeholder="Number" ref={numberRef} required /> <br/>
                    {/* submit button */}
                    <button>Submit</button>
                </form>

            </div>
        
        </>
    )

};

export default AddToContact;


