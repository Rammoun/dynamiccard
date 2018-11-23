import React from 'react';
import './Form.css';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }

  render() { 
    return (
      <div >
        <form>
          <input type='text' className='cardnumber'/>
          <input type='text' className='name'/>
          <input type='text' className='date'/>
        </form>
      </div>
    );
  }





}

export default Form;