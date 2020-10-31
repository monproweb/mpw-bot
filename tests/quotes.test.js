/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
const axios = require('axios');

jest.mock('axios');

async function getFirstQuote() {
	const response = await axios.get(
		'http://quotes.stormconsultancy.co.uk/random.json',
	);
	return response.data[0].quote;
}

const quote = ['MonProWeb', 'RandomQuote', 'QuoteOfTheDay', 'Giphy', 'Nasa', 'Stargazers', 'MpwBot'];

test('The quote command has MonProWeb on it', () => {
	expect(quote).toContain('MonProWeb');
	expect(new Set(quote)).toContain('MonProWeb');
});

test('The quote command has RandomQuote on it', () => {
	expect(quote).toContain('RandomQuote');
	expect(new Set(quote)).toContain('RandomQuote');
});

test('The quote command has QuoteOfTheDay on it', () => {
	expect(quote).toContain('QuoteOfTheDay');
	expect(new Set(quote)).toContain('QuoteOfTheDay');
});

test('The quote command has Giphy on it', () => {
	expect(quote).toContain('Giphy');
	expect(new Set(quote)).toContain('Giphy');
});

test('The quote command has Nasa on it', () => {
	expect(quote).toContain('Nasa');
	expect(new Set(quote)).toContain('Nasa');
});

test('The quote command has Stargazers on it', () => {
	expect(quote).toContain('Stargazers');
	expect(new Set(quote)).toContain('Stargazers');
});

test('The quote command has MpwBot on it', () => {
	expect(quote).toContain('MpwBot');
	expect(new Set(quote)).toContain('MpwBot');
});

test('There is a "monproweb.io" in https://monproweb.io', () => {
	expect('https://monproweb.io').toMatch(/monproweb.io/);
});

it('returns the quote of the first randomquote', async () => {
	axios.get.mockResolvedValue({
		data: [
			{
				author: 'C. A. R. Hoare',
				id: 1,
				quote:
          'We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.',
			},
			{
				author: 'Edward V Berard',
				id: 2,
				quote:
          'Walking on water and developing software from a specification are easy if both are frozen.',
			},
		],
	});

	const quote = await getFirstQuote();
	expect(quote).toEqual(
		'We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.',
	);
});
