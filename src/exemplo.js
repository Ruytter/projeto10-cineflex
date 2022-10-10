import { useState } from "react";
import "./styles.css";

const seats = [
  { id: 1, status: "available" },
  { id: 2, status: "unavailable" },
  { id: 3, status: "unavailable" },
  { id: 4, status: "unavailable" },
  { id: 5, status: "available" },
  { id: 6, status: "available" },
  { id: 7, status: "available" },
  { id: 8, status: "available" },
  { id: 9, status: "available" },
  { id: 10, status: "available" },
  { id: 11, status: "unavailable" }
];

//Componente apenas visual, só renderiza os assentos
function Seat({ seat, handleSeat }) {
  return (
    <>
      {!seat.selected ? (
        <div className={`seat ${seat.status}`} onClick={() => handleSeat(seat)}>
          {seat.id}
        </div>
      ) : (
        <div className={`seat selected`} onClick={() => handleSeat(seat)}>
          {seat.id}
        </div>
      )}
    </>
  );
}

export default function App() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  //Faz o click em cada componente Seat
  function handleSeat(seat) {
    //Se o assento estiver indisponível não faz nada
    if (seat.status === "unavailable") {
      return;
    }
    //Toggle - "Liga e desliga" a seleção
    seat.selected = !seat.selected;

    //Se o estado atual é não selecionado precisamos remover o assento
    if (!seat.selected) {
      const filteredSeats = selectedSeats.filter((s) => !(s.id === seat.id));
      setSelectedSeats([...filteredSeats]);
      return;
    }
    //Adicionamos o assento a lista de assentos selecionados
    setSelectedSeats([...selectedSeats, seat]);
    return;
  }
  return (
    <div className="App">
      {seats.map((seat, id) => (
        <Seat key={id} seat={seat} handleSeat={handleSeat} />
      ))}
      <h2>
        Assentos selecionados:{" "}
        {selectedSeats.map((s) => (
          <span>{s.id}</span>
        ))}
      </h2>
    </div>
  );
}
