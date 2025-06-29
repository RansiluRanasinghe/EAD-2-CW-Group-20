import '@/styles/Contact.css';

function Contact(){
    return(
        <section className='contacts' id='contacts'>
            <h2>Contact Us</h2>
            <p>Have a question or want to book an appointment? Send us a message.</p>
            <form className='contact-form'>
                <input type='text' placeholder='Name' required/>
                <input type='email' placeholder='Email' required/>
                <textarea rows='5' placeholder='Message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
}
export default Contact