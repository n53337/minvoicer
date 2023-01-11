import AppNavbar from "../shared/AppNavbar";
const AppSkeleton = ({ children, title, utils }) => {
  return (
    <main className="min-w-full h-screen">
      <section className="w-full h-full bg-white flex flex-col-reverse md:flex-row">
        <AppNavbar />
        <div className="w-full h-full px-2 py-4 f-col gap-1 overflow-auto mb-24">
          <aside className="f-between items-center">
            <h2>{title}</h2>

            {utils && (
              <div className="flex gap-3">
                {utils.primary}
                {utils.secondary}
              </div>
            )}
          </aside>
          <div className="w-full h-full p-1 md:p-4 ">
            <div className="w-full h-full px-4 ">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppSkeleton;
