import React from "react";
import items from "./items";
import ItemList from "../itemList/ItemList";

function Bed() {
  return (
    <section>
      <ItemList items={items} />
    </section>
  );
}

export default Bed;
