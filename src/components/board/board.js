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
    {
        name: 'Charles Barkley',
        img: 'img/250x180/barkley.png',
        clicked: false
    },
    {
        name: 'Steve Carlton',
        img: 'img/250x180/carlton.PNG',
        clicked: false
    },
    {
        name: 'Wilt Chamberlin',
        img: 'img/250x180/chamberlin.PNG',
        clicked: false
    },
    {
        name: 'Brian Dawkins',
        img: 'img/250x180/dawkins.PNG',
        clicked: false
    },
    {
        name: 'Joel Embiid',
        img: 'img/250x180/embiid.png',
        clicked: false
    },
    {
        name: 'Julius Erving',
        img: 'img/250x180/erving.PNG',
        clicked: false
    },
    {
        name: 'Claude Giroux',
        img: 'img/250x180/giroux.PNG',
        clicked: false
    },
    {
        name: 'Roy Halladay',
        img: 'img/250x180/halladay.PNG',
        clicked: false
    },
    {
        name: 'Terrell Owens',
        img: 'img/250x180/owens.PNG',
        clicked: false
    },
    {
        name: 'Mike Schmidt',
        img: 'img/250x180/schmidt.PNG',
        clicked: false
    },
    {
        name: 'Wayne Simmonds',
        img: 'img/250x180/simmonds.PNG',
        clicked: false
    },
    {
        name: 'Ben Simmons',
        img: 'img/250x180/simmons.PNG',
        clicked: false
    },
    {
        name: 'Chase Utley',
        img: 'img/250x180/utley.PNG',
        clicked: false
    },
    {
        name: 'Carson Wentz',
        img: 'img/250x180/wentz.PNG',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

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
                    <h4>Click on every Philadelphia player one time. After every click, the board will shuffle!<br/>Be careful, because if you click the same player twice the game will restart!Good luck!!</h4>
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