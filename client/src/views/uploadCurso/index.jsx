import React from 'react'
// import './estilo.css'
import imgs from '../../imgs/arrayImagens'
import Cabecalho from '../cabecalho/cabecalho';

function module() {
    return (
        <>

            <Cabecalho/>
            <main ClassName="modules">
                <div>
                    <h1 id="titulo">Importe seus cursos</h1>
                    <p id="subtitulo">Compartilhamento de arquivos</p>
                </div>
                <form>
                    <fieldset ClassName="grupo">
                        <div ClassName="campo">
                            <label for="nome"><strong></strong></label>

                        </div>
                        <div ClassName="campo">
                            <label for="sobrenome"><strong></strong></label>

                        </div>
                    </fieldset>
                    <div ClassName="campo">
                        <label for="text"><strong>Titulo do Curso</strong></label>
                        <input type="text" name="text" id="text" required /> </div>
                    <div ClassName="campo">
                        <label><strong>A empresa deseja Técnico?</strong></label>
                        <label>
                            <input type="radio" name="devweb" value="backend" />Sim
                        </label>
                        <label>
                            <input type="radio" name="devweb" value="fullstack" />Não
                        </label>
                    </div>
                    <div ClassName="campo">
                        <label for="senioridade"><strong>Técnico</strong></label>
                        <select id="senioridade" required>
                            <option selected disabled value="">Selecione</option>
                            <option>Ramon</option>
                            <option>Mauricio</option>
                            <option>Gregory</option>
                        </select>
                    </div>

                    <div ClassName="campo">
                        <label for="text"><strong>Duração</strong></label>
                        <input type="text" name="text" id="text" required />
                    </div>
                    <fieldset ClassName="grupo">
                        <div id="check">
                            <label><strong>Selecione os cursos que você quer aprender hoje:</strong></label><br />
                            <input type="checkbox" id="tecnologia1" name="tecnologia1" value="HTML" />
                            <label for="tecnologia1">  Pratica</label>
                            <input type="checkbox" id="tecnologia2" name="tecnologia2" value="CSS" />
                            <label for="tecnologia2"> Téorica</label>
                        </div>
                    </fieldset>
                    <div ClassName="campo">
                        <br />
                        <label for="experiencia"><strong>Descrição: </strong></label>
                        <textarea rows="6" id="experiencia" name="experiencia" placeholder="Conte um pouco sobre o que irá ser apresentado."></textarea>
                    </div>
                    <div ClassName="uploads">
                        <div ClassName="divuploads">
                            <img ClassName="uploadvideo" src={imgs.upload} alt="" />
                        </div>
                        <input type="file" name="" id="uploads_video" />
                    </div>
                    <button ClassName="botao" type="submit">Concluído</button>
                </form>
            </main>
            {console.log('cliquei')}
        </>
    )
}

function uploadCurso() {

    let numModule = Number(2);
    return (
        <>
            <h3>Modulo 1</h3>
            {module()}
            <span>Modulo {numModule++}</span>
            <button onClick={() => {module()}}>+</button>
        </>
    )
}

export default uploadCurso
