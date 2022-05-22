import "./feed.css";

export default function Feed(props) {
  return (
    <>
    <div className="titulo">
        <h2>Encontre sua vaga:</h2>
    </div>
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