const Card = ({ label, icon, value }) => {
  return (
    // w-36 md:w-56
    <div className="px-3 py-2 md:px-4 md:py-4 border border-brown rounded-xl f-col gap-2 md:gap-4 shadow-sm">
      <aside className="f-between">
        <p className="text-brown-500">{label}</p>
        {icon}
      </aside>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;
