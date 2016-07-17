import debug from 'debug';

const log = debug('Command');

export class Command {
  constructor(client) {
    this.client = client;
    this.wholeWordBlacklist = [
      '!ruels',
      'S ˙͜ >˙ A ˙͜ >˙ L ˙͜ >˙ S ˙͜ >˙ A',
      '!random',
      '!2hu',
      '!anime',
      '!nep',
    ];

    this.blacklist = [
      '!ruels',
      'S ˙͜ >˙ A ˙͜ >˙ L ˙͜ >˙ S ˙͜ >˙ A',
      '!random',
      '!2hu',
      '!anime',
      '!nep',
    ];
  }

  // Pseudo interfaces
  message() {
    return;
  }

  help() {
    return;
  }

  send(to, text) {
    if (this.checkBlacklist(text)) {
      this.client.say(to, 'STOP SPAMMING COMMANDS YOU FUCKS');
    } else {
      this.client.say(to, text);
    }
  }

  checkBlacklist(message) {
    for (const badword of this.blacklist) {
      if (message.toLowerCase().includes(badword)) {
        log(`Blacklist triggered on "${badword}"`);
        return true;
      }
    }

    for (const badword of this.wholeWordBlacklist) {
      for (const word of message.split(/\s+/)) {
        if (word.toLowerCase() === badword) {
          log(`Blacklist triggered on "${badword}"`);
          return true;
        }
      }
    }

    return false;
  }
}
