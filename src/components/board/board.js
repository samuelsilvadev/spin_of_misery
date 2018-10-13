import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Allen Iverson',
        img: 'img/250x180/iverson.png',
        clicked: false
    },
   
]

export default class Board extends Component {

  
    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Spin the Wheel of Misery and face the consequences at your own risk.</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}