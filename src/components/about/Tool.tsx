import { faSlack } from '@fortawesome/free-brands-svg-icons';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons/faSlackHash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import slack from "../../assets/images/slack.png";

const Tool = () => {
  return (
    <div className="px-[100px] pt-[100px]">
        <h1 className="text-[25px] opacity-[0.8]">My Working Tools</h1>
        <p>These are tools I mostly use at work everyday</p>

        <div className="mt-10">
            <img src={slack} alt="slack" />
        </div>
    </div>
  );
};

export default Tool;