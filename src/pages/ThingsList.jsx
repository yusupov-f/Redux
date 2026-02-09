import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchThings } from "../features/things/thingsSlice";
import { useNavigate } from "react-router-dom";

const ThingsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status, error } = useSelector(state => state.things);

  useEffect(() => {
    dispatch(fetchThings());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="container">
      <h2>Список вещей</h2>
      <ul>
        {items.map(thing => (
          <li key={thing.id}>
            <button onClick={() => navigate(`/things/${thing.id}`)}>
              {thing.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThingsList;