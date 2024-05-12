import { useEffect, useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendFeedback(e) {
    e.preventDefault()

    if (name == '' || email == '' || message == '') {
      alert('Preencha todos os campos!')
      return
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_869s17a", "template_b07vz0t", templateParams, "zEx5Za9bAcF2tmj6D")
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        alert('error', err);
      })
  }

  return (
    <>
      <Header>
        <h1>
          Avalie-nos
        </h1>
        <p>🤷‍♂️</p>
      </Header>
      <Main>
        <Alert>
          <i>🚩</i>
          <p>Gostaria de obter uma avaliação de sua excelência em relação ao desempenho tanto de mim quanto da minha companhia, conhecida como Kaka.</p>
        </Alert>
        <form onSubmit={sendFeedback}>

          <input
            className='input'
            type="text"
            placeholder='Nome completo'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className='input'
            type="text"
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className='input'
            name="Message"
            id="message"
            cols="30" rows="10"
            placeholder='Feedback...'
            onChange={(e) => setMessage(e.target.value)}
            value={message}></textarea>
          <input className='submit' type="submit" />
        </form>
      </Main>
      <Footer>
        <p>Feito por Rodriguinho com muito carinho</p>
        <Instagram>
          <a href="https://www.instagram.com/___rocambole___/" target="_blank" rel="noopener noreferrer">
            <img src="/rodrigo.jpg" alt="foto do rodrigo de oculos" />
          </a>
          <a href="https://www.instagram.com/__kaka_v.s___/" target="_blank" rel="noopener noreferrer">
            <img src="kaka.jpg" alt="foto do kaka mostrando dedo" />
          </a>
        </Instagram>
      </Footer>
    </>

  )
}

export default App

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-color-element);
  padding: 1rem 4rem;
  color: white;
  height: 6rem;
  h1, p{
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`

const Main = styled.main`
  padding: 2rem;
  background-color: var(--bg-color-main);
  min-height: calc(100svh - 17rem - 6rem);
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  
  form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 32rem; 
    max-width: 60rem;
  }
  .input{
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    background-color: var(--bg-color-element);
    color: white;
    border: none;
    border-radius: .7rem;
    border: solid #555 2px;

    &:focus-visible{
      border: solid #66ff99 2px;
      outline: none;
    }
  }
  .submit{
    width: 100%;
    margin-top: 1.5rem;
    padding: 1rem;
    font-size: 2rem;
    background-color: #22ff55;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 3rem;
    &:hover{
      background-color: #00cc66;
    }
  }
`

const Alert = styled.section`
  background-color: pink;
  padding: .75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 60rem;

  i{
    font-size: 1.5rem;
  }
  p{
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 17rem;
  background-color: var(--bg-color-element);
  color: white;
  padding: 2rem;
  justify-content: space-around;
  p{
    font-size: 1.5rem;
    text-align: center;
  }
`

const Instagram = styled.div`
  display: flex;
  gap: 3rem;
  img{
    width: 50px;
    border-radius: 100vw;
  }
`