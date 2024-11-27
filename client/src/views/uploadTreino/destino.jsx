import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import Containers from "./Destinos/indexContainers";
import './estiloLivro.css'

const Destino = ({ modulos }) => {
  const [itens, setItens] = useState([]);
  const [flipStates, setFlipStates] = useState([false, false, false, false, false, false]); // 6 folha der certo!!

  useEffect(() => console.log("useffect: ", itens[modulos]), [itens]);

  const handleChanges = (index, state) => {
    console.log("handleChanges: ", index, state);
    setItens((prevItens) => {
      const itens = [...prevItens];
      itens[modulos].map((item, i) =>
        i === index ? (item.src = state) : item
      );
      return itens;
    });
  };

  const handlePost = (item) => {
    setItens((prevItens) => {
      const novosItens = [...prevItens];
      const novoItem = {
        ...item,
        index: (novosItens[modulos]?.length || 0),
        isOpen: false
      };

      novosItens[modulos] = [...(novosItens[modulos] || []), novoItem];
      return novosItens;
    });
  };

  const handleDelete = (imagem) => {
    setItens((prevItens) => {
      const novosItens = [...prevItens];
      novosItens[modulos] = novosItens[modulos].filter(item => item.index !== imagem);
      return novosItens;
    });
  };

  const [{ isOver }, drop] = useDrop({
    accept: "item",
    drop: (item) => {
      console.log('qual o item: ', item);
      handlePost(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver({ shallow: true }),
    })
  });

  const handlePageClick = (index) => {
    setFlipStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  console.log("ARRAY: ", itens);

  return (
    <section
      className='dropSection'
      style={{
        // backgroundColor: isOver ? "lightgreen" : "hsl(0,0%,97%)",
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}
      ref={drop}
    >
      <div className="flipbook centered" id="flipbook">
        {/* Primeira folha */}
        <div className="leaf"
          onClick={() => handlePageClick(0)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[0] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front title internal"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              width: '106%',
              height: '628px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2></h2>
            <p></p>
            <div className="pageNumber">1</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">2</div>
          </div>
        </div>

        {/* Segunda folha */}
        <div className="leaf"
          onClick={() => handlePageClick(1)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[1] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3></h3>
            <p></p>
            <div className="pageNumber">3</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">4</div>
          </div>
        </div>

        {/* Terceira folha */}
        <div className="leaf"
          onClick={() => handlePageClick(2)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[2] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3></h3>
            <p></p>
            <div className="pageNumber">5</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">6</div>
          </div>
        </div>

        {/* Quarta folha */}
        <div className="leaf"
          onClick={() => handlePageClick(3)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[3] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3></h3>
            <p></p>
            <div className="pageNumber">7</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">8</div>
          </div>
        </div>

        {/* Quinta folha */}
        <div className="leaf"
          onClick={() => handlePageClick(4)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[4] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3></h3>
            <p></p>
            <div className="pageNumber">9</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">10</div>
          </div>
        </div>

        {/* Sexta folha */}
        <div className="leaf"
          onClick={() => handlePageClick(5)}
          style={{
            position: 'absolute',
            left: '30%',
            transformOrigin: 'left 0px',
            transform: flipStates[5] ? 'rotate3d(0, 1, 0, -180deg)' : 'rotate3d(0, 1, 0, 0deg)',
            transition: 'transform 1s ease-in-out'
          }}
        >
          <div
            className="page front"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3></h3>
            <p></p>
            <div className="pageNumber">1</div>
          </div>
          <div
            className="page back"
            style={{
              backgroundColor: 'rgb(163, 218, 245)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div className="pageNumber">12</div>
          </div>
        </div>

      </div>

      {
        // Renderização dos itens com base no tipo
        itens[modulos]?.map((item, index) => {
          console.log("TIPO DO ITEM,", item.index);
          switch (item.tipo) {
            case 'imagem':
              return <Containers.Imagem 
                        deletar={handleDelete} 
                        handleImage={handleChanges} 
                        isHovered={item.isHovered}
                        index={item.index} 
                        key={index} 
                        imagem={item.src} 
                        setItens={[modulos, setItens]} 
                        isFlipped={item.isOpen} />

            case 'parag':
              return <Containers.Prgf 
                        deletar={handleDelete} 
                        index={item.index} 
                        setItens={[modulos, setItens]}
                        key={index} 
                        mensagem={item.src} 
                        updateParag={handleChanges} 
                        isEditting={item.isOpen} />

            case 'video':
              return <Containers.Video 
                        isFlipped={item.isOpen} 
                        deletar={handleDelete}
                        setItens={[modulos, setItens]} 
                        index={item.index} 
                        key={index}
                        url={item.src} 
                        isUrl={item.isUrl} 
                        handleVideo={handleChanges}/>

            case 'tit':
              return <Containers.Tit 
                        key={index} 
                        index={item.index} 
                        mensagem={item.src} 
                        setItens={[modulos, setItens]}
                        deletar={handleDelete} 
                        updateTit={handleChanges} 
                        isEditting={item.isOpen} />

            default:
              alert(`Tipo de item não existe ${item}`);
              break;
          };
        })
      }
    </section>
  );
};

export default Destino;