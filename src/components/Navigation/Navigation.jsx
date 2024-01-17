import Anchor from "../Anchor/Anchor";
import { anchors } from "../../utils/arraysList";
import "./Navigation.css";

export default function Navigtion() {
  return (
    <section id="Navigation" className="navigation">
      <nav className="navigation__container">
        {anchors.map((item) => (
          <Anchor key={item.title} {...item} />
        ))}
      </nav>
    </section>
  );
}
