import './ContactStyles.css'

const ContactData = () => {
    return ( 
        <div className="form-container">
            <h1>Send a message to Me!</h1>
            <form>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Name' />
                <textarea placeholder='message' rows='4'></textarea>
                <button>Send Message</button>
            </form>
        </div>
     );
}
 
export default ContactData;