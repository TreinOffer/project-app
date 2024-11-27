import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import Containers from "./Destinos/indexContainers";
import './estiloLivro.css'

const Destino = ({ modulos }) => {
  const [itens, setItens] = useState([]);

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
    if (item.tipo === 'imagem' ||
        item.tipo === 'parag' ||
        item.tipo === 'tit') {
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
    } else if (item.tipo === "video") {
      setItens((prevItens) => {
        const novosItens = [...prevItens];

        const novoItem = {
          ...item,
          index: (novosItens[modulos]?.length || 0),
          isOpen: false,
          isUrl: true,
          isHovered: false
        };

        novosItens[modulos] = [...(novosItens[modulos] || []), novoItem];
        return novosItens;
      });
    } else {
      setItens((prevItens) => {
        const novosItens = [...prevItens];

        const novoItem = {
          ...item,
          index: (novosItens[modulos]?.length || 0),
        };

        novosItens[modulos] = [...(novosItens[modulos] || []), novoItem];
        return novosItens;
      });
    }
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
        <div className="leaf">
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
          <div className="page back" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <div className="pageNumber">2</div>
          </div>
        </div>

        <div className="leaf">
          <div className="page front" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <h3></h3>
            <p></p>
            <div className="pageNumber">3</div>
          </div>
          <div className="page back" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <div className="pageNumber">4</div>
          </div>
        </div>

        <div className="leaf">
          <div className="page front" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <h3></h3>
            <p></p>
          </div>
          <div className="page back" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <div className="pageNumber">5</div>
          </div>
        </div>

        <div className="leaf">
          <div className="page front" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <h3></h3>
            <p></p>
          </div>
          <div className="page back" style={{
            backgroundColor: 'rgb(163, 218, 245)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}>
            <div className="pageNumber">6</div>
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