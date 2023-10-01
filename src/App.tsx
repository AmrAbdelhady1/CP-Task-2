import { Sidebar, Navbar, Search, Candidates } from "./components";

const App = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="px-8 pt-8 ml-[72px] w-full min-h-screen bg-[#F9FAFF]">
        <Navbar />
        <div className="flex items-start gap-8 flex-col lg:flex-row">
          <Search />
          <Candidates />
        </div>
      </div>
    </div>
  );
};

export default App;
