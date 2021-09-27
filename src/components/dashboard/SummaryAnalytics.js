import SummaryAnalyticsCard from './SummaryAnalyticsCard';

export default function SummaryAnalytics() {
  return (
    <div className={'flex flex-row w-full lg:w-2/3 flex-wrap'}>
      <SummaryAnalyticsCard
        title={'Stations'}
        count={235}
        icon={'fas fa-building text-4xl text-red-600'}
        color={'bg-red-100'}
      />
      <SummaryAnalyticsCard
        title={'Drivers'}
        count={2534}
        icon={'fas fa-users text-4xl text-blue-600'}
        color={'bg-blue-100'}
      />
      <SummaryAnalyticsCard
        title={'Taxis'}
        count={2534}
        icon={'fas fa-taxi text-4xl text-yellow-600'}
        color={'bg-yellow-100'}
      />
      <SummaryAnalyticsCard
        title={'Complaints'}
        count={212}
        icon={'fas fa-user-shield text-4xl text-green-600'}
        color={'bg-green-100'}
      />
    </div>
  );
}
