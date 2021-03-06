import React from 'react';

export const QueLeDoyError = () => {
  return (
    <div className='container'>
      <div className='col s1'/>
      <div className='col s5'>
        <img className='error-image' src='https://c.tenor.com/SBAYO8dpFa8AAAAC/fidel-queledoy.gif'
             alt='que le doy?'/>
      </div>
      <div className='col s5'> Parece que tu <b>teléfono</b> no figura en la lista de <b>invitados</b>
        , porfa comunicate conmigo <a href='https://wa.me/+543513079896'><b>aca</b></a></div>
      <div className='col s1'/>
    </div>

  )
}

export const NoPhoneError = () => {
  return (
    <div className='container'>
      <div className='col s6 offset-s1'>
        <img className='error-image' src='https://c.tenor.com/ampW8g8v-vMAAAAd/hack-khaby.gif' alt='really?'/>
      </div>
    </div>
  )
}
