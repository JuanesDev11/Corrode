import realMadrid from '../../../assets/RealMadrid.jpg';
import barcelona from '../../../assets/Barcelona.jpg';
import city from '../../../assets/city.jpg';
import united from '../../../assets/united.jpg';
import munich from '../../../assets/Bayern Múnich.jpg';
import paris from '../../../assets/paris.jpg';
import juventus from '../../../assets/juventus.jpg';
import milan from '../../../assets/milan.jpg';
//jugadores
import j1 from '../../../assets/j1.png';
import j2 from '../../../assets/j2.png';
import j3 from '../../../assets/j3.png';
import j4 from '../../../assets/j4.png';
import j5 from '../../../assets/j5.png';
import j6 from '../../../assets/j6.png';
import j13 from '../../../assets/j13.png';
import j14 from '../../../assets/j14.png';
import j15 from '../../../assets/j15.png';
import j16 from '../../../assets/j16.png';
import j21 from '../../../assets/j21.png';
import j22 from '../../../assets/j22.png';
import j23 from '../../../assets/j23.png';

export const EQUIPOS = [
  { id: 1,
    name: "Real Madrid", 
    img: realMadrid,
    jugadores: [
      //Porteros
      {id: "s1", name: "Thibaut Courtois", ps: "Portero", foto:j1,
        estadisticaJugador: [
          { atributo: 'Reflejos y Paradas', valor: 40 },
          { atributo: 'Alcance', valor: 92 },
          { atributo: 'Juego aéreo', valor: 85 },
          { atributo: 'Posicionamiento', valor: 80 },
          { atributo: 'Precisión en el pase', valor: 30 },
          { atributo: 'Control bajo presión', valor: 84 },
        ]
      },
      {id: "s2", name: "Andriy Lunin", ps: "Portero", foto:j2},

      //Defensas
      {id: "s3", name: "Asencio", ps: "Defensa", foto:j3},
      {id: "s4", name: "Éder Militão", ps: "Defensa", foto:j4},
      {id: "s5", name: "Huijsen", ps: "Defensa", foto:j5},
      {id: "s6", name: "Antonio Rüdiger", ps: "Defensa", foto:j6},

      //Centrocampistas
      {id: "s13", name: "Jude Bellingham", ps: "Centrocampista", foto:j13},
      {id: "s14", name: "Federico Valverde", ps: "Centrocampista", foto:j14},
      {id: "s15", name: "Eduardo Camavinga", ps: "Centrocampista", foto:j15},
      {id: "s16", name: "Aurélien Tchouaméni", ps: "Centrocampista", foto:j16},

      //Delanteros
      {id: "s21", name: "Kylian Mbappé", ps: "Delantero", foto:j21},
      {id: "s22", name: "Vinicius Junior", ps: "Delantero", foto:j22},
      {id: "s23", name: "Rodrygo", ps: "Delantero", foto:j23},
    ],
    estadisticaGeneral: [
      { atributo: 'Ataque', valor: 88 },
      { atributo: 'Defensa', valor: 82 },
      { atributo: 'Posesión del balón', valor: 85 },
      { atributo: 'Ritmo', valor: 80 },
      { atributo: 'Goles marcados', valor: 87 },
      { atributo: 'Precisión de pase', valor: 84 },
    ]
  },
  { id: 2, name: "FC Barcelona", img: barcelona },
  { id: 3, name: "Manchester City", img: city },
  { id: 4, name: "Manchester United", img: united },
  { id: 5, name: "Bayern Múnich", img: munich },
  { id: 6, name: "Paris Saint-Germain", img: paris },
  { id: 7, name: "Juventus", img: juventus },
  { id: 8, name: "AC Milan", img: milan },
];