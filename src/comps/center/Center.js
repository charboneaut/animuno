function Center(props) {
  return (
    <div style={{ marginTop: "5%" }}>
      <span
        style={{
          backgroundColor:
            props.discardPile[props.discardPile.length - 1].color,
          padding: "0.5em",
          fontSize: "3em",
        }}
      >
        {props.discardPile[props.discardPile.length - 1].number}
      </span>
      {props.drawPile.length > 0 ? (
        <span
          style={{
            backgroundColor: props.drawPile[props.drawPile.length - 1].color,
            padding: "0.5em",
            fontSize: "3em",
          }}
        >
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
