import '@/styles/Home.css';

function Hero(){
    return(
        <section className='hero' id='home'>
            <div className='hero-text'>
                <h2>Simplified medical assistance for everyone</h2>
                <p>We offer care and attention you can trust. Book your consultation today and take the first step towards better health.</p>
                <button>Book an Appointment</button>
            </div>
            <img src='https://placehold.co/300x300'
                 alt='Doctor Smiling'
            />
        </section>
    );
}
export default Hero;