function Center(props) {
  return (
    <div style={{ marginTop: "5%" }}>
      <span>{props.discardPile[props.discardPile.length - 1].number}</span>
      {props.drawPile.length > 0 ? (
        <span>
          {props.drawPile[props.drawPile.length - 1].number}
          <button
            onClick={() => {
              props.setHand([...props.hand, props.drawPile.pop()]);
            }}
          >
            draw
          </button>
        </span>
      ) : null}
    </div>
  );
}

export default Center;
