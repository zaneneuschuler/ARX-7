import assert from "assert";
import {Client} from "../helpers.js";
import {Order} from "../../src/commands/order";

let client = new Client();
let order = new Order(client);

function uniq(arr) {
  let seen = {};
  return arr.filter((item) => {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

describe('Order', () => {
  afterEach(() => {
    client.resetLog();
  });

  describe('Triggers', () => {
    it('should respond to .o trigger', () => {
      return order.message('Mocha', '#test', '.o this, that').then(() => {
        assert(client.lastMessage);
      });
    });

    it('should respond to .order trigger', () => {
      return order.message('Mocha', '#test', '.order one, two').then(() => {
        assert(client.lastMessage);
      });
    });

    it('should not respond to .orde trigger', () => {
      return order.message('Mocha', '#test', '.orde one, two').then(() => {
        assert.equal(null, client.lastMessage);
      });
    });

    it('should activate in beginning of phrase', () => {
      return order.message('Mocha', '#test', '.o this, that').then(() => {
        assert.notEqual(null, client.lastMessage);
      });
    });

    it('should not activate in middle of phrase', () => {
      return order.message('Mocha', '#test', 'test .o this, that').then(() => {
        assert.equal(null, client.lastMessage);
      });
    });

    it('should not activate with an empty list', () => {
      return order.message('Mocha', '#test', '.o').then(() => {
        assert.equal(null, client.lastMessage);
      });
    });

    it('should activate with a list of commas', () => {
      let outputs = [
        'Mocha: ,,, ,,, ,',
        'Mocha: ,, ,,, ,,',
        'Mocha: ,,, ,, ,,'
      ];

      return order.message('Mocha', '#test', '.o ,, , ,,').then(() => {
        assert(outputs.includes(client.lastMessage));
      });
    });

    it('should activate with a single comma', () => {
      return order.message('Mocha', '#test', '.o ,').then(() => {
        assert.equal('Mocha: ,', client.lastMessage);
      });
    });
  });

  describe('General Usage', () => {
    it('should respond in correct channel', () => {
      return order.message('Mocha', '#test', '.o this, that').then(() => {
        assert.equal('#test', client.lastTarget);
      });
    });

    it("should include user's name", () => {
      return order.message('Mocha', '#test', '.order this, that').then(() => {
        assert(client.lastMessage.startsWith('Mocha: '));
      });
    });
  });

  describe('Range', () => {
    it('should choose from within range', () => {
      let lowerBound = 0,
          upperBound = 10,
          range = `${lowerBound}-${upperBound}`;


      return order.message('Mocha', '#test', `.o ${range}`).then(() => {
        let values = client.lastMessage.replace('Mocha: ', '').split(', ');
        values.forEach(c => {
          assert(c >= lowerBound);
          assert(c <= upperBound);
        });
      });
    });

    it('should handle reverse ranges', () => {
      let expected = [
        'Mocha: 5, 6',
        'Mocha: 6, 5'
      ];

      return order.message('Mocha', '#test', '.o 6-5').then(() => {
        assert(expected.includes(client.lastMessage));
      });
    });

    it('should handle negative ranges', () => {
      let expected  = [
        'Mocha: -5, -6',
        'Mocha: -6, -5'
      ];

      return order.message('Mocha', '#test', '.o -5--6').then(() => {
        assert(expected.includes(client.lastMessage));
      });
    });

    it('should include lower and upper bounds', () => {
      let lowerBound = 0,
          upperBound = 5,
          range = `${lowerBound}-${upperBound}`;


      return order.message('Mocha', '#test', `.o ${range}`).then(() => {
        let values = client.lastMessage.replace('Mocha: ', '').split(', ');
        assert(values.includes(lowerBound.toString()));
        assert(values.includes(upperBound.toString()));
      });
    });

    it('should only include a max of 20 items', () => {
      return order.message('Mocha', '#test', '.o 1-25').then(() => {
        assert.equal(21, client.lastMessage.split(', ').length);
        assert(client.lastMessage.includes('and some more...'));
      });
    });

    it('should cap range at 1024', () => {
      return order.message('Mocha', '#test', '.o 1-2048').then(() => {
        let msg = client.lastMessage.replace('Mocha: ', '');
        msg = msg.replace(', and some more...', '');
        msg.split(', ').forEach(c => assert(1024 >= c));
      });
    });

    // The torchlight test
    it('should handle large numbers', () => {
      let val = 9007199254740992;
      return order.message('Mocha', '#test', `.o ${val}-${val + 2}`).then(() => {
        assert.equal(client.lastMessage, 'Mocha: Value is too high.');
      });
    });
  });

  describe('List', () => {
    it('should choose from within list', () => {
      let expected = [
        'Mocha: a, b c, d',
        'Mocha: a, d, b c',
        'Mocha: b c, a, d',
        'Mocha: b c, d, a',
        'Mocha: d, a, b c',
        'Mocha: d, b c, a'
      ];

      return order.message('Mocha', '#test', '.o a, b c, d').then(() => {
        assert(expected.includes(client.lastMessage));
      });
    });

    it('should randomize results', () => {
      let expected = [
        'Mocha: a, b, c',
        'Mocha: a, c, b',
        'Mocha: b, a, c',
        'Mocha: b, c, a',
        'Mocha: c, a, b',
        'Mocha: c, b, a'
      ];

      let results = [];
      let runs = 10;

      return new Promise((resolve, reject) => {
        for (let i = 0; i < runs; i++) {
          order.message('Mocha', '#test', '.o a b c');
          assert(expected.includes(client.lastMessage));
          results.push(client.lastMessage);

          // Still can fail, but has a [(0.167^20) * 100]% chance of it
          if (i == 9 && uniq(results).length == 1) {
            runs *= 2;
          }
          if (i + 1 == runs) {
            resolve();
          }
        }
      }).then(() => {
        assert(uniq(results).length > 1);
      });
    });
  });
});
