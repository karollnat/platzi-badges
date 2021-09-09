import React from "react";
import twitter from "../images/twitter.png";

import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h2>No badges were found</h2>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyles">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                to={`/badges/${badge.id}/edit`}
                className="text-reset text-decoration-none"
              >
                <div className="Badge__section-name-list">
                  <img
                    className="Badge__avatar-list"
                    src={badge.avatarUrl}
                    alt="Avatar"
                  />
                  <div>
                    <span className="text__name">
                      {" "}
                      {badge.firstName} {badge.lastName} <br />{" "}
                    </span>
                    <span className="text__job">
                      {badge.jobTitle} <br />{" "}
                    </span>
                    <img className="tw__logo" src={twitter} alt="Avatar" />
                    <span className="twitter__blue_font">
                      {badge.twitter} <br />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
