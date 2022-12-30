import React from 'react'
import './hero.css'
import {BsPlayFill} from 'react-icons/bs'
import {BiInfoCircle} from 'react-icons/bi'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='title-container'>
                <h2 id='first-title'>RISE OF EMPIRES</h2>
                <h1 id='second-title'>OTTOMAN</h1>
                <h2 id='third-title'>MEHMET VE VLAD KARŞI KARŞIYA</h2>
            </div>
            <div className='top-title'>
                <div className='top-ten-box'>Top 10</div>
                <h2>Dizilerde Bugün 2 Numara</h2>
            </div>
            <div className='title-desc'>
                <p>Osmanlı Sultanı II. Mehmet, Bizans'ın başkenti Konstantinopolis'i fethetmek üzere destansı bir sefere çıkar ve tarihinn akışını yüzyıllar boyunca değiştirir.</p>
            </div>
            <div className='buttons'>
                <button>
                    <BsPlayFill/>
                    <span>Oynat</span>
                </button>
                <button>
                    <BiInfoCircle/>
                    <span>Daha Fazla Bilgi</span>
                </button>
            </div>
        </div>
        
    </div>
  )
}
