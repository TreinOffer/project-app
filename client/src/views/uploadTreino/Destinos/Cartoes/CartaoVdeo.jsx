// import React from 'react';
// import imgs from '../../../../imgs/arrayImagens';
// import './CartaoVdeo.css';

// const CartaoVdeo = ({ deletar, index, url, setItens, isFlipped, isUrl }) => {

//     function actionExpanse() {

//         setItens[1](prevItens => {
//             const itens = [...prevItens];
//             itens[setItens[0]].map((item, i) =>
//                 i === index ? item.isOpen = !isFlipped : item
//             )
//             return itens;
//         });
//     };

//     function actionTypeVideo() {
//         setItens[1](prevItens => {
//             const itens = [...prevItens];
//             itens[setItens[0]].map((item, i) =>
//                 i === index ? item.isUrl = !isUrl : item
//             )
//             return itens;
//         });
//     };

//     const handleUploadImagem = (e) => {
//         console.log("handleUploadVideo: ", handleImage);
//         const file = e.target.files[0];
//         if (file) {
//             const url = URL.createObjectURL(file)
//             setNewImagem(() => {
//                 handleImage(index, url);
//                 return newImagem;
//             });
//         };
//     };

//     return (
//         <div className='cartaoVideo' >
//             <div className='div-video'>
//                 {
//                     isUrl ?
//                         <iframe width="100%" height='100%'
//                             src={url} frameBorder="0" allowfullscreen></iframe>
//                         :
//                         <video width="100%" height={isFlipped ? 'calc((100% + 500px) -  200px)' : '100%'}
//                             controls alt={`Video${index}`} >
//                             <source src={url} type="video/mp4" />
//                             <source src={url} type="video/ogg" />
//                         </video>
//                 }

//                 {/* <video style={{ height: isFlipped ? 'calc(100% - 200px)' : '100%' }}
//                             src={url} alt={`Video${index}`} /> */}
//                 <div className='btn-expanse'
//                 >
//                     <hr />
//                     <img src={imgs.arrowUp} alt="arrow" onClick={actionExpanse}
//                         style={{
//                             transition: '1.6s ease-in-out',
//                             transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)'
//                         }}
//                     />
//                     <div className='actions' style={{
//                         maxHeight: isFlipped ? '200px' : '0px',
//                         borderBottom: isFlipped ? '1px solid black' : '0px solid black',
//                     }} >
//                         <div className='div-rem'>
//                             <img onClick={() => deletar(index)} src={imgs.trash} alt="Remover" style={{ color: 'black' }} />
//                         </div>
//                         <div className='div-selecionar'>
//                             {/* <input type="url" name="" id="" /> */}
//                             <input onChange={handleUploadImagem} accept='.jpg,.png,.jpeg'
//                                 multiple={false} type="file" name="VideoTreino"
//                                 className='buttonUpload' id={`Video${index}`} />
//                             <h4 className='selector-text'>Selecionar</h4>
//                         </div>
//                         <div onChange={actionTypeVideo} className="div-change-type" >
//                             <select>
//                                 <option value="youtube">YouTube</option>
//                                 <option value="local">Video Local</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// }

// export default CartaoVdeo;
