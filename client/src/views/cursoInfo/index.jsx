import React from 'react'
import './estilo.css'

function cursoInfo() {
    return (
    <>
            <section class="barPesquisar">

                <div class="secEsq">
                    <img class="menu" src="imgs/menuIcon.png" alt=""/>
                        <img class="logo" src="imgs/logoTreinOffer.png" alt="TreinOffer"/>
                        </div>

                        <div class="secMeio">
                            <input type="text" placeholder="Buscar cursos"/>
                                <button class="btPesquisar">
                                    <img src="./imgs/searchIcon.png" alt="Lupa"/>
                                </button>
                        </div>

                        <div class="secDir">
                            <img class="uploadTreino" src="./imgs/uploadIcon.png" alt="Upload"/>
                                <img class="menuPerfil" src="./imgs/logoEmpresa.jpeg" alt="Menu"/>
                                </div>
                            </section>

                            <main className='main_curso'>
                                <section class="informacoes">
                                    <div>
                                        <img src="" alt="Val"/>
                                            <h4>Até 20 dezembro 2023</h4>
                                    </div>
                                    <div>
                                        <img src="" alt="Reg"/>
                                            <h4>17 de julho 2023</h4>
                                    </div>
                                    <div>
                                        <img src="" alt="Off"/>
                                            <h4>Sim</h4>
                                    </div>
                                </section>
                                <section className='description'>
                                    <div>
                                        <img src="" alt="Especializacao economia rural"/>
                                    </div>
                                    <div class="detalhes">
                                        <div>
                                            <img src="" alt="Dur"/>
                                        </div>
                                        <div>
                                            <h4>6 meses</h4>
                                        </div>
                                    </div>
                                    <div class="detalhes">
                                        <div>
                                            <img src="" alt="Horas semanais"/>
                                        </div>
                                        <div>
                                            <h4>4~6 horas / semana</h4>
                                        </div>
                                    </div>
                                    <div class="detalhes">
                                        <div>
                                            <img src="" alt="Dificuldade"/>
                                        </div>
                                        <div>
                                            <h4>Introdutório</h4>
                                        </div>
                                    </div>
                                    <div className="topicos">
                                        <dl>
                                            <dt>Topicos</dt>
                                            <dd><img src="" alt="eduardo" /></dd>
                                        </dl>
                                    </div>
                                </section>
                            </main>
                        </>
                        )
}

export default cursoInfo