import React from 'react';
import twitter from '../images/twitter.png';

class BadgesList extends React.Component {
    render(){
        return(
            <ul className="list-unstyles">
                {this.props.badges.map((badge)=>
                {return (
                    
                    <li key={badge.id}>
                        <div className="Badge__section-name-list">
                            <img className="Badge__avatar-list" src={badge.avatarUrl} alt="Avatar" />
                            <div>
                               <span className="text__name"> {badge.firstName} {badge.lastName} <br /> </span> 
                               <span className="text__job">{badge.jobTitle} <br /> </span> 
                               <img className="tw__logo" src={twitter} alt="Avatar" />
                               <span className="twitter__blue_font">
                                  {badge.twitter} <br /> 
                                </span> 
                            </div>
                        </div>
                    </li>
                )
                })}
            </ul>
        )
    }
}

export default BadgesList;