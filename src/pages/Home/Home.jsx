import Categories from "../Rooms/Categories/Categories";
import Rooms from "../Rooms/Rooms";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* categories */}
      <div className="mb-4">
        <Categories />
      </div>
      <div>
        <Rooms />
      </div>
    </div>
  );
}
