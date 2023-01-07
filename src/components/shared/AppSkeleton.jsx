import AppNavbar from "../shared/AppNavbar";
const AppSkeleton = ({ children }) => {
  return (
    <section className="w-full h-full bg-brown-100 flex flex-col-reverse md:flex-row">
      <AppNavbar />
      <div className="w-full h-full p-3 md:px-6 md:py-12 f-col ">
        <aside className="f-between items-center">
          <h2>Invoices</h2>
          <div className="flex gap-3">
            <button className="btn btn-accent">Filter by Status</button>
            <button className="btn btn-primary">New Invoice</button>
          </div>
        </aside>
        <div className="w-full h-full p-4">
          <div className="w-full h-full bg-white border-2 border-brown rounded-2xl px-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSkeleton;
