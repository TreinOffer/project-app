import React, { useEffect } from 'react'
import CoresRGB from '../../../components/coresRGB';

export default function Treino({
  capaTreino, empresaFT, titTreino,
  tag1="N/A", tag2='N/A',
  autorFt, autorNome,
  toTreino, idTreino, numColab='0'
}) {
    function corTag(tag){
        if(tag === "Segurança"){
          return "hsl(225,80%,87.5%)";
        }
        else if(tag === "Despensa"){
          return "hsl(280,50%,70%)";
        }
        else if(tag === "Industrial"){
          return "hsl(40,80%,60%)";
        }
      else if(tag === "Básico"){
          return "hsl(100,40%,80%)"
        }
      else if(tag === "Médio"){
        return "hsl(10,50%,60%)"
      }
      else if(tag === "Avançado"){
        return "hsl(0,50%,60%)"
      }else{
        return "hsl(0,0%,85%)"
      };
    };

  return (
    <div className="treino">
        <div className="treino_capa" onClick={() => toTreino(idTreino)}>
          <div className="treino_ft">
            <img src={`${process.env.REACT_APP_BACKEND}/imgs/${capaTreino}`} alt="fotoTreino" />
          </div>
          <div className="treino_info">
            <div className="treino_emp">
              <img src={empresaFT} alt="fotoEmpresa" />
            </div>
            <div className="treino_cab">
              <h3 className="treino_tit quebra">
                {titTreino}
              </h3>
              <div className="treino_tags">
                <dl>
                  <dt className='treino_tipo' style={{backgroundColor: corTag(tag1)}}>
                    {tag1}
                  </dt>
                  <dt className='treino_dif' style={{backgroundColor: corTag(tag2)}}>
                    {tag2}
                  </dt>
                </dl>
              </div>
              <div className='treino_autor'>
                <img src={`${process.env.REACT_APP_BACKEND}/imgs/${autorFt}`} alt="fotoAutor" />
                <h4 className='quebra'>{autorNome}</h4>
              </div>
            </div>
          </div>
          <p className="colab_rel quebra" style={{ color: CoresRGB() }}>
            {`${numColab} ${numColab > 1 ? 'Colaboradores' : 'Colaborador'}`} 
          </p>
        </div>
      </div>
  )
};


