import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import styles from "../components/TinderCard.module.css";
import dataBase from "./dataBase";
import SwipeButtons from "./SwipeButtons";
import Header from "./Header";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const useCollectionRef = collection(dataBase, "people");
    const getUsers = async () => {
      const data = await getDocs(useCollectionRef);
      setPeople(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      return () => {
        //cleanup
        getUsers();
      };
    };
    getUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.card_container}>
        {people.map((person) => (
          <TinderCard
            className={styles.swipe}
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className={styles.card}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <SwipeButtons />
    </div>
  );
}
export default TinderCards;
