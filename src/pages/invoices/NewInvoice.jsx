import {
  TrashIcon,
  PlusIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import Input from "../../components/shared/Input";
import AppSkeleton from "../../components/shared/AppSkeleton";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import {
  fetchCustomers,
  fetchProducts,
  fetchUserProfile,
} from "../../utils/fetchData";
import { LoadingScreen } from "../../components/shared/Loading";

const NewInvoice = () => {
  const { state } = useContext(GlobalContext);

  const [userInputs, setUserInputs] = useState();

  const [selectedProduct, setSelectedProduct] = useState([
    { index: 0, qty: 1 },
  ]);

  const productsRef = useRef();

  // console.log(selectedProduct);

  const [productList, seProductList] = useState([
    { productId: 0, qty: null, price: null },
  ]);

  const [isCustomer, setIsCustomer] = useState(false);

  const formRef = useRef();

  // User Data

  const [userProfile, setUserProfile] = useState();
  const [userCustomers, setUserCustomers] = useState();
  const [userProducts, setUserProducts] = useState();

  // Fetch User Data

  useEffect(() => {
    console.log("rendred");
    fetchUserProfile(state.user.id, setUserProfile);
    fetchCustomers(state.user.id, setUserCustomers);
    fetchProducts(state.user.id, setUserProducts);
  }, []);

  // console.log(userProfile, userCustomers, userProducts);

  // const handleSave = () => {
  //   const dt = {
  //     billFrom: {
  //       adress,
  //       city,
  //       zip,
  //       country,
  //     },
  //     billTo: {
  //       name,
  //       email,
  //       adress,
  //       city,
  //       zip,
  //       country,
  //     },
  //     details: {
  //       date,
  //       description,
  //     },
  //     productList: [{ price, productId, qty }],
  //   };
  // };

  // Handle Adding new product

  const addNewProduct = () => {
    const currSel = [...selectedProduct];
    currSel.push({ index: 0, qty: 1 });
    setSelectedProduct(currSel);
  };

  const deleteProduct = (index) => {
    if (selectedProduct.length - 1) {
      console.log(selectedProduct.length);
      const currSel = [...selectedProduct];
      currSel.splice(index, 1);
      setSelectedProduct(currSel);
    }
  };

  // * LAYOUT

  return (
    <AppSkeleton
      title="New Invoice"
      utils={{
        primary: <button className="btn btn-accent">Discard</button>,
        secondary: (
          <Link>
            <button className="btn btn-primary">Save Changes</button>
          </Link>
        ),
      }}
    >
      <>
        {userProducts && userCustomers && userProfile ? (
          <div className="w-full h-full md:f-center overflow-auto">
            <form
              className="flex f-col md:flex-row items-center gap-8 md:gap-16 text-brown"
              ref={formRef}
            >
              {/* Data */}
              <div className="flex-1 f-col gap-4 ">
                {/* Bill From */}

                <span className="flex items-center">
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                  <p className="flex-1 font-semibold text-lg text-center">
                    Bill From
                  </p>
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                </span>
                <Input
                  type="text"
                  label="Street Adress"
                  defaultValue="default value"
                />
                <div className="flex gap-2 md:gap-10">
                  <Input type="text" label="City" />
                  <Input type="text" label="Post Code" />
                  <Input type="text" label="Country" />
                </div>

                {/* Bill To */}

                <span className="flex items-center">
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                  <p className="flex-1 font-semibold text-lg text-center">
                    Bill To
                  </p>
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                </span>

                {/* Radio Select */}

                <div className="flex gap-4 justify-evenly text-center">
                  <Input
                    type="radio"
                    label="Import from exesting customer"
                    onChange={() => setIsCustomer(true)}
                    checked={isCustomer}
                  />
                  <Input
                    type="radio"
                    label="Custom Informations"
                    onChange={() => setIsCustomer(false)}
                    checked={!isCustomer}
                  />
                </div>

                {!isCustomer ? (
                  <>
                    <Input type="text" label="Client's Name" />
                    <Input type="email" label="Client's Email" />
                    <Input type="text" label="Street Adress" />
                    <div className="flex gap-2 md:gap-10">
                      <Input type="text" label="City" />
                      <Input type="text" label="Post Code" />
                      <Input type="text" label="Country" />
                    </div>
                  </>
                ) : (
                  // Fetched Customers

                  <div className="f-center">
                    <select
                      name="customers"
                      id="customers"
                      className=" text-base p-1 md:p-2 border border-brown rounded-md outline-brown text-brown bg-white"
                    >
                      <option
                        value=""
                        defaultChecked={true}
                        className="bg-brown-100"
                      >
                        Please Choose some customer
                      </option>
                      {userCustomers.map((uc) => {
                        return (
                          <option key={uc.customer} value={uc.customer}>
                            {uc.customer}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>

              <span className="h-0.5 w-2/3 md:w-0.5 md:h-96 bg-brown-100"></span>

              {/* Details */}

              <div className="flex-1 f-col gap-4">
                {/*  */}

                {/* Invoice Details */}

                <span className="flex items-center ">
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                  <p className="flex-1 font-semibold text-lg text-center">
                    Invoice Details
                  </p>
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                </span>
                <div className=" flex gap-2 md:gap-10 justify-between">
                  <div className="flex-1">
                    <Input type="date" label="Invoice Date" />
                  </div>
                </div>
                <Input type="text" label="Project Description" />

                {/* Product List */}

                <span className="flex items-center">
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                  <p className="flex-1 font-semibold text-lg text-center">
                    Product List
                  </p>
                  <span className="h-0.5 flex-1 bg-brown-100"></span>
                </span>

                {/* Products Field */}

                {selectedProduct.map((p, i) => {
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <div className="f-col text-brown gap-1">
                        <label
                          htmlFor="product"
                          className="font-normal text-sm"
                        >
                          Product
                        </label>
                        <select
                          ref={productsRef}
                          name="product"
                          className=" px-4 py-3  text-brown text-sm border-2 border-brown-100 rounded-lg placeholder:text-brown-100"
                          onChange={(e) => {
                            const currSel = [...selectedProduct];
                            currSel[i].index = e.target.selectedIndex;
                            currSel[i].qty = 1;
                            console.log(currSel);
                            setSelectedProduct(currSel);
                          }}
                        >
                          {/* Add Products to selection */}

                          {userProducts.map((up) => {
                            return (
                              <option key={up.id} value={up.name}>
                                {up.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <Input
                        type="number"
                        label="Qty."
                        min="1"
                        value={selectedProduct[i].qty}
                        onChange={(e) => {
                          const currSel = [...selectedProduct];
                          currSel[i].qty = +e.target.value;
                          setSelectedProduct(currSel);
                        }}
                      />
                      <Input
                        type="number"
                        label="Price"
                        disabled={true}
                        value={userProducts[selectedProduct[i].index].price}
                      />
                      <Input
                        type="text"
                        label="Total"
                        disabled={true}
                        value={
                          userProducts[selectedProduct[i].index].price *
                          selectedProduct[i].qty
                        }
                      />
                      <TrashIcon
                        className="w-16 pt-4 cursor-pointer text-brown hover:text-brown-500"
                        onClick={() => deleteProduct(i)}
                      />
                    </div>
                  );
                })}

                <div
                  className="flex gap-2 self-center cursor-pointer hover:text-brown-500"
                  onClick={addNewProduct}
                >
                  <PlusIcon className="w-6" />
                  <span>Add New Product</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <LoadingScreen />
        )}
      </>
    </AppSkeleton>
  );
};

export default NewInvoice;
