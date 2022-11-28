import { useState } from 'react';

import './Cards.css';

import Modal from '../Modal/Modal';

export default function Cards(){

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [ cards ] = useState([
    {
      title: 'Extrato',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },
    {
      title: 'PIX',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },
    {
      title: 'Empréstimo',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },
    {
      title: 'Transferência',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },
    {
      title: 'Pagamentos',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },{
      title: 'Investimentos',
      text: 'Lorem ipsum dolor sit'+ 
      'amet consectetur adipisicing'+ 
      'elit. Laboriosam esse molestiae'
    },
  ]);

  return(
    <>
      <div>
        <section className='containerCards'>
          <div className='container'>
            <h1 className='titleCards'>Saldo disponível:</h1>
            <div className='containerModal'>
              <div class="interior">
                <a class="btn" href="#open-modal">
                    <div className='cards'>
                      {cards.map((card, i) => (
                        <div key={i} className='card'>
                          <h3>{card.title}</h3>
                          <p>{card.text}</p>
                          <button onClick={()=>setIsModalVisible(true)}>+Detalhes</button>
                        </div>
                      ))}
                    </div>
                    {isModalVisible ? (<Modal><h2>Modal App</h2></Modal>) : null}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


  
    
  