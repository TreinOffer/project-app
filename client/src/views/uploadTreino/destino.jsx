import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import Containers from "./Destinos/indexContainers";
import UparCapa from "../../components/uparTreino/uploadsTreino";
import { submitCapa, submitTreino } from "./functions/postTreino";
import { createForm, createFormTreino } from "./functions/submits.tipos";

const Destino = ({ modulos }) => {
    const [capa, setCapa] = useState({
        capaTreino: '',
        Tags: '',
        Titulo: '',
        Tipo: ''
    });
    const [itens, setItens] = useState([]);
    const [mostrarPopUp, setMostrarPopUp] = useState(false);

    useEffect(() => console.log("useffect: ", itens[modulos]), [itens]);

    const handleChanges = (index, state) => {
        console.log("handleChanges: ", index, state);
        setItens(prevItens => {
            const itens = [...prevItens];
            itens[modulos].forEach((item, i) => {
                if (i === index) {
                    item.src = state[0];
                    item.render = state[1];
                }
            });
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

    const handleEnviarCapaTreinamento = () => {
        setMostrarPopUp(true);
    };

    const fecharPopUp = () => {
        setMostrarPopUp(false);
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
            <form enctype="multipart/form-data" onSubmit={async (e) => {
                e.preventDefault();
                const capaForm = await createForm(capa);
                await submitCapa(capaForm);
                for (const modulo of itens) {
                    console.log("eunaoseimaisdeNADA: ", modulo, "itens: ", itens)
                    const treinoForm = await createFormTreino(modulo);
                    await submitTreino(treinoForm);
                };
            }}>
                <section
                    className='dropSection'
                    style={{
                        backgroundColor: isOver ? "lightgreen" : "hsl(0,0%,97%)",
                        display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}
                    ref={drop}
                >
                    {itens[modulos]?.map((item, index) => {
                        switch (item.tipo) {
                            case 'imagem':
                                return <Containers.Imagem deletar={handleDelete} handleImage={handleChanges} isHovered={item.isHovered}
                                    index={item.index} key={index} imagem={item.src} render={item.render} setItens={[modulos, setItens]} isFlipped={item.isOpen} />;
                            case 'parag':
                                return <Containers.Prgf deletar={handleDelete} index={item.index} setItens={[modulos, setItens]}
                                    key={index} mensagem={item.src} updateParag={handleChanges} isEditting={item.isOpen} />;
                            case 'video':
                                return <Containers.Video isFlipped={item.isOpen} deletar={handleDelete}
                                    setItens={[modulos, setItens]} index={item.index} key={index}
                                    url={item.src} isUrl={item.isUrl} handleVideo={handleChanges} />;
                            case 'tit':
                                return <Containers.Tit key={index} index={item.index} mensagem={item.src} setItens={[modulos, setItens]}
                                    deletar={handleDelete} updateTit={handleChanges} isEditting={item.isOpen} />;
                            case 'checkbox':
                                return <Containers.Checkbox key={index} index={item.index} mensagem={item.src} arrastar={item.arrastar}
                                    deletar={handleDelete} />;
                            default:
                                alert(`Tipo de item não existe ${item}`);
                                break;
                        };
                    })}
                </section>
                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center', marginTop: '10px' }}>
                    <button
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}
                        type="submit"
                    >
                        Enviar Treinamento
                    </button>
                    <button
                        style={{
                            padding: "10px 10px",
                            backgroundColor: "#1E90FF",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px",
                            color: "white"
                        }}
                        onClick={handleEnviarCapaTreinamento}
                        type="button"
                    >
                        Personalizar Capa
                    </button>
                </div>
            </form>

            {mostrarPopUp && (
                <UparCapa
                    closePopUp={fecharPopUp}
                    itens={[capa, setCapa]}
                />
            )}
        </>
    );
};

export default Destino;
