import React from 'react';
import './TeamCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const TeamCart = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.team
    return (
        <div className="cart-background">
            <div className="team-cart">
                <img className="team-image" src={strTeamBadge} alt="" />
                <h2>{strTeam}</h2>
                <p className="paragrah">Sports type : Football</p>
                <Link to={`${idTeam}`}>
                    <button className="btn">Explore <FontAwesomeIcon className="icon" icon={faArrowRight} /></button>
                </Link>
            </div>
        </div>
    );
};

export default TeamCart;