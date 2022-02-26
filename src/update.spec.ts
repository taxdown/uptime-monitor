import { update } from './update';

jest.setTimeout(300000);
jest.mock('./helpers/config', () => {
  return { getConfig: jest.fn().mockResolvedValue({
    sites: [{
      name: 'Vegeta http apex (Expected status 301)',
      url: 'http://taxdown.es',
      maxRedirects: 0,
      expectedStatusCodes: [301],
      maxResponseTime: 20000,
    }]
  }) }
});
jest.mock('fs-extra', () => {
  return { mkdirp: jest.fn(), readFile: jest.fn(), writeFile: jest.fn() }
});
jest.mock('./helpers/github', () => {
  return { 
    getOctokit: jest.fn(() => ({
    issues: {
      listForRepo: jest.fn().mockResolvedValue({data: []})
    }
  })) }
});
jest.mock('./helpers/git', () => {
  return {  commit: jest.fn(), lastCommit: jest.fn(), push: jest.fn() }
});
jest.mock('./helpers/notifme', () => {
  return { sendNotification: jest.fn() }
});
jest.mock('./helpers/secrets', () => {
  return { getOwnerRepo: jest.fn().mockReturnValue(['example', 'https://github.com/company/example']) }
});
jest.mock('./helpers/init-check', () => {
  return { shouldContinue: jest.fn().mockReturnValue(true) }
});
describe('Test performTestOnce', () => {
  test('hola', async () => {
    const actual = await update();
  })
});