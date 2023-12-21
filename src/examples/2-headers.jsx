import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const response=await axios(url,{
        headers:{
          Accept:'application/json',
        },
      })
      // here when we console log response it is not in json format to 
      // convert into json format we r writing headers and extracting data in which joke is present
      
      const {data}=response


      setJoke(data.joke)
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
