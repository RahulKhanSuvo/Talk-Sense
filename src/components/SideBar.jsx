export const Sidebar = ({ children, className, name = "", icon }) => {
  return (
    <div className={`${className} w-[400px] bg-[#F5F7FB]`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1 className="text-[#495057] font-semibold text-2xl">{name}</h1>
        <div className="">{icon}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};
