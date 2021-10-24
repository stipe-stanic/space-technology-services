import React from "react";
import { useGlobalContext } from "../context";
import CartContainer from "../components/CartContainer";

export default function Store() {
  const { closeSubmenu } = useGlobalContext();
  return (
    <main onMouseOver={closeSubmenu}>
      <CartContainer />
    </main>
  );
}
