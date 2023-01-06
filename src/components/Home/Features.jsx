import { Link } from "react-router-dom";
import realTimeArt from "../../assets/icons/RealtimeArt.svg";
import printingArt from "../../assets/icons/PrintingArt.svg";
const Features = () => {
  return (
    <section className="p-6 lg:p-12 f-col lg:gap-24 text-brown">
      <div className="f-col md:flex-row md:f-around items-center gap-12 md:gap-16 text-center lg:text-left">
        <img
          src={realTimeArt}
          alt="save time"
          className="w-48 flex-1 lg:h-4/6"
        />
        <div className="flex-1 f-col gap-2 lg:gap-4">
          <h2>Save time with easy bookkeeping</h2>
          <p className="text-brown-500">
            Your time is your most important asset and you should be spending it
            building your business – not bookkeeping. Our time-saving features
            will get you out of the books and back in your business. Save your
            customers, items, invoices, estimates and let your customers pay you
            via credit card.
          </p>
          <Link to="/register">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="f-col md:flex-row-reverse  md:f-around items-center gap-12 md:gap-16 py-10 text-center lg:text-left">
        <img
          src={printingArt}
          alt="save time"
          className="w-48 flex-1 lg:h-4/6"
        />

        <div className="flex-1 f-col gap-2 lg:gap-4 ">
          <h2>Get paid faster for your work.</h2>
          <p className="text-brown-500">
            Getting paid on time is one of the biggest problems for small
            business owners everywhere. With our invoice app, Bookipi makes sure
            that you don’t miss out on any critical information that will stop
            you getting paid. We also have automatic overdue reminders for
            clients that forget to pay you.
          </p>
          <Link to="/register">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>

      <div className="py-6 lg:py-10 f-col bg-gradient-to-r from-brown to-addon items-center gap-3 lg:gap-6 rounded-xl">
        <h1 className="text-white">Getting Started is Easy</h1>
        <Link to="/register">
          <button className="btn btn-primary-w">Start Building</button>
        </Link>
      </div>
    </section>
  );
};

export default Features;
