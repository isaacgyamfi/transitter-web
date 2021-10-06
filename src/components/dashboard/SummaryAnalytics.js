import SummaryAnalyticsCard from "./SummaryAnalyticsCard";

export default function SummaryAnalytics({ stats }) {
  return (
    <div className={"flex flex-row w-full flex-wrap"}>
      <SummaryAnalyticsCard
        title={"Stations"}
        count={stats.stations}
        icon={"fas fa-building text-4xl text-red-600"}
        color={"bg-red-100"}
      />
      <SummaryAnalyticsCard
        title={"Drivers"}
        count={stats.drivers}
        icon={"fas fa-users text-4xl text-blue-600"}
        color={"bg-blue-100"}
      />
      <SummaryAnalyticsCard
        title={"Taxis"}
        count={stats.taxis}
        icon={"fas fa-taxi text-4xl text-yellow-600"}
        color={"bg-yellow-100"}
      />
      <SummaryAnalyticsCard
        title={"Complaints"}
        count={stats.complaints}
        icon={"fas fa-user-shield text-4xl text-green-600"}
        color={"bg-green-100"}
      />
    </div>
  );
}
