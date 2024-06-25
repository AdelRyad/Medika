import Appointments from "./components/appointments/Appointments";
import LineChart from "./components/chart/LineChart";
import StatusCards from "./components/statusCards/StatusCards";
import Tasks from "./components/tasks/Tasks";
import RecentActivity from "./components/Recent Activity/RecentActivity";

const Home = () => {
  return (
    <main className="flex flex-col   overflow-auto  lg:grid md:grid-cols-10 md:grid-rows-12  lg:overflow-hidden  gap-6  col-span-10 row-span-11 md:col-start-3 md:row-start-2 md:p-6 p-3 pt-0 md:pt-6">
      <div className="col-span-11  md:row-span-2 flex ">
        <StatusCards />
      </div>
      <div className=" md:row-start-3 md:row-span-4  md:col-span-7 p-3 border border-neutral-100 rounded-lg">
        <LineChart positive={true} />
      </div>
      <div className=" md:col-start-8 md:col-span-4  flex md:row-start-3 border border-neutral-100 rounded-lg md:row-span-5 p-3 ">
        <Tasks />
      </div>
      <div className="lg:overflow-hidden md:col-span-7 md:row-start-7 md:row-end-13 col-start-1  p-3 border border-neutral-100 rounded-lg  ">
        <Appointments />
      </div>
      <div className=" md:row-start-8 md:row-end-13 border border-neutral-100 rounded-lg p-3 md:col-start-8 md:col-span-4 ">
        <RecentActivity />
      </div>
    </main>
  );
};

export default Home;
