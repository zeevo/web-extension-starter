import { Home, Settings } from "lucide-react";

function App() {
  return (
    <div className="p-4 w-80 h-96 border border-neutral flex-col justify-between flex">
      <div className="flex justify-between">
        <p className="text-4xl text-primary font-bold">Title</p>
        <button className="btn btn-ghost m-0 h-auto min-h-0 p-2">
          <Settings />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <h1>Content</h1>
      </div>
      <div className="flex justify-end">
        <p>Footer</p>
      </div>
    </div>
  );
}

export default App;
