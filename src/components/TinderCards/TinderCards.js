import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function TinderCards() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        "https://tykeapi.pythonanywhere.com/api/Apis/"
      );
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    setCount((prev) => (prev = prev + 1));
    console.log("Me Called");
    toast("You have Gained a 💰 Coin!", {
      position: "bottom-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    console.log(count);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    //  onDragCapture={notify}
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={(dir) => swiped(dir, person.name)}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}

        <br />
        <ToastContainer />
      </div>
    </div>
  );
}

export default TinderCards;
