import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import 'components/InterviewerList.scss';
import PropTypes from 'prop-types';

export default function InterviewerList(props) {

  InterviewerList.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
  };
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers.map((item, index) => {
          return (
            <InterviewerListItem
              key={item.id}
              name={item.name}
              avatar={item.avatar}
              selected={item.id === props.value}
              setInterviewer={() => props.onChange(item.id)}
            />
          )
        })}
      </ul>
    </section>
  );
}

