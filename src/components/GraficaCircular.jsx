import { buildStyles, CircularProgressbar} from "react-circular-progressbar";


const GraficaCircular = ({valorMaximo,valorActual,text}) => {

  return (
    <div className="w-60 h-60">
    <CircularProgressbar
      value={valorActual}
      maxValue={valorMaximo}
      styles={buildStyles({
          trailColor: "red",
          pathColor: "green",
        })}
    />
  </div>
  );
};

export default GraficaCircular;
