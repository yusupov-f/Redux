import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchThingById, clearSelectedThing } from "../features/things/thingsSlice";

const ThingsDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedThing, status } = useSelector(state => state.things);

  useEffect(() => {
    dispatch(fetchThingById(id));
  }, [dispatch, id]);

  if (status === "loading") return <p>Загрузка вещи...</p>;
  if (!selectedThing) return null;

  return (
    <div className="container">
      <button
        onClick={() => {
          dispatch(clearSelectedThing());
          navigate("/");
        }}
      >
        ← Назад
      </button>

      <h2>{selectedThing.name}</h2>
      <p><b>Тип:</b> {selectedThing.type}</p>
      <p><b>Описание:</b> {selectedThing.description}</p>
      <p><b>Цена:</b> ${selectedThing.price}</p>
    </div>
  );
};

export default ThingsDetail;