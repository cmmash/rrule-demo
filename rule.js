const { RRule, RRuleSet, rrulestr } = require('rrule')
const { dateFormatUtil } = require('./genericUtils')

const ruleDemo = () => {
  const logUtil = {
    messages: [],
    saveLog: function(msg) {
      this.messages.push(msg);
    },
    printMessages: function() {
      return this.messages.map(m => m.replace('\n', ' <br> ')).join('\n');
    },
    logLineBreak: function() {
      this.messages.push('<hr>')
    }
  }

  // Create a rule:
  const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 5,
    byweekday: [RRule.MO, RRule.FR],
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30)),
    until: new Date(Date.UTC(2012, 12, 31))
  })

  // Get all occurrence dates (Date instances):
  const all = dateFormatUtil(rule.all());
  logUtil.saveLog(`\n<h5>all rule occurrences</h5>\n\n <ul>${all.join('<br>')}</ul>`);
  logUtil.logLineBreak();
  /*
  [ '2012-02-03T10:30:00.000Z',
    '2012-03-05T10:30:00.000Z',
    '2012-03-09T10:30:00.000Z',
    '2012-04-09T10:30:00.000Z',
    '2012-04-13T10:30:00.000Z',
    '2012-05-14T10:30:00.000Z',
    '2012-05-18T10:30:00.000Z',
  ]
  */

  // Get a slice:
  const slice = dateFormatUtil(rule.between(
    new Date(Date.UTC(2012, 7, 1)),
    new Date(Date.UTC(2012, 8, 1))
  ))
  logUtil.saveLog(`\n<h5>rule slice occurrences</h5><p>From 1st July 2012 to 1st August 2012</p>`)
  logUtil.logLineBreak();
  logUtil.saveLog(`<ul>${slice.join('<br>')}</ul>`);
  logUtil.logLineBreak();
  /*
  ['2012-08-27T10:30:00.000Z',
   '2012-08-31T10:30:00.000Z']
  */

  // Get an iCalendar RRULE string representation:
  // The output can be used with RRule.fromString().
  const toString = rule.toString();
  logUtil.saveLog(`\n<h5>rule toString value</h5> \n\n <p>${toString}</p>`);
  logUtil.logLineBreak();
  /* "DTSTART:20120201T093000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20130130T230000Z;BYDAY=MO,FR" */

  // Get a human-friendly text representation:
  // The output can be used with RRule.fromText().
  const toText = rule.toText()
  logUtil.saveLog(`\n<h5>rule to text</h5>\n <p>${toText}</p>`);
  logUtil.logLineBreak();
  /* "every 5 weeks on Monday, Friday until January 31, 2013" */

  const output = logUtil.printMessages();
  // console.log('\n\n RRULE output = \n', output);
  return output;
}

module.exports = ruleDemo;