import debug from 'debug';
import { Command } from './command.js';

const log = debug('7ball');

export class Sevenball extends Command {
  constructor(client) {
    super(client);

    this.responses = [
      'I think so.',
      'Not on your life, fag.',
      'Is the sky blue?',
      'Yes.',
      'No.',
      'Obviously.',
      'Obviously not.',
      'I LIKE CHOCOLATE MILK!',
      'I think so, but then again, I`m just an idiot.',
      'How should I know?',
      'Ask me later, I`m having sex with ChanServ at the moment.',
      'I can`t be bothered right now. Try later.',
      'Bah, I`m not that into Pokemon.',
      'Why the hell do you want to know that in the first place?',
      'Fuck yeah.',
      'Hell no.',
      'Affirmative.',
      'Negative, you`re beat.',
      'Outlook not so good',
      'No, fuck you.',
      'RARGHARAGHA.',
      'Seems likely.',
      'Seems probable.',
      'STOP MOCKING ME!',
      'Pretty pathetic that you need to ask me.',
      'Not in a million years.',
      'Bananahammock.',
      'Certainly.',
      'Definitely.',
      'Um... yes?',
      'ALL GLORY TO THE HYPNOTOAD!',
      'Indeed.',
      'Quite so.',
      'Outlook foggy, try again never.',
      'I`m not listening, I`m not listening. NA NA NA NA NA NA!',
      'If you give a mouse a cookie, he`ll want a glass of milk.',
      'If I say yes, will you love me?',
      'I guess so.',
      'Dear god no.',
      'Not in a million years.',
      'Not in a million beers.',
      'Yeah sure; why not?',
      'Nope.avi',
      'A clear cloudless day-time sky is blue because molecules in the air scatter blue light from the sun more than they scatter red light.  When we look towards the sun at sunset, we see red and orange colours because the blue light has been scattered out and away from the line of sight',
      'yeah',
      'dang',
      'yeah, probably',
      'The fact that so many books still name the Beatles as "the greatest or most significant or most influential" rock band ever only tells you how far rock music still is from becoming a serious art. Jazz critics have long recognized that the greatest jazz musicians of all times are Duke Ellington and John Coltrane, who were not the most famous or richest or best sellers of their times, let alone of all times. Classical critics rank the highly controversial Beethoven over classical musicians who were highly popular in courts around Europe. Rock critics are still blinded by commercial success. The Beatles sold more than anyone else (not true, by the way), therefore they must have been the greatest. Jazz critics grow up listening to a lot of jazz music of the past, classical critics grow up listening to a lot of classical music of the past. Rock critics are often totally ignorant of the rock music of the past, they barely know the best sellers. No wonder they will think that the Beatles did anything worthy of being saved. ',

    ];
  }

  message(from, to, text) {
    if (text.startsWith('!7')) {
      log(`${from} on: ${text}`);

      const result = this.responses[Math.floor(Math.random() * this.responses.length)];
      this.send(to, `${from}: ${result}`);
    }
  }

  help(from) {
    this.client.notice(from, `.8ball question; randomly outputs response`);
  }
}
