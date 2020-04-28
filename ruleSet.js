const { RRule, RRuleSet, rrulestr } = require('rrule')
const { dateFormatUtil } = require('./genericUtils')

const ruleSetDemo = () => {
  const rruleSet = new RRuleSet();

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

  // Add a rrule to rruleSet
  rruleSet.rrule(new RRule({
    freq: RRule.MONTHLY,
    count: 5,
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30, 0))
  }))

  let rule = new RRule({
    freq: RRule.MONTHLY,
    count: 5,
    dtstart: new Date(Date.UTC(2012, 1, 1, 10, 30, 0))
  });

  logUtil.saveLog("<h5>initial SET all</h5>" + "\n" + dateFormatUtil(rruleSet.all()));
  logUtil.logLineBreak();
  logUtil.saveLog("<h5>initial RULE all</h5>" + "\n" + dateFormatUtil(rule.all()));
  logUtil.logLineBreak();
  logUtil.logLineBreak();

  // Add a date to rruleSet
  rruleSet.rdate(new Date(Date.UTC(2012, 6, 1, 10, 30)))

  // Add another date to rruleSet
  rruleSet.rdate(new Date(Date.UTC(2012, 6, 2, 10, 30)))

  // Add a exclusion rrule to rruleSet
  rruleSet.exrule(new RRule({
    freq: RRule.MONTHLY,
    count: 2,
    dtstart: new Date(Date.UTC(2012, 2, 1, 10, 30))
  }))

  // Add a exclusion date to rruleSet
  rruleSet.exdate(new Date(Date.UTC(2012, 5, 1, 10, 30)))

  // Get all occurrence dates (Date instances):
  const all = dateFormatUtil(rruleSet.all());
  logUtil.saveLog(`\n<h5>ALL OCCURRENCES</h5>\n\n<ul>${all.join('<br>')}</ul>`);
  logUtil.logLineBreak();
  // [ '2012-02-01T10:30:00.000Z',
  //   '2012-05-01T10:30:00.000Z',
  //   '2012-07-01T10:30:00.000Z',
  //   '2012-07-02T10:30:00.000Z' ]

  // Get a slice:
  const slice = dateFormatUtil(
    rruleSet.between(new Date(Date.UTC(2012, 2, 1)), new Date(Date.UTC(2012, 6, 2)))
  );
  logUtil.saveLog(`\n<h5>SLICE OCCURRENCES</h5><p>From 1st Feb 2012 to 2nd June 2012</p>`)
  logUtil.logLineBreak();
  logUtil.saveLog(`<ul>${slice.join('<br>')}</ul>`);
  logUtil.logLineBreak();

  // [ '2012-05-01T10:30:00.000Z', '2012-07-01T10:30:00.000Z' ]

   // To string
  rruleSet.valueOf()
  logUtil.saveLog(`rruleSet valueOf: ${rruleSet.valueOf()}`);
  logUtil.logLineBreak();

  // ['DTSTART:20120201T023000Z',
  //  'RRULE:FREQ=MONTHLY;COUNT=5',
  //  'RDATE:20120701T023000Z,20120702T023000Z',
  //  'EXRULE:FREQ=MONTHLY;COUNT=2',
  //  'EXDATE:20120601T023000Z']

  // To string
  logUtil.saveLog(`rruleSet to string: \n\n ${rruleSet.toString()}`);
  logUtil.logLineBreak();

  const output = logUtil.printMessages();
  // console.log('\n\n RRULE SET output = \n', output);
  return output;
}

module.exports = ruleSetDemo;