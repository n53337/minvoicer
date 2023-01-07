import AppSkeleton from "../../components/shared/AppSkeleton";
import Card from "../../components/Dashboard/Card";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
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
              icon={<CurrencyDollarIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Products"
              value="06"
              icon={<CurrencyDollarIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Invoices"
              value="32"
              icon={<CurrencyDollarIcon className="w-4 md:w-6 text-brown" />}
            />
          </div>
          <div>laskdn</div>
        </div>
      </AppSkeleton>
    </main>
  );
};

export default Dashboard;
