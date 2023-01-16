import AppSkeleton from "../../components/shared/AppSkeleton";
import Card from "../../components/Dashboard/Card";
import Chart from "../../components/Dashboard/Chart";
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { fetchUserProfile } from "../../utils/fetchData";
import { LoadingScreen } from "../../components/shared/Loading";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);

  const [userData, setUserData] = useState();

  // Fetch User Data

  useEffect(() => {
    fetchUserProfile(state.user.id, setUserData);
  }, []);

  // console.log(userData);

  return (
    <AppSkeleton title={userData && `Hey, ${userData.name}`}>
      {!userData ? (
        <LoadingScreen />
      ) : (
        <div className="w-full h-full f-col py-6 gap-8 md:gap-4 justify-around ">
          <div className="f-evenly gap-y-4 flex-wrap">
            <Card
              label="Revenue"
              value={userData && `$${userData.summary.revenue}`}
              icon={<CurrencyDollarIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Customers"
              value={userData && userData.summary.customers}
              icon={<UserGroupIcon className="w-4 md:w-6 text-brown" />}
            />
            <Card
              label="Products"
              value={userData && userData.summary.products}
              icon={
                <BuildingStorefrontIcon className="w-4 md:w-6 text-brown" />
              }
            />
            <Card
              label="Invoices"
              value={userData && userData.summary.invoices}
              icon={<DocumentDuplicateIcon className="w-4 md:w-6 text-brown" />}
            />
          </div>

          <div className="f-center">
            <Chart />
          </div>
        </div>
      )}
    </AppSkeleton>
  );
};

export default Dashboard;
