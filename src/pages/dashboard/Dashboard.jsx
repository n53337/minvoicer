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
import fetchUserData from "../../utils/fetchUserData";

const Dashboard = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [userData, setUserData] = useState();

  // Fetch User Data

  useEffect(() => {
    // fetchUserData(state.user.id, setUserData);
  }, []);

  return (
    <AppSkeleton title={userData && `Hey, ${userData.name}`}>
      {userData ? (
        <div className="w-full h-full f-center">
          <p className="animate-pulse text-brown-700 font-normal text-lg md:text-3xl">
            loading...
          </p>
        </div>
      ) : (
        <div className="w-full h-full f-col py-6 gap-8 md:gap-4 justify-around ">
          <div className="f-evenly gap-y-4 flex-wrap">
            <Card
              label="Revenue"
              value={userData ? userData.pwd : "loading..."}
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

          <div className="f-center">
            <Chart />
          </div>
        </div>
      )}
    </AppSkeleton>
  );
};

export default Dashboard;
