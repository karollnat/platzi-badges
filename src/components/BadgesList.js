import React from "react";
import twitter from "../images/twitter.png";

import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setfilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setfilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group mb-4">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h2>No badges were found</h2>
        <Link to="/badges/new" className="btn btn-primary">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group mb-4">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyles">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                to={`/badges/${badge.id}`}
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
    </div>
  );
}

export default BadgesList;
