import debug from 'debug';
import { Command } from './command.js';

const log = debug('Reply');

export class Reply extends Command {
  constructor(client) {
    super(client);
    this.responses = new Map();
    this.responses.set('ping', 'pong');
    this.responses.set('bot respond', "I'm a pretty stupid bot.");
    this.responses.set('bot be nice', 'sorry :(');
    this.responses.set('gj bot', 'thx');
    this.responses.set('thx bot', 'np');
    this.responses.set('bot pls', '( ¬‿¬)');
    this.responses.set('.bugreport', 'Hi! To file a feature request or bug, go to: https://github.com/IanMitchell/ARX-7');
    this.responses.set('!addquote', 'Please message zane the quote you want added.');
    this.responses.set('!tuba', 'Whaaaaaaa whaaaaa whaaaaa');
    this.responses.set('!auth', '/msg authserv@services.gamesurge.net zaneserv irule1');
    this.responses.set('yes bot', '<3');
    this.responses.set('!quotelist', 'You can find a quote list here: http://pastebin.com/BNJvwwCL');
    this.responses.set('no bot', ':(');
    this.responses.set("i'm bored", 'thanks for the update fuse');
    this.responses.set('dang', 'Dang.');
    this.responses.set('!badword', 'so how do you dang denim-wearing fatgays feel about modern warfare 3');
    this.responses.set('!toymachine', 'http://rocksmith.ubi.com/rocksmith/en-us/buy/index.aspx');
    this.responses.set('!silly', "<+'Silly> hey guys 69 is a funny number becuas eit is also a sexual position lol!");
    this.responses.set('!greg', 'gerg');
    this.responses.set('!gerg', 'greg');
    this.responses.set('!scaruffi', 'The fact that so many books still name sfury as "the greatest or most significant or most influential" sperglord ever only tells you how far autism still is from becoming a serious art.');
  }

  message(from, to, text) {
    const reply = this.responses.get(text.toLowerCase());
    if (reply) {
      log(`${from} ${reply} reply`);
      this.send(to, reply);
    }
  }

  help(from) {
    this.client.notice(from, `Reply automatically responds to certain phrases.`);
  }
}
