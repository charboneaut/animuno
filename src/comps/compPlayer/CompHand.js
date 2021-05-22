function CompHand(props) {
  return (
    <>
      <div style={{ marginTop: "5%" }}>
        {props.handComp.map((card) => (
          <span
            style={{
              backgroundColor: card.color,
              padding: "0.5em",
              fontSize: "3em",
            }}
            key={card.id}
          >
            {card.number}
          </span>
        ))}
      </div>
    </>
  );
}

export default CompHand;
