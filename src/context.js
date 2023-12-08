// Importing dependencies from the react
import { createContext, useState, useContext, useEffect, useRef } from "react";

// Importing toast to disply the notification
import {toast} from 'react-toastify';

//contextapi
const contactApi = createContext();
//exporting value
export function useValue(){
    const value = useContext(contactApi);
    return value;
}

//main function
function CustomContext({children}){

    const[contactList, setContactList] = useState([]);
    // for checking if it is delying the action or not
    const [isLoading, setIsLoading] = useState(false);
     // REF used in updating and adding in the local state of the contactList
     const nameRef = useRef();
     const emailRef = useRef();
     const numberRef = useRef();

     // fucntion whill help to fetch the contact from the List
     const fetchContactList = async() =>{
        setIsLoading(true);
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        let contact = await data.json();

        setContactList(contact);
        setIsLoading(false);
     }

     // This is delete function which will delete the contactList from given id
     const deleteContact = (id) =>{

        const index = contactList.findIndex((contact) => contact.id === id);
        if(index !== -1)
        {
            let newContactList = [...contactList];
            newContactList.splice(index, 1);

            //notification
            toast.success("Conatact deleted Successfully!");
            setContactList(newContactList);
        }
     }

     //clear input field
     const handleClear = () =>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
     }

     useEffect(() =>{
        fetchContactList();
     }, []);

     return(
        <>
            <contactApi.Provider value={{contactList, setContactList, isLoading, setContactList, deleteContact,
            nameRef, emailRef, numberRef, handleClear}} >
                {children}
            </contactApi.Provider>
        </>
     )
};

export default CustomContext;