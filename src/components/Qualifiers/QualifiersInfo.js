// src/components/QualifiersInfo.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';
import LocalPlayIcon from '@mui/icons-material/LocalPlay'; // Substitua pelo ícone desejado
import PeopleIcon from '@mui/icons-material/People'; // Substitua pelo ícone desejado
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Substitua pelo ícone desejado

function QualifiersInfo() {
  return (
    <section className='QualifiersInfo Background'>
      <div>
        <div elevation={3} className="informativo" style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.7)' }}>
          <div className='info-divide'>
            <Typography variant="h5"><LocalPlayIcon fontSize="small" style={{ marginRight: '10px' }} />CCG Qualifiers</Typography>
            <Typography variant="body1" style={{ marginTop: '10px'}}>
              CCG qualifiers, são torneios classificatórios, executados por lojas WPN de todo o Brasil, que qualificam jogadores para vagas da CCG Showdown.
            </Typography>
          </div>
          <div className='info-divide'>
            <Typography variant="h5"><PeopleIcon fontSize="small" style={{ marginRight: '10px' }} />Quem pode jogar os qualificatórios?</Typography>
            <Typography variant="body1" style={{ marginTop: '10px'}}>
              Qualquer pessoa poderá participar dos torneios de qualificação, contanto que possua uma wizards account.
            </Typography>
          </div>
          <div className='info-divide'>
            <Typography variant="h5"><SportsEsportsIcon fontSize="small" style={{ marginRight: '10px'}} />Como me qualifico para o CCG showdown?</Typography>
            <Typography variant="body1" style={{ marginTop: '10px'}}>
            O vencedor de cada uma das etapas realziadas em lojas WPN, estará qualificado e poderá inscrever-se no torneio CCG showdown do ciclo correspondente à sua qualificação.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualifiersInfo;
