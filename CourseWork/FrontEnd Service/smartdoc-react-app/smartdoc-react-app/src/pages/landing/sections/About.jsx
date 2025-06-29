import '@/styles/About.css';

function About(){
    return(
        <section className='about' id='about'>
            <div className='about-image'>
                <img src='https://placehold.co/400x300'
                     alt='Clinic'
                />
            </div>
            <div className='about-text'>
                <h2>About SmartDoc</h2>
                <p>
                    At SmartDoc, we believe that healthcare should be simple, accessible, and compassionate.
                    Our team of experienced specialists is dedicated to helping you live your healthiest life through modern care, personal attention, and convenient service.
                </p>
            </div>
        </section>
    );
}
export default About