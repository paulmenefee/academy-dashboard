import React, { Component } from 'react';
import Chart from "react-google-charts";

class listCohort extends Component {

    render() { 
        
        return <div style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={'100%'}
                        height={'100%'}
                        chartType="Timeline"
                        loader={<div>Loading Chart</div>}
                        data={[
                            [
                            { type: 'string', id: 'Instructor' },
                            { type: 'string', id: 'Cohort' },
                            { type: 'date', id: 'Start' },
                            { type: 'date', id: 'End' },
                            ],
                            ['Ron Lobo', 'C147 - Java software development + Financial Foundations', new Date(2021, 11, 8), new Date(2021, 12, 7)],
                            ['Eugene O\'Regan', 'C146 - Java software development + Financial Foundations', new Date(2021, 10, 11), new Date(2021, 11, 12)],
                            ['Shams Al Ajrawi', 'C151 - Java software development + AWS + DevOps+ Financial Foundations', new Date(2021, 10, 25), new Date(2021, 12, 10)],
                        ]}
                        options={{
                            showRowNumber: true,
                        }}
                        rootProps={{ 'data-testid': '1' }}
                    />
                </div>;
    }
}
 
export default listCohort;