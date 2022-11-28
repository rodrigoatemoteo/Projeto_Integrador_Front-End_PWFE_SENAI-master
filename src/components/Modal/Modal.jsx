import React from 'react';
import '../Modal/Modal.css';

export default function Modal({children}){
  return(
    <>
      <div id="open-modal" class="modal-window">
        <div>
          <a href="#" title="Close" class="modal-close">Close</a>
            <h1>Realize sua transação desejada:</h1>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, dolor?</div><br />
            <div><small>Clique no link abaixo para efetuar a operação!</small></div>
          <a href="https://chrome.google.com/webstore/detail/chroma/pkgejkfioihnchalojepdkefnpejomgn?utm_campaign=chromapromo&utm_source=codepen.io" target="_blank"></a>

        </div>
      </div>
    </>
  );
}