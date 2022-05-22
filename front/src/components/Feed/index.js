import "./feed.css";

export default function Feed(props) {
  return (
    <>
      {props.vagas.map((vaga) => (
        <div className="vaga">
          <h1>
            {vaga.cargo} - {vaga.empresa}
          </h1>
          <p>{vaga.localizacao}</p>
        </div>
      ))}
    </>
  );
}