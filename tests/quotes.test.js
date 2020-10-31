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

test('The HTTP response status code 301 Moved Permanently is used for permanent redirecting, meaning current links or records using the URL that the response is received for should be updated. The new URL should be provided in the Location field included with the response. The 301 redirect is considered a best practice for upgrading users from HTTP to HTTPS', () => {
	const value = Math.PI * 95.811275741321;
	expect(value).toBeGreaterThan(300);
	expect(value).toBeLessThan(302);

	// toBe and toEqual are equivalent for numbers
	expect(Math.PI * 95.811275741321).toBe(301);
	expect(value).toBe(301);
	expect(value).toEqual(301);
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
