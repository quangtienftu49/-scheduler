import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  let dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  // Write a function called formatSpots in the DayListItem component that will format the props.spots to make our tests pass. (Note that the tests expect certain output and they are case sensitive!)

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light" >{props.spots} spots remaining</h3>
    </li>
  );
}