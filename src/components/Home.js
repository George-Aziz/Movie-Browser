import Hero from './Hero'

const Home = () => {
    return (
      <>
        <Hero text="Movie Browser"/>
        <div className='container'>
            <div className='row'>
                <h4 className='my-5'>
                    Welcome to a simple movie browser, where you can search for any movie and see what they are about! 
                    <br/> <br/><br/> <br/>
                    To get started, just start using the search box to find the movie you're looking for.
                </h4>
            </div>
        </div>
      </>
    )
  }

  export default Home;