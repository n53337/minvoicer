import AppSkeleton from "../../components/shared/AppSkeleton";
import Card from "../../components/Dashboard/Card";
import Chart from "../../components/Dashboard/Chart";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <main className="min-w-full h-screen">
      <AppSkeleton title="Dashboard" utils>
        <div className="f-col py-6">
          <div className="f-evenly gap-y-4 flex-wrap ">
            <Card
              label="Revenue"
              value="$120,098"
              icon={<CurrencyDollarIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Customers"
              value="173"
              icon={<UserGroupIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Products"
              value="06"
              icon={
                <BuildingStorefrontIcon className="w-4 md:w-6 text-brown" />
              }
            />
            <Card
              label="Invoices"
              value="32"
              icon={<DocumentDuplicateIcon className="w-4 md:w-6 text-brown" />}
            />
          </div>
          <div>
            <Chart />
          </div>
        </div>
      </AppSkeleton>
    </main>
  );
};

export default Dashboard;
