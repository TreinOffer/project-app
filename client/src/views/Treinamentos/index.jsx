import React from 'react'
import "./estilo.css"
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';
import CoresRGB from '../../components/coresRGB';

function Treinamentos() {

  function Treino(capaTreino, empresaFT, titTreino, tag1, tag2, autorFt, autorNome) {

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
      };
    };

    return (

      <div className="treino">
        <div className="treino_capa">
          <div className="treino_ft">
            <img src={capaTreino} alt="a" />
          </div>
          <div className="treino_info">
            <div className="treino_emp">
              <img src={empresaFT} alt="b" />
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
                <img src={autorFt} alt="" />
                <h4 className='quebra'>{autorNome}</h4>
              </div>
            </div>
          </div>
          <p className="colab_rel quebra" style={{ color: CoresRGB() }}>
            4 Colaboradores
          </p>
        </div>
      </div>

    )
  };

  return (

    <>

      <Cabecalho />

      <section className="grid_treinos">

        {Treino(
          imgs.treino1,
          imgs.empresa,
          "Equipamento de Proteção Individual",
          "Segurança","Básico",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino2,
          imgs.empresa,
          "Treinamento de Prevenção de Incêncios",
          "Segurança","Médio",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino3,
          imgs.empresa,
          "Processamento de Fruta",
          "Industrial","Médio",
          imgs.tabLeila, "Leila Pereira"
        )}

        {Treino(
          imgs.treino4,
          imgs.empresa,
          "Treinamento de Primeiros Socorros",
          "Segurança","Avançado",
          imgs.tabEduardo, "Eduardo Pereira"
        )}

        {Treino(
          imgs.treino5,
          imgs.empresa,
          "Congelamento de Frutas",
          "Despensa","Básico",
          imgs.tabLeila, "Leila Pereira"
        )}

      </section>
    </>
  )
}

export default Treinamentos;