import { useState } from "react";

function Operation() {
  const [data, setData] = useState("");
  const [recorrido, setRecorrido] = useState([]);
  var q1 = {
    0: /^[8]$/,
    1: /^-$/,
    2: /^[X]$/,
    3: /^[X-Z]$/,
    4: /^-$/,
    5: /^[0-9|1-9]$/,
    6: /^[1-9|0-9]$/,
    7: /^[G-Y]$/,
  };
  var q2 = {
    0: /^[9]$/,
    1: /^-$/,
    2: /^[Y]$/,
    3: /^[A-B]$/,
    4: /^-$/,
    5: /^[0-9|1-9]$/,
    6: /^[1-9|0-9]$/,
    7: /^[A-Z]$/,
  };

  function validate(e) {
    e.preventDefault();
    const rec = [];
    const subString = data.split("");
    for (var i = 0; i < subString.length; i++) {
      if (subString[0] == 8) {
        if (q1[i].test(subString[i]) != true) {
          console.log(
            "q" +
              i +
              " Esta evaluando " +
              subString[i] +
              " y el resultado es " +
              q1[i].test(subString[i])
          );
          rec.push(`q${i} -- ${subString[i]} cadena invalida -->`);
          break;
        }
        rec.push(`q${i}-- ${subString[i]} -->`);
        if (i == 7) {
          rec.push(`q${i + 1} finalizado con exito`);
        } else if (i == 5 && subString[6] == 0 && subString[5] == 0) {
          rec.push(`q${i} cadena invalida`);
          break
        }
      } else if (subString[0] == 9) {
        if (q2[i].test(subString[i]) != true) {
          console.log(
            "q" +
              i +
              " Esta evaluando " +
              subString[i] +
              " y el resultado es " +
              q2[i].test(subString[i])
          );
          rec.push(`q${i} ${subString[i]} cadena invalida`);
          break
        }
        console.log(
          "q" +
            i +
            " Esta evaluando " +
            subString[i] +
            " y el resultado es " +
            q2[i].test(subString[i])
        );
        rec.push(`q${i}-- ${subString[i]} -->`);
        if (i == 7) {
          rec.push(`q${i + 1} finalizado con exito`);
        } else if (i == 5 && subString[6] == 0 && subString[5] == 0) {
          rec.push(`q${i} cadena invalida`);
          break
        }
      }
    }
    setRecorrido(rec);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <div className=" justify-around">
        <h1 className=" mb-5 text-white text-5xl">Automata</h1>
        <form
          className="flex rounded justify-center items-center"
          onSubmit={validate}
        >
          <input
            className="rounded p-2"
            type="name"
            onChange={(e) => setData(e.target.value)}
            placeholder="Introduce datos a evaluar"
            required
          />
          <button className=" p-2 bg-red-300 rounded ml-2">Enviar</button>
        </form>
        <div className=" mt-5">
          {recorrido.map((evaluacion, index) => (
            <p className=" text-white" key={index}>
              {evaluacion}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Operation;
