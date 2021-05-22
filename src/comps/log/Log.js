function Log(props) {
  return (
    <div>
      <h1>Log</h1>
      {props.log.map((logItem) => (
        <h4>{logItem}</h4>
      ))}
    </div>
  );
}

export default Log;
