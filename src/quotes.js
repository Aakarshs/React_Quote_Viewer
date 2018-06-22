import React from 'react';

export default class Header extends React.Component{
    constructor(props){
        super(props)

        this.state={
            text:'mil',
            color:'silver',
            
            quotes: [
            'Don’t let yesterday take up too much of today.',
            'You learn more from failure than from success. Don’t let it stop you. Failure builds character.',
            'It’s not whether you get knocked down, it’s whether you get up.',
            'If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.',
            'People who are crazy enough to think they can change the world, are the ones who do.',
            'Failure will never overtake me if my determination to succeed is strong enough.',
            'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.',
            'We may encounter many defeats but we must not be defeated.',
            'Knowing is not enough; we must apply. Wishing is not enough; we must do.'], 
            
            colorsarr: ['blue','green','red','purple','cyan','black','silver','maroon','magenta']
        
        };
        this.random_quote = this.random_quote.bind(this);      
     
    }

    random_quote(){
        this.setState({ 
            text: this.state.quotes[Math.floor(Math.random() * 9)], 
            color: this.state.colorsarr[Math.floor(Math.random() * 9)] 
        });
      
    }
    
 

    render(){

        const pStyle = {
            background:this.state.color
          };
      
        return ( 
        <div>
            <button style = {pStyle} className= "button" type="text" onClick={this.random_quote}> Generate </button>
            <style>{document.body.style.backgroundColor = this.state.color} transition-timing-function: ease; </style>
            <p> </p>
            <p className="quote">"{this.state.text}"</p>
        </div>
    );
  }
}