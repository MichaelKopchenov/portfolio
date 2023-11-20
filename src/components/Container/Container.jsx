import './Container.css';

export default function Container({ children }) {
  return (
    <div className="section__container">
      {children}
    </div>
  );
};