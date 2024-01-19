import Anchor from "../Anchor/Anchor";
import { anchors } from "../../utils/arraysList";
import "./Header.css";

export default function Header() {
  return (
    <section id="Navigation" className="header">
      <nav className="header__container">
        {anchors.map((item) => (
          <Anchor key={item.title} {...item} />
        ))}
      </nav>
    </section>
  );
}
