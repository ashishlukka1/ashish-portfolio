import "../Styles/Grid.css";

export function GridBackgroundDemo() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100"
      style={{ zIndex: -1, backgroundColor: "black" }}
    >
      <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg-dark"></div>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black radial-mask-dark"></div>
    </div>
  );
}
