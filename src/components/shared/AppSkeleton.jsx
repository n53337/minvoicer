import AppNavbar from "../shared/AppNavbar";
const AppSkeleton = ({ children }) => {
  return (
    <section className="w-screen h-screen bg-brown-100 flex">
      <AppNavbar />
      {children}
    </section>
  );
};

export default AppSkeleton;
