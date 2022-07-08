import Hero from './Hero';

const AboutView = () => {
    return (
      <>
        <Hero text="About Us"/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 my-5'>
                    <p className='lead'>
                        A simple movie browser created by George Aziz.
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }

  export default AboutView;