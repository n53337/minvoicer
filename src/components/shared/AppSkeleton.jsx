import AppNavbar from "../shared/AppNavbar";
const AppSkeleton = ({ children }) => {
  return (
    <section className="w-full h-full bg-brown-100 flex flex-col-reverse md:flex-row">
      <AppNavbar />
      <div className="w-full h-full md:px-6 md:py-12 f-col ">
        <aside className="f-between">
          <h2>Invoices</h2>
          <div className="flex gap-3">
            <button className="btn btn-accent">Filter by Status</button>
            <button className="btn btn-primary">New Invoice</button>
          </div>
        </aside>
        {children}
      </div>
    </section>
  );
};

export default AppSkeleton;
