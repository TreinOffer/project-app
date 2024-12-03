import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import Containers from "./Destinos/indexContainers";

const Destino = ({ modulos }) => {
    const [itens, setItens] = useState([]);

    useEffect(() => console.log("useffect: ", itens[modulos]), [itens]);

    const handleChanges = (index, state) => {
        console.log("handleChanges: ", index, state);
        setItens(prevItens => {
            const itens = [...prevItens];
            itens[modulos].map((item, i) =>
                i === index ? item.src = state : item
            );
            return itens;
        });
    };

    const handlePost = (item) => {
        if (item.tipo === 'imagem' ||
            item.tipo === 'parag' ||
            item.tipo === 'tit'
        ) {
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
        };
    };

    const handleDelete = (imagem) => {
        setItens((prevItens) => {
            const novosItens = [...prevItens];

            novosItens[modulos] = novosItens[modulos].filter(item => item.index !== imagem);
            return novosItens;
        });
    };

    const handleEnviarTreinamento = () => {
        console.log("Enviando treinamento com os itens: ", itens);
    };

    const handleEnviarCapaTreinamento = () => {        
        console.log("Enviando capa de treinamento com os itens: ", itens); 
        
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

    return (
        <>
            <section
                className='dropSection'
                style={{
                    backgroundColor: isOver ? "lightgreen" : "hsl(0,0%,97%)",
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}
                ref={drop}
            >                
                <form action="/action_page.php" method="get" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}></form>

                {
                    itens[modulos]?.map((item, index) => {
                        switch (item.tipo) {
                            case 'imagem':
                                return <Containers.Imagem deletar={handleDelete} handleImage={handleChanges} isHovered={item.isHovered}
                                    index={item.index} key={index} imagem={item.src} setItens={[modulos, setItens]} isFlipped={item.isOpen} />
                            case 'parag':
                                return <Containers.Prgf deletar={handleDelete} index={item.index} setItens={[modulos, setItens]}
                                    key={index} mensagem={item.src} updateParag={handleChanges} isEditting={item.isOpen} />
                            case 'video':
                                return <Containers.Video isFlipped={item.isOpen} deletar={handleDelete}
                                    setItens={[modulos, setItens]} index={item.index} key={index}
                                    url={item.src} isUrl={item.isUrl} handleVideo={handleChanges} />
                            case 'tit':
                                return <Containers.Tit key={index} index={item.index} mensagem={item.src} setItens={[modulos, setItens]}
                                    deletar={handleDelete} updateTit={handleChanges} isEditting={item.isOpen} />
                            default:
                                alert(`Tipo de item não existe ${item}`);
                                break;
                        };
                    })
                }
            </section>
            <button
                style={{
                    position: "fixed",
                    bottom: "2px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                onClick={handleEnviarTreinamento}
            >
                Enviar Treinamento
            </button>
            <button
                style={{
                    position: "fixed",
                    right: "350px",
                    bottom: "2px",
                    padding: "10px 10px",
                    backgroundColor: "#1E90FF",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                    color: "white"
                }}
                onClick={handleEnviarCapaTreinamento}
            >
                Enviar Capa de Treinamento
            </button>
        </>
    );
};

export default Destino;
