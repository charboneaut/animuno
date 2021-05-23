function CompHand(props) {
  return (
    <>
      <div>
        {props.handComp.map((card) => (
          <span key={card.id}>{card.number}</span>
        ))}
      </div>
    </>
  );
}

export default CompHand;
