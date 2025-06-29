import '@/styles/Services.css';

function Services(){
    const serviceList = [
        {
            emoji: '🩺',
            title: 'General Consultation',
            description: 'Routine health checkups and advice from licensed doctors.' 
        },
        {
            emoji: '🧠',
            title: 'Mental Wellness',
            description: 'Support for anxiety, depression, and emotional well-being.' 
        },
        {
            emoji: '🍽️',
            title: 'Digestive Health',
            description: 'Diagnosis and treatment for common digestive issues.' 
        },
        {
            emoji: '🦷',
            title: 'Dental Care',
            description: 'Oral hygiene and preventative dental treatments.' 
        },
        {
            emoji: '🧬',
            title: 'Lab Tests',
            description: 'Accurate lab diagnostics and reports.' 
        },
        {
            emoji: '👶',
            title: 'Pediatrics',
            description: 'Care for infants, children, and adolescents.' 
        }
    ]

    

    return(
        <section className='services' id='services'>
            <h2 className="services-heading">Our Services</h2>
            <div className='services-grid'>
                {serviceList.map((service, index) =>(
                    <div className='service-card' key={index}>
                        <div className='service-icon'>{service.emoji}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Services;