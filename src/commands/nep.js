import debug from 'debug';
import { Command } from './command.js';

const log = debug(`Nep`);

export class Nep extends Command {
  constructor(client) {
    super(client);

    this.responses = [
      'The best nep is Anonydeath! https://waa.ai/vkHI',
      'The best nep is Copypaste! https://waa.ai/k04n',
      'The best nep is 5pb! https://waa.ai/k00z',
      'The best nep is Abnes! https://waa.ai/k00o',
      'The best nep is Ai Masujima! https://waa.ai/k00X',
      'The best nep is Arfoire! https://waa.ai/k003',
      'The best nep is B-Sha! https://waa.ai/k00O',
      'The best nep is Blanc! https://waa.ai/k00T',
      'The best nep is White Heart! https://waa.ai/k00e',
      'The best nep is Ultradimension White Heart! https://waa.ai/k00m',
      'The best nep is Ultradimension Blanc! https://waa.ai/k00x',
      'The best nep is Blossom Aisen! https://waa.ai/k00q',
      'The best nep is Broccoli! https://waa.ai/k00l',
      'The best nep is C-Sha! https://waa.ai/k00F',
      'The best nep is Cave! https://waa.ai/k009',
      'The best nep is CFW Magic! https://waa.ai/k00s',
      'The best nep is Chika Hakozaki! https://waa.ai/k00c',
      'The best nep is Compa! https://waa.ai/k00V',
      'The best nep is Baby Compa! https://waa.ai/k00w',
      'The best nep is Compile! https://waa.ai/k00H',
      'The best nep is Croire! https://waa.ai/k00U',
      'The best nep is Cyberconnect2! https://waa.ai/k00K',
      'The best nep is Dangly! https://waa.ai/k00R',
      'The best nep is Dark Purple! https://waa.ai/k00Q',
      'The best nep is Deco! https://waa.ai/k002',
      'The best nep is Dengekiko! https://waa.ai/kqCJ',
      'The best nep is Ein Al! https://waa.ai/k00I',
      'The best nep is Estelle! https://waa.ai/k008',
      'The best nep is Falcom! https://waa.ai/k00W',
      'The best nep is Ultradimension Falcom! https://waa.ai/k00i',
      'The best nep is Famitsu! https://waa.ai/kqCm',
      'The best nep is Generia! https://waa.ai/k00g',
      'The best nep is God Eater! https://waa.ai/k00h',
      'The best nep is Gust! https://waa.ai/k00P',
      'The best nep is Histoire! https://waa.ai/k007',
      'The best nep is Ultradimension Histoire! https://waa.ai/k00L',
      'The best nep is IF! https://waa.ai/k00r',
      'The best nep is Baby IF! https://waa.ai/k005',
      'The best nep is Jackpot! https://waa.ai/k00n',
      'The best nep is K-Sha! https://waa.ai/k00G',
      'The best nep is Kei Jinguji! https://waa.ai/k09E',
      'The best nep is Lady Wac! https://waa.ai/k09v',
      'The best nep is Chun-Li! https://waa.ai/k09k',
      'The best nep is Lid! https://waa.ai/k09z',
      'The best nep is Linda! https://waa.ai/k09a',
      'The best nep is Little Rain! https://waa.ai/k09o',
      'The best nep is MAGES.! https://waa.ai/k09X',
      'The best nep is MarvelousAQL! https://waa.ai/k09O',
      'The best nep is Million Arthur! https://waa.ai/k09e',
      'The best nep is Mina Nishizawa! https://waa.ai/4ZVw',
      'The best nep is Moru! https://waa.ai/vVse',
      'The best nep is Nepgear! https://waa.ai/k09J',
      'The best nep is Purple Sister! https://waa.ai/k09m',
      'The best nep is Ultradimension Nepgear! https://waa.ai/k09x',
      'The best nep is Ultradimension Purple Sister! https://waa.ai/k09l',
      'The best nep is Neptune! https://waa.ai/k099',
      'The best nep is Purple Heart! https://waa.ai/k09S',
      'The best nep is Ultradimension Neptune! https://waa.ai/k09f',
      'The best nep is Ultradimension Purple Heart! https://waa.ai/k09c',
      'The best nep is Adult Neptune! https://waa.ai/k09V',
      'The best nep is Nisa! https://waa.ai/k09w',
      'The best nep is Nitroplus! https://waa.ai/k09H',
      'The best nep is Noire! https://waa.ai/k09K',
      'The best nep is Black Heart! https://waa.ai/k09R',
      'The best nep is Ultradimension Noire! https://waa.ai/k098',
      'The best nep is Ultradimension Black Heart! https://waa.ai/k09I',
      'The best nep is Peashy! https://waa.ai/k09W',
      'The best nep is Yellow Heart! https://waa.ai/k09i',
      'The best nep is Baby Peashy! https://waa.ai/k09D',
      'The best nep is Plutia! https://waa.ai/k091',
      'The best nep is Iris Heart! https://waa.ai/4bL4',
      'The best nep is Poona! https://waa.ai/k096',
      'The best nep is Ram! https://waa.ai/k09N',
      'The best nep is White Sister (Ram)! https://waa.ai/k09h',
      'The best nep is Red! https://waa.ai/k09P',
      'The best nep is Rei Ryghts! https://waa.ai/k09p',
      'The best nep is Rei Ryghts (HDD)! https://waa.ai/k09Z',
      'The best nep is Resta! https://waa.ai/k097',
      'The best nep is Rom! https://waa.ai/k09L',
      'The best nep is White Sister (Rom)! https://waa.ai/k09b',
      'The best nep is Ryuka! https://waa.ai/k09r',
      'The best nep is S-Sha! https://waa.ai/k09n',
      'The best nep is Sango! https://waa.ai/k09G',
      'The best nep is Saori! https://waa.ai/k0SE',
      'The best nep is Stella! https://waa.ai/k0S4',
      'The best nep is Sting! https://waa.ai/k0Sv',
      'The best nep is Tamsoft! https://waa.ai/k0Sj',
      'The best nep is Tekken! https://waa.ai/4rV0',
      'The best nep is Tiara! https://waa.ai/k0Sz',
      'The best nep is Tsunemi! https://waa.ai/k0Sa',
      'The best nep is Uni! https://waa.ai/k0So',
      'The best nep is Black Sister! https://waa.ai/k0SX',
      'The best nep is Uzume! https://waa.ai/k0S3',
      'The best nep is Orange Heart! https://waa.ai/k0SO',
      'The best nep is Vert! https://waa.ai/k0Su',
      'The best nep is Green Heart! https://waa.ai/k0St',
      'The best nep is Ultradimension Green Heart! https://waa.ai/k0Se',
      'The best nep is Ultradimension Vert! https://waa.ai/k0ST',
      'The best nep is Vio! https://waa.ai/k0Sm',
      'The best nep is Wyn! https://waa.ai/k0SJ',

    ];
  }

  message(from, to, text) {
    if (text.startsWith(`!ne`)) {
      log(`${from} on: ${text}`);

      const result = this.responses[Math.floor(Math.random() * this.responses.length)];
      this.send(to, `${from}: ${result}`);
    }
  }

  help(from) {
    this.client.notice(from, `.8ball question; randomly outputs response`);
  }
}
