import {NextPage} from 'next';
import React from 'react';
import {schedule} from 'data/schedule';
import Schedule from "components/pages/schedule";

const Programme: NextPage = () => {
    return (
        <Schedule
            schedule={schedule}
            headTitle={"Schedule – 21st International Electoral Awards"}
            dates={"Wednesday, 1st – Saturday, 4th October 2025"}
        />
    );
};

export default Programme;