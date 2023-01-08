import AppNavbar from "../shared/AppNavbar";
const AppSkeleton = ({ children, title, utils }) => {
  return (
    <main className="min-w-full h-screen">
      <section className="w-full h-full bg-brown-100 flex flex-col-reverse md:flex-row">
        <AppNavbar />
        <div className="w-full h-full p-3 md:px-6 md:py-12 f-col gap-1">
          <aside className="f-between items-center">
            <h2>{title}</h2>

            {utils && (
              <div className="flex gap-3">
                <button className="btn btn-accent">Filter by Status</button>
                <button className="btn btn-primary">New Invoice</button>
              </div>
            )}
          </aside>
          <div className="w-full h-full p-1 md:p-4">
            <div className="w-full h-full bg-white border-2 border-brown rounded-2xl px-4">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppSkeleton;
