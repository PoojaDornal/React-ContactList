import { useNavigate, useParams, Link } from 'react-router-dom';

// Imprting the Values for the ContactApi
import { useValue } from '../../context';

//  Style
import Style from './EditContact.module.css';

// imporring Toast for notification
import {toast} from 'react-toastify';

function Edit() {
    // Importing Values from the contact API
    const { contactList, setContactList, nameRef, emailRef, numberRef, handleClear } = useValue();

    // using to navigate to the home page, after submit is happend
    const navigate = useNavigate();
    
    const param = useParams();

    // finding the currenctContact, with the id passed in the params
    const currentContact = contactList.find(contact => contact.id === parseInt(param.id));

    //  handle submit function 
    const handleSubmit = (e) => {
        e.preventDefault();
        // assigning the value to the name
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = numberRef.current.value;

        // return the default value
        if (name === currentContact.name && email === currentContact.email && phone === currentContact.phone) {
            return toast.error('Please Change the values!');
        }
        // making new array for updated contacts
        const updatedContact = {
            ...currentContact,
            name,
            email,
            phone
        };

        // Updating the list
        const updatedList = contactList.map(contact => {
            if (contact.id === currentContact.id) {
                return updatedContact;
            }
            return contact;
        });
        toast.success("Contact Updated !");
        navigate('/');

        // Setting the contact list
        setContactList(updatedList);
        handleClear();
    }
    // Edit contact form
    return (
        <>
            <div className={Style.container}>
                {/* heading */}
                <h1>Edit Contact</h1>

                {/* this is the form in which all the action will be performing */}
                <form onSubmit={handleSubmit}>
                    
                    <input type="text" defaultValue={currentContact?.name} placeholder="Name" ref={nameRef} /> <br />
                    <input type="email" defaultValue={currentContact?.email} placeholder="Email" ref={emailRef} /> <br />
                    <input type="tel" defaultValue={currentContact?.phone} placeholder="Number" ref={numberRef} /> <br />
                    <div className={Style.buttonDiv}>
                        <button type='submit' className={Style.updateButton}>Update Contact</button>
                        <Link to='/'>
                            <button className={Style.cancle}>Cancel</button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit;