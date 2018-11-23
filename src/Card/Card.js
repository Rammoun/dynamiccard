import React from 'react';
import './Card.css';

const Head = () => {
    return <h1 className='cardHead'>CREDIT CARD</h1>
}
 const Chip = () => {
    return <img alt='cardChip' src='http://jamesdelaney.ie/dev/chip.png' className='cardChip'/>
}
 const CardNumber=(props) => {
    return <h2 className='cardNumber'>{props.children}</h2>
}
 const MonthYear=()=>{
    return <span className='month'>MONTH / YEAR</span>
}
 const ExpDate=(props)=>{
    return <span className='expDate'>{props.children}</span>
}
 const ValidTxt=()=>{
    return <span className='valThru'>VALID THRU > </span>
}
 const Holder=(props)=>{
    return <h3 className='holder'>{props.children}</h3>
}
 const VisaMaster=()=>{
    return <img className='master' alt='master visa' src='http://2.bp.blogspot.com/-U9vdZ7rRswA/TxC_txd_QvI/AAAAAAAAAAs/nyUWpH6c6Ic/s1600/page.jpg'/>
}
class Card extends React.Component{
  constructor(props){
    super(props);
    this.state={
      number: '****************',
      date:'*****',
      nam:'***************'  
    }
  }                

  nbchange=(e)=>{
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    this.setState({number: e.target.value})
  }


  dtchange=(e)=>{    
    e.target.value = e.target.value.replace(/[^\dA-Z/]/g, '')
    this.setState({date: e.target.value});
    console.log(e.target.value.length)
    if (e.target.value.length===2){
      if (Number(e.target.value)>0 && Number(e.target.value)<=12)
      e.target.value=e.target.value+'/';
      else {
        e.target.value='';this.setState({date: '*****'});
        alert ('false month');}
    }
  }

  namchange=(e)=>{
    e.target.value = e.target.value.replace(/[\d]/g, '')
    this.setState({nam: e.target.value.toUpperCase()})
  }

  render() { 
    //console.log((this.state.number))
    return (
      <div className='final' >
        <div className='card'>
          <Head/>
          <Chip/>
          <div className='lastLine'>
            <div className='left'>
              <CardNumber>
                  {this.state.number}                
              </CardNumber>
              <MonthYear/>
              <div className='valdt'>
                <ValidTxt/>
                <ExpDate>{this.state.date}</ExpDate>
              </div>
              <Holder>{this.state.nam}</Holder>
            </div>
            <VisaMaster/>
          </div> 
        </div> 
        <form className='form'>
          <input type='text' onChange={this.nbchange} className='cardnumber' maxLength="19" placeholder='Card number' />
          <input type='text' onChange={this.namchange} className='name' maxLength="20" placeholder='Name'/>
          <input type='text' onChange={this.dtchange} className='date' placeholder='Valid thru' maxLength="5"/>
        </form>
      </div>
      );
    }
  } 

export default Card