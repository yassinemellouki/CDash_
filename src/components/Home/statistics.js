import React, {Component} from 'react';
import {Bar, Line, Doughnut} from 'react-chartjs-2';

class Statistics extends Component {
  render() {
    const categories_data = {
      labels: ['Lifestyle', 'Travle', 'School', 'Cook', 'Music'],
      datasets: [
        {
          label: 'Posts',
          data: [8, 5, 6, 6, 8],
          backgroundColor: [
            '#2F80ED',
            '#EB5757',
            '#F2994A',
            '#27AE60',
            '#56CCF2',
          ],
          hoverBackgroundColor: [
            '#2F80ED',
            '#EB5757',
            '#F2994A',
            '#27AE60',
            '#56CCF2',
          ],
        },
      ],
    };
    const posts_data = {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Posts',
          data: [8, 5, 6, 6, 8, 3, 4, 5, 1, 4, 3, 5],
          borderColor: '#478BE7C2',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#478BE7C2',
        },
      ],
    };
    return (
      <div className="dash-card dash-statistics col-12 row">
        <div className="col-12 pb-3">
          <h2>Statistics: </h2>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 position-raltive">
          <Bar
            data={categories_data}
            height={250}
            options={{
              title: {
                display: true,
                text: 'Posts by categories:',
                fontFamily: 'sans-serif',
                fontSize: 22,
                fontStyle: 'normal',
              },
              legend: {
                display: false,
              },
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                xAxes: [
                  {
                    barPercentage: 0.4,
                  },
                ],
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className=" col-lg-4 col-md-6 col-sm-12 position-relative">
          <Line
            data={posts_data}
            height={250}
            options={{
              title: {
                display: true,
                text: 'Published posts by months:',
                fontFamily: 'sans-serif',
                fontSize: 22,
                fontStyle: 'normal',
              },
              legend: {
                display: false,
              },
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true,
                      max: 12,
                    },
                  },
                ],
              },
            }}
          />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 position-raltive mt-md-3">
          <Doughnut
            data={categories_data}
            height={250}
            options={{
              title: {
                display: true,
                text: 'Posts by categories:',
                fontFamily: 'sans-serif',
                fontSize: 22,
                fontStyle: 'normal',
              },
              cutoutPercentage: 70,
              legend: {
                display: true,
              },
              maintainAspectRatio: false,
              responsive: true,
            }}
          />
        </div>
      </div>
    );
  }
}

export default Statistics;
