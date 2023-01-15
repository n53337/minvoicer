import AppSkeleton from "../../components/shared/AppSkeleton";
import Card from "../../components/Dashboard/Card";
import Chart from "../../components/Dashboard/Chart";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  CurrencyDollarIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";

const Dashboard = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const [test, setTest] = useState();

  // Fetch User Data

  const fetchUser = async (id) => {
    const docRef = doc(db, "users", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log(docSnap.data());
      setTest(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchUser(state.user.id, setTest);
  }, []);
  console.log(test);

  console.log(state.user.email);

  return (
    <AppSkeleton title="Dashboard">
      <div className="w-full h-full f-col py-6 gap-8 md:gap-4 justify-around ">
        <div className="f-evenly gap-y-4 flex-wrap">
          <Card
            label="Revenue"
            value={test ? test.pwd : "loading..."}
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
            icon={<BuildingStorefrontIcon className="w-4 md:w-6 text-brown" />}
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
    </AppSkeleton>
  );
};

export default Dashboard;
