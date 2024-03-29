import axios from 'axios';

import { url } from '../utils';

export function getCharacters() {
  return axios.get(`${url}/characters`);
}

export function postCharacter(character) {
  return axios.post(`${url}/characters`, character);
}

export const scales = [
  { value: 4, label: 'Pessoa comum' },
  { value: 5, label: 'Novato' },
  { value: 7, label: 'Lutador' },
  { value: 10, label: 'Campeão' },
  { value: 12, label: 'Lenda' },
];

export const damages = ['Dano Físico', 'Dano por Energia'];

export const types = [
  {
    id: 1,
    damage: 'Dano Físico',
    type: 'Corte',
    description: 'Lâminas ou objetos afiados. Espadas, machados, garras...',
  },
  {
    id: 2,
    damage: 'Dano Físico',
    type: 'Perfuração',
    description:
      'Armas pontudas ou armas de fogo. Flechas, lanças, adagas, dardos, espinhos, chifres, pistolas..',
  },
  {
    id: 3,
    damage: 'Dano Físico',
    type: 'Esmagamento',
    description:
      'Armas sem partes afiadas ou pontudas, ou deslocamento de matéria (como explosões). Socos, chutes, clavas, martelos, pedras, bombas, granadas...',
  },
  {
    id: 4,
    damage: 'Dano por Energia',
    type: 'Fogo',
    description:
      'Lança-chamas, bolas de fogo, raio laser, bombas incendiárias...',
  },
  {
    id: 5,
    damage: 'Dano por Energia',
    type: 'Frio',
    description: 'Raio congelante, bolas de neve, chuva de gelo...',
  },
  {
    id: 6,
    damage: 'Dano por Energia',
    type: 'Elétrico',
    description: 'Choques e relâmpagos em geral.',
  },
  {
    id: 7,
    damage: 'Dano por Energia',
    type: 'Químico',
    description:
      'Ácido, fumaça, veneno, toxinas, poluentes, líquidos perigosos em geral...',
  },
  {
    id: 8,
    damage: 'Dano por Energia',
    type: 'Sônico',
    description: 'Estrondo sônico, vento, magias musicais...',
  },
];

export const schools = ['Magia Branca', 'Magia Elemental', 'Magia Negra'];

export const spells = [
  {
    id: 1,
    name: 'Ataque Mágico',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
  {
    id: 2,
    name: 'Cancelamento de Magia',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
  {
    id: 3,
    name: 'Detecção de Magia',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
  {
    id: 4,
    name: 'Força Mágica',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
  {
    id: 5,
    name: 'Pequenos Desejos',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
  {
    id: 6,
    name: 'Proteção Mágica',
    school: '',
    cost: '',
    scope: '',
    duration: '',
    description: '',
  },
];

export const races = [
  { id: 1, value: 0, label: 'Humano (0)', descricao: '' },
  { id: 2, value: 1, label: 'Anão (1)', descricao: '' },
  { id: 3, value: 2, label: 'Elfo (2)', descricao: '' },
];

export const classes = [
  { id: 1, label: 'Alquimista', descricao: '' },
  { id: 2, label: 'Cavaleiro', descricao: '' },
  { id: 3, label: 'Mago', descricao: '' },
];

export const advantages = [
  { id: 1, value: 1, label: 'Paladino', descricao: '' },
  { id: 2, value: 2, label: 'Memória expandida', descricao: '' },
  { id: 3, value: 2, label: 'Invisibilidade', descricao: '' },
];

export const disadvantages = [
  { id: 1, value: -1, label: 'Código de honra', descricao: '' },
  { id: 2, value: -1, label: 'Má Fama', descricao: '' },
  { id: 3, value: -2, label: 'Maldição', descricao: '' },
];
