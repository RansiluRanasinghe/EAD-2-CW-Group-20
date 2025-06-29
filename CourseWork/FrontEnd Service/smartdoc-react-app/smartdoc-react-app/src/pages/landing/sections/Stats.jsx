import '@/styles/Stats.css';

function Stats(){
    return(
        <section className='stats'id='stats'>
            <div className='stat-item'>
                <strong>+3 500</strong>
                <p>Patients attended</p>
            </div>
            <div className='stat-item'>
                <strong>+15</strong>
                <p>Specialists</p>
            </div>
            <div className='stat-item'>
                <strong>+10</strong>
                <p>Years of experience</p>
            </div>
        </section>
    );
}
export default Stats;