import Input from "../shared/Input";
const LogForm = () => {
  return (
    <section className="f-col gap-10">
      <div className="f-col gap-8">
        <h1>Get Started for free!</h1>
        <form className="f-col gap-4">
          <Input
            type="text"
            label="Name"
            placeHolder="Enter your name"
            required={true}
            error=""
          />
          <Input
            type="email"
            label="Email"
            placeHolder="name@email.com"
            required={true}
            error=""
          />
          <Input
            type="password"
            label="Password"
            placeHolder="6+ characters"
            required={true}
            error=""
          />
          <button className="btn btn-primary py-4">Register</button>
          <span className="p-4 text-center text-brown-500">
            Or register using
          </span>
          <button className="btn btn-accent py-4">
            <img src="" alt="" />
            <span>Sign in with google</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LogForm;
