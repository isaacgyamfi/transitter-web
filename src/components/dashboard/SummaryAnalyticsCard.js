import React from 'react';

export default function SummaryAnalyticsCard({ title, count, color, icon }) {
  return (
    <div className={'p-2 w-1/2'}>
      <div
        className={
          'rounded-md shadow bg-white p-5 flex flex-row justify-between items-center'
        }
      >
        <div>
          <h6 className={'font-light text-gray-500'}>{title}</h6>
          <h3 className={'font-semibold text-3xl text-gray-700'}>{count}</h3>
        </div>
        <div className={`${color} p-2 rounded-md`}>
          <span>
            <i className={icon} />
          </span>
        </div>
      </div>
    </div>
  );
}
