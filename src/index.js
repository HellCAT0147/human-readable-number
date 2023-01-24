module.exports = function toReadable (number) {
  const small = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const middle = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let HRN = ''; // Human Readable Number
  if (number / 100 >= 1)
    HRN += small[Math.floor(number / 100)] + ' hundred ';
  if (number % 100 > 19)
    HRN += middle[Math.floor(number % 100 / 10)] + ' ';
  if ((number % 10 > 0 || number % 100 == 10) && number % 100 < 20) // 
    HRN += small[number % 100] + ' ';
  else if (number % 10 > 0 && number % 100 > 19)
    HRN += small[number % 10] + ' ';
  if (number == 0)
    HRN = small[number];
  return HRN.trim();
}
