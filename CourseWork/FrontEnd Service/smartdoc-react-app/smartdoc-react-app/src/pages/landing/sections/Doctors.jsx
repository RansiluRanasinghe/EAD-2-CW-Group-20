import '@/styles/Doctors.css';

function Doctors(){
    const doctorList = [
        {
            image: 'https://placehold.co/200x200',
            title: 'General Consultation',
            description: 'Routine health checkups and advice from licensed doctors.' 
        },
        {
            image: 'https://placehold.co/200x200',
            title: 'Mental Wellness',
            description: 'Support for anxiety, depression, and emotional well-being.' 
        },
        {
            image: 'https://placehold.co/200x200',
            title: 'Digestive Health',
            description: 'Diagnosis and treatment for common digestive issues.' 
        },
        {
            image: 'https://placehold.co/200x200',
            title: 'Dental Care',
            description: 'Oral hygiene and preventative dental treatments.' 
        },
        {
            image: 'https://placehold.co/200x200',
            title: 'Lab Tests',
            description: 'Accurate lab diagnostics and reports.' 
        },
        {
            image: 'https://placehold.co/200x200',
            title: 'Pediatrics',
            description: 'Care for infants, children, and adolescents.' 
        }
    ]

    

    return(
        <section className='doctors' id='doctors'>
            <h2 className="doctors-heading">Doctors</h2>
            <div className='doctors-grid'>
                {doctorList.map((doctor, index) =>(
                    <div className='doctor-card' key={index}>
                        <div className='doctor-image'>
                            <img src={doctor.image} alt={doctor.title} className="doctor-img" />
                        </div>
                        <h3>{doctor.title}</h3>
                        <p>{doctor.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Doctors;