import React from 'react'
import { useSelector } from 'react-redux'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, FormsIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'

import Words from '../data/Words'

function Dashboard() {
  const groupBy = (arr, criteria) => {
    return arr.reduce(function (obj, item) {

      // Check if the criteria is a function to run on the item or a property of it
      var key = typeof criteria === 'function' ? criteria(item) : item[criteria];

      // If the key doesn't exist yet, create it
      if (!obj.hasOwnProperty(key)) {
        obj[key] = 0;
      }
      // Push the value to the object
      obj[key]++;
      // Return the object to the next item in the loop
      return obj;
    }, {});
  };

  let backgroundColor = ['#FC8181', '#F6AD55', '#F6E05E', '#68D391', '#4FD1C5',
    '#63B3ED', '#7F9CF5', '#B794F4', '#F687B3'];
  const color = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-teal-400',
    'bg-blue-400', 'bg-indigo-400', 'bg-purple-400', 'bg-pink-400']

  const lineLegends = [
    { title: '新增单词', color: 'bg-teal-600' },]
  const user = useSelector(state => state.auth.user);
  const users = useSelector(state => state.users);
  const msgs = useSelector(state => state.msgs)
  const words = useSelector(state => state.wordlist);
  const total = words.length;
  const add = words.filter(word => word.author === user.name).length;

  const res1 = groupBy(words, "author");
  const res2 = groupBy(words, "time");
  const lineOptions = {
    data: {
      labels: Object.keys(res2),
      datasets: [
        {
          label: 'Added',

          backgroundColor: '#0694a2',
          borderColor: '#0694a2',
          data: Object.values(res2),
          fill: false,
        }

      ],
    },
    options: {
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
      },
      scales: {
        x: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
          },
        },
        y: {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value',
          },
        },
      },
    },
    legend: {
      display: false,
    },
  }


  const doughnutOptions = {
    data: {
      datasets: [
        {
          data: users.map(user => res1[user.name]),

          backgroundColor: backgroundColor.splice(0, users.length),
          label: 'Dataset 1',
        },
      ],
      labels: users.map(user => user.name),
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
    },
    legend: {
      display: false,
    },
  }



  const doughnutLegends = [];
  for (let i = 0; i < users.length; i++) {
    const tmp = { title: users[i].name, color: color[i] }
    doughnutLegends.push(tmp);
  }

  return (
    <div className="container px-6">
      <div className="mt-8">
        <CTA />
      </div>
      {/* <!-- Cards --> */}
      <div className=" grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="User group" value={users.length}>
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Total words" value={total}>
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="You have added" value={add}>
          <RoundIcon
            icon={FormsIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Msgs" value={msgs.length}>
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <Words />

      <PageTitle className="font-semibold">统计</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Doughnut">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Line">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </div>
  )
}

export default Dashboard
